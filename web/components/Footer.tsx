import Link from 'next/link';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail,
  MapPin,
  Phone,
  Clock,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from './NewsletterForm';

const footerSections = {
  product: {
    title: 'Product',
    links: [
      { name: 'AI Tools Directory', href: '/tools' },
      { name: 'Categories', href: '/categories' },
      { name: 'Featured Tools', href: '/featured' },
      { name: 'New Arrivals', href: '/new' },
      { name: 'Popular Tools', href: '/popular' },
      { name: 'API Access', href: '/api' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Newsroom', href: '/news' },
      { name: 'Partners', href: '/partners' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Webinars', href: '/webinars' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Help Desk', href: '/support' },
      { name: 'Status', href: '/status' },
      { name: 'Report Issue', href: '/report' },
      { name: 'Feedback', href: '/feedback' },
      { name: 'Service Level', href: '/sla' },
    ],
  },
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/sisovin',
    icon: Github,
    color: 'hover:text-gray-700 dark:hover:text-gray-300',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/NiewinCheung',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/sisovinchieng',
    icon: Linkedin,
    color: 'hover:text-blue-600',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@SisovinChieng',
    icon: Youtube,
    color: 'hover:text-red-500',
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: 'San Francisco, CA 94105',
    href: '#',
  },
  {
    icon: Phone,
    text: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    text: 'hello@aitools.com',
    href: 'mailto:hello@aitools.com',
  },
  {
    icon: Clock,
    text: '24/7 Support Available',
    href: '/support',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-background to-muted/50 border-t border-border/40">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-size-[20px_20px] mask-[radial-gradient(ellipse_at_center,white,transparent_70%)]" />

      <div className="relative container mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand & Newsletter Section */}
            <div className="lg:col-span-4 space-y-6">
              {/* Brand */}
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <Sparkles className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      AI Tools
                    </span>
                    <span className="text-sm text-muted-foreground -mt-1">
                      Explorer Pro
                    </span>
                  </div>
                </Link>
                
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  Discover the most powerful AI productivity tools. Curated, tested, and trusted by professionals worldwide.
                </p>
                
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  🚀 1,000+ Tools Listed
                </Badge>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                {contactInfo.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerSections).map(([key, section]) => (
                <div key={key} className="space-y-4">
                  <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 transform inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get the latest AI tools and insights delivered to your inbox.
                </p>
                
                <NewsletterForm />
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`p-2 rounded-lg bg-muted text-muted-foreground transition-all duration-200 hover:scale-110 hover:bg-muted/80 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© {currentYear} AI Tools Explorer. All rights reserved.</span>
              
              {/* Legal Links */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Made with ❤️ for the AI community</span>
              <Badge variant="outline" className="text-xs">
                v2.1.0
              </Badge>
            </div>
          </div>

          {/* Mobile Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:hidden">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}