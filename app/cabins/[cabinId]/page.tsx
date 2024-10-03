import { Suspense } from 'react';
import { getCabin, getCabins } from '@/app/_lib/data-service';
import Cabin from '@/app/_components/Cabin';
import ContentLoader from '@/app/_components/ContentLoader';
import Booking from '@/app/_components/Booking';

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
    <div className='max-w-6xl mx-auto lg:mt-8'>
      <Cabin cabin={cabin} />

      <div>
        <h2 className='text-3xl sm:text-4xl font-semibold text-center mb-5 sm:mb-10 text-accent-700'>
          Book <span className='font-extrabold'>{cabin.name}</span> now. Pay
          when you arrive.
        </h2>

        <Suspense fallback={<ContentLoader content='booking' />}>
          <Booking cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
