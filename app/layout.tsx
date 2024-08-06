import { ReactNode } from 'react';
import '@/app/_styles/globals.css';

import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

export const metadata = {
  title: 'The Wild Oasis',
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
