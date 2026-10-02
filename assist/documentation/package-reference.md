# Framework Package Reference

## Purpose

Backend infrastructure for independently deployed applications.

## Ownership

Own API transport, typed HTTP contracts, errors, correlation IDs, module composition, add-on host contracts, environment readers, database migration infrastructure, and service interfaces.

## Public exports

| Export                                 | Responsibility                                                                            |
| -------------------------------------- | ----------------------------------------------------------------------------------------- |
| api                                    | Fastify host creation, health routes, shutdown hooks, legacy Platform token helpers       |
| http, errors                           | Typed Zod boundaries, success/error envelopes, application errors                         |
| modules, addons                        | Explicit module registration and add-on compatibility contracts                           |
| db                                     | Database interfaces, Kysely migration ledger, locking, rollback and table-prefix policies |
| env, config                            | Environment discovery and application configuration                                       |
| events, queue, storage, logger, health | Business-neutral service interfaces and health contracts                                  |

## Runtime and build

Use ESM, Node.js >=26.5 and npm >=12.0.1.
TypeScript 6.0.3 builds JavaScript and declarations into dist/src.
The root package manifest exports compiled files.
npm pack runs prepack and rebuilds the release. Tests and local tools are excluded from runtime output.

## Integration

Import backend capabilities through their public subpaths. Inject database and service implementations from the app. Register concrete module contracts in order. Never add product tables, invoice fields, client-specific defaults, or permission engines here.

## Dependencies

Runtime and peer requirements are declared in package.json.
@devxcrew/cli is a development dependency for build, boundaries, exports, versions, changelogs, GitHub review and LF checks.
The configured npm registry supplies the CLI development dependency.
Fastify, cookie/CORS plugins, Zod, dotenv, MariaDB, mysql2 and Kysely are runtime dependencies.

## Limits

Environment discovery stops at the nearest package.json. It does not load another repository's parent .env.
Legacy add-on host compatibility compares API major versions rather than full semantic version ranges.

Database adapters, migration ledgers, and rollback code exist, but no live MariaDB migration or restart-persistence verification was run. Event, queue, and storage interfaces do not provision services. Legacy token helpers use a fixed Codexsun issuer and audience. They do not implement live session revocation or app membership.

## Extension rules

Add only reusable capabilities with explicit public contracts.
Keep company-specific business concepts in app modules.
Apps choose their own release versions, secrets, database adapters and deployment schedules.
