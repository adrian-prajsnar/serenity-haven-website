/* eslint-disable @next/next/no-img-element */
'use client';

import { User } from 'next-auth';
import { differenceInDays, formatISO } from 'date-fns';
import { createBooking } from '../_lib/actions';
import { useReservation } from '../_contexts/ReservationContext';
import { Tables } from '../_types/database.types';
import { NewBookingData } from '../_types/NewBookingData';
import ButtonSubmitForm from './ButtonSubmitForm';

type ReservationFormProps = {
  cabin: Tables<'cabins'>;
  user: User;
};

export default function ReservationForm({ cabin, user }: ReservationFormProps) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;
  const { from: startDate, to: endDate } = range;
  const numNights: number = differenceInDays(
    endDate as Date,
    startDate as Date
  );
  const cabinPrice: number = numNights * regularPrice - (discount ?? 0);

  const bookingData: NewBookingData = {
    startDate: startDate ? formatISO(new Date(startDate)) : '',
    endDate: endDate ? formatISO(new Date(endDate)) : '',
    numNights,
    cabinPrice,
    cabinId,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className='scale-[1.01]'>
      <div className='bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center'>
        <p>Logged in as</p>

        <div className='flex gap-4 items-center'>
          <img
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image || ''}
            alt={user.name || ''}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        // action={createBookingWithData}
        action={async (formData: FormData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className='bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col'
      >
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(x => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
          {!(startDate && endDate) ? (
            <p className='text-primary-300 text-base'>
              Start by selecting dates
            </p>
          ) : (
            <ButtonSubmitForm content='Book now' loadingContent='Booking...' />
          )}
        </div>
      </form>
    </div>
  );
}
