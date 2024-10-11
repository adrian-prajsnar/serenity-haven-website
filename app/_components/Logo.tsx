'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { usePathname } from 'next/navigation';

export default function Logo() {
  const pathname: string = usePathname();

  return (
    <Link href='/' className='flex items-center gap-2 sm:gap-4 z-10'>
      <Image
        src={logo}
        className='h-10 w-10 sm:h-[3.125rem] sm:w-[3.125rem]'
        quality={100}
        alt='Serenity Haven logo'
      />
      <span
        className={`${
          pathname === '/' ? 'text-primary-50' : 'text-primary-700'
        } [@media(max-width:350px)]:w-min`}
      >
        Serenity Haven
      </span>
    </Link>
  );
}
