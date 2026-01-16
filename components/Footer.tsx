
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Anchor, ExternalLink } from 'lucide-react';
import SafeLink from './SafeLink';
import { LOGO_DATA, PHONE_1, PHONE_2, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden relative">
      <Anchor className="absolute bottom-[-100px] right-[-100px] text-white/5 w-80 h-80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 overflow-hidden rounded-xl bg-white/10 p-1 shadow-lg">
                <img src={LOGO_DATA} alt="Logo Nautica Ré" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-serif font-bold uppercase tracking-widest">NAUTICA RÉ</span>
            </div>
            <p className="text-sm leading-relaxed font-light">
              École de navigation et location de bateaux à La Flotte. Formations permis bateau Île de Ré & La Rochelle. Coaching sur-mesure.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors bg-white/5 p-3 rounded-full" aria-label="Suivez-nous sur Instagram"><Instagram size={20} /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors bg-white/5 p-3 rounded-full" aria-label="Suivez-nous sur Facebook"><Facebook size={20} /></a>
            </div>
            <div className="pt-2">
              <a href={SOCIAL_LINKS.iledere} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white flex items-center transition-colors">
                <ExternalLink size={12} className="mr-1" /> Recommandé par iledere.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-b border-white/10 pb-2">Prestations</h4>
            <ul className="space-y-4 text-sm">
              <li><SafeLink to="/permis" className="hover:text-white transition-colors">Permis Côtier & Hauturier</SafeLink></li>
              <li><SafeLink to="/location" className="hover:text-white transition-colors">Location de Bateaux</SafeLink></li>
              <li><SafeLink to="/coaching" className="hover:text-white transition-colors">Coaching & Accompagnement</SafeLink></li>
              <li><SafeLink to="/permis" className="hover:text-white transition-colors">Permis Eaux Intérieures</SafeLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-b border-white/10 pb-2">L'École</h4>
            <ul className="space-y-4 text-sm">
              <li><SafeLink to="/equipe" className="hover:text-white transition-colors">L'Équipe Fondatrice</SafeLink></li>
              <li><SafeLink to="/contact" className="hover:text-white transition-colors">Bureau La Croix Michaud</SafeLink></li>
              <li><SafeLink to="/permis" className="hover:text-white transition-colors">Pratique La Rochelle</SafeLink></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Mentions Légales</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-b border-white/10 pb-2">Contact Local</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">2 Bis rue de la Croix Michaud,<br /><span className="text-white font-semibold">17630 La Flotte, Île de Ré</span></span>
              </li>
              <li className="flex items-start space-x-4">
                <Phone size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="hover:text-white transition-colors font-semibold">{PHONE_1}</a>
                  <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="hover:text-white transition-colors font-semibold">{PHONE_2}</a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@nautica-re.fr" className="hover:text-white transition-colors">contact@nautica-re.fr</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 Nautica Ré. Expert Permis Bateau & Location Île de Ré - La Rochelle.</p>
          <div className="mt-6 md:mt-0 flex space-x-6 uppercase tracking-widest font-bold text-blue-900">
             <span>Île de Ré</span>
             <span>La Rochelle</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
