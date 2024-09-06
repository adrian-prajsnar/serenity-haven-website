import Image from 'next/image';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import { Tables } from '../_types/database.types';
import TextExpander from './TextExpander';

type CabinProps = {
  cabin: Tables<'cabins'>;
};

export default function Cabin({ cabin }: CabinProps) {
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-400 py-3 px-10 mb-24 rounded-r-lg'>
      <div className='relative scale-[1.15] -translate-x-3'>
        <Image
          src={image ?? ''}
          fill
          className='object-cover rounded-lg'
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className='text-accent-700 font-semibold text-7xl mb-5 translate-x-[-254px] bg-primary-50 opacity-90 p-6 pb-1 w-[150%] rounded-l-lg'>
          Cabin {name}
        </h3>

        <p className='text-lg text-primary-700 mb-10'>
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className='flex flex-col gap-4 mb-7'>
          <li className='flex gap-3 items-center'>
            <UsersIcon className='h-5 w-5 text-primary-500' />
            <span className='text-lg'>
              For up to <span className='font-semibold'>{maxCapacity}</span>{' '}
              guests
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <MapPinIcon className='h-5 w-5 text-primary-500' />
            <span className='text-lg'>
              Located in the heart of the{' '}
              <span className='font-semibold'>Dolomites</span> (Italy)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <EyeSlashIcon className='h-5 w-5 text-primary-500' />
            <span className='text-lg'>
              Privacy <span className='font-semibold'>100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
