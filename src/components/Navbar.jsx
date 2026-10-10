import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-stone-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="JC Ceylon Coir logo" 
            className="h-14 w-auto object-contain"
          />
        </a>
        <div className="flex items-center gap-8 font-semibold text-coir-dark">
          <a href="/#about" className="hover:text-coir-leaf transition-colors">About Us</a>
          <a href="/#products" className="hover:text-coir-leaf transition-colors">Our Products</a>
          <a href="/#contact" className="hover:text-coir-leaf transition-colors">Contact Us</a>
          
          {/* Quote Button opening in a new tab */}
          <a 
            href="/quote" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-coir-leaf hover:bg-coir-leaf/90 text-white font-bold px-5 py-2.5 rounded-lg transition-all text-sm shadow-sm hover:scale-[1.03] inline-block"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}