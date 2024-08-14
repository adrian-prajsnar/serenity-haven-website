import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import { Tables } from '../_types/database.types';

import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';

type ReservationProps = {
  cabin: Tables<'cabins'>;
};

export default async function Reservation({ cabin }: ReservationProps) {
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
      <ReservationForm cabin={cabin} />
    </div>
  );
}
