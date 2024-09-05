import { Suspense } from 'react';
import { getCabin, getCabins } from '@/app/_lib/data-service';
import Cabin from '@/app/_components/Cabin';
import ContentLoader from '@/app/_components/ContentLoader';
import Booking from '@/app/_components/Bookings';

type CabinPageProps = {
  params: {
    cabinId: number;
  };
};

export async function generateMetadata({ params }: CabinPageProps) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map(cabin => ({
    cabinId: String(cabin.id),
  }));
}

export default async function CabinPage({ params }: CabinPageProps) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Cabin cabin={cabin} />

      <div>
        <h2 className='text-5xl font-semibold text-center mb-10 text-accent-700'>
          Book {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<ContentLoader content='booking' />}>
          <Booking cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
