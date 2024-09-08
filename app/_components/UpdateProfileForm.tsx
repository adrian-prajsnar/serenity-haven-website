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
      className='bg-primary-100 py-8 px-12 flex gap-6 flex-col rounded-lg'
    >
      <div className='space-y-2'>
        <label className='font-medium'>Full name</label>
        <input
          disabled
          defaultValue={guest?.fullName}
          className='px-5 py-3 w-full border border-primary-300 rounded-md disabled:cursor-not-allowed disabled:bg-primary-300 disabled:text-primary-500'
        />
      </div>

      <div className='space-y-2'>
        <label className='font-medium'>Email address</label>
        <input
          disabled
          defaultValue={guest?.email}
          className='px-5 py-3 w-full border border-primary-300 rounded-md disabled:cursor-not-allowed disabled:bg-primary-300 disabled:text-primary-500'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality' className='font-medium'>
            Where are you from?
          </label>
          {guest?.countryFlag && (
            <img
              src={guest?.countryFlag as string}
              alt='Country flag'
              className='h-5 rounded'
            />
          )}
        </div>

        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID' className='font-medium'>
          National ID number
        </label>
        <input
          name='nationalID'
          defaultValue={guest?.nationalID ?? ''}
          className='px-5 py-3 w-full border border-primary-300 rounded-md'
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
