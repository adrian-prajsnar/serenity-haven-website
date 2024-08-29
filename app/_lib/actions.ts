'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isBefore, isWithinInterval } from 'date-fns';
import { supabase } from './supabase';
import { signIn, signOut } from './auth';
import { getBookedDatesByCabinId } from './data-service';
import { Tables, TablesInsert } from '../_types/database.types';
import { NewBookingData } from '../_types/NewBookingData';
import {
  isAuthenticated,
  isAuthorizedToMutateThisBooking,
} from '../_utils/helpers';

export async function updateGuestProfile(formData: FormData): Promise<void> {
  const session = await isAuthenticated();

  const nationalID = formData.get(
    'nationalID'
  ) as TablesInsert<'guests'>['nationalID'];
  const nationalityData = formData.get('nationality') as string;
  const [nationality, countryFlag] = nationalityData.split('%') as [
    TablesInsert<'guests'>['nationality'],
    TablesInsert<'guests'>['countryFlag']
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

export async function createBooking(
  newBookingData: NewBookingData,
  formData: FormData
): Promise<void> {
  const session = await isAuthenticated();

  if (isBefore(new Date(newBookingData.startDate), new Date()))
    throw new Error('Start date cannot be in the past.');

  const bookedDates = await getBookedDatesByCabinId(newBookingData.cabinId);

  const isOverlapping: boolean = bookedDates.some(bookedDate =>
    isWithinInterval(new Date(bookedDate), {
      start: new Date(newBookingData.startDate),
      end: new Date(newBookingData.endDate),
    })
  );

  if (isOverlapping) throw new Error('The selected dates are already booked.');

  const newBooking: TablesInsert<'bookings'> = {
    ...newBookingData,
    guestId: session.user?.guestId as number,
    numGuests: Number(formData.get('numGuests')),
    observations: String(formData.get('observations')).slice(0, 1000),
    extrasPrice: 0,
    totalPrice: newBookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: 'unconfirmed',
  };

  const { error } = await supabase.from('bookings').insert([newBooking]);

  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Booking could not be created.');
  }

  revalidatePath(`/cabins/${newBookingData.cabinId}`);
  redirect('/cabins/acknowledgement');
}

export async function updateBooking(formData: FormData) {
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

  revalidatePath(`/account/bookings/update/${bookingId}`);
  redirect('/account/bookings');
}

export async function deleteBooking(bookingId: Tables<'bookings'>['id']) {
  await isAuthorizedToMutateThisBooking(bookingId);

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted.');

  revalidatePath('/account/bookings');
}

export async function signInAction(): Promise<void> {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction(): Promise<void> {
  await signOut({ redirectTo: '/' });
}
