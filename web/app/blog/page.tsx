import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Eye, Heart, Search, TrendingUp } from 'lucide-react';
import { getBlogPosts, getPopularPosts, blogCategories } from '@/lib/blog-data';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'AI Tools Explorer Blog',
  description: 'Stay updated with the latest AI tools, tutorials, and industry insights. Discover new ways to leverage artificial intelligence in your projects.',
};

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getBlogPosts(1, 9);
  const popularPosts = getPopularPosts(5);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              AI Tools Explorer Blog
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest AI tools, tutorials, and industry insights.
              Discover new ways to leverage artificial intelligence in your projects.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">All</Button>
                {blogCategories.slice(0, 4).map((category) => (
                  <Button key={category.id} variant="outline" size="sm">
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {posts.length > 0 && (
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={posts[0].featuredImage}
                      alt={posts[0].title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{posts[0].category}</Badge>
                      <span className="text-sm text-muted-foreground">Featured</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                      <Link
                        href={`/blog/${posts[0].slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {posts[0].title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={posts[0].author.avatar} />
                          <AvatarFallback>{posts[0].author.name[0]}</AvatarFallback>
                        </Avatar>
                        {posts[0].author.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(posts[0].publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {posts[0].readingTime} min read
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${posts[0].slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Post Grid */}
            <ErrorBoundary
              fallback={
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Unable to load blog posts at this time. Please try refreshing the page.
                  </p>
                </div>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold line-clamp-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                          </Avatar>
                          {post.author.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readingTime} min
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ErrorBoundary>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button variant="outline" disabled={currentPage === 1}>
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" disabled={currentPage === totalPages}>
                  Next
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {blogCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-sm">{category.name}</span>
                    <Badge variant="secondary">{category.postCount}</Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Popular Posts
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" />
                        {post.views}
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Get the latest AI tools and tutorials delivered to your inbox.
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Enter your email" />
                <Button className="w-full">Subscribe</Button>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Popular Tags</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Machine Learning', 'Tutorial', 'Tools', 'Automation', 'Python', 'Data Science'].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}