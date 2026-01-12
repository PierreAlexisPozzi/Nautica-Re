
import React from 'react';
import SEO from '../components/SEO';
import { Target, CheckCircle, Anchor, Shield, Users, Ship, Waves, ChevronRight, Compass, ShieldAlert } from 'lucide-react';
import { PHONE_1, PHONE_2 } from '../constants';
import SafeLink from '../components/SafeLink';

const WaveDivider: React.FC<{ flip?: boolean; color?: string }> = ({ flip, color = "fill-white" }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-0 z-10 ${flip ? 'bottom-0' : 'top-0'}`} style={{ height: '60px' }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-full ${flip ? 'rotate-180' : ''} ${color}`}>
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

const Coaching: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Coaching Nautique & Skippering Île de Ré | Nautica Ré" 
        description="Services de skipper et moniteur BPjeps à l'île de Ré. Accompagnement propriétaires et mise en main technique de votre bateau."
      />

      {/* Header */}
      <header className="relative bg-slate-900 py-32 text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-blue-400/30 mb-8 font-bold text-xs uppercase tracking-widest text-blue-100 italic">
            <Compass size={14} className="text-blue-400" />
            <span>Accompagnement Sur-Mesure</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Coaching & Skippering</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Profitez de l'expertise de nos moniteurs diplômés pour une navigation en toute sérénité.
          </p>
        </div>
        <WaveDivider flip />
      </header>

      {/* Section 1: Skipper/Moniteur pour Propriétaires & Locataires */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
             <div className="space-y-8">
                <div className="flex items-center space-x-3 text-blue-600 font-bold uppercase tracking-widest text-xs">
                   <Users size={20} />
                   <span>Skipper & Moniteur BPjeps</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  Vous cherchez un skipper pour une heure ou la journée ?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                   Vous êtes propriétaire ou locataire d'un bateau et vous souhaitez déléguer la navigation ou être accompagné par un expert ? Que ce soit pour une navigation technique ou une sortie détente, vous apprécierez :
                </p>
                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-sm">
                   <ul className="space-y-6">
                      <li className="flex items-center space-x-4">
                         <div className="bg-white p-2 rounded-full text-blue-600 shadow-sm"><CheckCircle size={20} /></div>
                         <span className="font-semibold text-slate-800 italic">Le professionnalisme de nos skippers diplômés</span>
                      </li>
                      <li className="flex items-center space-x-4">
                         <div className="bg-white p-2 rounded-full text-blue-600 shadow-sm"><CheckCircle size={20} /></div>
                         <span className="font-semibold text-slate-800 italic">L'ambiance conviviale et pédagogique du bord</span>
                      </li>
                      <li className="flex items-center space-x-4">
                         <div className="bg-white p-2 rounded-full text-blue-600 shadow-sm"><CheckCircle size={20} /></div>
                         <span className="font-semibold text-slate-800 italic">La sécurité absolue pendant toute la navigation</span>
                      </li>
                      <li className="flex items-center space-x-4">
                         <div className="bg-white p-2 rounded-full text-blue-600 shadow-sm"><CheckCircle size={20} /></div>
                         <span className="font-semibold text-slate-800 italic">La grande disponibilité de nos équipages</span>
                      </li>
                   </ul>
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-3xl"></div>
                <img 
                   src="https://images.unsplash.com/photo-1544551763-47a184230181?auto=format&fit=crop&q=80&w=800" 
                   className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3]" 
                   alt="Accompagnement skipper Nautica Ré"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Section 2: Nouveaux acquéreurs - Technique */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <WaveDivider color="fill-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-xl"><Target size={32} /></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 italic">Vous venez d'acquérir votre bateau ?</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Vous souhaitez mettre en pratique et approfondir vos compétences ? Nautica Ré vous propose un programme de perfectionnement sur-mesure.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col space-y-6 transition-transform hover:-translate-y-2">
                 <div className="text-blue-600 flex items-center space-x-4">
                    <Ship size={28} />
                    <h3 className="text-2xl font-serif font-bold italic">Maîtrise & Conduite</h3>
                 </div>
                 <p className="text-slate-600 leading-relaxed font-light">
                    Apprenez à dompter votre nouvelle unité avec assurance.
                 </p>
                 <ul className="space-y-4 pt-4 border-t border-slate-100">
                    <li className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                       <ChevronRight className="text-blue-600" size={16} />
                       <span>L'initiation ou le perfectionnement des manœuvres (voile ou moteur)</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                       <ChevronRight className="text-blue-600" size={16} />
                       <span>Maîtrise des manœuvres portuaires (accostage, amarrage)</span>
                    </li>
                 </ul>
              </div>

              <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl text-white flex flex-col space-y-6 transition-transform hover:-translate-y-2">
                 <div className="text-blue-400 flex items-center space-x-4">
                    <Shield size={28} />
                    <h3 className="text-2xl font-serif font-bold italic">Sécurité & Équipement</h3>
                 </div>
                 <p className="text-slate-400 leading-relaxed font-light">
                    Naviguez serein en maîtrisant tous les aspects sécuritaires de votre bord.
                 </p>
                 <ul className="space-y-4 pt-4 border-t border-white/10">
                    <li className="flex items-center space-x-3 text-sm font-medium text-slate-200">
                       <ChevronRight className="text-blue-400" size={16} />
                       <span>La mise en place des équipements de sécurité</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium text-slate-200">
                       <ChevronRight className="text-blue-400" size={16} />
                       <span>La mise en confiance de votre équipage</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium text-slate-200">
                       <ChevronRight className="text-blue-400" size={16} />
                       <span>Maîtrise des règles de sécurité à bord</span>
                    </li>
                 </ul>
              </div>
           </div>

           <div className="mt-24 bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
              <Waves className="absolute bottom-[-50px] left-[-50px] text-white/10 w-64 h-64 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 max-w-xl text-center md:text-left">
                 <h4 className="text-2xl font-serif font-bold italic mb-2">Prêt à prendre la barre ?</h4>
                 <p className="text-blue-100 font-light italic">Nos moniteurs s'adaptent à votre niveau et à votre matériel. Contactez-nous pour une session personnalisée.</p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                 <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-slate-100 transition-colors text-center">Appeler Nicolas</a>
                 <SafeLink to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-slate-800 transition-colors text-center">Devis Coaching</SafeLink>
              </div>
           </div>
        </div>
        <WaveDivider flip />
      </section>

      {/* Trust & Safety Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="inline-block p-4 bg-blue-50 rounded-full text-blue-600 mb-6 italic"><Anchor size={32} /></div>
           <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8 italic">Une pédagogie par l'expérience</h3>
           <p className="text-lg text-slate-600 font-light leading-relaxed mb-12 italic">
             "Parce que la mer demande de l'humilité et de la technique, Nautica Ré vous accompagne pour transformer vos premières sorties en souvenirs mémorables, en toute sécurité."
           </p>
           <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-serif font-bold text-2xl text-slate-900">Île de Ré</span>
              <span className="font-serif font-bold text-2xl text-slate-900">La Rochelle</span>
              <span className="font-serif font-bold text-2xl text-slate-900">Les Minimes</span>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Coaching;
