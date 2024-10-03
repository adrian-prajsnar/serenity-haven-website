import {
  BsEnvelope,
  BsHouses,
  BsInfoCircle,
  BsPersonCircle,
} from 'react-icons/bs';
import { auth } from '../_lib/auth';
import { NavLinkType } from '../_types/NavLinkType';
import NavLink from './NavLink';

const navLinks: NavLinkType[] = [
  {
    name: 'Cabins',
    href: '/cabins',
    icon: <BsHouses className='h-5 w-5' />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <BsInfoCircle className='h-5 w-5' />,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <BsEnvelope className='h-5 w-5' />,
  },
  {
    name: 'Guest area',
    href: '/account',
    icon: <BsPersonCircle className='h-5 w-5' />,
  },
];

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className='z-10'>
      <ul className='flex flex-wrap gap-4 sm:gap-6 md:gap-8 xl:gap-10 2xl:gap-12 items-center'>
        {navLinks.map(link => (
          <NavLink key={link.href} link={link} session={session} />
        ))}
      </ul>
    </nav>
  );
}
