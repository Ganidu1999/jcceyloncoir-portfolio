import React from 'react';
import { X } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-coir-dark/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
        <div className="flex justify-between items-center p-6 border-b border-stone-100">
          <h3 className="text-2xl font-bold text-coir-dark">{product.name}</h3>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors cursor-pointer">
            <X size={24} className="text-stone-500" />
          </button>
        </div>
        <div className="p-6">
          <table className="w-full text-left border-collapse">
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key} className="border-b border-stone-50 hover:bg-coir-ivory/40">
                  <td className="py-3.5 font-bold text-coir-primary w-1/3 text-sm tracking-wide">{key}</td>
                  <td className="py-3.5 text-stone-600 text-sm font-medium">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}