import Link from 'next/link';

export default function RootNotFound() {
  return (
    <main className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold'>
        This page could not be found 😞
      </h1>
      <Link
        href='/'
        className='inline-block bg-accent-700 text-primary-50 px-6 py-3 text-lg rounded-full'
      >
        Back to home
      </Link>
    </main>
  );
}
