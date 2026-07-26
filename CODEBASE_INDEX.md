# MailSense Types Codebase Index

## Purpose

`@mailsense/types` is the zero-runtime-dependency TypeScript contract package shared by MailSense applications. It centralizes reusable constants, enums, interfaces, and type aliases so frontend and backend code can use the same API and filtering shapes.

## Repository Shape

- `src/`: package source code.
- `src/common/`: implemented shared contracts and the `@mailsense/types/common` public subpath.
- `src/index.ts`: root package entry point; re-exports every common contract.
- `tsup.config.ts`: dual-module build configuration and declaration generation.
- `package.json`: package metadata, scripts, published files, and export map.
- `.github/workflows/build-test.yml`: Node 20 CI workflow for type checking and builds.
- `.github/workflows/publish.yml`: tag-triggered npm publishing workflow.

## Public Package Surface

| Import path | Current source | Purpose |
| --- | --- | --- |
| `@mailsense/types` | `src/index.ts` | Root entry point; re-exports the common contract surface. |
| `@mailsense/types/common` | `src/common/index.ts` | Shared pagination, API response, filter, enum, and utility type contracts. |

The package export map and `tsup` configuration also declare `accounts`, `emails`, `folders`, `user`, `providers`, `events`, and `workers` subpaths. Their source directories are not present in the current working tree, so they are not yet implemented public APIs.

## Common Contracts (`src/common`)

### Constants

- `common.constants.ts`
  - `DEFAULT_PAGE_SIZE`: default list-request page size (`20`).
  - `DEFAULT_PAGE`: first page for 1-based pagination (`1`).
  - `MAX_PAGE_SIZE`: bulk API page-size limit (`100`).

### Enums

- `common.enums.ts`
  - `DATE_RANGE`: `TODAY`, `LAST_WEEK`, `LAST_MONTH`, `LAST_3_MONTHS`, and `ALL_TIME` filter values.
  - `FILTER_OPTION_TYPE`: `STRING`, `TOGGLE`, and `DROPDOWN` UI filter-control values.

### Interfaces

- `common.interfaces.ts`
  - `APIResponse<T>`: standard API response envelope with a typed `data` payload.
  - `PaginatedDataResponse<T>`: paginated collection response shape.
  - `UpdateAPIResponse` and `SuccessAPIResponse`: status/message response envelopes.
  - `Filter`: optional search text, account, date range, folder, and unread-state criteria.
  - `FilterOptionData` and `FilterOption`: metadata used to render filter controls and choices.

### Type Aliases

- `common.types.ts`
  - `PaginationQueryParams`: optional `page` and `size` query parameters.
  - `EntityId`: shared string identifier alias.
  - `Nullable<T>`: utility for values that may be `null`.

### Barrel Export

- `common/index.ts`: re-exports every common constant, enum, interface, and type alias through `@mailsense/types/common`; `src/index.ts` exposes the same surface from `@mailsense/types`.

## Build and Publishing

- `npm run type-check`: runs TypeScript without emitting files.
- `npm run build`: builds CommonJS and ESM bundles, source maps, and declaration files with `tsup`.
- `npm run prepublishOnly`: builds before npm publishing.
- Only `dist/` is published to npm; source and repository configuration are excluded by `.npmignore`.
- CI validates type checking and builds on pushes and pull requests to `main` and `develop`.
- Pushing a `v*` tag runs the publish workflow for the public npm package.

## Release Documentation

- `CHANGELOG.md`: user-facing release history, beginning with version `1.0.0`.
- `CODEBASE_INDEX.md`: this implementation and package-surface reference. Update it whenever contracts, subpath exports, or build/publishing behavior changes.
