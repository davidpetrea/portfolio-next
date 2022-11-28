import Head from 'next/head';

export default function Home() {
 return (
  <div>
   <Head>
    <title>Create Next App</title>
    <meta name='description' content='Web Portfolio built using Next.js.' />
    <link rel='icon' href='/favicon.ico' />
   </Head>
   <h1 className='text-3xl font-bold text-red text-center'>Hello World</h1>
  </div>
 );
}
