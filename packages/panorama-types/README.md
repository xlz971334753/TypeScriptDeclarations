# Panorama Types

TypeScript definitions for Dota 2 Panorama API

## Installation

> Check out our [addon template](https://github.com/ModDota/TypeScriptAddonTemplate) for usage
> examples.

1. Get package from npm

```shell
yarn add -D @sunlight/panorama-types
# or
npm install -D @sunlight/panorama-types
```

2. Modify your `tsconfig.json`

```json
{
  "compilerOptions": {
    "types": ["@sunlight/panorama-types"]
  }
}
```

## Enums

This package includes 2 versions of enum types - raw and normalized. Raw types are included by
default, with `"types": ["@sunlight/panorama-types"]`. They match actual values available at runtime, however
lead to repetition and require you to use inconsistent standard names.

Normalized enum types can be included with `"types": ["@sunlight/panorama-types/normalized"]` and require you
to use `@sunlight/panorama-types/transformer` (for example using [ttypescript]). With these types, enums have
consistent names and have no repeated parts. For example, instead of
`EDOTA_ModifyGold_Reason.DOTA_ModifyGold_Unspecified` you have to write
`ModifyGoldReason.UNSPECIFIED`.

Both type versions define aliases for alternative names, so libraries created with one version would
be compatible with a different one.

[ttypescript]: https://github.com/cevek/ttypescript
