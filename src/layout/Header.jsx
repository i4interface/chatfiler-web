// src/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const [isSticky, setIsSticky] = useState(false);
  const _stickyScrollHandler = () => {
    const scrollPosition = window.scrollY;
    const headerHeight = document.getElementById('header').offsetHeight;

    if (scrollPosition > headerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    const headerElement = document.getElementById('header');

    if (headerElement) {

      window.removeEventListener('scroll', _stickyScrollHandler);
      window.addEventListener('scroll', _stickyScrollHandler);
    }

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', _stickyScrollHandler);
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <header id="header" className={`bg-white shadow-md header_sticky ${isSticky ? 'header_sticky-active' : ''}`}>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            <a href="/"
              
              className={`font-poppins text-gray-700 ${
                isCurrentPage("/") && "text-red-700"
              }`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`font-poppins text-gray-700 ${
                isCurrentPage("/about") && "text-red-700"
              }`}
            >
              About Us
            </a>
            <a
              href="/tax-payers"
              className={`font-poppins text-gray-700 ${
                isCurrentPage("/tax-payers") && "text-red-700"
              }`}
            >
              Tax Payers
            </a>
            {/* <a
              href="/news"
              className={`font-poppins text-gray-700 ${
                isCurrentPage("/news") && "text-red-700"
              }`}
            >
              News/Update
            </a> */}
            <a
              href="/pricing"
              className={`font-poppins text-gray-700 ${
                isCurrentPage("/pricing") && "text-red-700"
              }`}
            >
              Pricing
            </a>
            <a
              href="/contact"
              className={`font-poppins text-gray-700 ${
                isCurrentPage("/contact") && "text-red-700"
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Rounded Button */}
          <a
          
           href="https://app.chatfiler.ca/2023/auth/login"            className="font-poppins bg-[#AF1B19] text-white rounded-full py-2 px-6 hover:bg-red-700 transition-all duration-300"
          >
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
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white opacity-90 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300`}
      >
        <div className="p-4">
          {/* Logo in Sidebar */}
          <div className="flex items-center mb-12">
            <img
              src="/images/logo.png"
              alt="Sidebar Logo"
              className="h-12 mr-2"
            />
          </div>

          {/* Navigation Links */}
          <a
            href="/"
            className={`block text-black font-poppins py-2 ${
              isCurrentPage("/") && "text-red-700"
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`block text-black font-poppins py-2 ${
              isCurrentPage("/about") && "text-red-700"
            }`}
          >
            About Us
          </a>
          <a
            href="/tax-payers"
            className={`block text-black font-poppins py-2 ${
              isCurrentPage("/tax-payers") && "text-red-700"
            }`}
          >
            Tax Payers
          </a>
          {/* <a
            href="/news"
            className={`block text-black font-poppins py-2 ${
              isCurrentPage("/news") && "text-red-700"
            }`}
          >
            News/Update
          </a> */}
          <a
            href="/pricing"
            className={`block text-black font-poppins py-2 ${
              isCurrentPage("/pricing") && "text-red-700"
            }`}
          >
            Pricing
          </a>
          <a
            href="/contact"
            className={`block text-black font-poppins py-2 ${
              isCurrentPage("/contact") && "text-red-700"
            }`}
          >
            Contact Us
          </a>
        </div>
        {/* Social Media Icons at the bottom */}
        <div className="flex justify-center items-center mt-auto mb-4">
          {/* Facebook Icon */}
          <a href="#" className="text-white mx-2">
            <img
              src="/icons/square-facebook.svg"
              alt="Facebook"
              className="h-6"
            />
          </a>

          {/* Twitter Icon */}
          <a href="#" className="text-white mx-2">
            <img
              src="/icons/square-x-twitter.svg"
              alt="Twitter"
              className="h-6"
            />
          </a>

          {/* Instagram Icon */}
          <a href="#" className="text-white mx-2">
            <img
              src="/icons/square-instagram.svg"
              alt="Instagram"
              className="h-6"
            />
          </a>
        </div>
        {/* Close Sidebar Button */}
        <button
          onClick={closeSidebar}
          className="absolute top-0 right-0 m-4 text-black cursor-pointer focus:outline-none"
        >
          <img src="/icons/xmark-solid.svg" alt="Close" className="h-6" />
        </button>
      </div>
    </div>
  );
}

export default Header;
