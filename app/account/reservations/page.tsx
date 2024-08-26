import { Metadata } from 'next';
import { auth } from '@/app/_lib/auth';
import { getBookings } from '@/app/_lib/data-service';
import { GuestBooking } from '@/app/_types/GuestBooking';
import ReservationList from '@/app/_components/ReservationList';

export const metadata: Metadata = {
  title: 'Reservations',
};

export default async function ReservationsPage() {
  const session = await auth();
  const bookings: GuestBooking[] = await getBookings(
    session?.user?.guestId as number
  );

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className='text-lg'>
          You have no reservations yet. Check out our{' '}
          <a className='underline text-accent-500' href='/cabins'>
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
