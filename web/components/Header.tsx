'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { AuthButtons } from './AuthButtons';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'AI Tools', href: '/services/ai-tools' },
      { name: 'Consulting', href: '/services/consulting' },
      { name: 'Development', href: '/services/development' },
      { name: 'Training', href: '/services/training' },
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo + Branding (Left) */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <span className="text-lg font-bold text-primary-foreground">AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  AI Tools
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  Explorer
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                          isActivePath(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-foreground/70 hover:text-foreground hover:bg-accent"
                        )}
                      >
                        {item.name}
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )} />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-border bg-background/95 backdrop-blur shadow-lg py-2 z-50 animate-in fade-in-0 zoom-in-95">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
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

          {/* Right Side - Auth + Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <AuthButtons />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        activePath={pathname}
      />
    </header>
  );
}