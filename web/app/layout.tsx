import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import ResponsiveLayout from '@/components/Responsive';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'AI Productivity Tools Explorer',
    template: '%s | AI Tools Explorer',
  },
  description: 'Discover the most powerful AI productivity tools. Curated, tested, and trusted by professionals worldwide.',
  keywords: ['AI', 'Productivity', 'Tools', 'Development', 'Design', 'Artificial Intelligence'],
  authors: [{ name: 'AI Tools Team' }],
  creator: 'AI Tools Explorer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          <ResponsiveLayout>
            <div className="flex min-h-screen flex-col">
              {children}
            </div>
          </ResponsiveLayout>
        </Providers>
      </body>
    </html>
  );
}