# Versioning and Releases

## Version policy

This repository versions independently. Do not change sibling package or app versions.
Use numeric semantic versions. Patch fixes behavior, minor adds compatible features, and major changes contracts.
Keep CXApp naming conventions: release tag v-<version>, changelog label v <version>, and commit subject #<patch> - <title>.
Tag names in Version State describe the intended release name. They do not prove a Git tag exists.

## Active changelog

Use assist/documentation/CHANGELOG.md.
Keep Current version, Release tag, and Changelog label in its Version State block.
Use concrete ## v-<version> sections and ### [v <version>] YYYY-MM-DD h:mm am - Title entries.
Use Asia/Kolkata timestamps and separate Database Changes from App Codebase Changes.
Keep historical entries unchanged. Append work under the current version until a bump is requested.

## Common commands

```sh
npm run version:show
npm run check:versions
npm run version:bump -- --dry-run --title "Release title"
npm run version:bump -- --title "Release title" --note "Describe changes."
npm run version:bump -- --release minor --title "Feature release"
npm run changelog:append -- --title "Progress" --note "Describe verified work."
npm run lines:check
npm run lines:fix
npm run github:now -- --dry-run
```

Version bump defaults to patch. It updates this manifest, lockfile root versions and changelog only.
It does not change dependency ranges, sibling versions, create commits, or create tags.
Use --database-update Yes only when database work occurred. The default is No.

## GitHub helper

Run github:now in an interactive terminal after configuring a remote and upstream branch.
It shows the current changelog subject and working tree. It offers an optional patch bump.
It asks before fetching, staging, committing, and pushing.
It refuses a branch behind its upstream instead of auto-stashing or merging local changes.
First commit and first upstream configuration use ordinary Git commands.
Dry run is read-only and works before a remote or first commit exists.

## Release checks

Run npm run check, npm run format:check, and npm run pack.
Install the published npm version in consuming apps and run their checks before upgrading deployment versions.
Run npm run release:check before authorized publishing.
Set registry credentials for the @devxcrew scope. Run npm run release only when publishing is authorized.

## Tools updates

Publish an authorized CLI version from D:\codexsun\shared\codexsun-cli.
Install it with npm install --save-dev --save-exact @devxcrew/cli@<version>.
Commit the manifest and registry-generated lockfile together.
Never add a new copy of its source scripts to this repository.
Docker execution remains deferred.
