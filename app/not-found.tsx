import Link from 'next/link';

export default function RootNotFound() {
  return (
    <main className='text-center space-y-6 mt-4 font-semibold'>
      <h1 className='text-2xl'>This page could not be found 😞</h1>
      <Link
        href='/'
        className='inline-block bg-accent-700 text-primary-50 px-6 py-3 rounded-full'
      >
        Back to home
      </Link>
    </main>
  );
}
