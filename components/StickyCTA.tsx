
import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE_1, PHONE_2 } from '../constants';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden flex flex-col gap-2">
      <a
        href={`tel:${PHONE_1.replace(/\s/g, '')}`}
        className="flex items-center justify-center space-x-3 bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl active:scale-95 transition-transform border-2 border-white/20"
      >
        <Phone size={20} fill="currentColor" />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] opacity-80 uppercase tracking-tighter font-bold italic">Nicolas & Cypriane</span>
          <span className="text-lg tracking-tighter">{PHONE_1}</span>
        </div>
      </a>
    </div>
  );
};

export default StickyCTA;
