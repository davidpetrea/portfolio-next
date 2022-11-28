import Link from 'next/link';

const Nav = () => {
 return (
  <nav className='sticky top-0 flex justify-center gap-4 p-2 bg-surface-dark bg-opacity-90 backdrop-blur-sm text-primary font-Raleway'>
   <Link href='/'>Home</Link>
   <Link href='/about'>About</Link>
   <Link href='/projects'>
    Projects
   </Link>
   <Link href='/projects'>
    Articles
   </Link>
  </nav>
 );
};

export default Nav;
