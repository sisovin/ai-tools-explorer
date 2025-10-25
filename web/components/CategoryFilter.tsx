'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex space-x-2 pb-1 overflow-x-auto">
      {categories.map((category) => {
        const displayName = category === 'All Tools' ? 'All Tools' : 
                          category.replace('AI ', '').split(' ')[0];
        const isSelected = selectedCategory === category;
        
        return (
          <Button
            key={category}
            variant={isSelected ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={cn(
              "whitespace-nowrap",
              isSelected && "bg-primary text-primary-foreground"
            )}
          >
            {displayName}
          </Button>
        );
      })}
    </div>
  );
}