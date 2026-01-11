
import React from 'react';
import { Phone } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 md:hidden">
      <a
        href="tel:+33600000000"
        className="flex items-center justify-center space-x-3 bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl active:scale-95 transition-transform"
      >
        <Phone size={24} fill="currentColor" />
        <span>Appeler Nautica Ré</span>
      </a>
    </div>
  );
};

export default StickyCTA;
