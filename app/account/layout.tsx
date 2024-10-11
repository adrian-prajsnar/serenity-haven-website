import { ReactNode } from 'react';
import SideNavigation from '@/app/_components/SideNavigation';

type AccountLayoutProps = {
  children: ReactNode;
};

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[16rem_1fr] gap-6 sm:gap-12 lg:h-[calc(100vh-11.2rem)] lg:overflow-hidden'>
      <SideNavigation />
      <div className='lg:py-1 lg:flex lg:flex-col lg:overflow-y-auto'>
        {children}
      </div>
    </div>
  );
}
