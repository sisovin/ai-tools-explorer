import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  FileText,
  Scale,
  Users,
  Eye,
  Shield,
  ChevronRight,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { termsSections, getTermsSectionById } from '@/lib/terms-data';

interface TermsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TermsPageProps) {
  const { id } = await params;
  const section = getTermsSectionById(id);

  if (!section) {
    return {
      title: 'Section Not Found - Terms & Conditions',
    };
  }

  return {
    title: `${section.title} - Terms & Conditions - AI Tools Explorer`,
    description: section.summary,
    keywords: `terms, conditions, ${section.category}, ${section.title.toLowerCase()}`,
  };
}

export async function generateStaticParams() {
  return termsSections.map((section) => ({
    id: section.id,
  }));
}

export default async function TermsDetailPage({ params }: TermsPageProps) {
  const { id } = await params;
  const section = getTermsSectionById(id);

  if (!section) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
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
      case 'legal': return <Scale className="h-5 w-5" />;
      case 'usage': return <Users className="h-5 w-5" />;
      case 'privacy': return <Eye className="h-5 w-5" />;
      case 'compliance': return <Shield className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  // Get related sections (same category, excluding current)
  const relatedSections = termsSections
    .filter(s => s.category === section.category && s.id !== section.id)
    .slice(0, 3);

  // Get next and previous sections
  const currentIndex = termsSections.findIndex(s => s.id === section.id);
  const prevSection = currentIndex > 0 ? termsSections[currentIndex - 1] : null;
  const nextSection = currentIndex < termsSections.length - 1 ? termsSections[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/terms">Terms & Conditions</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{section.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/terms" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Terms & Conditions
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <Card className="border-border/40 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-white">
                  {getCategoryIcon(section.category)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={getCategoryColor(section.category)}>
                      {section.category.charAt(0).toUpperCase() + section.category.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Section {section.order}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-foreground mb-3">
                    {section.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: {formatDate(section.lastUpdated)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Category: {section.category}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Section Content */}
              <Card className="border-border/40 mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {section.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              {(prevSection || nextSection) && (
                <Card className="border-border/40 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      {prevSection ? (
                        <Button variant="outline" asChild className="gap-2">
                          <Link href={`/terms/${prevSection.id}`}>
                            <ArrowLeft className="h-4 w-4" />
                            {prevSection.title}
                          </Link>
                        </Button>
                      ) : (
                        <div />
                      )}

                      {nextSection ? (
                        <Button variant="outline" asChild className="gap-2">
                          <Link href={`/terms/${nextSection.id}`}>
                            {nextSection.title}
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <div />
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full">
                    <a href="mailto:legal@aitools.com?subject=Question about Terms: ${section.title}">
                      Ask a Question
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/terms">View All Terms</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/privacy">Privacy Policy</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Sections */}
              {relatedSections.length > 0 && (
                <Card className="border-border/40">
                  <CardHeader>
                    <CardTitle className="text-lg">Related Sections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {relatedSections.map((relatedSection) => (
                        <Link
                          key={relatedSection.id}
                          href={`/terms/${relatedSection.id}`}
                          className="block p-3 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded bg-muted flex items-center justify-center shrink-0 mt-0.5">
                              {getCategoryIcon(relatedSection.category)}
                            </div>
                            <div>
                              <h4 className="font-medium text-sm text-foreground mb-1">
                                {relatedSection.title}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {relatedSection.summary}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Information */}
              <Card className="border-border/40">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about this section or our terms in general?
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Email:</strong> legal@aitools.com
                    </div>
                    <div>
                      <strong>Subject:</strong> Question about {section.title}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}