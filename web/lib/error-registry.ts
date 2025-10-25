/**
 * Error Registry and Logging System
 * Centralized error tracking, logging, and debugging for Next.js 16 + React 19
 */

export interface ErrorLogEntry {
  id: string;
  timestamp: Date;
  level: 'error' | 'warning' | 'info' | 'debug';
  message: string;
  error?: Error;
  stack?: string;
  componentStack?: string;
  context?: Record<string, unknown>;
  userAgent?: string;
  url?: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, unknown>;
}

export interface ErrorRegistryConfig {
  maxEntries: number;
  enableConsoleLogging: boolean;
  enableExternalLogging: boolean;
  externalLogger?: (entry: ErrorLogEntry) => void | Promise<void>;
  filterErrors?: (error: Error, context?: Record<string, unknown>) => boolean;
}

class ErrorRegistry {
  private entries: ErrorLogEntry[] = [];
  private config: ErrorRegistryConfig;
  private sessionId: string;

  constructor(config: Partial<ErrorRegistryConfig> = {}) {
    this.config = {
      maxEntries: 1000,
      enableConsoleLogging: process.env.NODE_ENV === 'development',
      enableExternalLogging: process.env.NODE_ENV === 'production',
      ...config,
    };

    this.sessionId = this.generateSessionId();

    // Clean up old entries periodically
    if (typeof window !== 'undefined') {
      setInterval(() => this.cleanup(), 5 * 60 * 1000); // Every 5 minutes
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private cleanup(): void {
    if (this.entries.length > this.config.maxEntries) {
      // Keep only the most recent entries
      this.entries = this.entries.slice(-this.config.maxEntries);
    }
  }

  private shouldLogError(error: Error, context?: Record<string, unknown>): boolean {
    if (this.config.filterErrors) {
      return this.config.filterErrors(error, context);
    }
    return true;
  }

  async log(entry: Omit<ErrorLogEntry, 'id' | 'timestamp' | 'sessionId'>): Promise<void> {
    if (!this.shouldLogError(entry.error!, entry.context)) {
      return;
    }

    const fullEntry: ErrorLogEntry = {
      ...entry,
      id: this.generateErrorId(),
      timestamp: new Date(),
      sessionId: this.sessionId,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    // Add to internal registry
    this.entries.push(fullEntry);
    this.cleanup();

    // Console logging
    if (this.config.enableConsoleLogging) {
      this.logToConsole(fullEntry);
    }

    // External logging
    if (this.config.enableExternalLogging && this.config.externalLogger) {
      try {
        await this.config.externalLogger(fullEntry);
      } catch (externalLogError) {
        console.error('Failed to log to external service:', externalLogError);
      }
    }

    // Store in localStorage for persistence (client-side only)
    if (typeof window !== 'undefined') {
      try {
        const stored = JSON.parse(localStorage.getItem('error-registry') || '[]');
        stored.push(fullEntry);
        // Keep only last 100 entries in localStorage
        if (stored.length > 100) {
          stored.splice(0, stored.length - 100);
        }
        localStorage.setItem('error-registry', JSON.stringify(stored));
      } catch (storageError) {
        console.warn('Failed to store error in localStorage:', storageError);
      }
    }
  }

  private logToConsole(entry: ErrorLogEntry): void {
    const prefix = `[${entry.timestamp.toISOString()}] [${entry.level.toUpperCase()}]`;

    switch (entry.level) {
      case 'error':
        console.error(`${prefix} ${entry.message}`, {
          error: entry.error,
          stack: entry.stack,
          componentStack: entry.componentStack,
          context: entry.context,
          metadata: entry.metadata,
        });
        break;
      case 'warning':
        console.warn(`${prefix} ${entry.message}`, entry.context);
        break;
      case 'info':
        console.info(`${prefix} ${entry.message}`, entry.context);
        break;
      case 'debug':
        console.debug(`${prefix} ${entry.message}`, entry.context);
        break;
    }
  }

  // Public API methods
  async logError(
    error: Error,
    context?: Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): Promise<void> {
    await this.log({
      level: 'error',
      message: error.message,
      error,
      stack: error.stack,
      context,
      metadata,
    });
  }

  async logWarning(
    message: string,
    context?: Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): Promise<void> {
    await this.log({
      level: 'warning',
      message,
      context,
      metadata,
    });
  }

  async logInfo(
    message: string,
    context?: Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): Promise<void> {
    await this.log({
      level: 'info',
      message,
      context,
      metadata,
    });
  }

  async logDebug(
    message: string,
    context?: Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): Promise<void> {
    await this.log({
      level: 'debug',
      message,
      context,
      metadata,
    });
  }

  // Getters
  getEntries(level?: ErrorLogEntry['level']): ErrorLogEntry[] {
    if (level) {
      return this.entries.filter(entry => entry.level === level);
    }
    return [...this.entries];
  }

  getRecentEntries(count: number = 10): ErrorLogEntry[] {
    return this.entries.slice(-count);
  }

  getEntriesByComponent(componentName: string): ErrorLogEntry[] {
    return this.entries.filter(entry =>
      entry.context?.component === componentName ||
      entry.metadata?.component === componentName
    );
  }

  getErrorStats(): {
    total: number;
    byLevel: Record<ErrorLogEntry['level'], number>;
    recentErrors: number;
  } {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);

    const byLevel = this.entries.reduce((acc, entry) => {
      acc[entry.level] = (acc[entry.level] || 0) + 1;
      return acc;
    }, {} as Record<ErrorLogEntry['level'], number>);

    const recentErrors = this.entries.filter(entry =>
      entry.timestamp.getTime() > oneHourAgo && entry.level === 'error'
    ).length;

    return {
      total: this.entries.length,
      byLevel,
      recentErrors,
    };
  }

  // Utility methods
  clear(): void {
    this.entries = [];
    if (typeof window !== 'undefined') {
      localStorage.removeItem('error-registry');
    }
  }

  export(): ErrorLogEntry[] {
    return [...this.entries];
  }

  import(entries: ErrorLogEntry[]): void {
    this.entries.push(...entries);
    this.cleanup();
  }
}

// Create singleton instance
export const errorRegistry = new ErrorRegistry();

// External logger integrations
export const createSentryLogger = (_dsn: string) => { // eslint-disable-line @typescript-eslint/no-unused-vars
  return async (entry: ErrorLogEntry) => {
    if (typeof window !== 'undefined' && (window as Window & { Sentry?: unknown }).Sentry) {
      const sentry = (window as Window & { Sentry?: { captureException: (error: Error, options?: unknown) => void } }).Sentry!;
      sentry.captureException(entry.error || new Error(entry.message), {
        tags: {
          level: entry.level,
          component: entry.context?.component as string,
        },
        contexts: {
          error_registry: {
            sessionId: entry.sessionId,
            componentStack: entry.componentStack,
          },
          custom: entry.context,
        },
        extra: entry.metadata,
      });
    }
  };
};

export const createLogRocketLogger = (_appId: string) => { // eslint-disable-line @typescript-eslint/no-unused-vars
  return async (entry: ErrorLogEntry) => {
    if (typeof window !== 'undefined' && (window as Window & { LogRocket?: unknown }).LogRocket) {
      const logRocket = (window as Window & { LogRocket?: { captureException: (error: Error, options?: unknown) => void } }).LogRocket!;
      logRocket.captureException(entry.error || new Error(entry.message), {
        tags: {
          level: entry.level,
          component: entry.context?.component as string,
        },
        extra: {
          sessionId: entry.sessionId,
          componentStack: entry.componentStack,
          context: entry.context,
          metadata: entry.metadata,
        },
      });
    }
  };
};

export const createConsoleLogger = () => {
  return async (entry: ErrorLogEntry) => {
    console.group(`🚨 Error Registry: ${entry.message}`);
    console.error('Error:', entry.error);
    console.log('Context:', entry.context);
    console.log('Metadata:', entry.metadata);
    console.log('Session ID:', entry.sessionId);
    console.log('Component Stack:', entry.componentStack);
    console.groupEnd();
  };
};

// React 19 compatible error boundary hook
export function useErrorHandler(componentName: string) {
  return {
    logError: (error: Error, context?: Record<string, unknown>) => {
      errorRegistry.logError(error, { ...context, component: componentName });
    },
    logWarning: (message: string, context?: Record<string, unknown>) => {
      errorRegistry.logWarning(message, { ...context, component: componentName });
    },
    logInfo: (message: string, context?: Record<string, unknown>) => {
      errorRegistry.logInfo(message, { ...context, component: componentName });
    },
  };
}