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
          <div
            className={`pb-1 border-b-2 border-transparent sm:pb-0 sm:border-b-0 ${
              pathname.startsWith('/account') && 'border-b-accent-700'
            }`}
          >
            <img
              className='h-4 min-[300px]:h-5 sm:h-6 md:h-7 rounded-full'
              src={session?.user?.image || ''}
              alt={`${session?.user?.name}'s avatar` || ''}
              referrerPolicy='no-referrer'
            />
          </div>
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
          } pb-1 hover:text-accent-700 transition-colors sm:hidden border-b-2 border-transparent ${
            pathname.startsWith(link.href) && 'border-b-accent-700'
          }`}
        >
          {link.icon}
        </span>
      </Link>
    </li>
  );
}
