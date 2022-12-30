import RepositoryCardList from "../components/home/RepositoryCardList";
import { GithubRepo } from "../utils/types";
import * as data from "../data.json";

const getRepositories = async () => {
  const res = await fetch(`https://api.github.com/users/davidpetrea/repos`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data.");
  }

  return (await res.json()) as GithubRepo[];
};

const Home = async () => {
  //const repos = await getRepositories();
  //console.log(repos);
  console.log(data);
  const repos = data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      description: e.description,
      language: e.language,
    };
  });
  return (
    <div>
      <RepositoryCardList repos={repos} />
    </div>
  );
};

export default Home;