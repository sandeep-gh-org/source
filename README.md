# Source Repo Sync

This repository contains a basic source application and a GitHub Actions workflow that syncs changes to a destination repo named `repo-b`.

## Source app

The simple app is located in `src/` and includes:

- `src/index.html`
- `src/styles.css`
- `src/app.js`

## Workflow

The workflow in `.github/workflows/push-to-repo-b.yml` triggers on pushes to `main` and syncs the source repository contents to the destination repo.

## Notes

- Make sure `repo-b` exists and the GitHub App credentials are configured in `SYNC_APP_ID` and `SYNC_APP_PRIVATE_KEY`.
- The workflow excludes `.git` and `.github` when syncing.
