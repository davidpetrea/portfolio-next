import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-orange p-3 text-green-200 bg-green-800">
      <div className="flex items-center justify-between gap-4 mx-auto text-lg max-w-7xl">
        <Link href="/">Home</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
