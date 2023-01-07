import { Tech } from '../../utils/types';

type BuiltWithTechCardPropsType = {
 tech: Tech;
};

const BuiltWithTechCard = ({ tech }: BuiltWithTechCardPropsType) => {
 return (
  <div className='p-1 px-3 border border-green-100 rounded-full'>{tech}</div>
 );
};

export default BuiltWithTechCard;
