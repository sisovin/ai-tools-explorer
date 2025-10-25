/**
 * Next.js Instrumentation for Error Tracking
 * Handles server-side error logging and monitoring
 *
 * NOTE: This file intentionally uses Node.js APIs (process.on, process.version, process.platform)
 * which trigger Edge Runtime warnings during build. These warnings are EXPECTED and HARMLESS
 * because instrumentation files legitimately need server-side APIs for error handling.
 * The runtime guards ensure this code only executes in Node.js environment.
 */

import { errorRegistry } from '@/lib/error-registry';

// Specify that this instrumentation should only run in nodejs runtime
export const runtime = 'nodejs';

export async function register() {
  // Only run server-side instrumentation in Node.js environment
  if (typeof process !== 'undefined' && typeof window === 'undefined') {
    // Additional check to ensure we're not in Edge Runtime
    // Note: process.versions check warnings are expected for instrumentation
    if (process.versions && process.versions.node) {
      // Import server-only code - these warnings are expected for instrumentation
      const { setupServerInstrumentation } = await import('./lib/server-instrumentation');
      await setupServerInstrumentation();
    }
  }
}

// Export for use in middleware or API routes
export { errorRegistry };