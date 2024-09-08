/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';

type NavLinkProps = {
  link: {
    href: string;
    name: string;
  };
  session: Session | null;
};

export default function NavLink({ link, session }: NavLinkProps) {
  const pathname: string = usePathname();

  return (
    <li>
      <Link href={link.href} className='flex items-center gap-3'>
        {link.href === '/account' && session?.user && (
          <img
            className='h-7 rounded-full'
            src={session?.user?.image || ''}
            alt={`${session?.user?.name}'s avatar` || ''}
            referrerPolicy='no-referrer'
          />
        )}
        <span
          className={`${
            pathname === '/' ? 'text-primary-50' : 'text-primary-700'
          } border-b-2 border-transparent transition-colors hover:border-primary-400 ${
            pathname.startsWith(link.href) ? 'border-b-primary-400' : ''
          }`}
        >
          {link.name}
        </span>
      </Link>
    </li>
  );
}
