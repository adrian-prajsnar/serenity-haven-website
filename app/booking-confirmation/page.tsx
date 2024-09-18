import Link from 'next/link';

export default function BookingConfirmationPage() {
  return (
    <div className='text-center space-y-6 mt-4'>
      <h1 className='text-2xl font-semibold'>Thank you for your booking!</h1>
      <Link
        href='/account/bookings'
        className='inline-block text-accent-700 font-medium border-b border-accent-300 hover:border-accent-700 transition-colors'
      >
        Manage your bookings &rarr;
      </Link>
    </div>
  );
}
