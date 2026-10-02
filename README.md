# @devxcrew/framework

Backend infrastructure for independently deployed applications.

## Start

```sh
npm install
npm run check
npm run pack
```

Each repository owns package-lock.json, node_modules, dist, and its version.
The release archive is written to dist/releases.

## Integration

Import backend capabilities through their public subpaths. Inject database and service implementations from the app. Register concrete module contracts in order. Never add product tables, invoice fields, client-specific defaults, or permission engines here.

Database adapters, migration ledgers, and rollback code exist, but no live MariaDB migration or restart-persistence verification was run. Event, queue, and storage interfaces do not provision services. Legacy token helpers use a fixed Codexsun issuer and audience. They do not implement live session revocation or app membership.

## Agent reference

Start with [Assist](assist/README.md) and [the agent guide](assist/AGENT-GUIDE.md).
Read [package details](assist/documentation/package-reference.md), [audit notes](assist/documentation/audit.md), and [the changelog](assist/documentation/CHANGELOG.md).

## Maintenance tools

This repository installs @devxcrew/cli as a development dependency.
Install a pinned CLI version from the configured npm registry.
The common implementation lives in D:\codexsun\shared\codexsun-cli.
For distributed repositories, install a pinned tools version from the private registry.

```sh
npm run version:show
npm run version:bump -- --dry-run --title "Package update"
npm run changelog:append -- --title "Maintenance" --note "Describe the verified change."
npm run github:now -- --dry-run
npm run lines:fix
```

Read [versioning](assist/operations/versioning.md) before a release.
Remote repositories and registry publishing are not configured.
