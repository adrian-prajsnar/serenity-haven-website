'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks: { name: string; href: string }[] = [
  {
    name: 'Cabins',
    href: '/cabins',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Guest area',
    href: '/account',
  },
];

export default function Navigation() {
  const pathname: string = usePathname();

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        {navLinks.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-accent-400 transition-colors ${
                pathname.startsWith(link.href) ? 'text-accent-400' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
