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
    <>
      <h2 className='font-semibold text-xl text-accent-700 mb-7'>
        Welcome, {firstName}
      </h2>

      <div className='flex flex-col flex-grow gap-16'>
        <section className='flex flex-col gap-12'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-semibold'>Upcoming stay</h3>

            {upcomingBooking ? (
              <BookingCard booking={upcomingBooking} />
            ) : (
              <p>
                You don&apos;t have upcoming stays.{' '}
                <Link href='/cabins'>Book one</Link>
              </p>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-semibold'>
              {lastBooking ? 'Last stay' : 'Welcome to Your First Stay!'}
            </h3>

            {lastBooking ? (
              <BookingCard booking={lastBooking} />
            ) : (
              <p>
                It looks like this is your first visit with us! We hope you
                enjoy your time at our resort. We’d love to hear your thoughts,
                so please consider leaving a review when your stay is complete.
              </p>
            )}
          </div>
        </section>

        <section className='mt-auto'>
          <ul className='flex items-center justify-center gap-16 text-lg'>
            <li>
              <Link
                href='/account/bookings'
                role='button'
                className='text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
              >
                Manage your bookings
              </Link>
            </li>
            <li>
              <Link
                href='/account/profile'
                role='button'
                className='text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
              >
                Update your profile
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                role='button'
                className='text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
              >
                Contact support
              </Link>
            </li>
            <li>
              <Link
                href=''
                role='button'
                className='text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
              >
                Check FAQ
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
