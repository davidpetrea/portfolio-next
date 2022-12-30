import { GithubRepo } from "../../utils/types";
import RepositoryCard from "../cards/RepositoryCard";

const RepositoryCardList = ({ repos }: { repos: GithubRepo[] }) => {
  if (!repos.length) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {repos.map((e: GithubRepo) => {
        console.log(e.id);
        return <RepositoryCard key={e.id} repo={e} />;
      })}
    </div>
  );
};

export default RepositoryCardList;
