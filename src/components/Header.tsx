'use client';

import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">BM</span>
            </div>
            <span className="text-lg md:text-xl font-bold font-heading text-gray-800">Barber & Makeup Studio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">Home</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors text-sm lg:text-base">Contact</a>
            <button 
              onClick={() => {
                if (window.openBookingModal) {
                  window.openBookingModal('');
                }
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 lg:px-6 py-2 rounded-full hover:shadow-lg transition-shadow text-sm lg:text-base"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white shadow-lg">
            <nav className="flex flex-col space-y-3 px-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>Home</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-lg font-medium" onClick={toggleMenu}>Contact</a>
              <button 
                onClick={() => {
                  if (window.openBookingModal) {
                    window.openBookingModal('');
                  }
                  toggleMenu();
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow w-full text-lg font-semibold mt-4"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
