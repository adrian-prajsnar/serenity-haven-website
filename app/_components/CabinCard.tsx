import Image from 'next/image';
import Link from 'next/link';
import { UsersIcon } from '@heroicons/react/24/solid';
import { Tables } from '../_types/database.types';

export default function CabinCard({ cabin }: { cabin: Tables<'cabins'> }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className='flex border-primary-400 border rounded-lg'>
      <div className='flex-1 relative'>
        <Image
          src={image || ''}
          fill
          alt={`Cabin ${name}`}
          className='object-cover border-r border-primary-400 rounded-l-lg'
        />
      </div>

      <div className='flex-grow'>
        <div className='pt-5 pb-4 px-7'>
          <h3 className='text-accent-700 font-semibold text-xl mb-3'>
            Cabin {name}
          </h3>

          <div className='flex gap-3 items-center mb-2'>
            <UsersIcon className='h-5 w-5 text-primary-500' />
            <p>
              Perfect for <span className='font-semibold'>{maxCapacity}</span>{' '}
              guests
            </p>
          </div>

          <p className='flex gap-3 justify-end items-baseline'>
            {discount && discount > 0 ? (
              <>
                <span className='text-xl text-accent-700 font-medium'>
                  ${regularPrice && regularPrice - discount}
                </span>
                <span className='line-through text-primary-400'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-xl text-accent-700 font-medium'>
                ${regularPrice}
              </span>
            )}
            <span className='text-primary-600'>/ night</span>
          </p>
        </div>

        <div className='border-t border-t-primary-400 text-right'>
          <Link
            href={`/cabins/${id}`}
            className='border-l border-primary-400 py-4 px-6 inline-block rounded-br-lg hover:bg-accent-700 transition-all hover:text-primary-50'
          >
            Details & bookings &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
