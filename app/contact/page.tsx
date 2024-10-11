import Link from 'next/link';
import { Metadata } from 'next';
import { HiMail, HiPhone } from 'react-icons/hi';
import {
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
  FaYoutube,
} from 'react-icons/fa';
import ContactForm from '../_components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className='text-sm sm:text-base'>
      <h1 className='text-2xl sm:text-3xl mb-5 text-accent-700 font-semibold text-center sm:text-left'>
        Contact us
      </h1>

      <p className='mb-12 md:mb-20 text-justify'>
        We are here to help make your experience at Serenity Haven as seamless
        and enjoyable as possible. Whether you have questions about your stay,
        need assistance with bookings, or just want to learn more about our
        services, feel free to reach out. Our dedicated team is available to
        ensure your time with us is everything you imagined and more. We look
        forward to hearing from you and helping you create unforgettable
        memories in the heart of the Tatry Mountains.
      </p>

      <div className='flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16'>
        <section>
          <h2 className='font-semibold text-lg sm:text-xl text-accent-700 text-center sm:text-left md:text-center mb-3 sm:mb-5'>
            Online inquiry
          </h2>

          <ContactForm />
        </section>

        <section className='flex flex-col min-h-full'>
          <h2 className='font-semibold text-lg sm:text-xl text-accent-700 text-center sm:text-left md:text-center mb-3 sm:mb-5'>
            Contact details
          </h2>

          <div className='flex flex-col h-full gap-8 sm:gap-16'>
            <p className='text-justify'>
              Our team is available from{' '}
              <span className='font-semibold'>8AM to 6PM</span>, Monday through
              Sunday, to assist you with your inquiries and bookings. For urgent
              matters, you can reach our 24/7 on-site support at{' '}
              <Link
                href='tel:+48987654321'
                className='font-medium border-b border-b-primary-400 hover:border-b-accent-700 transition-colors'
              >
                +48 987 654 321
              </Link>
              . We also offer live chat support during business hours for quick
              assistance.
            </p>

            <div className='flex flex-wrap justify-between xl:items-center md:flex-nowrap md:flex-col gap-8 sm:gap-16'>
              <ul className='text-base sm:text-lg flex flex-col items-start gap-1'>
                <li>
                  <Link
                    href='mailto:contact@serenity-haven.com'
                    className='flex items-center justify-center gap-2 w-fit mx-auto'
                  >
                    <HiMail className='w-5 h-5 sm:w-6 sm:h-6' />
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
                    <HiPhone className='w-5 h-5 sm:w-6 sm:h-6' />
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
            </div>

            <ul className='flex flex-col xl:items-center gap-2.5 sm:gap-4'>
              <li>
                Visit our{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href=''
                >
                  FAQ page
                </Link>{' '}
                for quick answers.
              </li>
              <li>
                Subscribe to our{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href=''
                >
                  newsletter
                </Link>{' '}
                for updates and offers.
              </li>
              <li>
                Take a{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href=''
                >
                  virtual tour
                </Link>{' '}
                of Serenity Haven.
              </li>
              <li>
                Get{' '}
                <Link
                  className='text-accent-700 font-semibold border-b border-accent-300 hover:border-accent-700 transition-colors'
                  href=''
                >
                  directions & transportation info
                </Link>{' '}
                to Serenity Haven.
              </li>
            </ul>

            <div className='flex flex-col items-center gap-4 md:pb-8 mt-auto'>
              <span className='uppercase text-[0.625rem] sm:text-xs font-semibold text-primary-500'>
                Stay connected
              </span>

              <ul className='flex flex-wrap items-center gap-4 sm:gap-6'>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-3 sm:p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaFacebook className='w-5 h-5 sm:w-6 sm:h-6' />
                  </Link>
                </li>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-3 sm:p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaInstagram className='w-5 h-5 sm:w-6 sm:h-6' />
                  </Link>
                </li>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-3 sm:p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaTripadvisor className='w-5 h-5 sm:w-6 sm:h-6' />
                  </Link>
                </li>
                <li>
                  <Link
                    href=''
                    className='flex items-center justify-center border border-primary-400 p-3 sm:p-4 rounded-full hover:bg-primary-700 hover:text-primary-50 transition-colors'
                  >
                    <FaYoutube className='w-5 h-5 sm:w-6 sm:h-6' />
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
