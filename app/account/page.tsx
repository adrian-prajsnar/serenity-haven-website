import Link from 'next/link';
import { Metadata } from 'next';
import { compareAsc, compareDesc, isAfter, isBefore, parseISO } from 'date-fns';
import { auth } from '../_lib/auth';
import { getBookings } from '../_lib/data-service';
import BookingCard from '../_components/BookingCard';

export const metadata: Metadata = {
  title: 'Guest area',
};

export default async function AccountPage() {
  const session = await auth();
  const firstName: string = session?.user?.name?.split(' ').at(0) ?? '';
  const bookings = await getBookings(session?.user?.guestId as number);

  const upcomingBooking =
    bookings
      .filter(booking => isAfter(parseISO(booking.startDate), new Date()))
      .sort((a, b) => compareAsc(parseISO(a.startDate), parseISO(b.startDate)))
      .at(0) ?? null;

  const lastBooking =
    bookings
      .filter(booking => isBefore(parseISO(booking.endDate), new Date()))
      .sort((a, b) => compareDesc(parseISO(a.endDate), parseISO(b.endDate)))
      .at(0) ?? null;

  return (
    <div>
      <h2 className='font-semibold text-xl text-accent-700 mb-7'>
        Welcome, {firstName}
      </h2>

      <div className='flex flex-col gap-16'>
        {upcomingBooking ? (
          <section>
            <h3 className='text-lg'>Upcoming stay</h3>
            <BookingCard booking={upcomingBooking} />
          </section>
        ) : (
          <p>
            You don&apos;t have upcoming stays.{' '}
            <Link href='/cabins'>Book one</Link>
          </p>
        )}

        {lastBooking ? (
          <section>
            <h3 className='text-lg'>Last stay</h3>
            <BookingCard booking={lastBooking} />
          </section>
        ) : (
          <p>You don&apos;t have previous stays with us.</p>
        )}

        <section>
          <ul>
            <li>
              <Link href='/account/bookings'>Manage your bookings</Link>
            </li>
            <li>
              <Link href='/account/profile'>Update your profile</Link>
            </li>
            <li>
              <Link href='/contact'>Contact support</Link>
            </li>
            <li>
              <Link href=''>Check FAQ</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
