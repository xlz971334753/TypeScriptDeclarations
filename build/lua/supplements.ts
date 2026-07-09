import * as dom from 'dts-dom';
import fs from 'fs';
import path from 'path';

export type ApiSupplementMember = {
  name: string;
  description?: string;
  availability?: 'client' | 'server' | 'both';
  abstract?: boolean;
  parameters?: Array<{ name: string; type: string; optional?: boolean }>;
  return?: string;
};

export type ApiSupplements = Record<string, ApiSupplementMember[]>;

let api_supplements_cache: ApiSupplements | undefined;

export function get_api_supplements(): ApiSupplements {
  if (api_supplements_cache) return api_supplements_cache;

  const config_path = path.resolve(__dirname, '../../config/api_supplements.json');
  if (!fs.existsSync(config_path)) {
    api_supplements_cache = {};
    return api_supplements_cache;
  }

  api_supplements_cache = JSON.parse(fs.readFileSync(config_path, 'utf8')) as ApiSupplements;
  return api_supplements_cache;
}

export function create_supplement_member(spec: ApiSupplementMember): dom.ObjectTypeMember {
  const comments: string[] = [];

  if (spec.description) {
    comments.push(spec.description);
  }
  if (spec.availability) {
    comments.push(`@${spec.availability}`);
  }

  const method = dom.create.method(
    spec.name,
    (spec.parameters ?? []).map((parameter) =>
      dom.create.parameter(
        parameter.name + (parameter.optional ? '?' : ''),
        dom.create.namedTypeReference(parameter.type),
      ),
    ),
    dom.create.namedTypeReference(spec.return ?? 'void'),
    spec.abstract ? dom.DeclarationFlags.Optional : dom.DeclarationFlags.None,
  );

  if (comments.length > 0) {
    method.jsDocComment = comments.join('\n');
  }

  return method;
}
