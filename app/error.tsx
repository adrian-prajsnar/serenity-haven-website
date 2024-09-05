'use client';

type RootErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function RootError({ error, reset }: RootErrorProps) {
  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <button
        className='inline-block bg-accent-700 text-primary-50 px-6 py-3 text-lg'
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
