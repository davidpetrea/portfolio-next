import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background container */}
        <div className="flex flex-col flex-1 min-h-screen bg-fixed bg-no-repeat bg-cover bg-center bg-main bg-blend-overlay bg-black bg-opacity-50">
          <Navbar />
          <main className="flex-1 w-full bg-green-900">
            <div className="max-w-7xl p-4 mx-auto"> {children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
