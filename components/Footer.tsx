
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Anchor } from 'lucide-react';
import SafeLink from './SafeLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Anchor size={28} />
              <span className="text-2xl font-serif font-bold">NAUTICA RÉ</span>
            </div>
            <p className="text-sm leading-relaxed">
              Votre école de navigation et location de bateaux au Port de La Flotte, Île de Ré. Expertise et passion maritime.
            </p>
            <div className="flex space-x-4 pt-2">
              <span className="hover:text-white transition-colors cursor-pointer"><Instagram size={20} /></span>
              <span className="hover:text-white transition-colors cursor-pointer"><Facebook size={20} /></span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><SafeLink to="/permis" className="hover:text-white transition-colors">Permis Côtier</SafeLink></li>
              <li><SafeLink to="/permis" className="hover:text-white transition-colors">Permis Hauturier</SafeLink></li>
              <li><SafeLink to="/location" className="hover:text-white transition-colors">Location de Bateaux</SafeLink></li>
              <li><SafeLink to="/contact" className="hover:text-white transition-colors">Coaching & Services</SafeLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Informations</h4>
            <ul className="space-y-3 text-sm">
              <li><SafeLink to="/blog" className="hover:text-white transition-colors">Blog / Guide de l'Île de Ré</SafeLink></li>
              <li><SafeLink to="/equipe" className="hover:text-white transition-colors">Notre Équipe</SafeLink></li>
              <li><SafeLink to="/contact" className="hover:text-white transition-colors">Contact & Accès</SafeLink></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Mentions Légales</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Local</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span>Port de La Flotte,<br />17630 La Flotte, Île de Ré</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-white transition-colors">06 00 00 00 00</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@nautica-re.fr" className="hover:text-white transition-colors">contact@nautica-re.fr</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 Nautica Ré. Tous droits réservés. Design pour performance SEO & GEO.</p>
          <p className="mt-4 md:mt-0">Expert Permis Bateau La Flotte & Charente-Maritime</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
