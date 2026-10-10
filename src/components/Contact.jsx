import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      if (db) {
        await addDoc(collection(db, "contact_messages"), {
          ...formData,
          timestamp: serverTimestamp()
        });
      }
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-coir-dark mb-2">Get in Touch</h2>
          <div className="w-12 h-1 bg-coir-leaf mb-6 rounded-full"></div>
          <div className="space-y-5 mb-8 text-stone-600">
            <p className="flex items-start gap-4">
              <MapPin className="text-coir-leaf shrink-0 mt-1" size={20} /> 
              <span>JC Ceylon coir pvt LTD, Negombo road, Kurunegala, Sri Lanka</span>
            </p>
            <p className="flex items-center gap-4">
              <Phone className="text-coir-leaf shrink-0" size={20} /> 
              <span>+94 77 849 6774</span>
            </p>
            <p className="flex items-center gap-4">
              <Mail className="text-coir-leaf shrink-0" size={20} /> 
              <span className="font-semibold text-coir-primary">info@jcceyloncoir.com</span>
            </p>
          </div>
          <div className="h-64 rounded-xl overflow-hidden shadow-md border border-stone-200">
            <iframe 
              title="Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585975073!2d79.786164!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>

        <div className="bg-coir-ivory p-8 rounded-2xl shadow-sm border border-stone-200">
          <h3 className="text-2xl font-bold text-coir-dark mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" placeholder="Your Name" required
              className="w-full p-3.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-coir-leaf outline-none text-stone-800 font-medium placeholder-stone-400"
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" placeholder="Your Email" required
              className="w-full p-3.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-coir-leaf outline-none text-stone-800 font-medium placeholder-stone-400"
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              placeholder="Your Message" rows="4" required
              className="w-full p-3.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-coir-leaf outline-none text-stone-800 font-medium placeholder-stone-400"
              value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button 
              type="submit" disabled={status === 'sending'}
              className="w-full bg-coir-primary hover:bg-coir-dark text-white font-bold py-4 rounded-lg transition-all hover:shadow-lg cursor-pointer hover:scale-[1.01]"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-coir-leaf text-center mt-2 font-bold">Message submitted successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}