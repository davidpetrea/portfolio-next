import Head from 'next/head';
import Nav from '../components/Nav';

export default function Home() {
 return (
  <div>
   <Head>
    <title>David Petrea - Full Stack Web Developer</title>
    <meta name='description' content='Web Portfolio built using Next.js.' />
    <link rel='icon' href='/favicon.ico' />
   </Head>
   <Nav />
   <main className='min-h-screen bg-surface-dark'>
    <h1 className='text-4xl text-center text-white bg-surface-light font-header'>
     Hello from development branch.
    </h1>
   </main>
  </div>
 );
}
