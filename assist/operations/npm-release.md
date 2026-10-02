# Public npm Release

## Targets

- Package: @devxcrew/framework.
- Registry: https://registry.npmjs.org/.
- GitHub owner: CODEXSUN.
- Repository: codexsun-framework.
- Trusted publisher workflow: publish.yml.
- Environment: none.
- Direct publish permission: allow npm publish.

## Bootstrap

Authenticate an npm account that can publish under the devxcrew scope.
The initial package must exist before configuring its package-level trusted publisher.
Run npm run release:check before the first public publish.
Authenticate with npm login in a terminal. Never put account tokens in source files.
Complete the initial npm publish --access public with the owner's required authentication.

## GitHub trusted publishing

Configure the package's Trusted Publisher on npmjs.com with the exact targets above.
Use a GitHub-hosted runner and allow direct npm publish.
The workflow grants id-token: write and disables package-manager caching.
It verifies the source before publishing and uses npm's OIDC authentication.
The package repository URL must match CODEXSUN/codexsun-framework.

Dispatch Publish framework to npm from the main branch after setup.
Do not dispatch a version already published. npm release versions are immutable.
Use version:bump, update changelog notes, run checks, commit and push the new version first.

## Verify publication

```sh
npm view @devxcrew/framework@1.0.80 version bin repository --registry=https://registry.npmjs.org/
npm install --save-exact @devxcrew/framework@1.0.80
```

Install the exact CLI version in each shared package through npm.
Publish framework and UI next, then platform-core, then install the starter.
Regenerate each repository lockfile through npm install after its required packages are available.
Commit registry-generated lockfiles. Do not reuse historical archive-based lockfiles.

## Reference

https://docs.npmjs.com/trusted-publishers/
