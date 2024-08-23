import { Tables } from './database.types';

export type GuestBooking = {
  id: Tables<'bookings'>['id'];
  created_at: Tables<'bookings'>['created_at'];
  startDate: Tables<'bookings'>['startDate'];
  endDate: Tables<'bookings'>['endDate'];
  numNights: Tables<'bookings'>['numNights'];
  numGuests: Tables<'bookings'>['numGuests'];
  totalPrice: Tables<'bookings'>['totalPrice'];
  guestId: Tables<'bookings'>['guestId'];
  cabinId: Tables<'bookings'>['cabinId'];
  cabins: {
    name: Tables<'cabins'>['name'];
    image: Tables<'cabins'>['image'];
  } | null;
};
