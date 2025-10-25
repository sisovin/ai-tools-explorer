import React from 'react';
import Image from 'next/image';
import { Tool } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-border/40">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Image
            src={tool.logo_url}
            alt={tool.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-lg object-cover shrink-0"
          />
          <div className="flex-1 min-w-0 space-y-2">
            <h3 className="font-semibold text-lg text-foreground truncate">
              {tool.name}
            </h3>
            <p className="text-sm text-primary font-medium">
              {tool.category}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {tool.description}
            </p>
            <a
              href={tool.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              Visit Website
              <ExternalLink className="ml-1 w-3 h-3" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}