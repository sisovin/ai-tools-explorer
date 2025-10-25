/**
 * Server-only instrumentation code
 * This file contains Node.js specific APIs that should not be bundled for Edge Runtime
 *
 * NOTE: This file intentionally uses Node.js APIs (process.on, process.version, process.platform)
 * which trigger Edge Runtime warnings during build. These warnings are EXPECTED and HARMLESS
 * because instrumentation files legitimately need server-side APIs for error handling.
 * The 'server-only' import ensures this only runs on the server.
 */

import 'server-only';
import { errorRegistry } from '@/lib/error-registry';

export async function setupServerInstrumentation() {
  // Runtime check to ensure we're in Node.js environment
  if (typeof process === 'undefined' || typeof window !== 'undefined') {
    return; // Skip if not in Node.js server environment
  }

  // Additional check for Node.js version (avoiding process.versions to reduce warnings)
  // Note: process.version check may still trigger Edge Runtime warning but is expected
  if (!process.version) {
    return; // Skip if Node.js version not available
  }

  // Handle uncaught exceptions
  // Note: process.on warnings are expected for server-side instrumentation
  process.on('uncaughtException', (error) => {
    errorRegistry.logError(error, {
      source: 'server-uncaught-exception',
      nodeVersion: process.version,
      platform: process.platform,
    });
  });

  // Handle unhandled promise rejections
  // Note: process.on warnings are expected for server-side instrumentation
  process.on('unhandledRejection', (reason, promise) => {
    const error = reason instanceof Error
      ? reason
      : new Error(`Unhandled promise rejection: ${String(reason)}`);

    errorRegistry.logError(error, {
      source: 'server-unhandled-rejection',
      promise: String(promise),
    }, {
      reason,
    });
  });

  // Log server startup
  // Note: process.version/platform warnings are expected for server-side instrumentation
  errorRegistry.logInfo('Next.js server instrumentation initialized', {
    nodeVersion: process.version,
    platform: process.platform,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
}