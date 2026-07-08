import { execFileSync, execSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as readline from 'readline';

type PackageTarget = {
  directory: string;
  name: string;
};

type PublishResult = {
  name: string;
  status: 'published' | 'skipped' | 'failed';
  version?: string;
  reason?: string;
};

const ROOT_DIRECTORY = path.resolve(__dirname, '..');

const PACKAGE_TARGETS: PackageTarget[] = [
  {
    directory: path.join(ROOT_DIRECTORY, 'packages', 'dota-lua-types'),
    name: '@sunlight_xlz/dota-lua-types',
  },
  {
    directory: path.join(ROOT_DIRECTORY, 'packages', 'panorama-types'),
    name: '@sunlight_xlz/panorama-types',
  },
];

function parse_otp_argument(): string | undefined {
  const args = process.argv.slice(2);
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg.startsWith('--otp=')) {
      return arg.slice('--otp='.length);
    }
    if (arg === '--otp') {
      return args[index + 1];
    }
  }

  return process.env.NPM_OTP;
}

function run(command: string, cwd = ROOT_DIRECTORY): string {
  try {
    return execSync(command, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
  } catch (error) {
    const exec_error = error as { stdout?: string; stderr?: string; message?: string };
    const details = [exec_error.stderr, exec_error.stdout, exec_error.message]
      .filter(Boolean)
      .join('\n')
      .trim();
    throw new Error(details || `Command failed: ${command}`);
  }
}

function ensure_npm_login(): void {
  try {
    const user_name = run('npm whoami');
    console.log(`Authenticated as ${user_name}`);
  } catch {
    throw new Error(
      'Not logged in to npm. Run `npm login` or set an Automation Token, then retry.',
    );
  }
}

function list_files_recursive(directory: string, base_directory = directory): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const absolute_path = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...list_files_recursive(absolute_path, base_directory));
      continue;
    }
    files.push(path.relative(base_directory, absolute_path).split(path.sep).join('/'));
  }

  return files.sort();
}

function normalize_file_content(relative_path: string, content: Buffer): string {
  if (relative_path === 'package.json') {
    const parsed = JSON.parse(content.toString('utf8')) as Record<string, unknown>;
    delete parsed.version;
    return `${JSON.stringify(parsed, null, 2)}\n`;
  }

  return content.toString('utf8').replace(/\r\n/g, '\n');
}

function read_normalized_tree(package_root: string): Map<string, string> {
  const tree = new Map<string, string>();
  for (const relative_path of list_files_recursive(package_root)) {
    const absolute_path = path.join(package_root, relative_path);
    const content = fs.readFileSync(absolute_path);
    tree.set(relative_path, normalize_file_content(relative_path, content));
  }
  return tree;
}

function trees_are_equal(left: Map<string, string>, right: Map<string, string>): boolean {
  if (left.size !== right.size) {
    return false;
  }

  for (const [relative_path, left_content] of left) {
    if (right.get(relative_path) !== left_content) {
      return false;
    }
  }

  return true;
}

function pack_local_package(package_directory: string, output_directory: string): string {
  fs.mkdirSync(output_directory, { recursive: true });

  const packed = run(`npm pack --pack-destination "${output_directory}"`, package_directory)
    .split(/\r?\n/)
    .filter(Boolean)
    .pop();

  if (!packed) {
    throw new Error(`npm pack produced no tarball for ${package_directory}`);
  }

  return path.isAbsolute(packed) ? packed : path.join(output_directory, packed);
}

function extract_tarball(tarball_path: string, destination: string): string {
  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(destination, { recursive: true });
  execFileSync('tar', ['-xzf', tarball_path, '-C', destination], { stdio: 'pipe' });

  const package_root = path.join(destination, 'package');
  if (!fs.existsSync(package_root)) {
    throw new Error(`Expected package/ in extracted tarball ${tarball_path}`);
  }
  return package_root;
}

async function download_latest_tarball(
  package_name: string,
  destination_file: string,
): Promise<'found' | 'missing'> {
  let metadata_raw: string;
  try {
    metadata_raw = run(`npm view ${package_name} dist.tarball --json`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes('E404') || message.includes('404 Not Found')) {
      return 'missing';
    }
    throw error;
  }

  const tarball_url = JSON.parse(metadata_raw) as string;
  const response = await fetch(tarball_url);
  if (!response.ok) {
    throw new Error(`Failed to download ${tarball_url}: ${response.status} ${response.statusText}`);
  }

  fs.mkdirSync(path.dirname(destination_file), { recursive: true });
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(destination_file, buffer);
  return 'found';
}

