import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-gray-800 p-4 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          Il Mio Progetto
        </Link>

        <div className="space-x-4">
          <Link href="/home" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/posts" className="hover:text-blue-400">
            Posts
          </Link>
          <Link href="/users" className="hover:text-blue-400">
                Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;