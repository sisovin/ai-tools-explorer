import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/lib/about-data';

interface TeamMemberPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TeamMemberPageProps) {
  const { id } = await params;
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return {
      title: 'Team Member Not Found - AI Tools Explorer',
    };
  }

  return {
    title: `${member.name} - ${member.role} - AI Tools Explorer`,
    description: member.bio,
  };
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/about/team" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Team
            </Link>
          </Button>

          {/* Member Profile */}
          <Card className="border-border/40">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="lg:w-1/3 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-border">
                      <Image
                        src={member.image}
                        alt={`${member.name} avatar`}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
                  </div>

                  {/* Basic Info */}
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h1>
                  <p className="text-primary text-lg font-semibold mb-4">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 mb-6">
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </Link>
                    )}
                    <Link
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@aitools.com`}
                      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                  </div>

                  {/* Skills */}
                  <div className="w-full">
                    <h3 className="font-semibold text-foreground mb-3">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:w-2/3 space-y-6">
                  {/* Bio */}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">About</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {member.bio}
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-border/20">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">Focus Areas</h3>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          {member.skills.slice(0, 4).map((skill, index) => (
                            <li key={index}>• {skill}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-border/20">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">Get In Touch</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Interested in collaborating or learning more about my work?
                        </p>
                        <Button size="sm" asChild>
                          <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@aitools.com`}>
                            Send Email
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Fun Fact */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">Fun Fact</h3>
                      <p className="text-muted-foreground text-sm">
                        {member.role.includes('CEO') && "Loves hiking and has climbed mountains on three continents."}
                        {member.role.includes('Product') && "Avid reader and has a personal library of 500+ books."}
                        {member.role.includes('Developer') && "Open source contributor to 50+ projects."}
                        {member.role.includes('Research') && "Published 15+ research papers on AI and NLP."}
                        {member.role.includes('Design') && "Award-winning photographer in spare time."}
                        {member.role.includes('Community') && "Organizes the largest AI meetup in the city."}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild>
              <Link href="/about/team">
                Back to Team
              </Link>
            </Button>
            <Button asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}