import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      <Image
        src={logo}
        height='60'
        width='60'
        quality={100}
        alt='Serenity Haven logo'
      />
      <span className='text-xl font-semibold text-primary-100'>
        Serenity Haven
      </span>
    </Link>
  );
}
