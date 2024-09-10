import { auth } from '../_lib/auth';
import NavLink from './NavLink';

const navLinks: { name: string; href: string }[] = [
  {
    name: 'Cabins',
    href: '/cabins',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Guest area',
    href: '/account',
  },
];

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className='z-10'>
      <ul className='flex gap-16 items-center'>
        {navLinks.map(link => (
          <NavLink key={link.href} link={link} session={session} />
        ))}
      </ul>
    </nav>
  );
}
