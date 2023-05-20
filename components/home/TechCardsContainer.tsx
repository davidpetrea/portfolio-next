import TechCard from '../cards/TechCard';
import { ReactLogo, NextLogo, MongoLogo } from '../../assets/svg/SvgComponents';

const TechCardsContainer = () => {
  return (
    <>
      <h2 className='p-2 text-xl font-medium text-center text-black bg-green-300 rounded-lg shadow-dp02'>
        Technologies & Stack
      </h2>
      <div className='p-2'></div>
      <div className='grid grid-cols-1 gap-8 p-4 lg:grid-cols-3'>
        <TechCard
          name='React'
          logo={<ReactLogo width={100} height={100} />}
          description={
            <>
              When it comes to my front-end work, React is my go-to library.
              Depending on the project&apos;s size and specific needs, I find it
              incredibly convenient to enhance my toolkit by incorporating
              various well-maintained solutions. This flexibility allows me to
              adapt and
            </>
          }
        />
        <TechCard
          name='Next.js'
          logo={<NextLogo width={100} height={100} />}
          description={
            <>
              Building upon my fondness for React, I consider Next.js to be the
              top Meta Framework currently available. When it comes to
              prioritizing SEO and rendering flexibility, it is undoubtedly my
              preferred choice.
            </>
          }
        />
        <TechCard
          name='MongoDB'
          logo={<MongoLogo width={100} height={100} />}
          description={
            <>
              Extending my affinity for cutting-edge technologies, MongoDB has
              become my preferred choice for database management. With its
              seamless scalability and flexible document model, it effortlessly
              caters to the dynamic needs of modern applications.
            </>
          }
        />
      </div>
    </>
  );
};

export default TechCardsContainer;
