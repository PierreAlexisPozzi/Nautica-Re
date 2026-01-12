
import React from 'react';
import SEO from '../components/SEO';
import { Ship, Clock, CheckCircle, Navigation, MapPin, Compass, Waves, Award, Anchor, Euro, ChevronRight, Star } from 'lucide-react';
import { JSON_LD } from '../constants';
import SafeLink from '../components/SafeLink';

const WaveDivider: React.FC<{ flip?: boolean; color?: string }> = ({ flip, color = "fill-white" }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-0 z-10 ${flip ? 'bottom-0' : 'top-0'}`} style={{ height: '60px' }}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`relative block w-full h-full ${flip ? 'rotate-180' : ''} ${color}`}>
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

const Permis: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Passer son Permis Bateau La Flotte | Formation Complète Nautica Ré" 
        description="Passez votre permis côtier avec Nautica Ré. 5 jours de théorie + 2 jours de pratique. 98% de réussite. Inscription rapide au Port de La Flotte."
        schema={JSON_LD}
      />

      {/* Header */}
      <header className="relative bg-blue-900 py-32 text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-20">
           <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 font-bold text-xs uppercase tracking-widest text-blue-100">
             <Star size={14} className="text-yellow-400 fill-yellow-400" />
             <span>Taux de réussite record de 98%</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Obtenez votre Permis</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Une formation de qualité : <strong>5 jours de théorie</strong> minimum puis <strong>2 jours de pratique</strong> au départ de La Flotte.
          </p>
        </div>
        <WaveDivider flip />
      </header>

      {/* Persuasive Badge Section */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600"><CheckCircle size={32} /></div>
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs tracking-widest">Zéro Administratif</div>
              <p className="text-sm text-slate-500">Nous gérons votre dossier de A à Z</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600"><Star size={32} /></div>
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs tracking-widest">Tests Blancs</div>
              <p className="text-sm text-slate-500">Entraînement illimité en conditions réelles</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600"><Award size={32} /></div>
            <div>
              <div className="font-bold text-slate-900 uppercase text-xs tracking-widest">Vrai Savoir-Faire</div>
              <p className="text-sm text-slate-500">Pratique intensive pour naviguer serein</p>
            </div>
          </div>
        </div>
      </div>

      {/* Permis Côtier Detail */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase text-xs tracking-widest">
                <Award size={16} />
                <span>La formule d'Excellence</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 italic">Le Permis Côtier</h2>
              <div className="bg-blue-50 p-8 rounded-[2.5rem] border-l-8 border-blue-600 shadow-sm relative overflow-hidden">
                <Anchor className="absolute -right-4 -bottom-4 text-blue-100 opacity-20" size={120} />
                <p className="text-lg text-slate-700 leading-relaxed font-medium italic relative z-10">
                  "Une formation sérieuse en 7 jours pour naviguer sur tout type de navire à moteur, sans limite de puissance, jusqu'à 6 milles des côtes."
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                Nicolas & Cypriane, deux amis passionnés par la mer, vous accueillent dans nos bureaux de <strong>La Flotte</strong>. Notre cursus privilégie le temps d'apprentissage : 5 jours de théorie pour maîtriser le code maritime, suivis de 2 jours de pratique intensive.
              </p>
              
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                 <h4 className="font-serif italic text-xl mb-4 text-blue-400">Pourquoi nous choisir ?</h4>
                 <ul className="space-y-3 text-sm">
                   <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-green-400" /> Groupes restreints pour un suivi réel</li>
                   <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-green-400" /> Bateau de pratique récent et maniable</li>
                   <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-green-400" /> Conseils d'experts sur les pertuis locaux</li>
                 </ul>
              </div>
            </div>

            {/* Price Cards */}
            <div className="lg:w-1/2 w-full flex flex-col gap-8">
              <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 shadow-xl flex flex-col md:flex-row items-center gap-8 group hover:border-blue-600 transition-all transform hover:-rotate-1">
                <div className="text-center md:text-left flex-shrink-0">
                  <h4 className="text-xl font-serif font-bold mb-2">Pack Classique</h4>
                  <div className="text-5xl font-bold text-blue-900 tracking-tighter">330€</div>
                  <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Théorie & Pratique</p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex-grow">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-slate-700"><Clock size={16} className="mr-3 text-blue-600" /> 5j de cours théorique</li>
                    <li className="flex items-center text-slate-700"><Ship size={16} className="mr-3 text-blue-600" /> 2j de pratique (mer)</li>
                    <li className="flex items-center text-slate-700 font-bold"><CheckCircle size={16} className="mr-3 text-green-500" /> Livret de formation offert</li>
                  </ul>
                  <SafeLink to="/contact" className="mt-6 bg-blue-600 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-colors block w-full">S'inscrire à la prochaine session</SafeLink>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 transform hover:rotate-1 transition-all">
                <div className="text-center md:text-left flex-shrink-0 relative">
                  <div className="bg-blue-500 text-white text-[9px] px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold absolute -top-4 left-0">Formule Sérénité</div>
                  <h4 className="text-xl font-serif font-bold mb-2">Pack Premium</h4>
                  <div className="text-5xl font-bold text-blue-400 tracking-tighter">380€</div>
                  <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-bold">Réussite Maximum</p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 flex-grow">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-slate-300"><Clock size={16} className="mr-3 text-blue-400" /> 5j théorie + Renforcement</li>
                    <li className="flex items-center text-slate-300"><Ship size={16} className="mr-3 text-blue-400" /> 2j de pratique (mer)</li>
                    <li className="flex items-center text-slate-300 font-bold"><CheckCircle size={16} className="mr-3 text-green-400" /> Accès code en ligne illimité 24/7</li>
                  </ul>
                  <SafeLink to="/contact" className="mt-6 bg-blue-500 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-blue-400 transition-colors block w-full">Vérifier le planning</SafeLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider flip color="fill-slate-50" />
      </section>

      {/* Extensions Section */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 flex flex-col h-full shadow-lg relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-125 duration-700">
                <Compass size={160} />
              </div>
              <div className="bg-blue-600 text-white p-5 rounded-2xl w-fit mb-8 shadow-xl relative z-10"><Compass size={36} /></div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 italic relative z-10">Extension Hauturière</h3>
              <p className="text-slate-600 leading-relaxed mb-10 flex-grow font-light text-lg relative z-10">
                Allez plus loin ! Ce permis vous permet de naviguer sans limite de distance des côtes. Apprenez la navigation astronomique et la lecture de cartes experte.
              </p>
              <div className="pt-8 border-t border-slate-100 relative z-10">
                <SafeLink to="/contact" className="text-blue-600 font-bold hover:text-blue-800 flex items-center uppercase tracking-widest text-xs italic group/link">
                  Demander un devis personnalisé <Euro size={14} className="ml-2" />
                  <ChevronRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </SafeLink>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 flex flex-col h-full shadow-lg relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-125 duration-700">
                <Waves size={160} />
              </div>
              <div className="bg-blue-600 text-white p-5 rounded-2xl w-fit mb-8 shadow-xl relative z-10"><Waves size={36} /></div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 italic relative z-10">Option Fluviale</h3>
              <p className="text-slate-600 leading-relaxed mb-10 flex-grow font-light text-lg relative z-10">
                Envie de naviguer sur les canaux de France ? Cette option vous ouvre les portes des eaux douces et de la vie au fil de l'eau.
              </p>
              <div className="pt-8 border-t border-slate-100 relative z-10">
                <SafeLink to="/contact" className="text-blue-600 font-bold hover:text-blue-800 flex items-center uppercase tracking-widest text-xs italic group/link">
                  Se renseigner <Euro size={14} className="ml-2" />
                  <ChevronRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </SafeLink>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider flip color="fill-white" />
      </section>

      {/* Flexible Section */}
      <section className="relative py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Anchor size={48} className="mx-auto text-blue-900 mb-8 opacity-20" />
          <h3 className="text-3xl font-serif font-bold mb-6 italic text-slate-900 tracking-tight">Appelez-nous, on vous explique tout !</h3>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light">
            On sait que passer son permis peut impressionner. Nicolas ou Cypriane vous répondent en direct pour lever vos doutes. <strong>Pas de boîte vocale, de vrais marins au téléphone !</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0688772630" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-500 transition-all uppercase text-sm tracking-widest">Appeler Nicolas</a>
            <a href="tel:0688770154" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-800 transition-all uppercase text-sm tracking-widest">Appeler Cypriane</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Permis;
