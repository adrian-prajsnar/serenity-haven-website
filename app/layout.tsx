import { ReactNode } from 'react';
import { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Raleway } from 'next/font/google';
import { BookingProvider } from './_contexts/BookingContext';
import '@/app/_styles/globals.css';
import Header from './_components/Header';
import Navigation from './_components/Navigation';

export const metadata: Metadata = {
  title: {
    template: 'Serenity Haven | %s',
    default: 'Serenity Haven | Your perfect Escape',
  },
  description:
    'Luxury hut hotel in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.',
};

const raleway: NextFont = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`${raleway.className} antialiased bg-primary-0 text-primary-700 text-sm sm:text-base min-h-screen flex flex-col relative`}
      >
        <Header>
          <Navigation />
        </Header>
        <div className='flex-1 px-4 py-6 sm:px-8 sm:py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            <BookingProvider>{children}</BookingProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
