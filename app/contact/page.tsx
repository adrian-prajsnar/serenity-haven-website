// https://michellepaisgroup.com/

import ContactForm from '../_components/ContactForm';

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

      <div className='grid grid-cols-2'>
        <div>
          <h2 className='font-semibold text-xl text-accent-700 text-center mb-7'>
            Online inquiry
          </h2>
          <ContactForm />
        </div>

        <div>
          <h2 className='font-semibold text-xl text-accent-700 text-center mb-7'>
            Contact details
          </h2>
        </div>
      </div>
    </div>
  );
}
