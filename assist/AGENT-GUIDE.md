# Framework Agent Guide

## Required reading

Read governance/rules.md and documentation/package-reference.md before changing code.
Read operations/versioning.md before changing versions or release tools.
Inspect the owning source, public export, dependency declaration, and tests.

## Ownership

Own API transport, typed HTTP contracts, errors, correlation IDs, module composition, add-on host contracts, environment readers, database migration infrastructure, and service interfaces.

Keep this repository independent. Import sibling packages only through published public exports.
Treat @devxcrew/cli as development tooling, never as a runtime dependency.

## Verification

Run npm run check, npm run format:check, and npm run pack.
Build validates exports and keeps tests out of the release output.
Install published versions in the starter and run its build and clone verification after packaging changes.
Use starter browser tests after frontend behavior or frontend dependency changes.
Report unverified integrations clearly. Do not equate mocks or scope tests with live database evidence.

## Documentation

Update package-reference.md when a public contract or integration requirement changes.
Append concrete changes under the current changelog version.
Do not create historical CXApp product entries or task-specific handoff files.
Do not bump versions unless requested. Do not run Docker.
