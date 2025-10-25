'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TeamMember } from '@/lib/about-data';

interface TeamMemberCardProps {
  member: TeamMember;
  compact?: boolean;
}

export function TeamMemberCard({ member, compact = false }: TeamMemberCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/40 hover:border-primary/30">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border">
              <Image
                src={member.image}
                alt={`${member.name} avatar`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
          </div>

          {/* Basic Info */}
          <h3 className="font-semibold text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-primary text-sm font-medium mb-3">
            {member.role}
          </p>

          {!compact && (
            <>
              {/* Bio */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </>
          )}

          {/* Social Links & Action */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex gap-2 flex-1">
              {member.social.twitter && (
                <Link
                  href={member.social.twitter}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </Link>
              )}
              {member.social.linkedin && (
                <Link
                  href={member.social.linkedin}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </Link>
              )}
              {member.social.github && (
                <Link
                  href={member.social.github}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </Link>
              )}
            </div>

            <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={`/about/${member.id}`} className="gap-1">
                View
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}