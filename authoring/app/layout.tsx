import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@udecode/cn';
import { TooltipProvider } from '@/components/plate-ui/tooltip';

export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Editor POC',
  description: 'Playground for editor for future content tech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider disableHoverableContent delayDuration={500} skipDelayDuration={0}>
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          {children}
        </body>
      </TooltipProvider>
    </html>
  );
}
