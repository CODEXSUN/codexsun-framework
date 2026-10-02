# Framework agent rules

Read assist/AGENT-GUIDE.md and assist/governance/rules.md before changes.
Use assist/documentation/package-reference.md for exports and integration limits.
Use assist/operations/versioning.md for releases.
Run npm from this package root. Keep this lockfile, dependency tree, output, and version independent.
Use @devxcrew/cli through package scripts. Do not copy common tool implementations.
Keep business modules outside this package. Preserve unrelated changes.
Run npm run check, npm run format:check, and npm run pack after changes.
Do not publish, commit, tag, or push without user authorization. Docker verification remains deferred.
