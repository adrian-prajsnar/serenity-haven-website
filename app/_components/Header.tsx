import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

export default function Header() {
  return (
    <header className='border-b border-primary-300 px-8 py-5 font-medium'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
