'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from './supabase';
import { Tables } from '../_types/database.types';
import { auth, signIn, signOut } from './auth';
import { getBookings } from './data-service';
import { GuestBooking } from '../_types/GuestBooking';
import { redirect } from 'next/navigation';

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

  const { error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user?.guestId as number);

  if (error) throw new Error('Profile could not be updated.');

  revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId: Tables<'bookings'>['id']) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in.');

  const guestBookings: GuestBooking[] = await getBookings(
    session.user?.guestId as number
  );

  const guestBookingsIds: GuestBooking['id'][] = guestBookings.map(
    booking => booking.id
  );

  if (!guestBookingsIds.includes(bookingId))
    throw new Error('You are not allowed to delete this reservation.');

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted');

  revalidatePath('/account/reservations');
}

export async function updateReservation(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in.');

  const id: Tables<'bookings'>['id'] = Number(formData.get('id'));
  const numGuests: Tables<'bookings'>['numGuests'] = Number(
    formData.get('numGuests')
  );
  const observations: Tables<'bookings'>['observations'] = String(
    formData.get('observations')
  );

  const guestBookings: GuestBooking[] = await getBookings(
    session.user?.guestId as number
  );

  const guestBookingsIds: GuestBooking['id'][] = guestBookings.map(
    booking => booking.id
  );

  if (!guestBookingsIds.includes(id))
    throw new Error('You are not allowed to delete this reservation.');

  const { error } = await supabase
    .from('bookings')
    .update({ id, numGuests, observations })
    .eq('id', id);

  if (error) throw new Error('Booking could not be updated.');

  revalidatePath(`/account/reservations/update/${id}`);
  redirect('/account/reservations');
}

export async function signInAction(): Promise<void> {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: '/' });
}
