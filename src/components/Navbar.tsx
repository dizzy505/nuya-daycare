import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-theme-navbar shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.jpg"
                alt="Nuya Kid's Care Logo"
                className="h-12 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">Nuya Kid's Care</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-primary-200 transition-colors">
              Tentang Kami
            </Link>
            <Link to="/programs" className="text-white hover:text-primary-200 transition-colors">
              Program
            </Link>
            <Link to="/facilities" className="text-white hover:text-primary-200 transition-colors">
              Fasilitas
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-theme-navbar">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary-200 hover:bg-primary-700"
            >
              Tentang Kami
            </Link>
            <Link
              to="/programs"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary-200 hover:bg-primary-700"
            >
              Program
            </Link>
            <Link
              to="/facilities"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary-200 hover:bg-primary-700"
            >
              Fasilitas
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
