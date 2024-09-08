import Link from 'next/link';

export default function AcknowledgementPage() {
  return (
    <div className='text-center space-y-6 mt-4'>
      <h1 className='text-2xl font-semibold'>Thank you for your booking!</h1>
      <Link
        href='/account/bookings'
        className='underline underline-offset-8 font-medium text-accent-700 inline-block'
      >
        Manage your bookings &rarr;
      </Link>
    </div>
  );
}
