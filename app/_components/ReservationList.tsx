'use client';

import { useOptimistic } from 'react';
import { GuestBooking } from '../_types/GuestBooking';
import { deleteReservation } from '../_lib/actions';
import ReservationCard from './ReservationCard';

type ReservationListProps = {
  bookings: GuestBooking[];
};

export default function ReservationList({ bookings }: ReservationListProps) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId: GuestBooking['id']) => {
      return currentBookings.filter(
        currentBooking => currentBooking.id !== bookingId
      );
    }
  );

  const handleDelete = async (bookingId: GuestBooking['id']) => {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  };

  return (
    <ul className='space-y-6'>
      {optimisticBookings.map(booking => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
