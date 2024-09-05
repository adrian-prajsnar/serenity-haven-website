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
    <div>
      <h2 className='font-semibold text-2xl text-accent-700 mb-7'>
        Your bookings
      </h2>

      {bookings.length === 0 ? (
        <p className='text-lg'>
          You have no bookings yet. Check out our{' '}
          <a className='underline text-accent-700' href='/cabins'>
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <BookingList bookings={bookings} />
      )}
    </div>
  );
}
