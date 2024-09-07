import { Metadata } from 'next';
import { auth } from '@/app/_lib/auth';
import { getGuest } from '@/app/_lib/data-service';
import { Tables } from '@/app/_types/database.types';
import SelectCountry from '@/app/_components/SelectCountry';
import UpdateProfileForm from '@/app/_components/UpdateProfileForm';

export const metadata: Metadata = {
  title: 'Update profile',
};

export default async function ProfilePage() {
  const session = await auth();
  const guest: Tables<'guests'> | null = await getGuest(
    session?.user?.email as string
  );

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-700 mb-4'>
        Update your guest profile
      </h2>

      <p className='text-lg mb-8 text-primary-600'>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name='nationality'
          id='nationality'
          className='px-5 py-[0.96875rem] w-full border border-primary-300 rounded-md'
          defaultCountry={guest?.nationality ?? ''}
        />
      </UpdateProfileForm>
    </div>
  );
}
