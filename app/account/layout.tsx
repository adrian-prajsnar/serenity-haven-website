import { ReactNode } from 'react';
import SideNavigation from '@/app/_components/SideNavigation';

type AccountLayoutProps = {
  children: ReactNode;
};

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[16rem_1fr] lg:h-[78.6vh] gap-6 sm:gap-12'>
      <SideNavigation />
      <div className='lg:py-1 lg:flex lg:flex-col lg:h-[78.6vh]'>
        {children}
      </div>
    </div>
  );
}
