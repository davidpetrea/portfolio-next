import { Tech } from '../../utils/types';

type BuiltWithTechCardPropsType = {
 tech: Tech;
};

const BuiltWithTechCard = ({ tech }: BuiltWithTechCardPropsType) => {
 return <div>{tech} b</div>;
};

export default BuiltWithTechCard;
