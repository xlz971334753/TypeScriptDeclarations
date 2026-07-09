# Translation workflow (Chinese JSDoc)

This repository generates `.d.ts` files from `@moddota/dota-data` dumps.

When generator encounters an English comment that does **not** exist in the translation cache,
it will record it into:

- `artifacts/changelog/missing_translations.json`

## missing_translations.json format

It is a JSON object where:

- **key**: `${identifier}:${field}:${sha256(original)}`
- **value**:
  - `identifier`: stable identifier string (examples: `ListenToGameEvent`, `event:server_spawn`)
  - `field`: `description | deprecated | param:<paramName>`
  - `original`: original English text

Example:

```json
{
  "ListenToGameEvent:description:<hash>": {
    "identifier": "ListenToGameEvent",
    "field": "description",
    "original": "Register a listener for a game event."
  }
}
```

## How to fill translation_cache.json

1. Run generation:

```bash
npm run build:types
```

2. Open `artifacts/changelog/missing_translations.json` and translate each `original` to Chinese.

3. Put translations into `config/translation_cache.json`:

```json
{
  "ListenToGameEvent:description:<hash>": "（中文）注册一个游戏事件监听器。"
}
```

4. Run generation again. If the same English text appears again, the generator will use the cached
Chinese translation automatically.

## Cache invalidation

When upstream English comment changes, `sha256(original)` changes and thus the key changes. The
generator will treat it as missing again and record a new entry in `missing_translations.json`.

