import { GithubRepo } from '../../utils/types';
import RepositoryCard from '../cards/RepositoryCard';
import { GithubIcon } from '../../assets/svg/SvgComponents';

const RepositoryCardList = ({ repos }: { repos: GithubRepo[] }) => {
 if (!repos.length) return null;

 return (
  <>
   <div className='flex items-center gap-1 mb-2 text-lg font-medium fill-black'>
    <GithubIcon width={32} height={32} />
    <h3>Github repositories</h3>
   </div>
   <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
    {repos.map((e: GithubRepo) => {
     return <RepositoryCard key={e.id} repo={e} />;
    })}
   </div>
  </>
 );
};

export default RepositoryCardList;
