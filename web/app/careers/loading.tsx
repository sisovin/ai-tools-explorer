import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Skeleton */}
          <div className="lg:w-1/4">
            <Card className="border-border/40">
              <CardContent className="p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-2">
                  {[...Array(7)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
                <Skeleton className="h-6 w-24 mt-8 mb-3" />
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content Skeleton */}
          <div className="lg:w-3/4">
            <Skeleton className="h-6 w-48 mb-6" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="border-border/40">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="lg:w-1/4">
                        <Skeleton className="w-12 h-12 rounded-lg mb-2" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <div className="lg:w-3/4 flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                          <div className="flex-1">
                            <Skeleton className="h-7 w-64 mb-2" />
                            <div className="flex gap-2 mb-3">
                              <Skeleton className="h-5 w-16" />
                              <Skeleton className="h-5 w-20" />
                              <Skeleton className="h-5 w-24" />
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <Skeleton className="h-4 w-12" />
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        </div>
                        <Skeleton className="h-4 w-full my-3" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-32 mt-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}