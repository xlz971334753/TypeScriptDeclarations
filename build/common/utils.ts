import path from 'path';
import prettier from 'prettier';
import wordwrap from 'wordwrap';
import fs from 'fs';

export const wrapDescription = (description: string, start = 0) =>
  wordwrap({ stop: 80, start })(description.replace(/\n/g, '\n\n'));

type ManualComments = Record<
  string,
  {
    description?: string;
    deprecated?: string;
    params?: Record<string, string>;
  }
>;

let manual_comments_cache: ManualComments | undefined;

function load_json_optional<T>(file_path: string, fallback: T): T {
  if (!fs.existsSync(file_path)) return fallback;
  return JSON.parse(fs.readFileSync(file_path, 'utf8')) as T;
}

function get_manual_comments(): ManualComments {
  if (manual_comments_cache) return manual_comments_cache;
  manual_comments_cache = load_json_optional(
    path.resolve(__dirname, '../../config/manual_comments.json'),
    {},
  );
  return manual_comments_cache;
}

export function resolve_comment(
  identifier: string,
  field: string,
  original?: string,
): string | undefined {
  const manual = get_manual_comments()[identifier];
  if (manual) {
    if (field === 'description' && manual.description) return manual.description;
    if (field === 'deprecated' && manual.deprecated) return manual.deprecated;
    if (field.startsWith('param:') && manual.params) {
      const param_name = field.slice('param:'.length);
      const param_text = manual.params[param_name];
      if (param_text) return param_text;
    }
  }

  return original;
}

const formatJSDoc = (description: string) =>
  `/**\n${wrapDescription(description).replace(/^/gm, ' * ')}\n*/\n`;

const optionalDescription = (description?: string) =>
  description != null ? formatJSDoc(description) : '';

export const withDescription = (declaration: string, description?: string) =>
  optionalDescription(description) + declaration;

const prettierConfig: prettier.Options = {
  parser: 'typescript',
  ...prettier.resolveConfig.sync(
    path.resolve(__dirname, '../../packages/panorama-types/types/_.generated.d.ts'),
    { editorconfig: true },
  ),
};

interface EmitOptions {
  availability?: 'client' | 'server' | 'both';
}

export const emit = (content: string, { availability = 'both' }: EmitOptions = {}) => {
  content =
    (availability === 'both' ? '' : `// @validateApiUsageDefault ${availability}\n\n`) + content;

  // There is some instability in comment formatting
  content = prettier.format(prettier.format(content, prettierConfig), prettierConfig);

  return content;
};
