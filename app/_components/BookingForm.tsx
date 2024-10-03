/* eslint-disable @next/next/no-img-element */
'use client';

import { User } from 'next-auth';
import { differenceInDays, formatISO } from 'date-fns';
import { createBooking } from '../_lib/actions';
import { useBooking } from '../_contexts/BookingContext';
import { Tables } from '../_types/database.types';
import { NewBookingData } from '../_types/NewBookingData';
import ButtonSubmitForm from './ButtonSubmitForm';

type BookingFormProps = {
  cabin: Tables<'cabins'>;
  user: User;
};

export default function BookingForm({ cabin, user }: BookingFormProps) {
  const { range, resetRange } = useBooking();
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
    <div>
      <div className='bg-primary-200 text-primary-800 px-4 sm:px-16 py-2 flex flex-wrap gap-2 justify-between items-center text-xs sm:text-sm font-semibold rounded-tr-lg'>
        <p>Signed in as</p>

        <div className='flex gap-2 items-center'>
          <img
            referrerPolicy='no-referrer'
            className='h-7 rounded-full'
            src={user.image ?? ''}
            alt={user.name ?? ''}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData: FormData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className='bg-primary-100 py-6 px-4 sm:py-10 sm:px-16 text-sm sm:text-base flex gap-5 flex-col rounded-br-lg'
      >
        <div className='space-y-2'>
          <label htmlFor='numGuests' className='font-medium'>
            How many people will be staying?
          </label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 w-full border border-primary-300 rounded-md'
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
          <label htmlFor='observations' className='font-medium'>
            Is there anything we should be aware of regarding your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 w-full border border-primary-300 rounded-md'
            placeholder='Do you have any pets, allergies, or special requests we should know about?'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
          {!(startDate && endDate) ? (
            <p className='text-primary-500 text-xs sm:text-sm font-medium'>
              Begin by choosing dates of your stay.
            </p>
          ) : (
            <ButtonSubmitForm content='Book now' loadingContent='Booking...' />
          )}
        </div>
      </form>
    </div>
  );
}
