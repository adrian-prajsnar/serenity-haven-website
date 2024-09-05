import { Metadata } from 'next';
import { auth } from '../_lib/auth';

export const metadata: Metadata = {
  title: 'Guest area',
};

export default async function AccountPage() {
  const session = await auth();
  const firstName: string = session?.user?.name?.split(' ').at(0) ?? '';

  return (
    <h2 className='font-semibold text-2xl text-accent-700 mb-7'>
      Welcome, {firstName}
    </h2>
  );
}
