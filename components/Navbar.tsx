import Link from 'next/link';

const Navbar = () => {
 return (
  <nav className='sticky top-0 p-3 text-green-100 bg-green-900 bg-opacity-60 text-orange backdrop-blur-sm'>
   <div className='flex items-center justify-around gap-8 mx-auto text-xl max-w-7xl lg:justify-start'>
    <Link href='/'>Home</Link>
    <Link href='/'>Projects</Link>
    <Link href='/' className='self-end'>
     Contact
    </Link>
   </div>
  </nav>
 );
};

export default Navbar;
