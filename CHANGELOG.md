# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.4] - 2026-07-31

### Added

- Added user account-sync settings contracts for global synchronization controls, shared intervals, and per-account customization.
- Added `ACCOUNT_SYNC_MODE` to distinguish a single sync policy from custom per-account settings.

### Changed

- Simplified folder attributes by relying on `BaseEntity` for creation and update timestamps.

## [1.1.3] - 2026-07-27

### Added

- Added `BaseEntity` for shared database entity metadata and `CreateEntityInput<T>` for creation payloads that omit generated fields.

### Changed

- Updated account, account-metrics, sync-job, email, email-list, and folder contracts to inherit shared entity metadata.
- Updated the email-created event payload to carry a partial typed email object.

## [1.1.2] - 2026-07-27

### Changed

- Typed account profile details as the shared Gmail-or-Outlook provider profile union.
- Tightened provider sync results and email-created event payloads to use email identifier strings instead of unstructured objects.

### Removed

- Removed the unused `UpdatePasswordResponseObject` user contract.

## [1.1.0] - 2026-07-26

### Added

- Shared account contracts for Gmail and Outlook connections, account metrics, OAuth callbacks, sync-job lifecycle, provider metadata, and default synchronization settings.
- Shared email entity, list, search, filtering, compose, contact-suggestion, and filter-response contracts.
- Shared folder entity, query, creation, kind, and system-role contracts.
- Gmail and Outlook OAuth, profile, message, label, folder, history, and contact API contracts, plus provider-neutral sync, authentication, profile, and send-result types.
- Shared user profile, account-status, password-update, and profile-settings contracts.
- Shared background-sync worker result contracts and typed system-event names and payloads.
- Dedicated public subpath exports for `accounts`, `emails`, `folders`, `user`, `providers`, `events`, and `workers`; all are also available from the root package export.

### Changed

- Expanded the root `@mailsense/types` entry point to re-export every domain contract module.

### Removed

- Removed the unused `PaginationQueryParams`, `EntityId`, and `Nullable<T>` aliases from the common contract surface.

## [1.0.0] - 2026-07-26

### Added

- Initial public release of `@mailsense/types`, the shared TypeScript contract package for MailSense services.
- Common pagination constants and request types, including default and maximum page sizes.
- Shared API response, pagination, success, and update response interfaces.
- Shared email and folder filter contracts, including filter option metadata for UI consumers.
- `DATE_RANGE` and `FILTER_OPTION_TYPE` enums for consistent filtering behavior across MailSense applications.
- ESM, CommonJS, and TypeScript declaration build outputs, with public `@mailsense/types` and `@mailsense/types/common` entry points.

[Unreleased]: https://github.com/vishal-jagamani/mailsense-types/compare/v1.1.4...HEAD
[1.1.4]: https://github.com/vishal-jagamani/mailsense-types/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/vishal-jagamani/mailsense-types/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/vishal-jagamani/mailsense-types/compare/v1.1.1...v1.1.2
[1.1.0]: https://github.com/vishal-jagamani/mailsense-types/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/vishal-jagamani/mailsense-types/releases/tag/v1.0.0
