import Link from 'next/link';
import { Metadata } from 'next';
import { auth } from '@/app/_lib/auth';
import { getBookings } from '@/app/_lib/data-service';
import { GuestBooking } from '@/app/_types/GuestBooking';
import BookingList from '@/app/_components/BookingList';

export const metadata: Metadata = {
  title: 'Bookings',
};

export default async function BookingsPage() {
  const session = await auth();
  const bookings: GuestBooking[] = await getBookings(
    session?.user?.guestId as number
  );

  return (
    <>
      <h2 className='font-semibold text-xl text-accent-700 mb-7'>
        Your bookings
      </h2>

      {bookings.length === 0 ? (
        <p>
          You don’t have any bookings at the moment. Explore our{' '}
          <Link
            className='inline-block text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
            href='/cabins'
          >
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <BookingList bookings={bookings} />
      )}
    </>
  );
}
