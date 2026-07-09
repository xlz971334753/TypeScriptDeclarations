import * as fs from 'fs';
import * as path from 'path';
import ts from 'typescript';

export type TypeDiffOutput = {
  summary: {
    added: number;
    removed: number;
    changed: number;
    unchanged: number;
  };
  added: string[];
  removed: string[];
  changed: Array<{ key: string; before: string; after: string }>;
};

type ApiItem = {
  key: string;
  signature: string;
};

function list_dts_files(root_dir: string): string[] {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full_path = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full_path);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.d.ts')) {
        files.push(full_path);
      }
    }
  };
  if (fs.existsSync(root_dir)) walk(root_dir);
  return files.sort();
}

function stable_type_text(node: ts.TypeNode | undefined, source_file: ts.SourceFile): string {
  if (!node) return 'any';
  const printer = ts.createPrinter({ removeComments: true });
  return printer.printNode(ts.EmitHint.Unspecified, node, source_file).replace(/\s+/g, ' ').trim();
}

function stable_param_text(param: ts.ParameterDeclaration, source_file: ts.SourceFile): string {
  const name = ts.isIdentifier(param.name) ? param.name.text : param.name.getText(source_file);
  const is_optional = !!param.questionToken || !!param.initializer;
  const is_rest = !!param.dotDotDotToken;
  const type_text = stable_type_text(param.type, source_file);
  const prefix = is_rest ? '...' : '';
  const optional = is_optional ? '?' : '';
  return `${prefix}${name}${optional}: ${type_text}`;
}

function stable_type_params_text(
  type_params: readonly ts.TypeParameterDeclaration[] | undefined,
  source_file: ts.SourceFile,
): string {
  if (!type_params || type_params.length === 0) return '';
  const parts = type_params.map((t) => {
    const name = t.name.text;
    const constraint = t.constraint ? ` extends ${stable_type_text(t.constraint, source_file)}` : '';
    return `${name}${constraint}`;
  });
  return `<${parts.join(', ')}>`;
}

function stable_signature_text(
  name: string,
  type_params: readonly ts.TypeParameterDeclaration[] | undefined,
  params: readonly ts.ParameterDeclaration[],
  return_type: ts.TypeNode | undefined,
  source_file: ts.SourceFile,
): string {
  const tp = stable_type_params_text(type_params, source_file);
  const ps = params.map((p) => stable_param_text(p, source_file)).join(', ');
  const rt = stable_type_text(return_type, source_file);
  return `${name}${tp}(${ps}): ${rt}`;
}

function collect_api_items_from_file(source_file: ts.SourceFile): ApiItem[] {
  const items: ApiItem[] = [];

  const visit = (node: ts.Node) => {
    if (ts.isFunctionDeclaration(node) && node.name) {
      const name = node.name.text;
      items.push({
        key: `global:function:${name}`,
        signature: stable_signature_text(
          name,
          node.typeParameters,
          node.parameters,
          node.type,
          source_file,
        ),
      });
      return;
    }

    if (ts.isInterfaceDeclaration(node)) {
      const interface_name = node.name.text;
      for (const member of node.members) {
        if (ts.isMethodSignature(member) && member.name) {
          const member_name = member.name.getText(source_file);
          const key = `interface:${interface_name}#method:${member_name}`;
          const signature = stable_signature_text(
            member_name,
            member.typeParameters,
            member.parameters,
            member.type,
            source_file,
          );
          items.push({ key, signature });
        } else if (ts.isPropertySignature(member) && member.name) {
          const member_name = member.name.getText(source_file);
          const key = `interface:${interface_name}#prop:${member_name}`;
          const optional = member.questionToken ? '?' : '';
          const type_text = stable_type_text(member.type, source_file);
          items.push({ key, signature: `${member_name}${optional}: ${type_text}` });
        }
      }
      return;
    }

    ts.forEachChild(node, visit);
  };

  visit(source_file);
  return items;
}

function build_api_index(snapshot_root: string): Map<string, string> {
  const root = path.resolve(snapshot_root);
  const dts_files = list_dts_files(root);

  const index = new Map<string, string>();
  for (const file_path of dts_files) {
    const source_text = fs.readFileSync(file_path, 'utf8');
    const source_file = ts.createSourceFile(
      file_path,
      source_text,
      ts.ScriptTarget.ES2019,
      true,
      ts.ScriptKind.TS,
    );
    for (const item of collect_api_items_from_file(source_file)) {
      index.set(item.key, item.signature);
    }
  }
  return index;
}

export function diff_types(
  prev_snapshot_root: string,
  current_snapshot_root: string,
): TypeDiffOutput {
  const prev_index = build_api_index(prev_snapshot_root);
  const cur_index = build_api_index(current_snapshot_root);

  const added: string[] = [];
  const removed: string[] = [];
  const changed: Array<{ key: string; before: string; after: string }> = [];
  let unchanged = 0;

  for (const [key, cur_sig] of cur_index.entries()) {
    const prev_sig = prev_index.get(key);
    if (prev_sig === undefined) {
      added.push(key);
    } else if (prev_sig !== cur_sig) {
      changed.push({ key, before: prev_sig, after: cur_sig });
    } else {
      unchanged += 1;
    }
  }
  for (const key of prev_index.keys()) {
    if (!cur_index.has(key)) removed.push(key);
  }

  added.sort();
  removed.sort();
  changed.sort((a, b) => a.key.localeCompare(b.key));

  return {
    summary: {
      added: added.length,
      removed: removed.length,
      changed: changed.length,
      unchanged,
    },
    added,
    removed,
    changed,
  };
}

export function render_diff_markdown(diff: TypeDiffOutput): string {
  const lines: string[] = [];
  lines.push(`# Types changelog`);
  lines.push('');
  lines.push(`- Added: ${diff.summary.added}`);
  lines.push(`- Removed: ${diff.summary.removed}`);
  lines.push(`- Changed: ${diff.summary.changed}`);
  lines.push(`- Unchanged: ${diff.summary.unchanged}`);
  lines.push('');

  if (diff.added.length > 0) {
    lines.push('## Added');
    for (const key of diff.added) lines.push(`- \`${key}\``);
    lines.push('');
  }

  if (diff.removed.length > 0) {
    lines.push('## Removed');
    for (const key of diff.removed) lines.push(`- \`${key}\``);
    lines.push('');
  }

  if (diff.changed.length > 0) {
    lines.push('## Changed');
    for (const ch of diff.changed) {
      lines.push(`- \`${ch.key}\``);
      lines.push(`  - before: \`${ch.before}\``);
      lines.push(`  - after:  \`${ch.after}\``);
    }
    lines.push('');
  }

  return lines.join('\n');
}

if (require.main === module) {
  const [, , prev_dir, current_dir, out_file] = process.argv;
  if (!prev_dir || !current_dir) {
    // eslint-disable-next-line no-console
    console.log(
      [
        'Usage:',
        '  ts-node scripts/diff-types.ts <prev_snapshot_dir> <current_snapshot_dir> [out_md_file]',
        '',
        'Example:',
        '  ts-node scripts/diff-types.ts artifacts/type-snapshots/prev artifacts/type-snapshots/current artifacts/changelog/types-changelog.md',
      ].join('\n'),
    );
    process.exit(1);
  }

  const diff = diff_types(path.resolve(prev_dir), path.resolve(current_dir));
  const md = render_diff_markdown(diff);

  if (out_file) {
    fs.mkdirSync(path.dirname(out_file), { recursive: true });
    fs.writeFileSync(out_file, md, 'utf8');
  } else {
    // eslint-disable-next-line no-console
    console.log(md);
  }
}
