'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/app/_components/Logo';

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  const pathname: string = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        if (window.scrollY > 0) setIsScrolled(true);
        else setIsScrolled(false);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  return (
    <header
      className={`text-sm md:text-base sticky top-0 z-20 px-4 sm:px-8 py-2 sm:py-4 font-[550] transition-[backdrop-blur] ${
        pathname === '/'
          ? isScrolled
            ? 'backdrop-blur-[8px]'
            : 'bg-transparent'
          : 'bg-primary-50/75 backdrop-blur-sm border-b border-primary-300'
      }`}
    >
      <div className='flex justify-between items-center gap-8 max-w-7xl mx-auto'>
        <Logo />
        {children}
      </div>
    </header>
  );
}
