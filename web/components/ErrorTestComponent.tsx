'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useErrorHandler } from '@/hooks/use-error-handling';
import { errorRegistry } from '@/lib/error-registry';

export function ErrorTestComponent() {
  const [errorCount, setErrorCount] = useState(0);
  const { logError } = useErrorHandler('ErrorTestComponent');

  const handleThrowError = () => {
    try {
      throw new Error(`Test error #${errorCount + 1} - This is a simulated error for testing purposes`);
    } catch (error) {
      logError(error as Error, {
        action: 'handleThrowError',
        errorNumber: errorCount + 1,
      });
      setErrorCount(prev => prev + 1);
    }
  };

  const handleAsyncError = async () => {
    try {
      await new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error(`Async test error #${errorCount + 1} - Network simulation failed`));
        }, 1000);
      });
    } catch (error) {
      logError(error as Error, {
        action: 'handleAsyncError',
      });
      setErrorCount(prev => prev + 1);
    }
  };

  const handleLogInfo = () => {
    errorRegistry.logInfo('Test info message', {
      component: 'ErrorTestComponent',
      action: 'handleLogInfo',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Error Handling Test</CardTitle>
        <CardDescription>
          Test the error handling and logging system. Errors: {errorCount}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleThrowError} variant="destructive" className="w-full">
          Throw Test Error
        </Button>
        <Button onClick={handleAsyncError} variant="destructive" className="w-full">
          Throw Async Error
        </Button>
        <Button onClick={handleLogInfo} variant="secondary" className="w-full">
          Log Info Message
        </Button>
      </CardContent>
    </Card>
  );
}