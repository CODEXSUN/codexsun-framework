# Project Inventory

- package.json: npm identity, runtime exports, dependency contracts and common tool scripts.
- package-lock.json: independent reproducible installation.
- src: package-owned TypeScript or React implementation.
- assist: agent reference, governance, release notes and audit record.
- .codexsun-cli.json: package profile for the common tools.
- .gitattributes and .editorconfig: LF text policy and binary exceptions.
- dist/src: generated JavaScript, declarations.
- dist/releases: generated npm archives.

Build, boundary and release tool implementations live only in @devxcrew/cli.
This repository has its own local Git history. No remote is configured by this task.
