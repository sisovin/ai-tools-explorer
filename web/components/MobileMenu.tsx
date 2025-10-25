'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { AuthButtons } from './AuthButtons';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string }>;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  activePath: string;
}

export function MobileMenu({ isOpen, onClose, navigation, activePath }: MobileMenuProps) {
  const isActivePath = (href: string) => {
    if (href === '/') return activePath === '/';
    return activePath.startsWith(href);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-in fade-in-0"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-full bg-background border-l border-border shadow-lg z-50 animate-in slide-in-from-right-80 duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className={cn(
                        "px-3 py-2 rounded-lg text-base font-medium",
                        isActivePath(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70"
                      )}>
                        {item.name}
                      </div>
                      <ul className="ml-4 space-y-1 border-l border-border pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              href={dropdownItem.href}
                              onClick={onClose}
                              className={cn(
                                "block px-3 py-2 rounded-lg text-sm transition-colors",
                                isActivePath(dropdownItem.href)
                                  ? "text-primary bg-primary/10"
                                  : "text-foreground/60 hover:text-foreground hover:bg-accent"
                              )}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-base font-medium transition-colors",
                        isActivePath(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Section */}
          <div className="p-6 border-t border-border">
            <div className="space-y-3">
              <AuthButtons />
            </div>
            
            {/* Footer Info */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                AI Productivity Tools Explorer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}