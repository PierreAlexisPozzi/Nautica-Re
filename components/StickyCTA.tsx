
import React, { useState } from 'react';
import { Phone, X, User, MessageSquare } from 'lucide-react';
import { PHONE_1, PHONE_2 } from '../constants';

const StickyCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-[100] md:hidden">
      {/* Overlay backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Popup Menu */}
      <div className={`absolute bottom-20 right-0 w-[280px] transition-all duration-300 transform ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-6 border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-serif font-bold text-slate-900 text-xl italic">Nous contacter</h3>
            <button onClick={toggleMenu} className="text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Contact Nicolas */}
            <a
              href={`tel:${PHONE_1.replace(/\s/g, '')}`}
              className="flex items-center p-4 bg-blue-50 rounded-2xl border border-blue-100 group active:scale-95 transition-all"
            >
              <div className="bg-blue-600 text-white p-3 rounded-xl mr-4 shadow-lg group-hover:bg-blue-500">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-0.5">Planning</span>
                <span className="font-bold text-slate-900">Nicolas</span>
                <span className="text-xs text-slate-500 font-medium">{PHONE_1}</span>
              </div>
            </a>

            {/* Contact Cypriane */}
            <a
              href={`tel:${PHONE_2.replace(/\s/g, '')}`}
              className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 group active:scale-95 transition-all"
            >
              <div className="bg-slate-900 text-white p-3 rounded-xl mr-4 shadow-lg group-hover:bg-blue-900">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Inscriptions</span>
                <span className="font-bold text-slate-900">Cypriane</span>
                <span className="text-xs text-slate-500 font-medium">{PHONE_2}</span>
              </div>
            </a>
          </div>
          
          <p className="mt-6 text-[10px] text-center text-slate-400 font-medium uppercase tracking-tighter">
            Réponse rapide par téléphone
          </p>
        </div>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-90 ${
          isOpen 
          ? 'bg-slate-900 text-white rotate-90' 
          : 'bg-blue-600 text-white animate-bounce-subtle'
        }`}
      >
        {isOpen ? <X size={28} /> : <Phone size={28} fill="currentColor" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
          </span>
        )}
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

export default StickyCTA;
