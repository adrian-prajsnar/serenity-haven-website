import { ReactNode } from 'react';
import SideNavigation from '@/app/_components/SideNavigation';

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <SideNavigation />
      <div className='py-1'>{children}</div>
    </div>
  );
}
