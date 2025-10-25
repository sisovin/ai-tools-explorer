'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw, Home, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Terms page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto text-center">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>

              <h1 className="text-2xl font-bold text-foreground mb-3">
                Terms Unavailable
              </h1>

              <p className="text-muted-foreground mb-6">
                We encountered an error while loading the terms and conditions. This might be a temporary issue.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={reset} className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/terms" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Back to Terms
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/" className="gap-2">
                    <Home className="h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>

              <div className="mt-6 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Error: {error.message}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}