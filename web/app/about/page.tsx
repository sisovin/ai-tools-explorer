import Link from 'next/link';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Heart,
  Sparkles,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { teamMembers, milestones, values, stats } from '@/lib/about-data';

export const metadata = {
  title: 'About Us - AI Tools Explorer',
  description: 'Learn about our mission to democratize AI tool discovery and meet the team behind AI Tools Explorer.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-size-[40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              🤖 About AI Tools Explorer
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Democratizing AI for{' '}
              <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Everyone
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We&apos;re on a mission to make AI tools discoverable, understandable, and accessible 
              for professionals, teams, and enthusiasts worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/team" className="gap-2">
                  Meet Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe that the right AI tools can transform how we work, create, and solve problems. 
                Our platform helps you find exactly what you need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/40 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    Simplify AI tool discovery and help professionals leverage artificial intelligence effectively in their work.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    Create a world where anyone can find and use the perfect AI tools to enhance their creativity and productivity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Our Promise</h3>
                  <p className="text-muted-foreground text-sm">
                    Unbiased, comprehensive, and up-to-date information about AI tools with honest reviews and comparisons.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do at AI Tools Explorer
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border/40 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl shrink-0">{value.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate individuals dedicated to making AI tools accessible and useful for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(0, 3).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/about/team" className="gap-2">
                  View Full Team
                  <Users className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                From startup to trusted AI tools platform
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border/40" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="border-border/40 hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="text-2xl">{milestone.icon}</div>
                            <Badge variant="outline" className="text-xs">
                              {milestone.year}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ready to Explore AI Tools?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of professionals already using AI Tools Explorer to discover and implement the perfect AI solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/tools" className="gap-2">
                      Browse Tools
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}