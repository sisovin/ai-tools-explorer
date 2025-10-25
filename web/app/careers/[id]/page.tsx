import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Calendar,
  Briefcase,
  GraduationCap,
  DollarSign,
  CheckCircle,
  PlayCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { jobPositions, jobLocations } from '@/lib/careers-data';

interface JobPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: JobPageProps) {
  const { id } = await params;
  const job = jobPositions.find(j => j.id === id);

  if (!job) {
    return {
      title: 'Job Not Found - Careers',
    };
  }

  return {
    title: `${job.title} - Careers - AI Tools Explorer`,
    description: job.description,
  };
}

export async function generateStaticParams() {
  return jobPositions.map((job) => ({
    id: job.id,
  }));
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  const job = jobPositions.find(j => j.id === id);

  if (!job) {
    notFound();
  }

  const location = jobLocations.find(l => l.id === job.location);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'entry': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'mid': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'senior': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'lead': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'part-time': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'contract': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'internship': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/careers" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Job Header */}
          <Card className="border-border/40 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-sm">
                      {job.department.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {job.department}
                      </Badge>
                      <h1 className="text-3xl font-bold text-foreground">
                        {job.title}
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge className={getExperienceColor(job.experience)}>
                      {job.experience.charAt(0).toUpperCase() + job.experience.slice(1)} Level
                    </Badge>
                    <Badge className={getTypeColor(job.type)}>
                      {job.type.replace('-', ' ').toUpperCase()}
                    </Badge>
                    {job.salaryRange && (
                      <Badge variant="outline" className="gap-1">
                        <DollarSign className="h-3 w-3" />
                        ${job.salaryRange.min.toLocaleString()} - ${job.salaryRange.max.toLocaleString()}
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{location?.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Posted {formatDate(job.postedDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-500">
                      <Calendar className="h-4 w-4" />
                      <span>Apply by {formatDate(job.applicationDeadline)}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:text-right">
                  <Button size="lg" asChild className="w-full lg:w-auto mb-3">
                    <a href={`mailto:careers@aitools.com?subject=Application for ${job.title} (${job.id})`}>
                      Apply Now
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    {job.applicationProcess.length} step process
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Job Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Key Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Process */}
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <PlayCircle className="h-4 w-4" />
                    Application Process
                  </h3>
                  <ol className="space-y-3">
                    {job.applicationProcess.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="border-border/40">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Benefits & Perks
                  </h3>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Apply */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Ready to Apply?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send your resume and cover letter to our careers team.
                  </p>
                  <Button asChild className="w-full">
                    <a href={`mailto:careers@aitools.com?subject=Application for ${job.title} (${job.id})`}>
                      Apply via Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}