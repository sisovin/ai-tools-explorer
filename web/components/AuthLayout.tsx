import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  showFooter?: boolean;
}

export function AuthLayout({ children, title, subtitle, showFooter = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>

        {/* Content */}
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          {/* Header */}
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg">
                <span className="text-lg font-bold text-primary-foreground">AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  AI Tools
                </span>
                <span className="text-sm text-muted-foreground -mt-1">
                  Explorer Pro
                </span>
              </div>
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {subtitle}
            </p>
          </div>

          {/* Form Container */}
          <div className="mt-8">
            {children}
          </div>

          {/* Footer */}
          {showFooter && (
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} AI Tools Explorer. All rights reserved.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Visual */}
      <div className="hidden lg:flex flex-1 relative bg-linear-to-br from-primary/10 via-background to-muted/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-size-[40px_40px]" />
        
        {/* Content */}
        <div className="relative flex flex-col justify-center items-center px-12 text-center">
          <div className="max-w-md space-y-6">
            {/* Testimonial Card */}
            <div className="bg-background/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-linear-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">JD</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">John Doe</p>
                  <p className="text-sm text-muted-foreground">Product Manager</p>
                </div>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                &quot;AI Tools Explorer has transformed how our team discovers and implements AI solutions. The curated tools save us countless hours of research.&quot;
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/20">
                <div className="text-2xl font-bold text-primary">1,000+</div>
                <div className="text-muted-foreground">AI Tools</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/20">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Categories</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/20">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/20">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}