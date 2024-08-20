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
      <Link
        href={link.href}
        className={`hover:text-accent-400 transition-colors flex items-center gap-4 ${
          pathname.startsWith(link.href) ? 'text-accent-400' : ''
        }`}
      >
        {link.href === '/account' && session?.user && (
          <img
            className='h-8 rounded-full'
            src={session?.user?.image || ''}
            alt={`${session?.user?.name}'s avatar` || ''}
            referrerPolicy='no-referrer'
          />
        )}
        <span>{link.name}</span>
      </Link>
    </li>
  );
}
