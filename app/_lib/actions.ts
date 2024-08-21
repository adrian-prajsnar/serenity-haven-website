'use server';

import { signIn, signOut } from './auth';

export async function signInAction(): Promise<void> {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: '/' });
}
