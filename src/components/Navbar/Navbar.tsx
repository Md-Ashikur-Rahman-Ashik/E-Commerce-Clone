"use client"
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  // Detect screen size to toggle hamburger
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menuElement = document.querySelector('.mobile-menu');
      if (isMenuOpen && menuElement && !menuElement.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="navbar fixed w-full bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/images/E-CommerceLogo-1.jpg" alt="Logo" className="h-8 w-48" />
        </div>

        {/* Shop Now Button */}
        <div className="flex items-center">
          {!isScreenSmall && (
            <ul className="flex space-x-8 text-black dark:text-white">
              <li>WHO WE ARE</li>
              <li>one8 WORLD</li>
              <li>one8 RUN</li>
              <li>one8 FITNESS</li>
              <li>ASSOCIATION</li>
              <li>PRESS & MEDIA</li>
              <li>GET IN TOUCH</li>
            </ul>
          )}

          {/* Shop Now Button */}
          <button className="bg-yellow-500 text-white px-4 py-2 ml-6">Shop Now</button>

          {/* Hamburger Icon for Mobile */}
          {isScreenSmall && (
            <button
              className={`ml-4 ${isMenuOpen ? 'hidden' : 'block'}`}
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="w-6 h-0.5 bg-yellow-500 mb-1"></div>
              <div className="w-6 h-0.5 bg-yellow-500 mb-1"></div>
              <div className="w-6 h-0.5 bg-yellow-500"></div>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu absolute top-0 right-0 w-64 h-screen bg-black bg-opacity-90 flex flex-col justify-center items-start p-8 space-y-6 text-white transform transition-transform duration-300">
            <ul className="text-left text-lg space-y-4">
              <li>WHO WE ARE</li>
              <li>one8 WORLD</li>
              <li>one8 RUN</li>
              <li>one8 FITNESS</li>
              <li>ASSOCIATION</li>
              <li>PRESS & MEDIA</li>
              <li>GET IN TOUCH</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;