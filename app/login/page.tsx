import { Metadata } from 'next';
import SignInButton from '../_components/SignInButton';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className='flex flex-col gap-4 sm:gap-8 mt-10 items-center text-center'>
      <h2 className='text-xl sm:text-2xl font-semibold'>
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
