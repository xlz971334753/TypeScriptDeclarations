import fs from 'fs-extra';
import path from 'path';
import { generatedLua, generatedLuaEnumMappings } from './lua';
import { generatedPanorama, generatedPanoramaEnumMappings } from './panorama';
import { diff_types, render_diff_markdown } from '../scripts/diff-types';

const write = (packageName: string, type: string, content: string) =>
  fs.outputFile(
    path.resolve(__dirname, `../packages/${packageName}/types/${type}.generated.d.ts`),
    content,
  );

const snapshot_root = path.resolve(__dirname, '../artifacts/type-snapshots');
const snapshot_prev = path.join(snapshot_root, 'prev');
const snapshot_current = path.join(snapshot_root, 'current');

const changelog_root = path.resolve(__dirname, '../artifacts/changelog');
const changelog_md_path = path.join(changelog_root, 'types-changelog.md');

async function update_snapshots_and_changelog() {
  await fs.ensureDir(snapshot_root);
  await fs.ensureDir(changelog_root);

  if (await fs.pathExists(snapshot_current)) {
    await fs.remove(snapshot_prev);
    await fs.move(snapshot_current, snapshot_prev, { overwrite: true });
  }
  await fs.ensureDir(snapshot_current);

  const copy_targets = [
    path.resolve(__dirname, '../packages/dota-lua-types/types'),
    path.resolve(__dirname, '../packages/panorama-types/types'),
    path.resolve(__dirname, '../packages/dota-lua-types/index.d.ts'),
    path.resolve(__dirname, '../packages/dota-lua-types/normalized.d.ts'),
    path.resolve(__dirname, '../packages/panorama-types/index.d.ts'),
    path.resolve(__dirname, '../packages/panorama-types/normalized.d.ts'),
  ];

  for (const target of copy_targets) {
    const rel = path.relative(path.resolve(__dirname, '..'), target);
    const dest = path.join(snapshot_current, rel);
    await fs.copy(target, dest, { overwrite: true });
  }

  if (await fs.pathExists(snapshot_prev)) {
    const diff = diff_types(snapshot_prev, snapshot_current);
    const md = render_diff_markdown(diff);
    await fs.outputFile(changelog_md_path, md);
  } else {
    await fs.outputFile(
      changelog_md_path,
      '# Types changelog\n\nNo previous snapshot found. Run generation again to produce a diff.\n',
    );
  }
}

Promise.all([
  ...Object.entries(generatedLua).map(([t, c]) => write('dota-lua-types', t, c)),
  fs.outputJson(
    path.resolve(__dirname, '../packages/dota-lua-types/transformer/mappings.json'),
    generatedLuaEnumMappings,
    { spaces: 4 },
  ),

  ...Object.entries(generatedPanorama).map(([t, c]) => write('panorama-types', t, c)),
  fs.outputJson(
    path.resolve(__dirname, '../packages/panorama-types/transformer/mappings.json'),
    generatedPanoramaEnumMappings,
    { spaces: 4 },
  ),
])
  .then(update_snapshots_and_changelog)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
