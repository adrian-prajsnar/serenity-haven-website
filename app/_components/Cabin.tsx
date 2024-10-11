import Image from 'next/image';
import { FaMapMarkerAlt, FaRegEyeSlash, FaUsers } from 'react-icons/fa';
import { Tables } from '../_types/database.types';
import TextExpander from './TextExpander';

type CabinProps = {
  cabin: Tables<'cabins'>;
};

export default function Cabin({ cabin }: CabinProps) {
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className='flex flex-col gap-8 lg:grid min-[1130px]:grid-cols-[3fr_4fr] grid-cols-2 min-[1130px]:gap-20  border border-primary-400 lg:py-3 lg:px-10 mb-24 rounded-lg'>
      <div className='relative lg:scale-[1.15] lg:-translate-x-3 min-h-64 sm:min-h-80'>
        <Image
          src={image ?? ''}
          fill
          className='object-cover rounded-tl-lg rounded-tr-lg lg:rounded-lg'
          alt={`Cabin ${name}`}
        />
      </div>

      <div className='px-5 sm:px-10'>
        <div className='mb-7 sm:mb-10 lg:mb-5 lg:translate-x-[-254px] lg:bg-primary-50 lg:p-6 lg:w-[150%] lg:rounded-l-lg'>
          <h3 className='text-accent-50 text-[2.625rem] font-medium sm:text-6xl sm:font-semibold  [text-shadow:3px_3px_3px_var(--tw-shadow-color)] shadow-accent-950'>
            Cabin {name}
          </h3>
        </div>

        <p className='text-sm sm:text-base text-primary-700 mb-10 text-justify'>
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className='flex flex-col gap-4 mb-7 text-sm sm:text-base'>
          <li className='flex gap-3 items-center'>
            <FaUsers className='h-4 w-4 sm:h-5 sm:w-5 text-primary-500' />
            <span>
              Perfect for <span className='font-semibold'>{maxCapacity}</span>{' '}
              guests
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <FaMapMarkerAlt className='h-4 w-4 sm:h-5 sm:w-5 text-primary-500' />
            <span>
              Situated in the heart of the{' '}
              <span className='font-semibold'>Tatry Mountains</span> (Poland)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <FaRegEyeSlash className='h-4 w-4 sm:h-5 sm:w-5 text-primary-500' />
            <span>
              Absolute <span className='font-semibold'>privacy</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
