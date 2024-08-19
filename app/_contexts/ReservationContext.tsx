'use client';

import { createContext, useState, ReactNode, useContext } from 'react';
import { DateRange, SelectRangeEventHandler } from 'react-day-picker';

type ReservationContextType = {
  range: DateRange;
  setRange: SelectRangeEventHandler;
  resetRange: () => void;
};

const initialState: DateRange = { from: undefined, to: undefined };

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<DateRange>(initialState);

  const handleSetRange: SelectRangeEventHandler = selectedRange => {
    setRange(selectedRange || initialState);
  };

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider
      value={{ range, setRange: handleSetRange, resetRange }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error(
      'Reservation Context was used outside Reservation Provider.'
    );
  return context;
}

export { ReservationProvider, useReservation };
