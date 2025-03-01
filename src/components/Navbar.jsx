import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, PlusCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">FundHope</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link to="/discover" className="text-gray-700 hover:text-purple-600">Discover</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
            <Link
              to="/create"
              className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Start a Campaign</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/discover" 
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Discover
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/create"
                className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <PlusCircle className="h-5 w-5" />
                <span>Start a Campaign</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;