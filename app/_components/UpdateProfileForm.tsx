/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import { updateGuestProfile } from '../_lib/actions';
import { Tables } from '../_types/database.types';
import ButtonSubmitForm from './ButtonSubmitForm';

type UpdateProfileFormProps = {
  children: ReactNode;
  guest: Tables<'guests'> | null;
};

export default function UpdateGuestProfileForm({
  children,
  guest,
}: UpdateProfileFormProps) {
  return (
    <form
      action={updateGuestProfile}
      className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          disabled
          defaultValue={guest?.fullName}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          disabled
          defaultValue={guest?.email}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <img
            src={guest?.countryFlag ?? ''}
            alt='Country flag'
            className='h-5 rounded-sm'
          />
        </div>

        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          name='nationalID'
          defaultValue={guest?.nationalID ?? ''}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
        />
      </div>

      <div className='flex justify-end items-center gap-6'>
        <ButtonSubmitForm
          content='Update profile'
          loadingContent='Updating...'
        />
      </div>
    </form>
  );
}
