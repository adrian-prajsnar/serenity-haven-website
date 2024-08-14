import Spinner from './Spinner';

export default function ContentLoader({ content }: { content: string }) {
  return (
    <div className='grid items-center justify-center'>
      <Spinner />
      <p className='text-xl text-primary-200'>Loading {content} data...</p>
    </div>
  );
}
