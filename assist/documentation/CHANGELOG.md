# Changelog

## Version State

Current version: 1.0.80

Release tag: v-1.0.80

Changelog label: v 1.0.80

History starts with this standalone package baseline. CXApp business history is not copied.

## v-1.0.80

### [v 1.0.80] 2026-10-02 11:06 am - Public npm package preparation

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Prepared @devxcrew package metadata, independent GitHub checks, and OIDC publishing. Uses @devxcrew/cli 1.0.0 from npm.

### [v 1.0.80] 2026-10-02 11:02 am - Published CLI integration

#### Database Changes

- Database update: No (manual).

#### App Codebase Changes

- Installed @devxcrew/cli 1.0.0 from the public npm registry as development tooling. Replaced the old CLI scope in active package instructions.

### [v 1.0.80] 2026-10-02 10:04 am - Independent package maintenance and audit

#### Database Changes

- Database update: No (manual).
- No database migration, provisioning, or live persistence validation was performed.

#### App Codebase Changes

- Maintained this package as an independent npm project and local Git repository.
- Added Assist references, governance, package inventory, audit notes, and release documentation.
- Reused @codexsun/cli for builds, boundaries, exports, GitHub review, version bumps, changelogs, and LF normalization.
- Preserved independent package versions and application-owned business modules.
- Corrected server-response validation failures and added sanitized generic client-error handling.
- Fixed environment lookup escaping standalone package roots. Eight framework tests passed.
- Package checks, compiled exports, production dependency audit, GitHub dry run, and version-bump dry run passed.
