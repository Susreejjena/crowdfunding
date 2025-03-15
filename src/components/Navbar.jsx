import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart, PlusCircle, Menu, X, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    console.log("Mobile Menu State:", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">FundHope</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-purple-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">Home</Link>
            <Link to="/discover" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">Discover</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">About</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600">Contact</Link>
            <Link to="/create" className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              <PlusCircle className="h-5 w-5" />
              <span>Start a Campaign</span>
            </Link>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)} 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 flex items-center gap-1"
              >
                <User className="h-6 w-6" />
                <ChevronDown className="h-4 w-4" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-50">
                  <Link to="/login" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">Login</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-4 space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4`}>
          <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">Home</Link>
          <Link to="/discover" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">Discover</Link>
          <Link to="/about" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">About</Link>
          <Link to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">Contact</Link>
          <Link to="/create" className="block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-center">
          Donate Now
          </Link>

          {/* User Dropdown in Mobile Menu */}
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)} 
              className="w-full text-gray-700 dark:text-gray-300 hover:text-purple-600 flex justify-between items-center py-2"
            >
              <span>Account</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {showDropdown && (
              <div className="mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-lg z-50">
                <Link to="/login" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default Navbar;