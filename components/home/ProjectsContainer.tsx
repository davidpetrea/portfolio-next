'use client';
import { Tab } from '@headlessui/react';

const projects = [
 {
  title: 'Plugyn Store',
  description: 'Some desc 1',
 },
 {
  title: 'M2Core Trading Forum',
  description: 'Some desc 2',
 },
 {
  title: 'Chat App',
  description: 'Some desc 3',
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
     {projects.map(project => (
      <Tab
       key={project.title}
       className={({ selected }) =>
        `${
         selected ? 'bg-green-600 text-black' : 'text-green-100'
        } w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-green-800 ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2`
       }
      >
       {project.title}
      </Tab>
     ))}
    </Tab.List>
    <Tab.Panels className='w-full p-4 lg:w-3/4'>
     {projects.map(project => (
      <Tab.Panel key={project.title}>{project.description}</Tab.Panel>
     ))}
    </Tab.Panels>
   </Tab.Group>
  </>
 );
};

const Project = () => {
 return (
  <div>
   <h2>Title</h2>
  </div>
 );
};

export default ProjectsContainer;
