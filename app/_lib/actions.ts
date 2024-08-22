'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from './supabase';
import { Tables } from '../_types/database.types';
import { auth, signIn, signOut } from './auth';

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in.');

  const nationalID = formData.get(
    'nationalID'
  ) as Tables<'guests'>['nationalID'];
  const nationalityData = formData.get('nationality') as string;
  const [nationality, countryFlag] = nationalityData.split('%') as [
    Tables<'guests'>['nationality'],
    Tables<'guests'>['countryFlag']
  ];

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID as string))
    throw new Error('Please provide a valid national ID.');

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };

  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user?.guestId as number);

  if (error) throw new Error('Profile could not be updated.');

  revalidatePath('/account/profile');
}

export async function signInAction(): Promise<void> {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: '/' });
}
