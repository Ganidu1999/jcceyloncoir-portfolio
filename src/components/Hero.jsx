import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-20 bg-coir-primary text-white py-28 text-center px-4 relative overflow-hidden">
      {/* Decorative leaf background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-coir-dark/30 to-coir-primary/95 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <span className="text-coir-leaf font-extrabold uppercase tracking-widest text-sm">Natural • Sustainable • Global</span>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-2">
          Welcome to JCCeylonCoir Pvt LTD
        </h2>
        <p className="text-xl text-coir-muted max-w-2xl mx-auto leading-relaxed font-light">
          Premium exporters of eco-friendly, organic coconut coir substrates from Sri Lanka. 
          We harvest, refine, and ship high-grade coco peat and fiber solutions engineered for optimal agricultural and hydroponic performance worldwide.
        </p>
        <div className="pt-4">
          <a 
            href="#products" 
            className="bg-coir-leaf hover:bg-coir-leaf/90 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-all inline-block hover:scale-[1.02]"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
}