'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function TermsDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Terms detail error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/40">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl font-bold text-destructive">
                Terms Section Not Found
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  The terms section you&apos;re looking for doesn&apos;t exist or has been moved.
                  This could be due to an invalid URL or the section may have been updated.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Don&apos;t worry! You can browse all available terms sections or return to the main terms page.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={reset} variant="outline" className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </Button>
                  <Button asChild className="flex items-center gap-2">
                    <Link href="/terms">
                      <FileText className="w-4 h-4" />
                      Browse All Terms
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex items-center gap-2">
                    <Link href="/">
                      <Home className="w-4 h-4" />
                      Go Home
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Popular Terms Sections</h3>
                <div className="grid gap-2">
                  {[
                    { id: 'terms-of-service', title: 'Terms of Service' },
                    { id: 'privacy-policy', title: 'Privacy Policy' },
                    { id: 'acceptable-use', title: 'Acceptable Use Policy' },
                    { id: 'data-processing', title: 'Data Processing Agreement' },
                  ].map((section) => (
                    <Button
                      key={section.id}
                      asChild
                      variant="ghost"
                      className="justify-start h-auto p-3"
                    >
                      <Link href={`/terms/${section.id}`}>
                        <div className="text-left">
                          <div className="font-medium">{section.title}</div>
                          <div className="text-sm text-muted-foreground">
                            View detailed terms and conditions
                          </div>
                        </div>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              {error.digest && (
                <div className="text-xs text-muted-foreground border-t pt-4">
                  Error ID: {error.digest}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}