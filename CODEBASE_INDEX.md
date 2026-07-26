# MailSense Types Codebase Index

## Purpose

`@mailsense/types` is the shared, zero-runtime-dependency TypeScript contract package for MailSense applications. It provides common API shapes plus domain contracts for accounts, email, folders, users, providers, background workers, and internal events.

## Repository Shape

- `src/index.ts`: root entry point that re-exports every domain module.
- `src/common/`: cross-domain constants, enums, interfaces, and the `common` barrel export.
- `src/accounts/`: connected-account, provider, metrics, and sync-job contracts.
- `src/emails/`: email entities, list/search/compose request and response contracts.
- `src/folders/`: folder entities, filters, creation requests, and folder enums.
- `src/providers/`: Gmail and Outlook provider API contracts plus provider-neutral types.
- `src/user/`: user profile, settings, status, and password-update contracts.
- `src/events/`: internal system event names and typed event payloads.
- `src/workers/`: background sync worker result contracts.
- `tsup.config.ts`: ESM/CommonJS bundles, declaration files, source maps, and clean builds.
- `package.json`: package metadata, scripts, published files, and public export map.
- `.github/workflows/build-test.yml`: Node 20 type-check and build validation.
- `.github/workflows/publish.yml`: tag-triggered public npm publishing.

## Public Package Surface

Every module below is available from the root `@mailsense/types` import and through its dedicated subpath.

| Import path | Source barrel | Contents |
| --- | --- | --- |
| `@mailsense/types` | `src/index.ts` | All public package contracts. |
| `@mailsense/types/common` | `src/common/index.ts` | Shared pagination, API response, filter, and filter-control contracts. |
| `@mailsense/types/accounts` | `src/accounts/index.ts` | Account/provider metadata, sync settings, account metrics, and sync jobs. |
| `@mailsense/types/emails` | `src/emails/index.ts` | Email entities, query/filter, compose, and list contracts. |
| `@mailsense/types/folders` | `src/folders/index.ts` | Folder entities, filters, create request, roles, and kinds. |
| `@mailsense/types/user` | `src/user/index.ts` | User, profile settings, password-update, and status contracts. |
| `@mailsense/types/providers` | `src/providers/index.ts` | Gmail and Outlook API models plus provider-neutral result types. |
| `@mailsense/types/events` | `src/events/index.ts` | System event names and typed payload registry. |
| `@mailsense/types/workers` | `src/workers/index.ts` | Background sync worker result contracts. |

## Module Index

### Common (`src/common`)

- `common.constants.ts`: `DEFAULT_PAGE_SIZE` (`20`), `DEFAULT_PAGE` (`1`), and `MAX_PAGE_SIZE` (`100`).
- `common.enums.ts`: `DATE_RANGE` and `FILTER_OPTION_TYPE`.
- `common.interfaces.ts`: `APIResponse<T>`, `PaginatedDataResponse<T>`, mutation/success responses, and shared filtering contracts (`Filter`, `FilterOption`, `FilterOptionData`).

### Accounts (`src/accounts`)

- `accounts.enums.ts`: Gmail/Outlook provider IDs; account-last-sync, sync-job, and sync-trigger statuses.
- `accounts.constants.ts`: fifteen-minute default sync interval and supported provider display metadata.
- `accounts.interfaces.ts`: account, account metrics, queued sync-job, account-list response, and OAuth callback contracts.

### Emails (`src/emails`)

- `emails.enums.ts`: ascending and descending email-search sort order.
- `emails.interfaces.ts`: full email and list DTOs; fetch/search/filter parameters; compose and recipient-search payloads; list and filter responses.

### Folders (`src/folders`)

- `folders.enums.ts`: system/custom folder kinds and standard folder roles such as inbox, sent, drafts, trash, spam, archive, starred, and important.
- `folders.interfaces.ts`: folder attributes, list filters and request options, and create-folder payload.

### Providers (`src/providers`)

- `gmail.enums.ts`: Gmail system labels, label visibility, and label types.
- `gmail.interfaces.ts`: OAuth, profile, message, history, label, and Google People contact API models.
- `outlook.enums.ts`: Microsoft Graph well-known folders and delta message change reasons.
- `outlook.interfaces.ts`: OAuth, profile, message, recipient, and paginated/delta response models.
- `provider.interfaces.ts`: provider-neutral email sync result and Gmail/Outlook OAuth, profile, and send-result unions.

### User (`src/user`)

- `user.enums.ts`: active, inactive, and suspended account statuses.
- `user.interfaces.ts`: user identity, Auth0 user details, profile settings, password-update, and profile-update response contracts.

### Events and Workers

- `events/events.enums.ts`: `SYNC_COMPLETED` and `EMAIL_CREATED` system event names.
- `events/events.interfaces.ts`: sync-completed and email-created payloads plus the event-to-payload registry.
- `workers/workers.interfaces.ts`: `SyncJobResult` with added and deleted email counts.

## Build and Publishing

- `npm run type-check`: runs TypeScript without emitting files.
- `npm run build`: produces ESM/CommonJS bundles, source maps, and declaration files through `tsup`.
- `npm run prepublishOnly`: builds before publication.
- Only `dist/` is published to npm; source and repository configuration are excluded through `.npmignore`.
- CI validates type checking and builds on pushes and pull requests to `main` and `develop`.
- Pushing a `v*` tag runs the npm publish workflow.

## Release Documentation

- `CHANGELOG.md`: user-facing release history; version `1.1.0` documents the current domain-contract expansion.
- `CODEBASE_INDEX.md`: current source and public-surface reference. Update it whenever a public module, contract, export, or build/publishing behavior changes.
