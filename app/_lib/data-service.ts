import { notFound } from 'next/navigation';
import { eachDayOfInterval } from 'date-fns';
import { supabase } from './supabase';
import { Tables, TablesInsert } from '../_types/database.types';
import { BookedDates } from '../_types/BookedDates';
import { NewGuest } from '../_types/NewGuest';
import { GuestBooking } from '../_types/GuestBooking';
import { Country } from '../_types/Country';

export async function getCabin(
  id: Tables<'cabins'>['id']
): Promise<Tables<'cabins'>> {
  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getCabins(): Promise<Tables<'cabins'>[]> {
  const { data, error } = await supabase
    .from('cabins')
    .select('id, name, maxCapacity, regularPrice, discount, image')
    .returns<Tables<'cabins'>[]>()
    .order('name');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function getGuest(
  email: string
): Promise<Tables<'guests'> | null> {
  const { data } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single();

  return data;
}

export async function getBooking(
  bookingId: Tables<'bookings'>['id']
): Promise<Tables<'bookings'>> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', bookingId)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not get loaded.');
  }

  return data;
}

export async function getBookings(
  guestId: Tables<'bookings'>['guestId']
): Promise<GuestBooking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)'
    )
    .eq('guestId', guestId)
    .order('startDate');

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded.');
  }

  return data;
}

export async function getBookedDatesByCabinId(
  cabinId: Tables<'bookings'>['cabinId']
): Promise<BookedDates> {
  let today: string | Date = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinId', cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  const bookedDates: BookedDates = data
    .map(booking => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings(): Promise<Tables<'settings'>> {
  const { data, error } = await supabase.from('settings').select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded.');
  }

  return data;
}

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(
      'https://restcountries.com/v2/all?fields=name,flag'
    );
    const countries: Country[] = await res.json();
    return countries;
  } catch {
    throw new Error('Could not fetch countries.');
  }
}

export async function createGuest(
  newGuest: NewGuest
): Promise<TablesInsert<'guests'>> {
  const { data, error } = await supabase
    .from('guests')
    .insert([newGuest])
    .returns<TablesInsert<'guests'>>();

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  return data;
}
