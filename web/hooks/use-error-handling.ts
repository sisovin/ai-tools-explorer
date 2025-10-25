'use client';

/**
 * React Hooks for Error Handling and Logging
 * Compatible with Next.js 16 and React 19
 */

import { useCallback, useEffect, useState } from 'react';
import { errorRegistry, useErrorHandler } from '@/lib/error-registry';

export { useErrorHandler };

/**
 * Hook for async operations with error handling
 */
export function useAsyncOperation<T extends unknown[], R>(
  operation: (...args: T) => Promise<R>,
  options: {
    onSuccess?: (result: R, args: T) => void;
    onError?: (error: Error, args: T) => void;
    componentName?: string;
    retries?: number;
  } = {}
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<R | null>(null);

  const { logError } = useErrorHandler(options.componentName || 'useAsyncOperation');

  const execute = useCallback(async (...args: T): Promise<R | null> => {
    setLoading(true);
    setError(null);

    let attempts = 0;
    const maxRetries = options.retries || 0;

    while (attempts <= maxRetries) {
      try {
        const result = await operation(...args);
        setData(result);
        setLoading(false);

        if (options.onSuccess) {
          options.onSuccess(result, args);
        }

        errorRegistry.logInfo('Async operation completed successfully', {
          component: options.componentName,
          attempts: attempts + 1,
          args: args.length,
        });

        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        attempts++;

        if (attempts > maxRetries) {
          setError(error);
          setLoading(false);

          logError(error, {
            operation: operation.name || 'anonymous',
            args,
            attempts,
          });

          if (options.onError) {
            options.onError(error, args);
          }

          return null;
        }

        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempts) * 1000));
      }
    }

    return null;
  }, [operation, options, logError]);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return {
    execute,
    loading,
    error,
    data,
    reset,
  };
}

/**
 * Hook for error boundary state management
 */
export function useErrorBoundary(componentName: string) {
  const [error, setError] = useState<Error | null>(null);
  const [errorId, setErrorId] = useState<string | null>(null);

  const { logError } = useErrorHandler(componentName);

  const captureError = useCallback((error: Error, context?: Record<string, unknown>) => {
    const id = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setError(error);
    setErrorId(id);

    logError(error, {
      ...context,
      errorId: id,
      timestamp: new Date().toISOString(),
    });
  }, [logError]);

  const resetError = useCallback(() => {
    setError(null);
    setErrorId(null);
  }, []);

  return {
    error,
    errorId,
    captureError,
    resetError,
    hasError: error !== null,
  };
}

/**
 * Hook for performance monitoring
 */
export function usePerformanceMonitor(componentName: string, enabled = true) {
  const { logWarning, logInfo } = useErrorHandler(componentName);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const startTime = performance.now();

    return () => {
      const duration = performance.now() - startTime;

      if (duration > 1000) { // Component took more than 1 second to unmount
        logWarning('Component unmount took too long', {
          duration,
          component: componentName,
        });
      } else {
        logInfo('Component lifecycle completed', {
          duration,
          component: componentName,
        });
      }
    };
  }, [componentName, enabled, logWarning, logInfo]);
}

/**
 * Hook for network request monitoring
 */
export function useNetworkMonitor(componentName: string) {
  const { logError, logWarning } = useErrorHandler(componentName);

  const monitorFetch = useCallback(async <T>(
    url: string,
    options?: RequestInit,
    timeout = 10000
  ): Promise<T> => {
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const duration = Date.now() - startTime;

      if (!response.ok) {
        logWarning('HTTP request failed', {
          url,
          status: response.status,
          statusText: response.statusText,
          duration,
        });
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      if (duration > 5000) {
        logWarning('Slow network request', {
          url,
          duration,
        });
      }

      return response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      const duration = Date.now() - startTime;

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          logWarning('Network request timed out', {
            url,
            timeout,
            duration,
          });
        } else {
          logError(error, {
            url,
            duration,
            timeout,
          });
        }
      }

      throw error;
    }
  }, [logError, logWarning]);

  return { monitorFetch };
}

/**
 * Hook for component error tracking
 */
export function useComponentTracker(componentName: string) {
  const { logInfo, logError } = useErrorHandler(componentName);

  useEffect(() => {
    logInfo('Component mounted', {
      timestamp: new Date().toISOString(),
    });

    return () => {
      logInfo('Component unmounted', {
        timestamp: new Date().toISOString(),
      });
    };
  }, [componentName, logInfo]);

  const trackInteraction = useCallback((action: string, details?: Record<string, unknown>) => {
    logInfo(`User interaction: ${action}`, {
      ...details,
      timestamp: new Date().toISOString(),
    });
  }, [logInfo]);

  const trackError = useCallback((error: Error, context?: Record<string, unknown>) => {
    logError(error, {
      ...context,
      timestamp: new Date().toISOString(),
    });
  }, [logError]);

  return {
    trackInteraction,
    trackError,
  };
}