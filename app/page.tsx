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

      <div className='relative z-10 text-center flex flex-col items-center justify-center gap-8 md:gap-10'>
        <span className='-mb-6 md:-mb-8 text-sm md:text-base font-bold lowercase text-primary-300 '>
          discover
        </span>
        <h1 className='text-6xl font-bold md:text-7xl xl:text-8xl'>
          Your perfect escape.
        </h1>
        <div className='flex items-center justify-center gap-4 flex-wrap'>
          <Link
            href='/cabins'
            className='bg-accent-700 px-7 py-4 text-sm font-semibold rounded-full hover:bg-accent-800 transition-all md:px-8 md:py-5 md:text-base'
          >
            Explore our luxury cabins
          </Link>
          <Link
            href='/about'
            className='bg-primary-950 text-primary-300 px-7 py-4 text-sm font-semibold rounded-full hover:bg-primary-900 transition-all md:px-8 md:py-5 md:text-base'
          >
            Read more about us
          </Link>
        </div>
      </div>
    </main>
  );
}
