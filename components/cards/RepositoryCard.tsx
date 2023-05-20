import Link from 'next/link';
import { GithubRepo } from '../../utils/types';

const RepositoryCard = ({ repo }: { repo: GithubRepo }) => {
  return (
    <div className='border border-green-100 rounded-lg shadow-dp02 flex flex-col'>
      <div className='p-3 bg-green-500 rounded-t-md'>
        <Link
          href={repo.html_url}
          target='_blank'
          rel='noreferrer'
          className='font-medium text-black hover:underline'
        >
          {repo.name}
        </Link>
      </div>
      <div className='p-3 flex flex-col gap-2 justify-between grow'>
        {repo.description ? (
          <span className='text-sm font-medium'>{repo.description}</span>
        ) : (
          <span className='text-xs text-gray-300'>No description</span>
        )}
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-green-300 rounded-full'></div>
          <p>{repo.language}</p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
