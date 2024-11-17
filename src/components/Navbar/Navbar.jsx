import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { HiSearch } from 'react-icons/hi'; // Importing search icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyLogo</div>
        
        <div className="hidden md:flex space-x-6">
          <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Login</a>
          <a href="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Regester</a>
          <div className="relative">
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200" onClick={toggleDropdown}>
              Services
            </button>
            {/* Dropdown Menu for Desktop */}
            <div className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Web Development</a>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">SEO</a>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Marketing</a>
            </div>
          </div>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Contact</a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition duration-200">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Home</a>
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">About</a>
          <div className="relative">
            <button className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200" onClick={toggleDropdown}>
              Services
            </button>
            {/* Dropdown Menu for Mobile */}
            <div className={`absolute left-0 mt-2 w-full bg-gray-800 rounded-md shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Web Development</a>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">SEO</a>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Marketing</a>
            </div>
          </div>
          <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition duration-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar