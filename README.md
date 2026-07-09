# Dota 2 TypeScript declarations

TypeScript declarations for Dota 2 Custom Game
[Lua](https://github.com/ModDota/TypeScriptDeclarations/tree/master/packages/dota-lua-types) and
[Panorama](https://github.com/ModDota/TypeScriptDeclarations/tree/master/packages/panorama-types)
API, generated from [dota-data](https://github.com/ark120202/dota-data) dumps.

Check out our [addon template](https://github.com/ModDota/TypeScriptAddonTemplate) for usage
examples.

### Updating after a DOTA2 update (for contributors)

1. Update https://github.com/ModDota/dota-data and publish a new package version
2. Update the `@moddota/dota-data` package version in `package.json`
3. `npm ci`
4. `npm run build`
5. Commit to a new branch
6. Make a merge request

### Publishing packages (for maintainers)

1. Make sure you are logged in to npm with an account that can publish the `@sunlight_xlz` scope
   (`npm whoami`).
2. Run `npm run publish:types` (or `yarn publish:types`).
   - If your account has 2FA enabled for publish, provide an OTP:
     - `yarn publish:types --otp=123456`
     - `npm run publish:types -- --otp=123456`
     - or set `NPM_OTP=123456`
   - If no OTP is passed and publish fails with `EOTP`, the script will prompt for one
     interactively.
3. The script builds both packages, compares each package against the npm `latest` tarball
   (ignoring `version`), skips packages with no substantive changes, and for changed/new packages
   bumps a patch version then runs `npm publish --access public`.
4. If versions were bumped, commit the updated package `package.json` files if you want the version
   changes tracked in git.

### Generating changelog, overrides, and Chinese docs

- **Changelog output**: every `npm run build:types` updates snapshots under `artifacts/type-snapshots/` and
  writes `artifacts/changelog/types-changelog.md` by diffing `prev/` vs `current/`.
- **Missing translations**: generation will write
  `artifacts/changelog/missing_translations.json` when it encounters new/changed English comments that do
  not exist in the translation cache.
- **Overrides**: put signature fixes into `config/api_overrides.json` (keyed by identifier, e.g.
  `ListenToGameEvent` or `CDOTA_BaseNPC.IsFort`). These overrides take precedence over the built-in ones.
- **Manual comments (Chinese)**: put human-written comments into `config/manual_comments.json`.
- **Translation cache**: put translated comments into `config/translation_cache.json` as:
  `key -> translated_text`, where key format is `${identifier}:${field}:${sha256(original)}` and field is
  `description | deprecated | param:<paramName>`.
- **Translation how-to**: see `docs/TRANSLATION_WORKFLOW.md`.
