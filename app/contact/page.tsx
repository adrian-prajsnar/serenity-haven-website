// https://michellepaisgroup.com/

import { Metadata } from 'next';
import ContactForm from '../_components/ContactForm';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
  FaYoutube,
} from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div>
      <h1 className='text-3xl mb-5 text-accent-700 font-semibold'>
        Contact us
      </h1>
      <p className='mb-20'>
        We’re here to help make your experience at Serenity Haven as seamless
        and enjoyable as possible. Whether you have questions about your stay,
        need assistance with bookings, or just want to learn more about our
        services, feel free to reach out. Our dedicated team is available to
        ensure your time with us is everything you imagined and more. We look
        forward to hearing from you and helping you create unforgettable
        memories in the heart of the Tatry Mountains.
      </p>

      <div className='grid grid-cols-2 gap-16'>
        <section>
          <h2 className='font-semibold text-xl text-accent-700 text-center mb-7'>
            Online inquiry
          </h2>
          <ContactForm />
        </section>

        <section className='flex flex-col min-h-full'>
          <h2 className='font-semibold text-xl text-accent-700 text-center mb-7'>
            Contact details
          </h2>

          <div className='flex flex-col h-full gap-16 text-center'>
            <p>
              Our team is available from{' '}
              <span className='font-semibold'>8AM to 6PM</span>, Monday through
              Sunday, to assist you with your inquiries and bookings. For urgent
              matters, you can reach our 24/7 on-site support at{' '}
              <Link
                href='mailto:+48987654321'
                className='font-medium border-b border-b-primary-400 hover:border-b-accent-700 transition-colors'
              >
                +48 987 654 321
              </Link>
              . We also offer live chat support during business hours for quick
              assistance.
            </p>

            <ul className='text-lg flex flex-col gap-1'>
              <li>
                <Link
                  href='mailto:contact@serenity-haven.com'
                  className='flex items-center justify-center gap-2 w-fit mx-auto'
                >
                  <HiMail className='w-6 h-6' />
                  <span className='border-b border-b-primary-400 hover:border-b-accent-700 transition-colors'>
                    contact@serenity-haven.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href='tel:+48123456789'
                  className='flex items-center justify-center gap-2 w-fit mx-auto'
                >
                  <HiPhone className='w-6 h-6' />
                  <span className='border-b border-b-primary-400 hover:border-b-accent-700 transition-colors'>
                    +48 123 456 789
                  </span>
                </Link>
              </li>
            </ul>

            <address className='not-italic'>
              <span className='font-bold'>
                Tatry Mountains <br />
              </span>
              Skibówki 40 <br />
              34-500, Zakopane
            </address>

            <ul className='flex flex-col gap-4'>
              <li>
                For quick answers to common questions, visit our{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href='/faq'
                >
                  FAQ page
                </Link>
                .
              </li>
              <li>
                Stay updated on our latest offers and news by subscribing to our{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href='/newsletter'
                >
                  newsletter
                </Link>
                .
              </li>
              <li>
                Explore our cabins and amenities with a{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href='/virtual-tour'
                >
                  virtual tour
                </Link>{' '}
                of Serenity Haven.
              </li>
              <li>
                Find directions to Serenity Haven and learn about nearby{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href='/transport'
                >
                  transportation options
                </Link>
                .
              </li>
            </ul>

            <div className='flex flex-col gap-4 pb-8 mt-auto'>
              <span className='uppercase text-xs font-semibold text-primary-500'>
                Stay connected
              </span>

              <ul className='flex items-center justify-center gap-6'>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaFacebook className='w-6 h-6' />
                  </Link>
                </li>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaInstagram className='w-6 h-6' />
                  </Link>
                </li>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaTripadvisor className='w-6 h-6' />
                  </Link>
                </li>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaYoutube className='w-6 h-6' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
