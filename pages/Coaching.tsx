
import React from 'react';
import SEO from '../components/SEO';
import { Target, CheckCircle, Anchor, Shield, Users, Waves, Navigation, ChevronRight, Star } from 'lucide-react';
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
        description="Améliorez votre navigation avec nos moniteurs diplômés. Skippering, manœuvres de port, prise en main de votre nouveau bateau à La Flotte et La Rochelle."
      />

      {/* Header */}
      <header className="relative bg-blue-900 py-32 text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 font-bold text-xs uppercase tracking-widest text-blue-100">
             <Star size={14} className="text-yellow-400 fill-yellow-400" />
             <span>Moniteurs diplômés BPJEPS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Accompagnement & Coaching</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Devenez un véritable <strong>Chef de bord</strong> et gagnez en assurance avec l'expertise de <strong>Nicolas & Cypriane</strong>.
          </p>
        </div>
        <WaveDivider flip />
      </header>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 text-blue-600 font-bold uppercase tracking-widest text-xs">
                <Target size={20} />
                <span>Pour locataires & propriétaires</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 italic leading-tight">Naviguez avec assurance</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Vous êtes propriétaire ou locataire d'un bateau et vous cherchez un <strong>skipper</strong> ou un <strong>moniteur professionnel</strong> pour quelques heures ou une journée entière ? Nautica Ré met son savoir-faire à votre service pour transformer votre navigation en pur plaisir dans les eaux de La Rochelle et de l'Île de Ré.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-blue-600 shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium italic">Manœuvres de port délicates (vent, courant)</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium italic">Navigation dans les pertuis (lecture de carte, balisage)</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium italic">Utilisation de l'électronique de bord</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group">
               <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800" 
                 alt="Coaching en mer La Rochelle" 
                 className="rounded-[3rem] shadow-2xl relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
               />
            </div>
          </div>

          {/* New Owners Special */}
          <div className="bg-slate-900 text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
             <Waves className="absolute bottom-[-100px] right-[-100px] text-blue-500/10 w-[30rem] h-[30rem]" />
             <div className="relative z-10">
                <div className="max-w-3xl mb-16">
                  <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-blue-400 italic">Prise en main : Spécial Nouveaux Acquéreurs</h3>
                  <p className="text-slate-300 text-lg font-light leading-relaxed">
                    Vous venez d'acheter votre premier bateau ? Félicitations ! Nous vous proposons une séance sur-mesure sur votre propre unité pour sécuriser vos premières sorties au départ de La Rochelle ou de l'Île de Ré.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col space-y-4 hover:bg-white/10 transition-colors">
                     <div className="text-blue-400 bg-blue-400/10 p-4 rounded-2xl w-fit"><Anchor size={28} /></div>
                     <h5 className="font-bold text-xl italic">Initiation Technique</h5>
                     <p className="text-slate-400 text-sm leading-relaxed">Vérification des points clés du moteur, de l'accastillage et des spécificités de votre bateau.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col space-y-4 hover:bg-white/10 transition-colors">
                     <div className="text-blue-400 bg-blue-400/10 p-4 rounded-2xl w-fit"><Shield size={28} /></div>
                     <h5 className="font-bold text-xl italic">Audit Sécurité</h5>
                     <p className="text-slate-400 text-sm leading-relaxed">Installation et revue du matériel obligatoire. Briefing sécurité pour votre équipage et votre famille.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col space-y-4 hover:bg-white/10 transition-colors">
                     <div className="text-blue-400 bg-blue-400/10 p-4 rounded-2xl w-fit"><Navigation size={28} /></div>
                     <h5 className="font-bold text-xl italic">Perfectionnement</h5>
                     <p className="text-slate-400 text-sm leading-relaxed">Apprentissage des manœuvres portuaires spécifiques à votre emplacement et gestion du stress au port.</p>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">!</div>
                      <p className="text-slate-300 font-medium italic max-w-sm">Chaque coaching est unique et adapté à votre niveau, de débutant à confirmé.</p>
                   </div>
                   <SafeLink to="/contact" className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-400 transition-all shadow-xl uppercase tracking-widest text-sm flex items-center">
                      Réserver ma séance <ChevronRight size={20} className="ml-2" />
                   </SafeLink>
                </div>
             </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-24 text-center">
             <h3 className="text-3xl font-serif font-bold text-slate-900 mb-10 italic">Prêt à prendre la barre ?</h3>
             <div className="flex flex-wrap justify-center gap-6">
                <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-500 transition-all flex items-center space-x-3 uppercase tracking-widest text-xs">
                  <span>Appeler Nicolas</span>
                  <span className="opacity-60 text-[10px]">{PHONE_1}</span>
                </a>
                <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center space-x-3 uppercase tracking-widest text-xs">
                  <span>Appeler Cypriane</span>
                  <span className="opacity-60 text-[10px]">{PHONE_2}</span>
                </a>
             </div>
          </div>

        </div>
        <WaveDivider flip color="fill-slate-50" />
      </section>
    </div>
  );
};

export default Coaching;
