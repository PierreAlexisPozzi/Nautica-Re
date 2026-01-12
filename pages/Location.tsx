
import React from 'react';
import SEO from '../components/SEO';
// Added ChevronRight to the imports to resolve the missing reference on line 97
import { Ship, Users, Zap, Info, Phone, Mail, Anchor, ChevronRight } from 'lucide-react';
import { BOATS, PHONE_1, PHONE_2 } from '../constants';
import SafeLink from '../components/SafeLink';

const WaveDivider: React.FC<{ flip?: boolean; color?: string }> = ({ flip, color = "fill-white" }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-0 z-10 ${flip ? 'bottom-0' : 'top-0'}`} style={{ height: '60px' }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-full ${flip ? 'rotate-180' : ''} ${color}`}>
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

const Location: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Location Bateaux La Flotte en Ré | Flotte Nautica Ré" 
        description="Location de bateaux exclusivement au Port de La Flotte. Semi-rigides, coques open. Partez explorer les pertuis dès aujourd'hui."
      />

      {/* Header */}
      <header className="relative bg-blue-900 py-32 text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 font-bold text-xs uppercase tracking-widest text-blue-100">
             <Anchor size={14} className="text-blue-400" />
             <span>Exclusivité Port de La Flotte</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic tracking-tight">Large & Liberté</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Louez votre unité au <strong>Port de La Flotte</strong> pour explorer l'archipel charentais.
          </p>
        </div>
        <WaveDivider flip />
      </header>

      {/* Exclusivity Alert */}
      <div className="bg-blue-50 border-y border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-blue-900 font-bold text-center">
          <Info size={28} className="text-blue-600 animate-pulse" />
          <p className="text-xl italic font-serif">Note importante : Toutes nos locations s'effectuent exclusivement au départ du Port de La Flotte en Ré.</p>
        </div>
      </div>

      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4 italic">Notre Flotte de Location</h2>
            <p className="text-slate-500 text-lg italic uppercase tracking-wider text-xs font-bold">Sélection d'unités récentes et fiables</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {BOATS.map((boat, idx) => (
              <div key={boat.id} className={`bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all group ${idx === 1 ? 'md:-translate-y-4' : ''}`}>
                <div className="relative h-80 overflow-hidden">
                  <img src={boat.image} alt={boat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg italic">Port de La Flotte</div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 italic">{boat.name}</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                      <div className="bg-blue-50 p-2 rounded-lg mr-4"><Users size={18} className="text-blue-600" /></div>
                      <span>Jusqu'à {boat.capacity} personnes</span>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                      <div className="bg-blue-50 p-2 rounded-lg mr-4"><Zap size={18} className="text-blue-600" /></div>
                      <span>Motorisation : {boat.power}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl mb-10 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 italic">Exemples :</p>
                    <p className="text-xs font-semibold text-slate-700 leading-relaxed">{boat.examples}</p>
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="flex flex-col leading-none">
                      <span className="text-[10px] text-slate-400 uppercase tracking-tighter mb-1 font-bold">À partir de</span>
                      <span className="text-blue-900 font-bold text-2xl tracking-tighter">{boat.price}</span>
                    </div>
                    <SafeLink to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl text-[10px] font-bold hover:bg-slate-800 transition-colors uppercase tracking-widest shadow-xl">
                      Réserver
                    </SafeLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20 text-center">
             <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 italic">Besoin d'un accompagnement ?</h3>
             <p className="text-slate-600 mb-10 max-w-2xl mx-auto font-light">
                Vous n'avez pas encore votre permis ou vous souhaitez profiter de votre sortie sans gérer la navigation ? Découvrez nos services de skippering.
             </p>
             <SafeLink to="/coaching" className="inline-flex items-center space-x-3 bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-blue-500 transition-all">
                <span>Voir le Coaching & Skippering</span>
                <ChevronRight size={18} />
             </SafeLink>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             <div className="bg-blue-900 p-12 rounded-[3.5rem] text-white flex items-center space-x-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700"><Phone size={120} /></div>
                <div className="bg-white/10 p-6 rounded-[2rem] hidden sm:block relative z-10"><Phone size={48} /></div>
                <div className="relative z-10">
                   <h4 className="text-xl font-serif font-bold mb-2 italic">Réservations Directes</h4>
                   <div className="flex flex-col space-y-2">
                      <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="text-3xl font-serif font-bold hover:text-blue-400 transition-colors tracking-tighter">{PHONE_1}</a>
                      <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="text-3xl font-serif font-bold hover:text-blue-400 transition-colors tracking-tighter">{PHONE_2}</a>
                   </div>
                </div>
             </div>
             <div className="bg-slate-50 p-12 rounded-[3.5rem] text-slate-900 flex items-center space-x-8 shadow-xl border border-slate-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:-rotate-12 transition-transform duration-700"><Mail size={120} /></div>
                <div className="bg-blue-600/10 p-6 rounded-[2rem] hidden sm:block relative z-10"><Mail size={48} className="text-blue-600" /></div>
                <div className="relative z-10">
                   <h4 className="text-xl font-serif font-bold mb-2 italic text-slate-900">Demande par Email</h4>
                   <p className="text-slate-400 mb-3 text-[10px] uppercase font-bold tracking-[0.2em]">Réponse sous 24h</p>
                   <a href="mailto:contact@nautica-re.fr" className="text-2xl font-serif font-bold hover:text-blue-600 transition-colors tracking-tight">contact@nautica-re.fr</a>
                </div>
             </div>
          </div>
        </div>
        <WaveDivider flip color="fill-slate-50" />
      </section>
    </div>
  );
};

export default Location;
