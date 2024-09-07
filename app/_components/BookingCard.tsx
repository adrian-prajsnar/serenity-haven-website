import Image from 'next/image';
import Link from 'next/link';
import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { GuestBooking } from '../_types/GuestBooking';
import DeleteBooking from '@/app/_components/DeleteBooking';

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

type BookingCardProps = {
  booking: GuestBooking;
  onDelete: (bookingId: GuestBooking['id']) => Promise<void>;
};

export default function BookingCard({ booking, onDelete }: BookingCardProps) {
  return (
    <div className='flex border border-primary-400 rounded-lg'>
      <div className='relative h-32 aspect-square'>
        <Image
          src={booking.cabins?.image ?? ''}
          alt={`Cabin ${booking.cabins?.name}`}
          fill
          className='object-cover border-r border-primary-400 rounded-l-lg'
        />
      </div>

      <div className='flex-grow px-6 py-3 flex flex-col'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold'>
            {booking.numNights} nights in Cabin {booking.cabins?.name}
          </h3>
          {isPast(new Date(booking.startDate)) ? (
            <span className='bg-yellow-700 text-primary-50 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-lg'>
              past
            </span>
          ) : (
            <span className='bg-green-700 text-primary-50 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-lg'>
              upcoming
            </span>
          )}
        </div>

        <p className='text-lg text-primary-600'>
          {format(new Date(booking.startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(booking.startDate))
            ? 'Today'
            : formatDistanceFromNow(booking.startDate)}
          ) &mdash; {format(new Date(booking.endDate), 'EEE, MMM dd yyyy')}
        </p>

        <div className='flex gap-5 mt-auto items-baseline'>
          <p className='text-xl font-semibold text-accent-700'>
            ${booking.totalPrice}
          </p>
          <p className='text-primary-600'>&bull;</p>
          <p className='text-lg text-primary-600'>
            {booking.numGuests} guest{booking.numGuests > 1 && 's'}
          </p>
          <p className='ml-auto text-sm text-primary-500'>
            Booked {format(new Date(booking.created_at), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>
      </div>

      <div className='flex flex-col border-l border-primary-400 w-[100px]'>
        {!isPast(booking.startDate) && (
          <>
            <Link
              href={`/account/bookings/update/${booking.id}`}
              className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-600 border-b border-primary-400 flex-grow px-3 rounded-tr-lg hover:bg-accent-700 transition-colors hover:text-primary-50'
            >
              <PencilSquareIcon className='h-5 w-5 text-primary-500 group-hover:text-primary-200 transition-colors' />
              <span className='mt-1'>Update</span>
            </Link>
            <DeleteBooking bookingId={booking.id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}
