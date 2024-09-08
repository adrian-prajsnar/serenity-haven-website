'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useBooking } from '../_contexts/BookingContext';

export default function BookingReminder() {
  const { range, resetRange } = useBooking();

  if (!range.from || !range.to) return null;

  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-accent-700 text-primary-50 font-medium shadow-lg shadow-slate-900 flex gap-8 items-center text-'>
      <p>
        <span>👋</span> Remember to secure your booking <br /> from{' '}
        <span className='text-accent-400 font-semibold'>
          {format(new Date(range.from), 'MMM dd yyyy')}
        </span>{' '}
        to{' '}
        <span className='text-accent-400 font-semibold'>
          {format(new Date(range.to), 'MMM dd yyyy')}
        </span>
      </p>
      <button className='rounded-full p-1 hover:bg-accent-800 transition-all'>
        <XMarkIcon className='h-6 w-6' onClick={resetRange} />
      </button>
    </div>
  );
}
