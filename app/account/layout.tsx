import { ReactNode } from 'react';
import SideNavigation from '@/app/_components/SideNavigation';

type AccountLayoutProps = {
  children: ReactNode;
};

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <SideNavigation />
      <div className='py-1'>{children}</div>
    </div>
  );
}
