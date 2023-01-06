import RepositoryCardList from '../components/home/RepositoryCardList';
import { GithubRepo } from '../utils/types';
import * as data from '../data.json';
import Title from '../components/home/Title';
import TechCardsContainer from '../components/home/TechCardsContainer';
import ProjectsContainer from '../components/home/ProjectsContainer';

const getRepositories = async () => {
 const res = await fetch(`https://api.github.com/users/davidpetrea/repos`);

 if (!res.ok) {
  // This will activate the closest `error.js` Error Boundary
  throw new Error('Failed to fetch data.');
 }

 return (await res.json()) as GithubRepo[];
};

const Home = async () => {
 //const repos = await getRepositories();

 //read data from data.json file
 const repos = data.data.map(e => {
  return {
   id: e.id,
   name: e.name,
   url: e.html_url,
   description: e.description,
   language: e.language,
  };
 });

 return (
  <div>
   <Title />
   <div className='p-4'></div>
    {/* Projects slider */}
   <ProjectsContainer />
   <div className='p-4'></div>
   {/* Tech cards container */}
   <TechCardsContainer />
   <div className='p-4'></div>
   <RepositoryCardList repos={repos} />
  </div>
 );
};

export default Home;
