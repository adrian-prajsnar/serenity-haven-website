import { ReactNode } from 'react';
import { Metadata } from 'next';
import '@/app/_styles/globals.css';

import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

export const metadata: Metadata = {
  title: {
    template: 'The Wild Oasis # %s',
    default: 'The Wild Oasis',
  },
  description:
    'Luxury hut hotel in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-primary-950 text-primary-100 min-h-screen'>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis.</footer>
      </body>
    </html>
  );
}
