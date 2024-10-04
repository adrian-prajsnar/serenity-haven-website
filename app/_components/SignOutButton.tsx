import { FaSignOutAlt } from 'react-icons/fa';
import { signOutAction } from '../_lib/actions';

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className='text-primary-50 lg:text-primary-700 py-1.5 px-2.5 sm:py-3 sm:px-5 transition-colors flex items-center gap-4 w-full rounded-lg lg:rounded-none lg:rounded-l-lg lg:hover:bg-primary-200'>
        <FaSignOutAlt className='w-4 h-4 sm:h-5 sm:w-5 text-primary-400 lg:text-primary-500' />
        <span>Sign out</span>
      </button>
    </form>
  );
}
