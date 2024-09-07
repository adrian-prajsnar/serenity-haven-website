'use client';

import { useTransition } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Tables } from '../_types/database.types';
import { GuestBooking } from '../_types/GuestBooking';
import SpinnerMini from './SpinnerMini';

type DeleteBookingProps = {
  bookingId: Tables<'bookings'>['id'];
  onDelete: (bookingId: GuestBooking['id']) => Promise<void>;
};

export default function DeleteBooking({
  bookingId,
  onDelete,
}: DeleteBookingProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this booking?'))
      startTransition(() => onDelete(bookingId));
  };

  return (
    <button
      onClick={handleDelete}
      className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-600 flex-grow px-3 rounded-br-lg hover:bg-accent-700 transition-colors hover:text-primary-50'
    >
      {!isPending ? (
        <>
          <TrashIcon className='h-5 w-5 text-primary-500 group-hover:text-primary-200 transition-colors' />
          <span className='mt-1'>Delete</span>
        </>
      ) : (
        <span className='mx-auto'>
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}
