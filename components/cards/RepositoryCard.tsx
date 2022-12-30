import { GithubRepo } from "../../utils/types";

const RepositoryCard = ({ repo }: { repo: GithubRepo }) => {
  return (
    <div className="border border-green-100 rounded-lg">
      <div className="bg-green-800 p-3 rounded-t-md">
        <p className="font-medium bg-green-800">{repo.name}</p>
      </div>
      <div className="p-3">
        {repo.description}
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-300 h-4 w-4"></div>
          <p>{repo.language}</p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
