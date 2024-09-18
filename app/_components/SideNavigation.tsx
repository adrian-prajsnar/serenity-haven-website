'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import SignOutButton from '@/app/_components/SignOutButton';

const navLinks: { name: string; href: string; icon: JSX.Element }[] = [
  {
    name: 'Home',
    href: '/account',
    icon: <FaHome className='h-5 w-5 text-primary-500' />,
  },
  {
    name: 'Bookings',
    href: '/account/bookings',
    icon: <FaRegCalendarAlt className='h-5 w-5 text-primary-500' />,
  },
  {
    name: 'Guest profile',
    href: '/account/profile',
    icon: <FaUser className='h-5 w-5 text-primary-500' />,
  },
];

export default function SideNavigation() {
  const pathname: string = usePathname();

  return (
    <nav className='border-r border-primary-300'>
      <ul className='flex flex-col gap-2 h-full font-[550]'>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-200  transition-colors flex items-center gap-4 rounded-l-lg ${
                pathname === link.href ? 'bg-primary-200' : ''
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
