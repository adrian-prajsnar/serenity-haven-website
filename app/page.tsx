import Image from 'next/image';
import Link from 'next/link';
import bg from '@/public/bg.webp';

export default function HomePage() {
  return (
    <main className='mt-24'>
      <Image
        src={bg}
        fill
        placeholder='blur'
        quality={100}
        className='object-cover object-top'
        alt='Mountains and forests with two cabins'
      />

      <div className='relative z-10 text-center'>
        <h1 className='text-8xl text-primary-50 mb-10 tracking-tight font-normal'>
          Welcome to paradise.
        </h1>
        <Link
          href='/cabins'
          className='bg-accent-700 px-8 py-6 text-primary-50 text-lg font-semibold rounded-full hover:bg-accent-800 transition-all'
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
