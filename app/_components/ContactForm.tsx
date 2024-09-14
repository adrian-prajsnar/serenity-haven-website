import Link from 'next/link';
import ButtonSubmitForm from './ButtonSubmitForm';

export default function ContactForm() {
  return (
    <form
      action=''
      className='bg-primary-100 py-8 px-12 flex gap-6 flex-col rounded-lg'
    >
      <div className='space-y-2'>
        <label htmlFor='name' className='font-medium'>
          Name
        </label>
        <input
          name='name'
          className='px-5 py-3 w-full border border-primary-300 rounded-md'
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='email' className='font-medium'>
          Email address
        </label>
        <input
          name='email'
          className='px-5 py-3 w-full border border-primary-300 rounded-md'
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='phone' className='font-medium'>
          Phone number
        </label>
        <input
          name='phone'
          className='px-5 py-3 w-full border border-primary-300 rounded-md'
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='message' className='font-medium'>
          Message
        </label>
        <textarea
          name='message'
          className='resize-none px-5 py-3 w-full h-40 border border-primary-300 rounded-md'
        />
      </div>

      <div className='flex items-start gap-2'>
        <input
          type='checkbox'
          name='userData'
          id='userData'
          className='accent-accent-700'
        />
        <p className='text-xs font-medium text-justify'>
          By clicking this checkbox, you agree to provide Serenity Haven with
          your contact information and consent to receive our exclusive offers,
          discounts on future stays, newsletters, and other marketing content
          via email. Rest assured, we won’t contact you by phone or send
          unnecessary messages. You can unsubscribe from these emails at any
          time by clicking the &quot;unsubscribe&quot; link provided in each
          message. Your privacy is important to us, and your data will be
          handled in accordance with our{' '}
          <Link
            href=''
            className='font-bold border-b border-primary-400 hover:border-b-accent-700 transition-colors'
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className='flex justify-end items-center gap-6'>
        <ButtonSubmitForm content='Send inquiry' loadingContent='Sending...' />
      </div>
    </form>
  );
}
