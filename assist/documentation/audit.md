# Package Audit

Reviewed on 2026-10-02. This audit covers source ownership, dependency declarations, public exports, packaging, maintenance tools, and integration limits.

## Findings and actions

- Fixed response-contract failures: invalid server output returns a sanitized 500 rather than a client validation error.
- Preserved malformed JSON rejection and added sanitized handling for generic 4xx request errors.
- Fixed environment discovery escaping standalone package roots and reading unrelated parent .env files.
- Replaced weak string scans with parsed import checks and compiled export validation.
- Kept legacy authentication helpers for compatibility. New apps use trusted identity adapters through platform-core.
- Migration infrastructure needs real database tests before production use.
- The migration implementation exceeds the preferred file size. A focused refactor can follow database regression coverage.

## Maintenance findings

- Local repositories previously copied build and boundary scripts. They now consume one versioned @codexsun/cli archive.
- Assist references and active changelogs were missing. Added the CXApp documentation layout and release naming conventions.
- Text files used mixed line endings. Added shared LF check/fix commands, .gitattributes and .editorconfig.
- Package versions stay independent. Version tools update only the selected repository and preserve dependency ranges.

## Evidence and limits

Package checks include parsed source boundaries, version alignment, LF checks, TypeScript, lint and existing tests.
Build checks every declared compiled export and excludes test files.
The common tooling has fixture tests for versions, history, dry runs, LF exclusions, output validation, and GitHub review.
Starter checks cover consuming the archives. Verification results are recorded in the current changelog.
No remote push, registry publish, Docker, central identity, or live database deployment is part of this audit.

## Recorded checks

- Package boundaries, version alignment, LF checks, TypeScript, lint and compiled exports passed.
- npm audit --omit=dev reported zero known vulnerabilities for this package lockfile on 2026-10-02.
- GitHub and version-bump dry runs passed without mutations.
