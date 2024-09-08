import Link from 'next/link';

export default function LoginMessage() {
  return (
    <div className='grid bg-primary-100 '>
      <p className='text-center font-medium py-12 px-8 self-center'>
        <Link
          href='/login'
          className='underline underline-offset-8 text-accent-700'
        >
          Sign in
        </Link>{' '}
        to secure your booking for this cabin now.
      </p>
    </div>
  );
}
