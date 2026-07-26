# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-07-26

### Added

- Initial public release of `@mailsense/types`, the shared TypeScript contract package for MailSense services.
- Common pagination constants and request types, including default and maximum page sizes.
- Shared API response, pagination, success, and update response interfaces.
- Shared email and folder filter contracts, including filter option metadata for UI consumers.
- `DATE_RANGE` and `FILTER_OPTION_TYPE` enums for consistent filtering behavior across MailSense applications.
- ESM, CommonJS, and TypeScript declaration build outputs, with public `@mailsense/types` and `@mailsense/types/common` entry points.

[Unreleased]: https://github.com/vishal-jagamani/mailsense-types/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/vishal-jagamani/mailsense-types/releases/tag/v1.0.0
