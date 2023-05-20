import { m2coreLink, plugynStoreLink } from './links';

const projects = [
  {
    title: 'Plugyn Store',
    subtitle: 'Gaming services website',
    description: (
      <>
        <p>
          &emsp;&emsp;Plugyn Store is one of the biggest providers of services
          in the Metin2 community. Their website is built using the Next
          framework, with a combination of server side & client side rendering.
        </p>
        <div className='p-1'></div>
        <p>
          &emsp;&emsp;MongoDB is used as the database solution, due to the
          flexible nature of the document-based paradigm. Also, the rating count
          is being fetched from the ElitePvpers Forum API.
        </p>
      </>
    ),
    imagePath: '/png/ps-3d.png',
    technologies: ['next.js', 'typescript', 'tailwindCSS', 'mongoDB'],
    url: plugynStoreLink,
    githubUrl: 'https://github.com/davidpetrea/plugyn-store',
  },
  {
    title: 'M2Core Web App',
    subtitle: 'User to user trading platform',
    description: (
      <>
        <p>
          &emsp;&emsp;M2Core is a fresh release, and by far my biggest project
          to date. It is a trading platform where users can advertise, buy, sell
          or trade various ingame currencies, items and accounts for multiple
          online games.
        </p>
        <div className='p-1'></div>
        <p>
          &emsp;&emsp;It is a feature rich web application, focusing on
          providing a modern and safe environment for gaming communities to
          trade in. It features an unique account progression system, with
          multiple levels, achievements and badges. This ties strongly with the
          Trading and Transfer system, which helps users build a solid trading
          profile.
        </p>
        <div className='p-1'></div>
        <p className=''>
          &emsp;&emsp;Users can also advertise their goods and services via the
          Post upgrade system, which includes a real time auction system for the
          top-most positions. Some other key features are: a friends & chat
          system, crypto payments & vouchers integration, a reliable report and
          moderator toolset, and many more.
        </p>
      </>
    ),
    imagePath: '/png/m2core_preview.png',
    technologies: [
      'react',
      'express',
      'mongoDB',
      'node',
      'tailwindCSS',
      'socketIO',
      'redis',
      'redux',
      'react-query',
      'axiom',
    ],
    url: m2coreLink,
  },
  {
    title: 'Web & Mobile Order App',
    subtitle: 'Order app for restaurants',
    description: (
      <>
        <p className='max-w-md'>
          &emsp;&emsp;This is an ongoing project that I am part of, working on
          both the web and the mobile client facing applications for an order
          app.
        </p>
        <div className='p-1'></div>
        <p>
          &emsp;&emsp;The highlight features of both apps are: browse menu and
          order placement with stripe payments integration for the web app;
          basic authentication system for restaurants where orders can be
          managed in real time via websockets.
        </p>
      </>
    ),

    technologies: [
      'react',
      'react-native',
      'typescript',
      'tailwindCSS',
      'stripe',
      'zustand',
    ],
  },
];

export default projects;
