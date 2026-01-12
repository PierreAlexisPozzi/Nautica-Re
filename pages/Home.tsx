
import React from 'react';
import { Ship, Award, Users, ChevronRight, Star } from 'lucide-react';
import SEO from '../components/SEO';
import { JSON_LD, FAQS } from '../constants';
import FAQAccordion from '../components/FAQAccordion';
import SafeLink from '../components/SafeLink';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Nautica Ré | Permis Bateau & Location de Bateaux Île de Ré" 
        description="Passez votre permis bateau à La Flotte, Saint Martin de Ré ou Ars en Ré avec Nautica Ré. Formation accélérée, coaching personnalisé et location de bateaux sur l'Île de Ré avec Cypriane et Nicolas."
        schema={JSON_LD}
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <img 
          src="https://www.iledere.com/app/uploads/iledere/2024/07/thumbs/vue-aerienne-port-la-flotte-ile-de-re-par-edouard-salmon-skystudio-640x640.webp" 
          alt="Bateau école Nautica Ré à La Flotte et Saint Martin de Ré" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Votre École de Navigation et Location de Bateaux à l'Île de Ré
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              Située à La Flotte en Ré en Charente-Maritime, Nautica Ré vous accompagne pour obtenir votre permis plaisance ou pour une location sécurisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <SafeLink 
                to="/permis" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg flex items-center justify-center group"
              >
                Passer mon permis
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </SafeLink>
              <SafeLink 
                to="/location" 
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg flex items-center justify-center"
              >
                Louer un bateau
              </SafeLink>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pitch Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/SK55p539/Gemini-Generated-Image-iqynxxiqynxxiqyn.png" 
                alt="Navigation autour de l'île de Ré" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 bg-blue-900 text-white p-8 rounded-3xl z-20 hidden md:block">
                <p className="text-4xl font-serif font-bold mb-1">98%</p>
                <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Réussite au code</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
                <span className="w-10 h-[2px] bg-blue-600"></span>
                <span>Notre ADN</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Une expertise née de la passion</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Fondée par Cypriane et Nicolas, deux passionnés de l'océan, notre établissement vous accompagne pour obtenir votre permis plaisance ou pour profiter d'une location de bateau sécurisée. Que vous soyez débutant ou marin confirmé, nous mettons notre expertise à votre service pour faire de chaque sortie en mer un moment d'exception.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Ship size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Formation Moderne</h4>
                    <p className="text-sm text-slate-500">Plateforme e-learning 24/7 et coaching personnalisé.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Équipe d'Experts</h4>
                    <p className="text-sm text-slate-500">Moniteurs diplômés et passionnés par la transmission.</p>
                  </div>
                </div>
              </div>
              <SafeLink to="/equipe" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                Découvrir notre équipe <ChevronRight size={18} className="ml-1" />
              </SafeLink>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Mockup */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Ils nous font confiance</h2>
          <div className="flex justify-center items-center space-x-1 mb-2">
            {[1,2,3,4,5].map(i => <Star key={i} fill="#f59e0b" className="text-amber-500" />)}
          </div>
          <p className="text-slate-500">4.9/5 sur Google Reviews • Basé sur 150+ avis</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
          <div className="flex space-x-8 animate-marquee">
            {[1,2,3,4].map(i => (
              <div key={i} className="min-w-[350px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold">J</div>
                  <div>
                    <p className="font-bold text-sm">Jean-Marc T.</p>
                    <p className="text-xs text-slate-400">Il y a 2 semaines</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">
                  "Excellente pédagogie avec Cypriane. Le permis côtier passé sans stress à La Flotte. Je recommande Nautica Ré les yeux fermés !"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Questions Fréquentes</h2>
            <p className="text-slate-500 mt-4">Tout ce qu'il faut savoir avant de prendre la mer avec nous.</p>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </div>
  );
};

export default Home;
