'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ToastProvider } from '@/app/providers/toast-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ToastProvider />
      {children}
    </NextThemesProvider>
  );
}