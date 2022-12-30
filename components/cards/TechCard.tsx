import { ReactElement } from 'react';

type TechCardProps = {
 name: string;
 logo: ReactElement;
 description: JSX.Element | string;
};

const TechCard = ({ name, logo, description }: TechCardProps) => {
 return (
  <div className='flex flex-col items-center'>
   <div>{logo}</div>
   <h2 className='text-xl font-bold'>{name}</h2>
   <p className='max-w-lg text-center'>{description}</p>
  </div>
 );
};

export default TechCard;
