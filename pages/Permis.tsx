
import React from 'react';
import SEO from '../components/SEO';
import { Ship, Clock, CheckCircle, Navigation, MapPin, Compass, Waves, Award, Anchor, Euro, ChevronRight } from 'lucide-react';
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
        title="Tarifs Permis Bateau La Flotte | Nautica Ré" 
        description="Passez votre permis côtier (330€ / 380€) à La Flotte en Ré. Formation complète théorie et pratique à l'Île de Ré ou La Rochelle."
        schema={JSON_LD}
      />

      {/* Header */}
      <header className="relative bg-blue-900 py-32 text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Prendre le Large</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Formations certifiantes pour tous les niveaux au départ de <strong>La Flotte en Ré</strong>.
          </p>
        </div>
        <WaveDivider flip />
      </header>

      {/* Permis Côtier Detail */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase text-xs tracking-widest">
                <Award size={16} />
                <span>Le choix de la sécurité</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 italic">Le Permis Côtier</h2>
              <div className="bg-blue-50 p-8 rounded-[2.5rem] border-l-8 border-blue-600 shadow-sm relative overflow-hidden">
                <Anchor className="absolute -right-4 -bottom-4 text-blue-100 opacity-20" size={120} />
                <p className="text-lg text-slate-700 leading-relaxed font-medium italic relative z-10">
                  "Avec ce permis, vous pourrez naviguer en eaux maritimes, sur les lacs et plans d’eau fermés sans limite de puissance moteur ni de taille de navire, jusqu’à 6 milles d’un abri."
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed font-light text-lg">
                Chez Nautica Ré, la formation comprend des cours théoriques dans nos locaux avec des entrainements au test final, et 2h de pratique en mer sur l’Île De Ré ou La Rochelle, à bord d’un semi-rigide.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-3 text-slate-700 font-bold bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                  <MapPin className="text-blue-600" size={20} />
                  <span>Siège à La Flotte</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 font-bold bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                  <Ship className="text-blue-600" size={20} />
                  <span>Pratique au choix</span>
                </div>
              </div>
            </div>

            {/* Price Cards with non-horizontal layout focus */}
            <div className="lg:w-1/2 w-full flex flex-col gap-8">
              <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 shadow-xl flex flex-col md:flex-row items-center gap-8 group hover:border-blue-600 transition-all transform hover:-rotate-1">
                <div className="text-center md:text-left flex-shrink-0">
                  <h4 className="text-xl font-serif font-bold mb-2">Formule 5h</h4>
                  <div className="text-5xl font-bold text-blue-900 tracking-tighter">330€</div>
                  <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Théorie & Pratique</p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex-grow">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-slate-700"><Clock size={16} className="mr-3 text-blue-600" /> 5h de cours théorique</li>
                    <li className="flex items-center text-slate-700"><Ship size={16} className="mr-3 text-blue-600" /> 2h de pratique en mer</li>
                    <li className="flex items-center text-slate-700 font-bold"><CheckCircle size={16} className="mr-3 text-green-500" /> Livret de formation inclus</li>
                  </ul>
                  <SafeLink to="/contact" className="mt-6 bg-blue-600 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-colors block w-full">Choisir 5h</SafeLink>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 transform hover:rotate-1 transition-all">
                <div className="text-center md:text-left flex-shrink-0">
                  <div className="bg-blue-500 text-white text-[9px] px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold absolute -top-3 left-10">Recommandé</div>
                  <h4 className="text-xl font-serif font-bold mb-2">Formule 8h</h4>
                  <div className="text-5xl font-bold text-blue-400 tracking-tighter">380€</div>
                  <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-bold">Théorie Approfondie</p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 flex-grow">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center text-slate-300"><Clock size={16} className="mr-3 text-blue-400" /> 8h de cours théorique</li>
                    <li className="flex items-center text-slate-300"><Ship size={16} className="mr-3 text-blue-400" /> 2h de pratique en mer</li>
                    <li className="flex items-center text-slate-300 font-bold"><CheckCircle size={16} className="mr-3 text-green-400" /> Livret de formation inclus</li>
                  </ul>
                  <SafeLink to="/contact" className="mt-6 bg-blue-500 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-blue-400 transition-colors block w-full">Choisir 8h</SafeLink>
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
                Ce permis est indispensable pour naviguer sans limite de distance. La formation porte sur la lecture de cartes marines, le calcul des marées et les caps pour naviguer sereinement en haute mer.
              </p>
              <div className="pt-8 border-t border-slate-100 relative z-10">
                <SafeLink to="/contact" className="text-blue-600 font-bold hover:text-blue-800 flex items-center uppercase tracking-widest text-xs italic group/link">
                  Tarifs & Devis <Euro size={14} className="ml-2" />
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
                Ouvrez-vous les portes des canaux et rivières. Apprenez le balisage spécifique, les règles de croisement et la signalisation fluviale pour piloter en eaux douces.
              </p>
              <div className="pt-8 border-t border-slate-100 relative z-10">
                <SafeLink to="/contact" className="text-blue-600 font-bold hover:text-blue-800 flex items-center uppercase tracking-widest text-xs italic group/link">
                  Tarifs & Devis <Euro size={14} className="ml-2" />
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
          <h3 className="text-3xl font-serif font-bold mb-6 italic text-slate-900 tracking-tight">Une formation locale et sur-mesure</h3>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light">
            Notre école de <strong>La Flotte</strong> s'adapte à votre rythme. La théorie se déroule dans nos locaux au bureau, et vous choisissez votre lieu de pratique pour vos 2h en mer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-slate-50 px-8 py-3 rounded-full text-xs font-bold border border-slate-200 uppercase tracking-widest text-slate-500 italic">Port de La Flotte</span>
            <span className="bg-slate-50 px-8 py-3 rounded-full text-xs font-bold border border-slate-200 uppercase tracking-widest text-slate-500 italic">Port des Minimes</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Permis;
