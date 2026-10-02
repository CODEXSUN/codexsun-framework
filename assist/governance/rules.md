# Package Governance

## Repository

Use npm from this repository root. Keep one local dependency tree and one lockfile.
Put generated outputs under dist. Install shared dependencies only from the npm registry.
Use LF for text. Mark binary archives and fonts as binary in .gitattributes.

## Boundaries

Own API transport, typed HTTP contracts, errors, correlation IDs, module composition, add-on host contracts, environment readers, database migration infrastructure, and service interfaces.

Do not add product schemas, customer-specific workflows, invoice rules, or tenant provisioning here.
Use public package exports. Declare runtime and peer dependencies explicitly.
Do not import sibling private source or copy shared maintenance tools.

## Checks

Run npm run check, npm run format:check, and npm run pack.
Run meaningful regression tests for fixes. Keep tests out of published runtime files.
Preserve historical changelog entries. Keep current version, lockfile and changelog state aligned.
Run github:now with --dry-run for review. Publishing, commits, tags and pushes require authorization.
Docker remains deferred.
