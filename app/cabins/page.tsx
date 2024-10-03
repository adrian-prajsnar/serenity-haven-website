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
      <h1 className='text-2xl sm:text-3xl mb-5 text-accent-700 font-semibold text-center sm:text-left'>
        Our Elegant Retreats
      </h1>
      <p className='mb-10 text-sm sm:text-base'>
        Discover the perfect blend of comfort, elegance, and modern luxury in
        our carefully crafted cabins, nestled in the breathtaking Tatry
        Mountains of Poland. Immerse yourself in the stunning mountain vistas,
        embark on serene explorations through the peaceful forests, and unwind
        with relaxing evenings in your private hot tub under the vast, starlit
        sky. Your personal retreat awaits, offering the ideal setting for a
        tranquil, rejuvenating, and unforgettable escape from the everyday.
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
