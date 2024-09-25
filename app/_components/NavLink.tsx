/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import { NavLinkType } from '../_types/NavLinkType';

type NavLinkProps = {
  link: NavLinkType;
  session: Session | null;
};

export default function NavLink({ link, session }: NavLinkProps) {
  const pathname: string = usePathname();

  return (
    <li>
      <Link href={link.href} className='flex items-center gap-1.5 md:gap-3'>
        {link.href === '/account' && session?.user && (
          <img
            className='h-5 sm:h-6 md:h-7 rounded-full'
            src={session?.user?.image || ''}
            alt={`${session?.user?.name}'s avatar` || ''}
            referrerPolicy='no-referrer'
          />
        )}

        <span
          className={`${
            pathname === '/'
              ? 'text-primary-50 hover:border-primary-50'
              : 'text-primary-700 hover:border-primary-700'
          } hidden sm:inline border-b-2 border-transparent transition-colors ${
            pathname.startsWith(link.href) && 'border-b-primary-400'
          }`}
        >
          {link.name}
        </span>

        <span
          className={`${
            pathname === '/' ? 'text-primary-50' : 'text-primary-700'
          } ${
            link.href === '/account' && session?.user && 'hidden'
          } hover:text-accent-700 transition-colors sm:hidden`}
        >
          {link.icon}
        </span>
      </Link>
    </li>
  );
}
