import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCabins } from '../_lib/data-service';
import image1 from '@/public/about-1.jpg';
import image2 from '@/public/about-2.jpg';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  const numberOfCabins: number = (await getCabins()).length;

  return (
    <div className='grid grid-cols-5 gap-x-24 gap-y-32 items-center'>
      <div className='col-span-3'>
        <h1 className='text-3xl mb-10 text-accent-700 font-semibold'>
          Welcome to Serenity Haven
        </h1>

        <div className='space-y-8'>
          <p>
            Where the splendor of nature and luxurious living merge seamlessly.
            Tucked away in the heart of the Tatry Mountains, this is your
            sanctuary from the everyday grind. It’s not just about the opulent
            cabins; it’s about the chance to reconnect with the natural world
            and relish simple joys with your loved ones.
          </p>
          <p>
            Our {numberOfCabins} upscale cabins offer a comfortable retreat, but
            the real serenity and freedom await you in the magnificent mountains
            around you. Stroll through verdant forests, inhale the fresh
            mountain air, and gaze at the stars from the coziness of a campfire
            or your private hot tub.
          </p>
          <p>
            This is where cherished memories are forged, surrounded by nature’s
            magnificence. It’s a place to slow down, unwind, and appreciate the
            pleasure of being together in a stunning environment.
          </p>
        </div>
      </div>

      <div className='col-span-2'>
        <Image
          className='rounded-lg'
          src={image1}
          alt='Family sitting around a fire pit in front of cabin'
          placeholder='blur'
          quality={100}
        />
      </div>

      <div className='col-span-2'>
        <Image
          className='rounded-lg'
          src={image2}
          alt='Family that manages Serenity Haven'
          placeholder='blur'
          quality={100}
        />
      </div>

      <div className='col-span-3'>
        <h2 className='text-3xl mb-10 text-accent-700 font-semibold'>
          Managed by a group of friends since 2023
        </h2>

        <div className='space-y-8'>
          <p>
            Since 2023, Serenity Haven has been a treasured retreat managed by a
            group of friends. Established with passion and dedication, this
            haven has been lovingly maintained to provide a warm and inviting
            atmosphere.
          </p>
          <p>
            As we carry forward the essence of Serenity Haven, we blend the
            timeless beauty of the mountains with the personal touch that comes
            from a close-knit team of friends. Here, you’re not just a guest;
            you’re part of our extended circle. Join us at Serenity Haven soon,
            where friendship meets tranquility, and every visit feels like
            coming home.
          </p>

          <div>
            <Link
              href='/cabins'
              className='inline-block mt-4 bg-accent-700 px-8 py-5 text-primary-50 font-semibold rounded-full hover:bg-accent-800 transition-all'
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
