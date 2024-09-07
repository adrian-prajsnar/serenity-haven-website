import { auth } from '../_lib/auth';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import { Tables } from '../_types/database.types';
import DateSelector from './DateSelector';
import LoginMessage from './LoginMessage';
import BookingForm from './BookingForm';

type BookingProps = {
  cabin: Tables<'cabins'>;
};

export default async function Booking({ cabin }: BookingProps) {
  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className='grid grid-cols-2 border border-primary-400 min-h-[400px] rounded-lg'>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <BookingForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
