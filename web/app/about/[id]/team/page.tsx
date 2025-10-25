import { TeamMemberCard } from '@/components/TeamMemberCard';
import { teamMembers } from '@/lib/about-data';

export const metadata = {
  title: 'Our Team - AI Tools Explorer',
  description: 'Meet the passionate team behind AI Tools Explorer, dedicated to making AI tools accessible for everyone.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals working together to democratize AI tools and help professionals 
              leverage artificial intelligence effectively.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="text-center mt-20">
            <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-muted-foreground mb-6">
                We&apos;re always looking for passionate individuals who want to make a difference 
                in the AI tools ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@aitools.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}