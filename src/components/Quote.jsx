import React from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Quote() {
  const options = [
    {
      id: 1,
      title: '5kg Low EC coco-peat bricks',
      description: 'Washed, low electrical conductivity coco peat suitable for sensitive crops, greenhouses, and professional hydroponics.'
    },
    {
      id: 2,
      title: '5kg High EC coco-peat bricks',
      description: 'Unwashed, high electrical conductivity coco peat suitable for animal bedding, soil conditioning, and landscaping.'
    }
  ];

  const handleSendQuoteEmail = (optionTitle) => {
    const recipient = 'info@jcceyloncoir.com';
    const subject = 'Requesting a quote';
    const body = `Hi JCCeylon coir. Please send a quotation for ${optionTitle} on FOB price.`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-coir-ivory text-stone-800 flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="JCCeylonCoir Logo" className="h-12 w-auto object-contain" />
          </a>
          <span className="text-sm font-semibold text-coir-primary bg-coir-muted/50 px-3 py-1 rounded-full border border-coir-leaf/20">
            Quotation Request Portal
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-coir-dark">Request a Commercial Quote</h1>
          <div className="w-16 h-1 bg-coir-leaf mx-auto mt-4 rounded-full"></div>
          <p className="text-stone-600 mt-4 max-w-xl mx-auto">
            Select an item below to directly generate and send an official quotation inquiry to our export sales team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {options.map((option) => (
            <div 
              key={option.id}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border-t-4 border-t-coir-leaf"
            >
              <div>
                <div className="flex items-center gap-2 text-coir-leaf mb-3">
                  <CheckCircle size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Export Grade</span>
                </div>
                <h2 className="text-2xl font-bold text-coir-dark mb-3">{option.title}</h2>
                <p className="text-stone-600 text-sm leading-relaxed mb-8">{option.description}</p>
              </div>

              <button
                onClick={() => handleSendQuoteEmail(option.title)}
                className="w-full bg-coir-primary hover:bg-coir-dark text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                <Mail size={18} />
                <span>Request Quote via Email</span>
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-coir-dark text-white py-6 text-center text-xs">
        <p className="text-stone-400">&copy; {new Date().getFullYear()} JCCeylonCoir Pvt LTD. All Rights Reserved.</p>
      </footer>
    </div>
  );
}