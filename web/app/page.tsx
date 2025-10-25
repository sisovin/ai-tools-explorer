'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Brain, Code, Palette, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ToolCard } from '@/components/ToolCard';
import { NewsletterForm } from '@/components/NewsletterForm';
import { ErrorBoundary } from '@/components/ErrorBoundary';
/* import { ErrorTestComponent } from '@/components/ErrorTestComponent'; */
import { toolsData } from '@/lib/data';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All Tools', ...new Set(toolsData.map(tool => tool.category))];
    return cats;
  }, []);

  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredTools = toolsData.slice(0, 6); // Show first 6 as featured

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Discover AI Tools
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Explore the Future of{' '}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Tools
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover, compare, and integrate the best AI tools for developers, designers, and businesses.
              From code generation to data analysis, find your perfect AI companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#tools">
                  Explore Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search for AI tools..."
                className="max-w-md mx-auto"
              />
            </div>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured AI Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked tools that are revolutionizing how we work, create, and innovate.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="#all-tools">View All Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Explore by Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect AI tools for your specific needs and use cases.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: 'Development',
                  description: 'Code generation, debugging, and development assistance',
                  count: toolsData.filter(t => t.category === 'Development').length
                },
                {
                  icon: Palette,
                  title: 'Design',
                  description: 'UI/UX design, image generation, and creative tools',
                  count: toolsData.filter(t => t.category === 'Design').length
                },
                {
                  icon: Brain,
                  title: 'Productivity',
                  description: 'Writing, research, and workflow optimization',
                  count: toolsData.filter(t => t.category === 'Productivity').length
                },
                {
                  icon: BarChart3,
                  title: 'Analytics',
                  description: 'Data analysis, insights, and business intelligence',
                  count: toolsData.filter(t => t.category === 'Analytics').length
                },
                {
                  icon: Zap,
                  title: 'Automation',
                  description: 'Workflow automation and task management',
                  count: toolsData.filter(t => t.category === 'Automation').length
                }
              ].map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {category.count} tools
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{category.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Tools Section */}
      <section id="all-tools" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                All AI Tools
              </h2>
              <p className="text-lg text-muted-foreground">
                {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredTools.length === 0 ? (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                No tools found matching your criteria.
              </div>
            ) : (
              <ErrorBoundary
                fallback={
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      Unable to load tools at this time.
                    </p>
                    <Button
                      onClick={() => window.location.reload()}
                      variant="outline"
                    >
                      Refresh Page
                    </Button>
                  </div>
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </ErrorBoundary>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest AI tools and trends delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Development Error Testing Section */}
      {/* {process.env.NODE_ENV === 'development' && (
        <section className="py-12 bg-muted/50 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Error Handling Test (Development Only)
              </h2>
              <ErrorTestComponent />
            </div>
          </div>
        </section>
      )} */}
    </div>
  );
}