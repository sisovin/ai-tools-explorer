'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Contact page error:', error);
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
                Something Went Wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  We&apos;re experiencing technical difficulties loading the contact page.
                  This could be due to a temporary server issue or network connectivity problem.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Don&apos;t worry! You can still reach us through our alternative contact methods below.
                </p>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3 p-4 border border-border/40 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <a href="mailto:support@aitoolsexplorer.com" className="text-blue-600 hover:underline text-sm">
                        support@aitoolsexplorer.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 border border-border/40 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <a href="tel:+15551234567" className="text-green-600 hover:underline text-sm">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 border border-border/40 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 on our website</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Button onClick={reset} variant="outline" className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </Button>
                  <Button asChild className="flex items-center gap-2">
                    <Link href="/">
                      <Home className="w-4 h-4" />
                      Go Home
                    </Link>
                  </Button>
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