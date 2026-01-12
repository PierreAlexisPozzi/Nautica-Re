
import React from 'react';
import { Ship, Award, ChevronRight, CheckCircle, Anchor, Star, ShieldCheck, Clock } from 'lucide-react';
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

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <img 
          src="https://www.iledere.com/app/uploads/iledere/2024/07/thumbs/vue-aerienne-port-la-flotte-ile-de-re-par-edouard-salmon-skystudio-640x640.webp" 
          alt="Port de La Flotte en Ré - Nautica Ré" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-blue-400/30 mb-8 animate-fade-in">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold uppercase tracking-widest">Élu meilleur bateau-école de La Flotte</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Avec Nautica Ré, vivez la <span className="text-blue-400 italic">mer autrement</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light max-w-2xl">
              Passez votre <strong>permis bateau</strong> avec nos experts. Formation sérieuse (5j théorie + 2j pratique) au Port de La Flotte. <span className="text-blue-400 font-semibold underline">98% de réussite.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <SafeLink to="/permis" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl flex items-center justify-center group">
                Vérifier les disponibilités
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </SafeLink>
              <SafeLink to="/location" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl flex items-center justify-center">
                Louer un bateau
              </SafeLink>
            </div>
          </div>
        </div>
        <WaveDivider flip />
      </section>

      {/* Trust Stats Bar */}
      <div className="relative z-30 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 overflow-hidden">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="p-8 text-center hover:bg-blue-50/30 transition-colors">
              <div className="text-3xl font-serif font-bold text-blue-900 mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4 uppercase tracking-tight">Votre permis en toute sérénité</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Une pédagogie humaine et efficace pour vous rendre autonome en mer durablement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2 shadow-sm relative group">
              <div className="absolute top-6 right-10 text-blue-100 transition-transform group-hover:scale-110"><ShieldCheck size={80} /></div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 italic relative z-10">Permis Complet</h3>
              <p className="text-slate-600 mb-6 leading-relaxed relative z-10 font-medium">
                Un cursus complet (5j théorie + 2j pratique) pour une vraie maîtrise. Pas de formation au rabais.
              </p>
              <SafeLink to="/permis" className="text-blue-600 font-bold flex items-center hover:text-blue-800 uppercase text-xs tracking-widest relative z-10">
                Découvrir la méthode <ChevronRight size={14} className="ml-1" />
              </SafeLink>
            </article>

            <article className="p-10 rounded-[2.5rem] bg-slate-900 text-white transition-all hover:shadow-2xl hover:-translate-y-2 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Ship size={120} />
              </div>
              <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10">
                <Ship size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 italic relative z-10">Liberté Totale</h3>
              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                Une flotte moderne disponible exclusivement au <strong>Port de La Flotte</strong>. Partez explorer les pertuis dès demain.
              </p>
              <SafeLink to="/location" className="text-blue-400 font-bold flex items-center hover:text-blue-200 uppercase text-xs tracking-widest relative z-10">
                Réserver un bateau <ChevronRight size={14} className="ml-1" />
              </SafeLink>
            </article>

            <article className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-2 shadow-sm relative group">
              <div className="absolute top-6 right-10 text-blue-100 transition-transform group-hover:scale-110"><Clock size={80} /></div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10">
                <Anchor size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 italic relative z-10">Accompagnement</h3>
              <p className="text-slate-600 mb-6 leading-relaxed relative z-10 font-medium">
                Nicolas & Cypriane vous coachent pour vos premières manœuvres. Gagnez en confiance avec des pros.
              </p>
              <SafeLink to="/location" className="text-blue-600 font-bold flex items-center hover:text-blue-800 uppercase text-xs tracking-widest relative z-10">
                Prendre un cours <ChevronRight size={14} className="ml-1" />
              </SafeLink>
            </article>
          </div>
        </div>
        <WaveDivider flip color="fill-slate-50" />
      </section>

      {/* Personal touch Section */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://i.postimg.cc/PrgQTH5G/monos-test.jpg" 
                alt="Nicolas et Cypriane - Vos moniteurs" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/3] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-slate-100">
                <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-slate-900 font-serif italic text-lg leading-tight">"Nicolas et Cypriane sont<br/>pédagogues et rassurants !"</p>
                <p className="text-slate-400 text-[10px] mt-2 font-bold uppercase tracking-widest">— Marie, élève 2024</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Apprenez avec <span className="text-blue-600 italic">Nicolas & Cypriane</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Nous ne sommes pas une grosse usine à permis. Nous sommes deux amis passionnés par la mer qui vous accompagnent de A à Z. On s'adapte à votre stress, à vos questions, et on ne vous lâche pas avant l'examen !
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 text-slate-700 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-105">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-semibold text-sm">Zéro Stress garanti</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-105">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-semibold text-sm">Tests blancs illimités</span>
                </div>
              </div>
              <div className="pt-6">
                <SafeLink to="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg uppercase tracking-widest text-sm flex items-center w-fit">
                  Nous appeler pour une info
                  <ChevronRight size={18} className="ml-2" />
                </SafeLink>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider flip color="fill-white" />
      </section>

      {/* FAQ */}
      <section className="relative py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 italic">Questions Fréquentes</h2>
            <p className="text-slate-500 mt-4 font-light">On répond à tout, en toute transparence.</p>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
};

export default Home;
