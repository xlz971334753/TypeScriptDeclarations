import path from 'path';
import prettier from 'prettier';
import wordwrap from 'wordwrap';
import fs from 'fs';
import { createHash } from 'crypto';

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
type TranslationCache = Record<string, string>;

let manual_comments_cache: ManualComments | undefined;
let translation_cache: TranslationCache | undefined;
let missing_translations: Record<string, { identifier: string; field: string; original: string }> | undefined;

function sha256(text: string): string {
  return createHash('sha256').update(text).digest('hex');
}

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

function get_translation_cache(): TranslationCache {
  if (translation_cache) return translation_cache;
  translation_cache = load_json_optional(
    path.resolve(__dirname, '../../config/translation_cache.json'),
    {},
  );
  return translation_cache;
}

function get_missing_translations() {
  if (missing_translations) return missing_translations;
  missing_translations = {};
  return missing_translations;
}

export function translate_description(
  identifier: string,
  field: string,
  original: string,
): string {
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

  const key = `${identifier}:${field}:${sha256(original)}`;
  const cache = get_translation_cache();
  const translated = cache[key];
  if (translated) return translated;

  get_missing_translations()[key] = { identifier, field, original };
  return original;
}

const formatJSDoc = (description: string) =>
  `/**\n${wrapDescription(description).replace(/^/gm, ' * ')}\n*/\n`;

const optionalDescription = (description?: string) =>
  description != null ? formatJSDoc(description) : '';

export const withDescription = (declaration: string, description?: string) =>
  optionalDescription(description) + declaration;

export function flush_missing_translations() {
  const out_path = path.resolve(__dirname, '../../artifacts/changelog/missing_translations.json');
  const missing = get_missing_translations();
  if (Object.keys(missing).length === 0) return;
  fs.mkdirSync(path.dirname(out_path), { recursive: true });
  fs.writeFileSync(out_path, JSON.stringify(missing, null, 2) + '\n', 'utf8');
}

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
