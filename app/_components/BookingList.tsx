'use client';

import { useOptimistic } from 'react';
import { GuestBooking } from '../_types/GuestBooking';
import { deleteBooking } from '../_lib/actions';
import BookingCard from './BookingCard';

type BookingListProps = {
  bookings: GuestBooking[];
};

export default function BookingList({ bookings }: BookingListProps) {
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
    await deleteBooking(bookingId);
  };

  return (
    <ul className='space-y-6'>
      {optimisticBookings.map(booking => (
        <BookingCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
