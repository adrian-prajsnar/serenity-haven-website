'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabase } from './supabase';
import { signIn, signOut } from './auth';
import { Tables } from '../_types/database.types';
import {
  isAuthenticated,
  isAuthorizedToMutateThisBooking,
} from '../_utils/helpers';

export async function updateProfile(formData: FormData) {
  const session = await isAuthenticated();

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

  const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user?.guestId as number);

  if (error) throw new Error('Profile could not be updated.');

  revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId: Tables<'bookings'>['id']) {
  await isAuthorizedToMutateThisBooking(bookingId);

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted.');

  revalidatePath('/account/reservations');
}

export async function updateReservation(formData: FormData) {
  const bookingId: Tables<'bookings'>['id'] = Number(formData.get('bookingId'));
  await isAuthorizedToMutateThisBooking(bookingId);

  const updateData: {
    numGuests: Tables<'bookings'>['numGuests'];
    observations: Tables<'bookings'>['observations'];
  } = {
    numGuests: Number(formData.get('numGuests')),
    observations: String(formData.get('observations')?.slice(0, 1000)),
  };

  const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId);

  if (error) throw new Error('Booking could not be updated.');

  revalidatePath(`/account/reservations/update/${bookingId}`);
  redirect('/account/reservations');
}

export async function signInAction(): Promise<void> {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: '/' });
}
