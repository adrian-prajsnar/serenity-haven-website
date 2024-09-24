import Image from 'next/image';
import Link from 'next/link';
import bg from '@/public/bg3.webp';

export default function HomePage() {
  return (
    <main className='mt-32 text-primary-50'>
      <Image
        src={bg}
        fill
        placeholder='blur'
        quality={100}
        className='object-cover'
        alt='Mountains and forests with two cabins'
      />

      <div className='relative z-10 text-center flex flex-col items-center justify-center gap-10'>
        <span className='-mb-8 font-bold lowercase text-primary-300'>
          discover
        </span>
        <h1 className='text-8xl font-bold'>Your perfect escape.</h1>
        <div className='flex items-center justify-center gap-4'>
          <Link
            href='/cabins'
            className='bg-accent-700 px-8 py-5 font-semibold rounded-full hover:bg-accent-800 transition-all'
          >
            Explore our luxury cabins
          </Link>
          <Link
            href='/about'
            className='bg-primary-950 text-primary-300 px-8 py-5 font-semibold rounded-full hover:bg-primary-900 transition-all'
          >
            Read more about us
          </Link>
        </div>
      </div>
    </main>
  );
}
