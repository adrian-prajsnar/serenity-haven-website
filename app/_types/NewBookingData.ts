import { Tables } from './database.types';

export type NewBookingData = {
  startDate: Tables<'bookings'>['startDate'];
  endDate: Tables<'bookings'>['endDate'];
  numNights: Tables<'bookings'>['numNights'];
  cabinPrice: Tables<'bookings'>['cabinPrice'];
  cabinId: Tables<'bookings'>['cabinId'];
};
