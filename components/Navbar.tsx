import Link from 'next/link';
import {
  GithubIcon,
  LinkedInLogo,
  MainLogo,
} from '../assets/svg/SvgComponents';

const Navbar = () => {
  return (
    <nav className='sticky top-0 p-3 text-green-100 bg-green-900 bg-opacity-60 text-orange backdrop-blur-sm border-b border-slate-400/50'>
      <div className='flex items-center w-full justify-between gap-4 mx-auto text-lg max-w-7xl'>
        <div className='flex items-center justify-around gap-4 text-lg'>
          <Link href='/'>
            <MainLogo className='w-10 h-10' />
          </Link>
          <Link
            href='#projects'
            scroll={false}
            className='hidden md:inline-block hover:bg-green-600 hover:shadow-dp04 p-2 px-4 transition duration-100 ease-linear rounded-lg'
          >
            Projects
          </Link>
          <Link
            href='/contact'
            className='hidden md:inline-block hover:bg-green-600 hover:shadow-dp04 p-2 px-4 transition duration-100 ease-linear rounded-lg'
          >
            Contact
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <Link href='https://github.com/davidpetrea' target='_blank'>
            <GithubIcon className='w-10 h-10' />
          </Link>
          <Link
            href='https://linkedin.com/in/david-petrea-b2a947176'
            target='_blank'
          >
            <LinkedInLogo className='w-8 h-8' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
