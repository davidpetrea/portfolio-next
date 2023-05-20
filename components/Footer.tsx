import Link from 'next/link';
import {
  GithubIcon,
  LinkedInLogo,
  MailIcon,
} from '../assets/svg/SvgComponents';
import { githubLink, linkedInLink } from '../utils/links';

const Footer = () => {
  return (
    <footer className='p-3 bg-green-900 border-0.5 border-t border-green-100/10 bg-gradient-to-b from-green-900 to-green-800'>
      <div className='p-4' />
      <p className='text-center text-green-100 max-w-sm mx-auto text-lg'>
        If anything here sparks your interest, I am more than happy to get in
        touch and maybe collaborate on some cool projects 🍃.
      </p>
      <div className='p-4' />
      <div className='flex flex-col items-center gap-4 mx-auto max-w-7xl justify-evenly'>
        <h2 id='contact' className='text-lg'>
          Contact
        </h2>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-2'>
            <MailIcon className='fill-green-100' />
            <p className='text-sm'>david.petrea24@yahoo.com</p>
          </div>
          <div className='flex items-center gap-4 justify-around'>
            <Link href={githubLink} target='_blank'>
              <GithubIcon className='w-12 h-12 fill-green-100' />
            </Link>
            <Link href={linkedInLink} target='_blank'>
              <LinkedInLogo className='w-10 h-10' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
