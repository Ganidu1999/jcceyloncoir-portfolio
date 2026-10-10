import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <footer className="bg-coir-dark text-white py-8 text-center text-sm border-t border-stone-900">
        <p className="text-stone-400">&copy; {new Date().getFullYear()} JCCeylonCoir Pvt LTD. All Rights Reserved.</p>
        <p className="text-coir-leaf mt-1.5 text-xs tracking-widest font-semibold uppercase">Natural • Sustainable • Global</p>
      </footer>
    </div>
  );
}