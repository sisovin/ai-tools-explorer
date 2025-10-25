import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Home } from 'lucide-react';

export default function TeamMemberNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-10 w-10 text-muted-foreground" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Team Member Not Found
          </h1>
          
          <p className="text-muted-foreground mb-8 text-lg">
            Sorry, we couldn&apos;t find the team member you&apos;re looking for. 
            They might have moved to a different role or the link might be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/about/team" className="gap-2">
                <Users className="h-4 w-4" />
                View All Team Members
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/" className="gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}