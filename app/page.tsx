import RepositoryCardList from '../components/home/RepositoryCardList';
import { GithubRepo } from '../utils/types';
import data from '../data.json';
import Title from '../components/home/Title';
import TechCardsContainer from '../components/home/TechCardsContainer';
import ProjectsContainer from '../components/home/ProjectsContainer';
import { Metadata } from 'next';

// const getRepositories = async () => {
//   const res = await fetch(`https://api.github.com/users/davidpetrea/repos`);

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data.');
//   }

//   return (await res.json()) as GithubRepo[];
// };

export const metadata: Metadata = {
  title: 'David Petrea | Full Stack Web Developer',
  description:
    "Hi! My name is David and I am a self taught, full stack web developer. Please check out my projects and if anything looks interesting to you, hit me up with some feedback! I am also looking for work, so let's bring your web ideas to life.",
  icons: 'logo.svg',
  viewport: {
    initialScale: 1,
    width: 'device-width',
  },
};

const Home = async () => {
  //const repos = await getRepositories();
  const repoList: GithubRepo[] = data.data;
  //read data from data.json file
  const repos = repoList.map<GithubRepo>((e) => {
    return {
      id: e.id,
      name: e.name,
      html_url: e.html_url,
      description: e.description,
      language: e.language,
    };
  });

  return (
    <div>
      <Title />
      <div className='p-4'></div>
      <p className='max-w-[34rem] text-center md:text-left text-lg text-green-100'>
        As a self-taught full stack web developer, I have honed my skills
        through hands-on experience and a relentless pursuit of knowledge in the
        ever-evolving world of web development. I have developed a deep affinity
        for React and the limitless possibilities it offers in creating seamless
        user experiences.
      </p>
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
