'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHome, FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import SignOutButton from '@/app/_components/SignOutButton';

const navLinks: { name: string; href: string; icon: JSX.Element }[] = [
  {
    name: 'Home',
    href: '/account',
    icon: (
      <FaHome className='w-4 h-4 sm:h-5 sm:w-5 text-primary-400 lg:text-primary-500' />
    ),
  },
  {
    name: 'Bookings',
    href: '/account/bookings',
    icon: (
      <FaRegCalendarAlt className='w-4 h-4 sm:h-5 sm:w-5 text-primary-400 lg:text-primary-500' />
    ),
  },
  {
    name: 'Guest profile',
    href: '/account/profile',
    icon: (
      <FaUser className='w-4 h-4 sm:h-5 sm:w-5 text-primary-400 lg:text-primary-500' />
    ),
  },
];

export default function SideNavigation() {
  const pathname: string = usePathname();
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`lg:border-r lg:border-primary-300 sticky lg:block left-0 top-[3.5625rem] sm:top-[5.1875rem] z-20 lg:z-auto py-2 px-4 sm:py-4 sm:px-8 lg:p-0 bg-primary-700/75 lg:bg-primary-50 backdrop-blur-sm border-primary-500 text-sm sm:text-base rounded-lg lg:rounded-none ${
        isSticky ? 'rounded-tl-none rounded-tr-none' : 'rounded-lg'
      }`}
    >
      <ul className='flex flex-wrap items-center lg:items-stretch justify-center lg:justify-normal lg:flex-col gap-2 lg:h-full font-[550]'>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              className={`py-1.5 px-2.5 sm:py-3 sm:px-5 text-primary-50 lg:text-primary-700 lg:hover:bg-primary-200  transition-colors flex items-center gap-4 rounded-lg lg:rounded-none lg:rounded-l-lg ${
                pathname === link.href ? 'bg-primary-700 lg:bg-primary-200' : ''
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='mt-auto'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
