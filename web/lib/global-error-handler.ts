'use client';

/**
 * Global Error Handler for Next.js 16 + React 19
 * Handles uncaught errors and unhandled promise rejections
 */

import { errorRegistry } from '@/lib/error-registry';

class GlobalErrorHandler {
  private isInitialized = false;

  initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    // Handle uncaught errors
    window.addEventListener('error', this.handleError.bind(this));

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));

    // Handle React errors (React 19 compatible)
    if (process.env.NODE_ENV === 'development') {
      // Override console.error to catch React errors
      const originalConsoleError = console.error;
      console.error = (...args: unknown[]) => {
        // Check if this is a React error
        const message = args.join(' ');
        if (message.includes('Warning: ReactDOMTestUtils') ||
          message.includes('Warning: React.createFactory()') ||
          message.includes('Warning: The tag <') ||
          message.includes('Warning: Expected server HTML to contain a matching')) {
          // These are common React warnings, don't log them as errors
          originalConsoleError.apply(console, args);
          return;
        }

        // Log React errors
        if (message.includes('Error:') || message.includes('Uncaught')) {
          errorRegistry.logError(new Error(message), {
            source: 'console.error',
            args,
          });
        }

        originalConsoleError.apply(console, args);
      };
    }

    this.isInitialized = true;

    errorRegistry.logInfo('Global error handler initialized', {
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    });
  }

  private handleError(event: ErrorEvent): void {
    const error = event.error || new Error(event.message);

    errorRegistry.logError(error, {
      source: 'uncaught-error',
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
    }, {
      event,
    });
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    const error = event.reason instanceof Error
      ? event.reason
      : new Error(`Unhandled promise rejection: ${String(event.reason)}`);

    errorRegistry.logError(error, {
      source: 'unhandled-rejection',
      promise: event.promise,
    }, {
      reason: event.reason,
      event,
    });
  }

  // Performance monitoring
  private setupPerformanceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      try {
        // Monitor long tasks
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) { // Tasks longer than 50ms
              errorRegistry.logWarning('Long task detected', {
                duration: entry.duration,
                startTime: entry.startTime,
                source: 'performance-monitoring',
              });
            }
          }
        });

        longTaskObserver.observe({ entryTypes: ['longtask'] });

        // Monitor largest contentful paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];

          if (lastEntry.startTime > 2500) { // LCP > 2.5s
            errorRegistry.logWarning('Slow LCP detected', {
              lcp: lastEntry.startTime,
              element: (lastEntry as PerformanceEntry & { element?: { tagName: string } }).element?.tagName,
              source: 'performance-monitoring',
            });
          }
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      } catch (error) {
        errorRegistry.logWarning('Failed to setup performance monitoring', {
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }
  }

  // Network error monitoring
  private setupNetworkMonitoring(): void {
    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const startTime = Date.now();
      try {
        const response = await originalFetch(...args);
        const duration = Date.now() - startTime;

        if (!response.ok) {
          errorRegistry.logWarning('HTTP request failed', {
            url: args[0] instanceof Request ? args[0].url : String(args[0]),
            status: response.status,
            statusText: response.statusText,
            duration,
            source: 'network-monitoring',
          });
        } else if (duration > 5000) { // Requests taking longer than 5 seconds
          errorRegistry.logWarning('Slow network request', {
            url: args[0] instanceof Request ? args[0].url : String(args[0]),
            duration,
            source: 'network-monitoring',
          });
        }

        return response;
      } catch (error) {
        const duration = Date.now() - startTime;
        errorRegistry.logError(error instanceof Error ? error : new Error(String(error)), {
          url: args[0] instanceof Request ? args[0].url : String(args[0]),
          duration,
          source: 'network-monitoring',
        });
        throw error;
      }
    };
  }

  // Memory monitoring (basic)
  private setupMemoryMonitoring(): void {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memInfo = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
        const usedPercent = (memInfo.usedJSHeapSize / memInfo.totalJSHeapSize) * 100;

        if (usedPercent > 80) { // Memory usage > 80%
          errorRegistry.logWarning('High memory usage detected', {
            usedPercent,
            usedJSHeapSize: memInfo.usedJSHeapSize,
            totalJSHeapSize: memInfo.totalJSHeapSize,
            source: 'memory-monitoring',
          });
        }
      };

      // Check memory every 30 seconds
      setInterval(checkMemory, 30000);
    }
  }

  // Enhanced initialization with monitoring
  initializeWithMonitoring(): void {
    this.initialize();
    this.setupPerformanceMonitoring();
    this.setupNetworkMonitoring();
    this.setupMemoryMonitoring();

    errorRegistry.logInfo('Enhanced error monitoring initialized', {
      features: ['performance', 'network', 'memory'],
    });
  }
}

// Create singleton instance
export const globalErrorHandler = new GlobalErrorHandler();

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      globalErrorHandler.initializeWithMonitoring();
    });
  } else {
    globalErrorHandler.initializeWithMonitoring();
  }
}