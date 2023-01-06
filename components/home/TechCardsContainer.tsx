import TechCard from '../cards/TechCard';
import { ReactLogo, NextLogo } from '../../assets/svg/SvgComponents';

const TechCardsContainer = () => {
 return (
  <>
   <h2 className='p-2 text-xl font-medium text-center text-black bg-green-300 rounded-lg shadow-dp02'>
    Technologies & Stacks
   </h2>
   <div className='p-2'></div>
   <div className='grid grid-cols-1 gap-8 p-4 lg:grid-cols-3'>
    <TechCard
     name='React'
     logo={<ReactLogo width={100} height={100} />}
     description={
      <>
       For my front end work, I mainly use the React library. Depending on the
       scale & nature of the project, I find it easy to expand the available
       toolset with a wide variety of well maintained solutions
      </>
     }
    />
    <TechCard
     name='NextJS'
     logo={<NextLogo width={120} height={100} />}
     description={
      <>
       Expanding on my love for React, I find Next.js to be the best Meta
       Framework at the moment. When SEO and rendering flexiblity are a priority, this is clearly my go to.
      </>
     }
    />
    <TechCard
     name='React'
     logo={<ReactLogo width={100} height={100} />}
     description={
      <>
       For my front end work, I mainly use the React library. Depending on the
       scale & nature of the project, I can expand the toolset with a wide
       variety of well maintained open source solutions
      </>
     }
    />
   </div>
  </>
 );
};

export default TechCardsContainer;
