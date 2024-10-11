/* eslint-disable @next/next/no-img-element */
import { signInAction } from '../_lib/actions';

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button className='flex items-center gap-6 border border-primary-400 px-6 sm:px-10 py-4 font-semibold rounded-full transition-colors hover:bg-primary-100'>
        <img
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          height={24}
          width={24}
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
