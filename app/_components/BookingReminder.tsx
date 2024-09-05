'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useBooking } from '../_contexts/BookingContext';

export default function BookingReminder() {
  const { range, resetRange } = useBooking();

  if (!range.from || !range.to) return null;

  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-accent-700 text-primary-50 font-semibold shadow-xl shadow-slate-900 flex gap-8 items-center'>
      <p>
        <span>👋</span> Don&apos;f forget to book your dates <br /> from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
        {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button className='rounded-full p-1 hover:bg-accent-800 transition-all'>
        <XMarkIcon className='h-5 w-5' onClick={resetRange} />
      </button>
    </div>
  );
}
