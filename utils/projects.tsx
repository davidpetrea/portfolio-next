import { plugynStoreLink } from './links';

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
  url: plugynStoreLink,
 },
 {
  title: 'M2Core Forum',
  subtitle: 'Player to player trading platform',
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
  technologies: [
   'react',
   'express',
   'mongoDB',
   'node',
   'tailwindCSS',
   'socketIO',
  ],
  url: plugynStoreLink,
 },
 {
  title: 'Chat App',
  subtitle: 'Live chatting App using websockets',
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
  url: plugynStoreLink,
 },
];

export default projects;
