import { Metadata } from 'next';
import { Suspense } from 'react';
import Filter from '../_components/Filter';
import ContentLoader from '../_components/ContentLoader';
import CabinList from '../_components/CabinList';
import BookingReminder from '../_components/BookingReminder';

export const metadata: Metadata = {
  title: 'Cabins',
};

type CabinsPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CabinsPage({ searchParams }: CabinsPageProps) {
  const filter: string = (searchParams?.capacity as string) ?? 'all';

  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-700 font-medium'>
        Our Luxury Cabins
      </h1>
      <p className='text-primary-700 text-lg mb-10'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className='flex justify-end mb-8'>
        <Filter />
      </div>

      <Suspense fallback={<ContentLoader content='cabins' />} key={filter}>
        <CabinList filter={filter} />
        <BookingReminder />
      </Suspense>
    </div>
  );
}
