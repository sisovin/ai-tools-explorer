'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  FileText,
  Search,
  Filter,
  Calendar,
  ArrowRight,
  Shield,
  Users,
  Eye,
  Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { termsSections, getAllCategories } from '@/lib/terms-data';

const ITEMS_PER_PAGE = 6;

export function TermsClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => getAllCategories(), []);

  // Filter sections based on criteria
  const filteredSections = useMemo(() => {
    return termsSections.filter(section => {
      const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => a.order - b.order);
  }, [selectedCategory, searchQuery]);

  // Paginate sections
  const totalPages = Math.ceil(filteredSections.length / ITEMS_PER_PAGE);
  const paginatedSections = filteredSections.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'legal': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'usage': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'privacy': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'compliance': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'legal': return <Scale className="h-4 w-4" />;
      case 'usage': return <Users className="h-4 w-4" />;
      case 'privacy': return <Eye className="h-4 w-4" />;
      case 'compliance': return <Shield className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using AI Tools Explorer.
            These terms govern your use of our platform and services.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Navigation & Filters */}
          <div className="lg:w-1/4">
            <Card className="border-border/40 sticky top-8">
              <CardContent className="p-6">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search terms..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Category
                  </h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(category)}
                            <span className="capitalize">{category}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quick Navigation */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Quick Navigation</h3>
                  <div className="space-y-2">
                    {termsSections.slice(0, 5).map((section) => (
                      <Link
                        key={section.id}
                        href={`/terms/${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="w-full gap-2"
                  disabled={selectedCategory === 'all' && searchQuery === ''}
                >
                  <Filter className="h-4 w-4" />
                  Reset Filters
                </Button>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-border/40">
                  <h3 className="font-semibold text-foreground mb-3">Questions?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you have questions about these terms, please contact our legal team.
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href="mailto:legal@aitools.com">
                      Contact Legal
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Terms Sections */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                {filteredSections.length} {filteredSections.length === 1 ? 'Section' : 'Sections'}
              </h2>
              <div className="text-sm text-muted-foreground">
                Last updated: {formatDate(termsSections[0]?.lastUpdated || new Date().toISOString())}
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-6 mb-8">
              {paginatedSections.map((section) => (
                <Card key={section.id} className="border-border/40 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(section.category)}
                          <Badge className={getCategoryColor(section.category)}>
                            {section.category.charAt(0).toUpperCase() + section.category.slice(1)}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">
                          <Link
                            href={`/terms/${section.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            {section.title}
                          </Link>
                        </CardTitle>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {section.summary}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Updated {formatDate(section.lastUpdated)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          <span>Section {section.order}</span>
                        </div>
                      </div>
                      <Button asChild size="sm">
                        <Link href={`/terms/${section.id}`} className="gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredSections.length === 0 && (
              <Card className="border-border/40">
                <CardContent className="p-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No sections found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search terms.
                  </p>
                  <Button onClick={resetFilters}>
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Footer Note */}
            <Card className="border-border/40 mt-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you have any questions about these terms and conditions, please don&apos;t hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" asChild>
                      <a href="mailto:legal@aitools.com">Contact Legal Team</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/privacy">Privacy Policy</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}