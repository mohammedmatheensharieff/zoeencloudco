import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Users, Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="h-8 w-8 text-white" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Zoeen<span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Cloud</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors">
              <Code className="h-5 w-5" />
              <span>Services</span>
            </Link>
            <Link to="/internships" className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors">
              <Users className="h-5 w-5" />
              <span>Internships</span>
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/internships"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Internships
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;