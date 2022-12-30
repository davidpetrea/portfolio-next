import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <body>
    {/* Background container */}
    <div className='flex flex-col flex-1 min-h-screen bg-fixed bg-black bg-opacity-50 bg-center bg-no-repeat bg-cover bg-main bg-blend-overlay'>
     <Navbar />
     <main className='flex-1 w-full bg-right bg-cover bg-pattern'>
      <div className='p-4 mx-auto max-w-7xl'> {children}</div>
     </main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
