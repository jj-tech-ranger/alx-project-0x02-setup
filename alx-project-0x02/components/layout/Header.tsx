import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Next.js App
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-gray-300 transition-colors">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/users" className="hover:text-gray-300 transition-colors">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
