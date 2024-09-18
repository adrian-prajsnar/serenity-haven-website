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

      <div className='flex flex-col flex-grow gap-8 overflow-x-auto'>
        <section className='flex flex-col gap-1'>
          <h3 className='text-lg font-semibold'>Upcoming stay</h3>

          {upcomingBooking ? (
            <BookingCard booking={upcomingBooking} />
          ) : (
            <p>
              You currently have no upcoming stays. Why not{' '}
              <Link
                href='/cabins'
                className='inline-block text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
              >
                book your next getaway
              </Link>{' '}
              with us today?
            </p>
          )}
        </section>

        <section className='flex flex-col gap-1'>
          <h3 className='text-lg font-semibold'>
            <span
              className={`${!lastBooking && 'line-through text-primary-400'}`}
            >
              Last stay
            </span>
            {!lastBooking && ' Welcome to your first stay!'}
          </h3>

          {lastBooking ? (
            <BookingCard booking={lastBooking} />
          ) : (
            <p>
              It looks like this is going to be your first visit with us! We
              hope you enjoy your time at our resort. We’d love to hear your
              thoughts, so please consider leaving a review on TripAdvisor,
              Google and our social media, when your stay is complete.
            </p>
          )}
        </section>

        <section className='flex flex-col gap-1'>
          <h3 className='text-lg font-semibold'>Upcoming events</h3>
          <p>
            Join us for a sunset yoga session by the lake, happening next Friday
            at 6 PM.
          </p>
          <Link
            href=''
            className='w-fit text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
          >
            View all events
          </Link>
        </section>

        <section className='flex flex-col gap-1'>
          <h3 className='text-lg font-semibold'>Exclusive offers</h3>
          <p>
            {!lastBooking && !upcomingBooking
              ? 'Enjoy a special 15% discount on your first stay when you book within the next 7 days! Don’t miss out on this exclusive offer!'
              : 'We invite you to explore our offers page to see if you qualify for discounts on your stay or exciting attractions. Take advantage of these great deals!'}
          </p>
          <Link
            href=''
            className='w-fit text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
          >
            Check offers
          </Link>
        </section>
      </div>

      <footer className='mt-auto pt-7 uppercase'>
        <ul className='flex items-center justify-center gap-16 text-base'>
          <li>
            <Link
              href='/account/bookings'
              role='button'
              className='block text-accent-700 font-medium border-b-2 border-transparent hover:border-accent-700 transition-colors'
            >
              Manage your bookings
            </Link>
          </li>
          <li>
            <Link
              href='/account/profile'
              role='button'
              className='block text-accent-700 font-medium border-b-2 border-transparent hover:border-accent-700 transition-colors'
            >
              Update your profile
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              role='button'
              className='block text-accent-700 font-medium border-b-2 border-transparent hover:border-accent-700 transition-colors'
            >
              Contact support
            </Link>
          </li>
          <li>
            <Link
              href=''
              role='button'
              className='block text-accent-700 font-medium border-b-2 border-transparent hover:border-accent-700 transition-colors'
            >
              Check FAQ
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
