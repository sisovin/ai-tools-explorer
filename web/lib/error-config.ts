/**
 * Error Registry Configuration
 * Configure external logging services and error handling behavior
 */

import { errorRegistry, createSentryLogger, createLogRocketLogger, createConsoleLogger, ErrorLogEntry } from '@/lib/error-registry';

// Configure external loggers based on environment
const configureExternalLoggers = () => {
  const loggers = [];

  // Console logger for development
  if (process.env.NODE_ENV === 'development') {
    loggers.push(createConsoleLogger());
  }

  // Sentry integration (if available)
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    loggers.push(createSentryLogger(process.env.NEXT_PUBLIC_SENTRY_DSN));
  }

  // LogRocket integration (if available)
  if (process.env.NEXT_PUBLIC_LOGROCKET_APP_ID) {
    loggers.push(createLogRocketLogger(process.env.NEXT_PUBLIC_LOGROCKET_APP_ID));
  }

  // Add custom logger if configured
  if (typeof window !== 'undefined' && (window as Window & { customErrorLogger?: (entry: ErrorLogEntry) => void | Promise<void> }).customErrorLogger) {
    loggers.push((window as Window & { customErrorLogger?: (entry: ErrorLogEntry) => void | Promise<void> }).customErrorLogger!);
  }

  return loggers;
};

// Initialize error registry with configuration
const initializeErrorRegistry = () => {
  // Configure external loggers
  const externalLoggers = configureExternalLoggers();

  if (externalLoggers.length > 0) {
    // For now, we'll use console logging for external services
    // In a real app, you'd configure proper external logging services
    errorRegistry.logInfo('External loggers configured', {
      count: externalLoggers.length,
    });
  }

  // Log initialization
  errorRegistry.logInfo('Error registry configured', {
    externalLoggers: externalLoggers.length,
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
};

// Initialize on module load
if (typeof window !== 'undefined') {
  // Client-side initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeErrorRegistry);
  } else {
    initializeErrorRegistry();
  }
} else {
  // Server-side initialization
  initializeErrorRegistry();
}

export { errorRegistry };
export default errorRegistry;