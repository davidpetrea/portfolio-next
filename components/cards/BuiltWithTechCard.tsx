import { Tech } from '../../utils/types';

type BuiltWithTechCardPropsType = {
  tech: Tech;
};

const BuiltWithTechCard = ({ tech }: BuiltWithTechCardPropsType) => {
  return (
    <div className='p-1 px-3 text-sm border-2 border-green-100 rounded-full font-bold'>
      {tech}
    </div>
  );
};

export default BuiltWithTechCard;
