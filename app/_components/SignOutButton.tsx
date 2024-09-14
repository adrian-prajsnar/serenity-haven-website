import { FaSignOutAlt } from 'react-icons/fa';
import { signOutAction } from '../_lib/actions';

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className='py-3 px-5 transition-colors flex items-center gap-4 font-medium w-full rounded-l-lg hover:bg-primary-200'>
        <FaSignOutAlt className='h-5 w-5 text-primary-500' />
        <span>Sign out</span>
      </button>
    </form>
  );
}
