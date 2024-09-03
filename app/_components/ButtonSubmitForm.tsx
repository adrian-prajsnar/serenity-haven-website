'use client';

import { useFormStatus } from 'react-dom';

type ButtonSubmitFormProps = {
  content: string;
  loadingContent: string;
};

export default function ButtonSubmitForm({
  content,
  loadingContent,
}: ButtonSubmitFormProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-accent-700 px-8 py-4 text-primary-50 font-semibold hover:bg-accent-800 transition-all disabled:cursor-not-allowed disabled:bg-primary-500 disabled:text-primary-300'
      disabled={pending}
    >
      {pending ? loadingContent : content}
    </button>
  );
}