function bump_patch_version(package_directory: string): string {
  run('npm version patch --git-tag-version false', package_directory);
  const package_json = JSON.parse(
    fs.readFileSync(path.join(package_directory, 'package.json'), 'utf8'),
  ) as { version: string };
  return package_json.version;
}

function is_otp_error(message: string): boolean {
  const lower = message.toLowerCase();
  return (
    lower.includes('eotp') ||
    lower.includes('one-time password') ||
    lower.includes('two-factor authentication') ||
    lower.includes('bypass 2fa')
  );
}

function otp_help_message(): string {
  return [
    'npm publish requires 2FA OTP (or an Automation / Granular token with "Bypass 2FA").',
    'Re-run with a fresh authenticator code:',
    '  yarn publish:types --otp=<code>',
    '  npm run publish:types -- --otp=<code>',
    '  $env:NPM_OTP="<code>"; yarn publish:types',
  ].join('\n');
}

function simplify_error_message(message: string): string {
  if (is_otp_error(message)) {
    return otp_help_message();
  }

  const lines = message
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith('npm error'));
  return lines.length > 0 ? lines.join(' ') : message;
}

function ask_otp(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Enter npm 2FA OTP: ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function publish_package(package_directory: string, otp?: string): Promise<void> {
  const otp_flag = otp ? ` --otp=${otp}` : '';
  try {
    run(`npm publish --access public${otp_flag}`, package_directory);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!otp && is_otp_error(message) && process.stdin.isTTY) {
      const prompted_otp = await ask_otp();
      if (!prompted_otp) {
        throw new Error(simplify_error_message(message));
      }
      run(`npm publish --access public --otp=${prompted_otp}`, package_directory);
      return;
    }
    throw new Error(simplify_error_message(message));
  }
}

async function process_package(
  target: PackageTarget,
  temp_root: string,
  otp?: string,
): Promise<PublishResult> {
  console.log(`\n=== ${target.name} ===`);

  const package_key = path.basename(target.directory);
  const local_pack_directory = path.join(temp_root, 'local-pack', package_key);
  const local_extract_directory = path.join(temp_root, 'local-extract', package_key);
  const remote_pack_directory = path.join(temp_root, 'remote-pack', package_key);
  const remote_extract_directory = path.join(temp_root, 'remote-extract', package_key);

  const local_tarball = pack_local_package(target.directory, local_pack_directory);
  const local_root = extract_tarball(local_tarball, local_extract_directory);
  const local_tree = read_normalized_tree(local_root);

  const remote_tarball_path = path.join(remote_pack_directory, 'latest.tgz');
  const remote_status = await download_latest_tarball(target.name, remote_tarball_path);

  if (remote_status === 'found') {
    const remote_root = extract_tarball(remote_tarball_path, remote_extract_directory);
    const remote_tree = read_normalized_tree(remote_root);
    if (trees_are_equal(local_tree, remote_tree)) {
      console.log(`No substantive changes vs npm latest. Skipping ${target.name}.`);
      return { name: target.name, status: 'skipped', reason: 'identical to npm latest' };
    }
    console.log(`Substantive changes detected for ${target.name}.`);
  } else {
    console.log(`${target.name} is not on npm yet. Will publish initial version.`);
  }

  const next_version = bump_patch_version(target.directory);
  console.log(`Bumped ${target.name} to ${next_version}`);
  await publish_package(target.directory, otp);
  console.log(`Published ${target.name}@${next_version}`);

  return { name: target.name, status: 'published', version: next_version };
}

async function main(): Promise<void> {
  const otp = parse_otp_argument();
  ensure_npm_login();

  console.log('\nBuilding packages...');
  run('npm run build');
  console.log('Build completed.');

  const temp_root = fs.mkdtempSync(path.join(os.tmpdir(), 'publish-types-'));
  const results: PublishResult[] = [];

  try {
    for (const target of PACKAGE_TARGETS) {
      try {
        results.push(await process_package(target, temp_root, otp));
      } catch (error) {
        const reason = error instanceof Error ? error.message : String(error);
        console.error(`Failed to publish ${target.name}: ${reason}`);
        results.push({ name: target.name, status: 'failed', reason });
        break;
      }
    }
  } finally {
    fs.rmSync(temp_root, { recursive: true, force: true });
  }

  console.log('\n=== Summary ===');
  for (const result of results) {
    if (result.status === 'published') {
      console.log(`published  ${result.name}@${result.version}`);
    } else if (result.status === 'skipped') {
      console.log(`skipped    ${result.name} (${result.reason})`);
    } else {
      console.log(`failed     ${result.name} (${result.reason})`);
    }
  }

  if (results.some((result) => result.status === 'failed')) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
