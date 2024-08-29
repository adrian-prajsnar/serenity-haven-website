'use client';

import { createContext, useState, ReactNode, useContext } from 'react';
import { DateRange, SelectRangeEventHandler } from 'react-day-picker';

type BookingContextType = {
  range: DateRange;
  setRange: SelectRangeEventHandler;
  resetRange: () => void;
};

const initialState: DateRange = { from: undefined, to: undefined };

const BookingContext = createContext<BookingContextType | undefined>(undefined);

function BookingProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<DateRange>(initialState);

  const handleSetRange: SelectRangeEventHandler = selectedRange => {
    setRange(selectedRange || initialState);
  };

  const resetRange = () => setRange(initialState);

  return (
    <BookingContext.Provider
      value={{ range, setRange: handleSetRange, resetRange }}
    >
      {children}
    </BookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined)
    throw new Error('Booking Context was used outside Booking Provider.');
  return context;
}

export { BookingProvider, useBooking };
