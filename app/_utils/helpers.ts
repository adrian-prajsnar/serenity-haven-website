import { Session } from 'next-auth';
import { auth } from '../_lib/auth';
import { getBookings } from '../_lib/data-service';
import { Tables } from '../_types/database.types';

export async function isAuthenticated(): Promise<Session> {
  const session = await auth();
  if (!session) throw new Error('You must be logged in.');
  return session;
}

export async function isAuthorizedToMutateThisBooking(
  bookingId: Tables<'bookings'>['id']
): Promise<void> {
  const session = await isAuthenticated();
  const guestId = session.user?.guestId as number;
  const guestBookings = await getBookings(guestId);
  const guestBookingsIds = guestBookings.map(booking => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error('You are not authorized to modify this booking.');
}
