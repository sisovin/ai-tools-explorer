import Link from 'next/link';
import { ArrowRight, Users, Target, Heart, Sparkles, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/about-data';

export const metadata = {
  title: 'Our Team - AI Tools Explorer',
  description: 'Meet the passionate team behind AI Tools Explorer, dedicated to making AI tools accessible for everyone.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-size-[40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              👥 Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              The People Behind{' '}
              <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                AI Tools Explorer
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Meet the passionate individuals working together to democratize AI tools
              and help professionals leverage artificial intelligence effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/about" className="gap-2">
                  About Our Mission
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

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{teamMembers.length}</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Tools Discovered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member) => (
                <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="relative mx-auto mb-4">
                      <Avatar className="w-24 h-24 mx-auto">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-lg font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                        {member.role === 'CEO & Founder' && <Target className="h-4 w-4" />}
                        {member.role === 'CTO' && <Sparkles className="h-4 w-4" />}
                        {member.role === 'Head of Design' && <Heart className="h-4 w-4" />}
                        {member.role === 'Lead Developer' && <Globe className="h-4 w-4" />}
                        {member.role === 'Product Manager' && <Users className="h-4 w-4" />}
                        {member.role === 'AI Researcher' && <Sparkles className="h-4 w-4" />}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-center gap-3">
                      {member.social?.twitter && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter profile`}>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                        </Button>
                      )}
                      {member.social?.linkedin && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn profile`}>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </Button>
                      )}
                      {member.social?.github && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub profile`}>
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </Button>
                      )}
                    </div>
                    <Button variant="outline" size="sm" asChild className="mt-4 w-full">
                      <Link href={`/about/${member.id}`}>
                        View Profile
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Culture */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Culture</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We believe in fostering an environment where innovation thrives, collaboration is key,
                  and every voice matters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Innovation First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We encourage creative thinking and embrace cutting-edge technologies to solve complex problems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Collaborative Spirit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We work together across disciplines, sharing knowledge and supporting each other&apos;s growth.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>User-Centric</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Everything we do is focused on creating value for our users and the broader AI community.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Join Team CTA */}
            <Card className="bg-linear-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Want to Join Our Team?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    We&apos;re always looking for passionate individuals who want to make a difference
                    in the AI tools ecosystem. Join us in our mission to democratize AI.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="mailto:careers@aitools.com" className="gap-2">
                        <Mail className="h-4 w-4" />
                        View Open Positions
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}