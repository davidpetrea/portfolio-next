'use client';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import BuiltWithTechCard from '../cards/BuiltWithTechCard';
import { Tech } from '../../utils/types';

const projects = [
 {
  title: 'Plugyn Store',
  subtitle: 'Gaming services website',
  description: (
   <>
    <p>
     &emsp;&emsp;Plugyn Store is one of the biggest providers of digital
     services in the Metin2 community. Their website is built using the Next
     framework, with a combination of server side & client side rendering.
    </p>
    <div className='p-1'></div>
    <p>
     &emsp;&emsp;The only data fetching required is from a MongoDB Atlas
     instance, which holds the real time prices for their services. Also, the
     rating count is being fetched from the ElitePvpers Forum API.
    </p>
   </>
  ),
  imagePath: '/png/ps-3d.png',
  technologies: ['next', 'typescript', 'tailwindCSS', 'mongoDB'],
 },
 {
  title: 'M2Core Forum',
  subtitle: 'Player to player trading platform',
  description: (
   <>
    <p>This is some paragraph</p>
    <p>This is other paragraph</p>
    <p>This is some paragraph</p>
    <p>This is some paragraph</p>
   </>
  ),
  imagePath: '/png/ps-3d2.png',
  technologies: ['next', 'typescript', 'tailwindCSS', 'mongoDB'],
 },
 {
  title: 'Chat App',
  subtitle: 'Live chatting App using websockets',
  description: (
   <>
    <p>This is some paragraph</p>
    <p>This is some paragraph</p>
    <p>This is some paragraph</p>
    <p>This is some paragraph</p>
   </>
  ),
  imagePath: '/png/ps-3d.png',
  technologies: ['next', 'typescript', 'tailwindCSS', 'mongoDB'],
 },
];

const ProjectsContainer = () => {
 return (
  <>
   <div className='p-2 text-xl font-medium text-center text-black bg-green-300 rounded-lg shadow-dp02'>
    Projects
   </div>
   <div className='p-2'></div>
   <Tab.Group>
    <Tab.List className='flex w-full mx-auto text-sm border border-green-100 divide-x divide-green-100 rounded-lg lg:text-base lg:w-3/4'>
     {projects.map((project, index) => (
      <Tab
       key={project.title}
       className={({ selected }) =>
        `${selected ? 'bg-green-600 text-black' : 'text-green-100'} ${
         index === 0
          ? 'rounded-l-lg'
          : index === projects.length - 1
          ? 'rounded-r-lg'
          : ''
        } w-full py-2.5 text-sm font-medium leading-5 ring-green-800 ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2`
       }
      >
       {project.title}
      </Tab>
     ))}
    </Tab.List>
    <Tab.Panels className='w-full p-4'>
     {projects.map(project => (
      <Tab.Panel key={project.title}>
       <Project project={project} />
      </Tab.Panel>
     ))}
    </Tab.Panels>
   </Tab.Group>
  </>
 );
};

type ProjectPropsType = {
 title: string;
 subtitle: string;
 description: JSX.Element;
 imagePath: string;
 technologies: string[];
};

const Project = ({ project }: { project: ProjectPropsType }) => {
 return (
  <div className='flex flex-col gap-2 lg:flex-row'>
   <Image
    src={project.imagePath}
    alt='Project showcase'
    width={600}
    height={600}
    className='mx-auto'
   />
   <div className='flex-1 '>
    <h2 className='text-2xl font-bold text-center'>{project.title}</h2>
    <h3 className='font-medium text-center text-green-300'>
     - {project.subtitle} -
    </h3>
    <div className='p-4'></div>
    {project.description}
    <div className='p-2'></div>
    <p className='text-xl font-medium text-black'>Built with</p>
    <div className='flex flex-wrap gap-2'>
     {project.technologies.map(tech => (
      <BuiltWithTechCard key={tech} tech={tech as Tech} />
     ))}
    </div>
   </div>
  </div>
 );
};

export default ProjectsContainer;
