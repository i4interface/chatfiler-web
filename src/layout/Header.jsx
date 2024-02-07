// src/Header.js
import React, { useState } from 'react';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-9999">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="font-poppins text-gray-700 hover:text-red-700">Home</a>
            <a href="#" className="font-poppins text-gray-700 hover:text-red-700">About Us</a>
            <a href="#" className="font-poppins text-gray-700 hover:text-red-700">Tax Payers</a>
            <a href="#" className="font-poppins text-gray-700 hover:text-red-700">News/Update</a>
            <a href="#" className="font-poppins text-gray-700 hover:text-red-700">Contact Us</a>
          </nav>

          {/* Rounded Button */}
          <a href="#" className="font-poppins bg-red-600 text-white rounded-full py-2 px-6 hover:bg-red-700 transition-all duration-300">
            Login/Register
          </a>

          {/* Mobile Menu Icon (Hidden by default) */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-gray-700">
            <img src="/icons/bars-solid.svg" alt="Menu" className="h-6" />
              
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-full bg-white opacity-90 z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
        <div className="p-4">
          {/* Logo in Sidebar */}
          <div className="flex items-center mb-12">
            <img src="/images/logo.png" alt="Sidebar Logo" className="h-12 mr-2" />
            <span className="text-white font-poppins text-lg">Your Sidebar Logo</span>
          </div>

          {/* Navigation Links */}
          <a href="#" className="block text-black font-poppins py-2 hover:text-red-700">Home</a>
          <a href="#" className="block text-black font-poppins py-2 hover:text-red-700">About Us</a>
          <a href="#" className="block text-black font-poppins py-2 hover:text-red-700">Tax Payers</a>
          <a href="#" className="block text-black font-poppins py-2 hover:text-red-700">News/Update</a>
          <a href="#" className="block text-black font-poppins py-2 hover:text-red-700">Contact Us</a>
        </div>
        {/* Social Media Icons at the bottom */}
        <div className="flex justify-center items-center mt-auto mb-4">
          {/* Facebook Icon */}
          <a href="#" className="text-white mx-2">
          
          
          <img src="/icons/square-facebook.svg" alt="Facebook" className="h-6" />
          </a>

          {/* Twitter Icon */}
          <a href="#" className="text-white mx-2">
          <img src="/icons/square-x-twitter.svg" alt="Twitter" className="h-6" />
          
          </a>

          {/* Instagram Icon */}
          <a href="#" className="text-white mx-2">
          <img src="/icons/square-instagram.svg" alt="Instagram" className="h-6" />
          
          </a>
        </div>
        {/* Close Sidebar Button */}
        <button onClick={closeSidebar} className="absolute top-0 right-0 m-4 text-black cursor-pointer focus:outline-none">
        <img src="/icons/xmark-solid.svg" alt="Close" className="h-6" />
          
        </button>
      </div>
    </div>
  );
}

export default Header;
