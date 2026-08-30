# MailSense Types Codebase Index

## Purpose

`@mailsense/types` is the shared, zero-runtime-dependency TypeScript contract package for MailSense applications. It provides common API shapes plus domain contracts for accounts, analytics, attachments, email, drafts, folders, users, providers, background workers, and internal events.

## Repository Shape

- `src/index.ts`: root entry point that re-exports every domain module.
- `src/common/`: cross-domain constants, enums, interfaces, and the `common` barrel export.
- `src/accounts/`: connected-account, provider, metrics, and sync-job contracts.
- `src/analytics/`: dashboard analytics, volume trends, top senders, response time metrics, and query contracts.
- `src/attachments/`: staged attachment, upload, deletion, and send-email request contracts.
- `src/emails/`: email entities, list/search/compose request and response contracts, thread, attachment, and folder movement types.
- `src/drafts/`: draft entity, auto-save payload, send response, and list DTO contracts.
- `src/folders/`: folder entities, filters, creation requests, and folder enums.
- `src/providers/`: Gmail and Outlook provider API contracts plus provider-neutral types.
- `src/user/`: user profile, account-sync settings, and status contracts.
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
| `@mailsense/types/analytics` | `src/analytics/index.ts` | Overview KPIs, volume time series, top senders, response time metrics, and query contracts. |
| `@mailsense/types/attachments` | `src/attachments/index.ts` | Staged attachment, upload/deletion response, and send-email request contracts. |
| `@mailsense/types/emails` | `src/emails/index.ts` | Email entities, query/filter, compose, attachment metadata, thread, and folder movement contracts. |
| `@mailsense/types/drafts` | `src/drafts/index.ts` | Draft entity, auto-save payload, send response, and list DTO contracts. |
| `@mailsense/types/folders` | `src/folders/index.ts` | Folder entities, filters, create request, roles, and kinds. |
| `@mailsense/types/user` | `src/user/index.ts` | User identity, profile, account-sync settings, and status contracts. |
| `@mailsense/types/providers` | `src/providers/index.ts` | Gmail and Outlook API models plus provider-neutral result types. |
| `@mailsense/types/events` | `src/events/index.ts` | System event names and typed payload registry. |
| `@mailsense/types/workers` | `src/workers/index.ts` | Background sync worker result contracts. |

## Module Index

### Common (`src/common`)

- `common.constants.ts`: `DEFAULT_PAGE_SIZE` (`20`), `DEFAULT_PAGE` (`1`), and `MAX_PAGE_SIZE` (`100`).
- `common.enums.ts`: `DATE_RANGE` and `FILTER_OPTION_TYPE`.
- `common.interfaces.ts`: `BaseEntity`, `CreateEntityInput<T>`, API/pagination/mutation response envelopes, and shared filtering contracts (`Filter`, `FilterOption`, `FilterOptionData`).

### Accounts (`src/accounts`)

- `accounts.enums.ts`: Gmail/Outlook provider IDs; account-last-sync, sync-job, and sync-trigger statuses.
- `accounts.constants.ts`: fifteen-minute default sync interval and supported provider display metadata.
- `accounts.interfaces.ts`: base-entity account (including a provider-typed user profile), account metrics snapshot (with `unreadCount` and `sentCount`), queued sync-job, account-list response, and OAuth callback contracts.

### Analytics (`src/analytics`)

- `analytics.enums.ts`: `ANALYTICS_TIMEFRAME` (`today`, `7d`, `30d`, `90d`, `this_month`, `1y`, `all_time`, `custom`) and `METRIC_TREND_DIRECTION` (`UP`, `DOWN`, `NEUTRAL`).
- `analytics.interfaces.ts`: `OverviewMetricsAttributes`, `AccountActivitySummaryAttributes`, `EmailVolumeDataPointAttributes`, `TopSenderDataAttributes`, `ResponseTimeDistributionAttributes`, `ResponseTimeMetricsAttributes`, `AnalyticsQueryParams`, and `DashboardAnalyticsResponse`.

### Attachments (`src/attachments`)

- `attachments.interfaces.ts`: `StagedAttachmentAttributes` entity, upload and staged-deletion responses, and `SendEmailRequestBody` with optional staged attachment IDs.

### Emails (`src/emails`)

- `emails.enums.ts`: `EMAIL_STATUS` (`received`, `draft`, `sent`), ascending and descending email-search sort order.
- `emails.interfaces.ts`: base-entity full email (with `threadCount` and `attachments`) and list DTOs (with `attachmentCount` and thread metadata); thread retrieval (`GetThreadResponse`); attachment metadata (`EmailAttachment`); folder move payloads (`MoveEmailsRequestBody`, `MoveEmailsResponse`); fetch/search/filter parameters; compose (`ComposeEmailRequestBody` with optional attachments, CC/BCC, and reply context) and recipient-search payloads; list and filter responses.

### Drafts (`src/drafts`)

- `drafts.interfaces.ts`: `DraftAttributes` entity, `SaveDraftRequestBody` auto-save payload, `SendDraftResponse` dispatch payload, and `DraftListDTO` summary contracts.

### Folders (`src/folders`)

- `folders.enums.ts`: system/custom folder kinds and standard folder roles such as inbox, sent, drafts, trash, spam, archive, starred, and important.
- `folders.interfaces.ts`: base-entity folder attributes (including inherited timestamps), list filters and request options, and create-folder payload.

### Providers (`src/providers`)

- `gmail.enums.ts`: Gmail system labels, label visibility, and label types.
- `gmail.interfaces.ts`: OAuth, profile, recursive MIME message-part and attachment models, history, label, and Google People contact API models.
- `outlook.enums.ts`: Microsoft Graph well-known folders and delta message change reasons.
- `outlook.interfaces.ts`: OAuth, profile, message and optional-recipient models, embedded attachment-resource, paginated/delta response, and upload-session models.
- `provider.interfaces.ts`: provider-neutral email sync result with added/deleted email IDs, plus Gmail/Outlook OAuth, profile, and send-result unions.

### User (`src/user`)

- `user.enums.ts`: active, inactive, and suspended account statuses, plus shared or custom-per-account synchronization modes.
- `user.interfaces.ts`: user identity, Auth0 user details, profile settings, profile-update response, and base-entity user account-sync settings contracts.

### Events and Workers

- `events/events.enums.ts`: `SYNC_COMPLETED` and `EMAIL_CREATED` system event names.
- `events/events.interfaces.ts`: sync-completed and email-created payloads (with a partial typed email), plus the event-to-payload registry.
- `workers/workers.interfaces.ts`: `SyncJobResult` with added and deleted email counts.

## Build and Publishing

- `npm run type-check`: runs TypeScript without emitting files.
- `npm run build`: produces ESM/CommonJS bundles, source maps, and declaration files through `tsup`.
- `npm run prepublishOnly`: builds before publication.
- Only `dist/` is published to npm; source and repository configuration are excluded through `.npmignore`.
- CI validates type checking and builds on pushes and pull requests to `main` and `develop`.
- Pushing a `v*` tag runs the npm publish workflow.

## Release Documentation

- `CHANGELOG.md`: user-facing release history; version `1.4.0` documents the latest published contract updates.
- `CODEBASE_INDEX.md`: current source and public-surface reference. Update it whenever a public module, contract, export, or build/publishing behavior changes.
