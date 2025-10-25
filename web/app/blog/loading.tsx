export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header Skeleton */}
            <div className="text-center space-y-4">
              <div className="h-12 bg-muted rounded-lg animate-pulse mx-auto max-w-2xl"></div>
              <div className="h-6 bg-muted rounded animate-pulse mx-auto max-w-xl"></div>
            </div>

            {/* Search Skeleton */}
            <div className="flex gap-4">
              <div className="h-10 bg-muted rounded animate-pulse flex-1"></div>
              <div className="h-10 bg-muted rounded animate-pulse w-32"></div>
            </div>

            {/* Featured Post Skeleton */}
            <div className="border rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 bg-muted animate-pulse"></div>
                <div className="md:w-1/2 p-6 space-y-4">
                  <div className="h-6 bg-muted rounded animate-pulse w-24"></div>
                  <div className="h-8 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                  <div className="flex gap-4">
                    <div className="h-4 bg-muted rounded animate-pulse w-20"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-16"></div>
                  </div>
                  <div className="h-10 bg-muted rounded animate-pulse w-24"></div>
                </div>
              </div>
            </div>

            {/* Post Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-5 bg-muted rounded animate-pulse w-20"></div>
                    <div className="h-6 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                    <div className="flex gap-4">
                      <div className="h-4 bg-muted rounded animate-pulse w-16"></div>
                      <div className="h-4 bg-muted rounded animate-pulse w-12"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Categories Skeleton */}
            <div className="border rounded-lg p-6">
              <div className="h-6 bg-muted rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 bg-muted rounded animate-pulse w-20"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-8"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Posts Skeleton */}
            <div className="border rounded-lg p-6">
              <div className="h-6 bg-muted rounded animate-pulse mb-4"></div>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-16 h-16 bg-muted rounded animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-3 bg-muted rounded animate-pulse w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}