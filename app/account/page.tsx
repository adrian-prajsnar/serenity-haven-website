import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guest area',
};

export default function AccountPage() {
  return (
    <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
      Welcome, Jurek!
    </h2>
  );
}
