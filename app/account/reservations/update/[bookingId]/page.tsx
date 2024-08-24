import { Metadata } from 'next';
import { getBooking, getCabin } from '@/app/_lib/data-service';
import { updateReservation } from '@/app/_lib/actions';
import { Tables } from '@/app/_types/database.types';
import ButtonSubmitForm from '@/app/_components/ButtonSubmitForm';

export const metadata: Metadata = {
  title: 'Update reservation',
};

type UpdateReservationPageProps = {
  params: {
    bookingId: string;
  };
};

export default async function UpdateReservationPage({
  params,
}: UpdateReservationPageProps) {
  const booking: Tables<'bookings'> = await getBooking(
    Number(params.bookingId)
  );
  const cabin: Tables<'cabins'> = await getCabin(booking.cabinId);

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Edit Reservation #{params.bookingId}
      </h2>

      <form
        action={updateReservation}
        className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
      >
        <input type='hidden' name='id' id='id' value={booking.id} />

        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            defaultValue={booking.numGuests}
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map(
              x => (
                <option value={x} key={x}>
                  {x} {x === 1 ? 'guest' : 'guests'}
                </option>
              )
            )}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            defaultValue={booking.observations ?? ''}
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
          <ButtonSubmitForm
            content='Update reservation'
            loadingContent='Updating...'
          />
        </div>
      </form>
    </div>
  );
}
