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
        <div className='mb-5 translate-x-[-254px] bg-primary-50 opacity-90 p-6 pb-[1.125rem] w-[150%] rounded-l-lg'>
          <h3 className='text-accent-100 font-bold text-7xl [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-accent-900'>
            Cabin {name}
          </h3>
        </div>

        <p className='text-lg text-primary-700 mb-10'>
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className='flex flex-col gap-4 mb-7'>
          <li className='flex gap-3 items-center'>
            <UsersIcon className='h-5 w-5 text-primary-500' />
            <span className='text-lg'>
              Perfect for <span className='font-semibold'>{maxCapacity}</span>{' '}
              guests
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <MapPinIcon className='h-5 w-5 text-primary-500' />
            <span className='text-lg'>
              Situated in the heart of the{' '}
              <span className='font-semibold'>Tatry Mountains</span> (Poland)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <EyeSlashIcon className='h-5 w-5 text-primary-500' />
            <span className='text-lg'>
              Absolute <span className='font-semibold'>privacy</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
