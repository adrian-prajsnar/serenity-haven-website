import { getCabins } from '@/app/_lib/data-service';
import { Tables } from '../_types/database.types';

import CabinCard from '@/app/_components/CabinCard';

export default async function CabinList({ filter }: { filter: string }) {
  const cabins: Tables<'cabins'>[] = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins: Tables<'cabins'>[] = [];

  switch (filter) {
    case 'all':
      displayedCabins = cabins;
      break;
    case 'small':
      displayedCabins = cabins.filter(
        cabin => cabin.maxCapacity !== null && cabin.maxCapacity <= 3
      );
      break;
    case 'medium':
      displayedCabins = cabins.filter(
        cabin =>
          cabin.maxCapacity !== null &&
          cabin.maxCapacity >= 4 &&
          cabin.maxCapacity <= 7
      );
      break;
    case 'large':
      displayedCabins = cabins.filter(
        cabin => cabin.maxCapacity !== null && cabin.maxCapacity >= 8
      );
      break;
  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {displayedCabins.map(cabin => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
