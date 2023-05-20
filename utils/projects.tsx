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
  },
  {
    title: 'M2Core Web App',
    subtitle: 'User to user trading platform',
    description: (
      <>
        <p>
          &emsp;&emsp;Plugyn Store is one of the biggest providers of digital
          services in the Metin2 community. Their website is built using the
          Next framework, with a combination of server side & client side
          rendering.
        </p>
        <div className='p-1'></div>
        <p>
          &emsp;&emsp;The only data fetching required is from a MongoDB Atlas
          instance, which holds the real time prices for their services. Also,
          the rating count is being fetched from the ElitePvpers Forum API.
        </p>
      </>
    ),
    imagePath: '/png/ps-3d.png',
    technologies: [
      'react',
      'express',
      'mongoDB',
      'node',
      'tailwindCSS',
      'socketIO',
      'redis',
      'AWS S3',
      'redux',
      'react-query',
      'axiom',
    ],
    url: m2coreLink,
  },
  {
    title: 'Order Web & Mobile App',
    subtitle: 'On the spot order app for restaurants',
    description: (
      <>
        <p>
          &emsp;&emsp;Plugyn Store is one of the biggest providers of digital
          services in the Metin2 community. Their website is built using the
          Next framework, with a combination of server side & client side
          rendering.
        </p>
        <div className='p-1'></div>
        <p>
          &emsp;&emsp;The only data fetching required is from a MongoDB Atlas
          instance, which holds the real time prices for their services. Also,
          the rating count is being fetched from the ElitePvpers Forum API.
        </p>
      </>
    ),
    imagePath: '/png/ps-3d.png',
    technologies: [
      'react',
      'react-native',
      'typescript',
      'tailwindCSS',
      'stripe',
      'zustand',
    ],
    url: plugynStoreLink,
  },
];

export default projects;
