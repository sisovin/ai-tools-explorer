# AI Tools Explorer - Error Log Documentation

This file documents the expected warnings in the development server output.

## IMPORTANT: Edge Runtime warnings for instrumentation files are EXPECTED and HARMLESS

The instrumentation system uses Node.js APIs (`process.on`, `process.version`, `process.platform`) for server-side error handling. These warnings appear because Next.js analyzes all files for Edge Runtime compatibility, but instrumentation legitimately needs server-side APIs.

**Current Warning Count**: 9 warnings (stable - these are expected and cannot be eliminated)

The warnings do NOT affect functionality - the error handling system works correctly.

## Files affected

- `instrumentation.ts`: Main instrumentation file with runtime guards
- `lib/server-instrumentation.ts`: Server-only error handling code

## Warning Details

The warnings appear for these Node.js APIs:

- `process.on` (uncaughtException, unhandledRejection handlers)
- `process.version` (version logging)
- `process.platform` (platform logging)
- `process.versions` (version checking)

These warnings are documented in the file headers and are expected behavior. The application builds successfully and error handling works properly.

Last updated: October 23, 2025
