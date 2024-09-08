import Spinner from './Spinner';

export default function ContentLoader({ content }: { content: string }) {
  return (
    <div className='grid items-center justify-center'>
      <Spinner />
      <p className='text-lg font-medium text-primary-600'>
        Loading {content} data...
      </p>
    </div>
  );
}
