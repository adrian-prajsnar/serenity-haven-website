import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '../_lib/actions';

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className='py-3 px-5 hover:bg-primary-200 transition-colors flex items-center gap-4 font-semibold w-full'>
        <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-500' />
        <span>Sign out</span>
      </button>
    </form>
  );
}
