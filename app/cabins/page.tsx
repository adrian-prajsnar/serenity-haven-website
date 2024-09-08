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
        Our Elegant Retreats
      </h1>
      <p className='text-primary-700 text-lg mb-10'>
        Discover the perfect blend of comfort and elegance in our cabins,
        situated in the breathtaking Tatry Mountains of Poland. Enjoy stunning
        mountain vistas, serene forest explorations, and relaxing evenings in
        your private hot tub under the stars. Your personal retreat awaits for a
        tranquil and memorable escape.
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
