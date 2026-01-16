
import React from 'react';
import { Ship, Award, ChevronRight, CheckCircle, Anchor, Star, ShieldCheck, Clock, Trophy, Users, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import { JSON_LD, FAQS, TRUST_STATS } from '../constants';
import FAQAccordion from '../components/FAQAccordion';
import SafeLink from '../components/SafeLink';

const WaveDivider: React.FC<{ flip?: boolean; color?: string; staggered?: boolean }> = ({ flip, color = "fill-white", staggered }) => (
  <div className={`absolute left-0 w-full overflow-hidden leading-0 z-10 ${flip ? 'bottom-0' : 'top-0'}`} style={{ height: '75px' }}>
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className={`relative block w-full h-full ${flip ? 'rotate-180' : ''} ${color} ${staggered ? 'opacity-80 translate-y-2' : ''}`}
    >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Nautica Ré | Permis Bateau & Location Île de Ré (La Flotte) & La Rochelle" 
        description="Avec Nautica Ré, vivez la mer autrement. 98% de réussite au permis bateau. Formation complète (5j+2j) à La Flotte en Ré."
        schema={JSON_LD}
      />

      {/* Hero Section - Changed h-[90vh] to min-h to prevent overlap on small screens */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 py-20 lg:py-0">
        <img 
          src="https://www.iledere.com/app/uploads/iledere/2024/07/thumbs/vue-aerienne-port-la-flotte-ile-de-re-par-edouard-salmon-skystudio-640x640.webp" 
          alt="Port de La Flotte en Ré - Nautica Ré" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl pb-12 pt-10 lg:pt-0">

            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-8">
              Avec <span className="text-blue-400 italic">Nautica Ré</span>, vivez la mer autrement
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light max-w-2xl">
              Notre équipe de <span className="text-white font-semibold">professionnels expérimentés</span> encadre vos formations au permis, coaching et vous propose une flotte de bateaux mise à la location. <br/>Une pédagogie humaine pour une <span className="text-white font-semibold">autonomie totale</span> en mer.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <SafeLink to="/permis" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 rounded-2xl text-lg font-bold transition-all shadow-2xl flex items-center justify-center group active:scale-95">
                Vérifier les disponibilités
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </SafeLink>
            </div>
          </div>
        </div>
        <WaveDivider flip />
      </section>

      {/* Trust Stats Bar - Adjusted Margin (-mt-8 instead of -mt-16) */}
      <div className="relative z-30 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 overflow-hidden">
          <div className="p-10 text-center hover:bg-blue-50/30 transition-colors group">
            <div className="text-5xl font-serif font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] leading-tight">Réussite Examen</div>
          </div>
          <div className="p-10 text-center hover:bg-blue-50/30 transition-colors">
            <div className="text-5xl font-serif font-bold text-blue-900 mb-2">5/5</div>
            <div className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] leading-tight">Avis Clients</div>
          </div>
          <div className="p-10 text-center hover:bg-blue-50/30 transition-colors">
            <div className="text-4xl font-serif font-bold text-blue-900 mb-2">7j</div>
            <div className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] leading-tight">Formation Complète</div>
          </div>
          <div className="p-10 text-center hover:bg-blue-50/30 transition-colors">
            <div className="text-4xl font-serif font-bold text-blue-900 mb-2">BPJEPS</div>
            <div className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] leading-tight">Moniteurs Diplômés</div>
          </div>
        </div>
      </div>

      {/* Confidence Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <div className="flex items-center space-x-2 font-serif font-bold text-xl"><Anchor className="text-blue-900" /> <span>LA FLOTTE</span></div>
            <div className="flex items-center space-x-2 font-serif font-bold text-xl"><Ship className="text-blue-900" /> <span>LES MINIMES</span></div>
            <div className="flex items-center space-x-2 font-serif font-bold text-xl"><Compass className="text-blue-900" /> <span>ÎLE DE RÉ</span></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 uppercase tracking-tight italic">Pourquoi nous confier votre permis ?</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light">
              Parce qu'obtenir son permis n'est pas une fin en soi, nous formons des marins <span className="text-blue-600 font-semibold italic">responsables et sereins</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="p-12 rounded-[3.5rem] bg-white border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2 shadow-sm relative group overflow-hidden">
              <div className="absolute -right-4 -top-4 text-blue-50 opacity-50 group-hover:scale-110 transition-transform"><Trophy size={140} /></div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg relative z-10">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 italic relative z-10">Nos Permis</h3>
              <p className="text-slate-600 mb-8 leading-relaxed relative z-10 font-medium text-lg">
               Vous souhaitez naviguer en mer, sur les rivières ou même au large ? <span className="text-blue-600 font-bold italic">Nautica Ré vous accompagne</span> dans l’obtention du permis qui correspond à vos envies. 
              </p>
              <SafeLink to="/permis" className="text-blue-600 font-bold flex items-center hover:text-blue-800 uppercase text-[10px] tracking-[0.2em] relative z-10">
                Voir les tarifs <ChevronRight size={14} className="ml-2" />
              </SafeLink>
            </article>

            <article className="p-12 rounded-[3.5rem] bg-slate-900 text-white transition-all hover:shadow-2xl hover:-translate-y-2 shadow-xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 text-white/5 group-hover:scale-110 transition-transform"><Ship size={140} /></div>
              <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg relative z-10">
                <Ship size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 italic relative z-10">Flotte Premium</h3>
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10 font-medium text-lg">
                Apprenez et louez sur des unités récentes. Exclusivement au <span className="text-white font-bold">Port de La Flotte</span>. Sécurité et confort avant tout.
              </p>
              <SafeLink to="/location" className="text-blue-400 font-bold flex items-center hover:text-blue-200 uppercase text-[10px] tracking-[0.2em] relative z-10">
                La flotte en détail <ChevronRight size={14} className="ml-2" />
              </SafeLink>
            </article>

            <article className="p-12 rounded-[3.5rem] bg-white border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2 shadow-sm relative group overflow-hidden">
              <div className="absolute -right-4 -top-4 text-blue-50 opacity-50 group-hover:scale-110 transition-transform"><Clock size={140} /></div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg relative z-10">
                <Anchor size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 italic relative z-10">Coaching Pro</h3>
              <p className="text-slate-600 mb-8 leading-relaxed relative z-10 font-medium text-lg">
                Nicolas & Cypriane coachent chaque élève individuellement. Gagnez en confiance avec des moniteurs d'expérience.
              </p>
              <SafeLink to="/coaching" className="text-blue-600 font-bold flex items-center hover:text-blue-800 uppercase text-[10px] tracking-[0.2em] relative z-10">
                Découvrir le coaching <ChevronRight size={14} className="ml-2" />
              </SafeLink>
            </article>
          </div>
        </div>
        <WaveDivider flip color="fill-white" />
      </section>

      {/* Personal touch Section - Increased gap and adjusted image positioning to prevent overlap */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-8 bg-blue-600/5 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://i.postimg.cc/PrgQTH5G/monos-test.jpg" 
                alt="Nicolas et Cypriane - Vos moniteurs" 
                className="rounded-[4rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-0 lg:-bottom-10 lg:-right-10 bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-slate-50 max-w-[280px] lg:max-w-xs">
                <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-900 font-serif italic text-lg lg:text-xl leading-relaxed">"Incroyable ! 98% de réussite ce n'est pas un mythe, Nicolas m'a mis en confiance totale."</p>
                <div className="mt-4 flex items-center space-x-3">
                   <div className="w-8 h-1 bg-blue-600"></div>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Julien, Promotion 2024</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
                Apprenez avec <span className="text-blue-600 italic">Nicolas & Cypriane</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Nous ne sommes pas une grosse usine à permis. Nous sommes deux amis passionnés par la mer qui vous accompagnent de A à Z. On s'adapte à votre stress, à vos questions, et on ne vous lâche pas avant l'examen !
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4 text-slate-700 bg-slate-50 p-6 rounded-3xl border border-slate-100 transition-transform hover:scale-105">
                  <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle size={20} /></div>
                  <span className="font-bold text-sm italic">Zéro Stress garanti</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-700 bg-slate-50 p-6 rounded-3xl border border-slate-100 transition-transform hover:scale-105">
                  <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle size={20} /></div>
                  <span className="font-bold text-sm italic">Formation intensive</span>
                </div>
              </div>
              <div className="pt-6">
                <SafeLink to="/contact" className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl uppercase tracking-[0.2em] text-xs flex items-center w-fit group">
                  S'inscrire maintenant
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </SafeLink>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider flip color="fill-slate-50" />
      </section>

      {/* FAQ */}
      <section className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-slate-900 italic">Questions Fréquentes</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
};

export default Home;
