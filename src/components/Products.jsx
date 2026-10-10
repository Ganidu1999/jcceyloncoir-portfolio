import React, { useState } from 'react';
import { products } from '../data/productsData';
import ProductModal from './ProductModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="products" className="scroll-mt-20 py-20 bg-coir-ivory">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coir-dark">Our Products</h2>
          <div className="w-16 h-1 bg-coir-leaf mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-stone-100 cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-coir-dark group-hover:text-coir-leaf transition-colors">
                  {product.name}
                </h3>
              </div>
              
              {/* Hover overlay with Natural Green brand touch */}
              <div className="absolute inset-0 bg-coir-dark/95 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center">
                <p className="mb-6 text-sm leading-relaxed text-coir-muted">{product.shortDesc}</p>
                <span className="border-2 border-coir-leaf text-coir-leaf bg-white/10 hover:bg-coir-leaf hover:text-white px-5 py-2 rounded-lg text-sm transition-all font-semibold uppercase tracking-wider">
                  View Specifications
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}