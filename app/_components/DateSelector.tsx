'use client';

import React, { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { DateRange, DayPicker } from 'react-day-picker';
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from 'date-fns';
import { useBooking } from '../_contexts/BookingContext';
import { Tables } from '../_types/database.types';
import { BookedDates } from '../_types/BookedDates';

const isAlreadyBooked = (range: DateRange, datesArr: Date[]) => {
  return (
    range.from &&
    range.to &&
    datesArr.some(date =>
      isWithinInterval(date, {
        start: range.from as Date,
        end: range.to as Date,
      })
    )
  );
};

type DateSelectorProps = {
  settings: Tables<'settings'>;
  cabin: Tables<'cabins'>;
  bookedDates: BookedDates;
};

export default function DateSelector({
  settings,
  cabin,
  bookedDates,
}: DateSelectorProps) {
  const [numberOfMonths, setNumberOfMonths] = useState<number>(2);
  const { range, setRange, resetRange } = useBooking();
  const { minBookingLength, maxBookingLength } = settings;
  const { regularPrice, discount } = cabin;

  const displayRange: DateRange | undefined = isAlreadyBooked(
    range,
    bookedDates
  )
    ? undefined
    : range;

  const numNights: number = displayRange
    ? differenceInDays(displayRange.to as Date, displayRange.from as Date)
    : 0;

  const cabinPrice: number = numNights * regularPrice - (discount ?? 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 520) setNumberOfMonths(1);
      else setNumberOfMonths(2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col justify-between rounded-l-lg text-sm sm:text-base'>
      <DayPicker
        className='py-4 sm:py-8 lg:pt-12 place-self-center rounded-tl-lg scale-95'
        mode='range'
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout='buttons'
        numberOfMonths={numberOfMonths}
        disabled={currentDate =>
          isPast(currentDate) ||
          bookedDates.some(date => isSameDay(date, currentDate))
        }
      />

      <div className='flex flex-wrap items-center justify-between gap-2 py-2 sm:py-4 px-4 sm:px-8 min-h-[3.25rem] bg-accent-700 text-primary-50 lg:rounded-bl-lg'>
        <div className='flex flex-wrap items-baseline gap-4'>
          <p className='flex flex-wrap gap-2 items-baseline'>
            {discount && discount > 0 ? (
              <>
                <span className='text-lg sm:text-xl'>
                  ${regularPrice - discount}
                </span>
                <span className='line-through text-primary-500'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-lg sm:text-xl'>${regularPrice}</span>
            )}
            <span className=''>/ night</span>
          </p>
          {numNights ? (
            <>
              <p className='bg-accent-800 px-2 py-1 text-lg sm:text-xl rounded-lg'>
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className='font-bold uppercase'>Total</span>{' '}
                <span className='text-lg sm:text-xl font-semibold'>
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className='border border-primary-400 py-2 px-4 text-xs sm:text-sm font-semibold rounded-lg'
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
