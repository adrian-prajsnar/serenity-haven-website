import { auth } from '../_lib/auth';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import { Tables } from '../_types/database.types';
import DateSelector from './DateSelector';
import LoginMessage from './LoginMessage';
import ReservationForm from './ReservationForm';

type ReservationProps = {
  cabin: Tables<'cabins'>;
};

export default async function Reservation({ cabin }: ReservationProps) {
  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className='grid grid-cols-2 border border-primary-800 min-h-[400px]'>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
