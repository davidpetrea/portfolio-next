import Image from 'next/image';

const Title = () => {
 return (
  <div className='flex flex-col items-center gap-2 my-6 lg:my-24 lg:flex-row'>
   <div className='flex-1 w-full'>
    <h1 className='text-4xl font-medium text-center text-green-100 lg:text-6xl lg:text-left'>
     Hi, my name is <span className='font-bold'>David</span>
    </h1>
    <div className='p-3'>
     <Image
      src='/avatar.jpg'
      alt='Avatar'
      width={300}
      height={300}
      className='mx-auto my-2 rounded-full lg:hidden shadow-dp06'
     />
    </div>
    <h2 className='max-w-2xl mx-auto text-4xl font-bold text-center text-transparent lg:text-6xl lg:text-left bg-gradient-to-r from-green-100 to-green-300 lg:max-w-fit bg-clip-text'>
     {"I'm"} a Full Stack Web Developer & Data analyst
    </h2>
   </div>
   {/* LArge view avatar */}
   <Image
    src='/avatar.jpg'
    alt='Avatar'
    width={360}
    height={360}
    className='hidden my-2 rounded-full lg:block shadow-dp06'
   />
  </div>
 );
};

export default Title;
