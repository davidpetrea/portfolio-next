'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';
import BuiltWithTechCard from '../cards/BuiltWithTechCard';
import { Tech } from '../../utils/types';
import Link from 'next/link';
import projects from '../../utils/projects';

const ProjectsContainer = () => {
  return (
    <>
      <div
        id='projects'
        className='p-2 text-xl font-medium text-center text-black bg-green-300 rounded-lg shadow-dp02'
      >
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
          {projects.map((project, index) => (
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
  imagePath?: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
};

const Project = ({ project }: { project: ProjectPropsType }) => {
  return (
    <div className='flex flex-col gap-2 lg:flex-row'>
      {project.imagePath && (
        <Image
          src={project.imagePath}
          alt='Project showcase'
          width={500}
          height={600}
          className='mx-auto w-auto h-auto object-contain'
        />
      )}
      <div className='flex-1 '>
        <h2 className='text-2xl font-bold text-center'>{project.title}</h2>
        <h3 className='font-medium text-center text-green-300'>
          - {project.subtitle} -
        </h3>
        <div className='p-4'></div>
        <div className='max-w-lg text-center mx-auto'>
          {project.description}
        </div>

        <div className='p-2'></div>
        <p className='text-lg font-medium text-green-200'>Built with</p>
        <div className='flex flex-wrap gap-2'>
          {(project.technologies as Tech[]).map((tech) => (
            <BuiltWithTechCard key={tech} tech={tech} />
          ))}
        </div>
        <div className='p-2'></div>
        <p className='text-lg font-medium text-green-200'>Visit website</p>
        {project.url ? (
          <div>
            <Link
              href={project.url}
              target='_blank'
              className='text-sm font-medium hover:text-black'
            >
              {project.url}
            </Link>
          </div>
        ) : (
          <div>Coming soon...</div>
        )}
        {project.githubUrl && (
          <>
            <p className='text-lg font-medium text-green-200 mt-2'>
              Github repo
            </p>
            <Link
              href={project.githubUrl}
              target='_blank'
              className='text-sm font-medium hover:text-black'
            >
              {project.githubUrl}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectsContainer;
