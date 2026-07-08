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

1. Make sure you are logged in to npm with an account that can publish the `@sunlight` scope
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
