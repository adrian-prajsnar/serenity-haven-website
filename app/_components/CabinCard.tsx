import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Tables } from '../_types/database.types';

export default function CabinCard({ cabin }: { cabin: Tables<'cabins'> }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className='flex flex-wrap border-primary-400 border rounded-lg overflow-hidden'>
      <div className='flex-1 relative min-w-48 min-h-48 overflow-hidden'>
        <Image
          src={image || ''}
          fill
          alt={`Cabin ${name}`}
          className='object-cover border-r border-primary-400'
        />
      </div>

      <div className='flex flex-grow flex-col'>
        <div className='pt-5 pb-4 px-7'>
          <h3 className='text-accent-700 font-semibold text-lg sm:text-xl mb-3'>
            Cabin {name}
          </h3>

          <div className='flex gap-3 items-center mb-2'>
            <FaUsers className='h-4 w-4 sm:h-5 sm:w-5 text-primary-500' />
            <p className='text-sm sm:text-base'>
              Perfect for <span className='font-semibold'>{maxCapacity}</span>{' '}
              guests
            </p>
          </div>

          <p className='flex gap-3 justify-end items-baseline'>
            {discount && discount > 0 ? (
              <>
                <span className='text-lg sm:text-xl text-accent-700 font-medium'>
                  ${regularPrice && regularPrice - discount}
                </span>
                <span className='text-sm sm:text-base line-through text-primary-400'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-lg sm:text-xl text-accent-700 font-medium'>
                ${regularPrice}
              </span>
            )}
            <span className='text-sm sm:text-base text-primary-600'>
              / night
            </span>
          </p>
        </div>

        <div className='mt-auto text-right'>
          <Link
            href={`/cabins/${id}`}
            className='text-sm sm:text-base border-l border-t rounded-tl-lg border-primary-400 py-2 px-4 sm:py-4 sm:px-6 inline-block hover:bg-accent-700 transition-all hover:text-primary-50'
          >
            Details & bookings &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
