import { ReactNode } from 'react';
import { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Josefin_Sans } from 'next/font/google';
import { ReservationProvider } from './_contexts/ReservationContext';
import '@/app/_styles/globals.css';
import Header from './_components/Header';

export const metadata: Metadata = {
  title: {
    template: 'The Wild Oasis # %s',
    default: 'The Wild Oasis',
  },
  description:
    'Luxury hut hotel in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.',
};

const josefin: NextFont = Josefin_Sans({
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
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
