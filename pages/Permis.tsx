
import React from 'react';
import SEO from '../components/SEO';
import { Ship, Clock, CheckCircle, Navigation, MapPin, ChevronRight } from 'lucide-react';
import { JSON_LD } from '../constants';
import SafeLink from '../components/SafeLink';

const Permis: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Permis Bateau Côtier Île de Ré | Formation Rapide Nautica Ré" 
        description="Passez votre permis côtier à La Flotte (17). Formation moderne, plateforme en ligne et pratique sur l'Île de Ré avec des experts."
        schema={JSON_LD}
      />

      {/* Hero Header */}
      <header className="bg-blue-900 py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Passer son Permis Bateau Côtier à La Flotte (17)</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Une formation complète et structurée pour naviguer en toute sécurité dans les eaux de l'Île de Ré et d'ailleurs.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center">
                   Pourquoi le permis côtier ?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Indispensable pour naviguer jusqu'à 6 milles d'un abri, il vous permet de piloter des navires de plaisance de plus de 6 chevaux, de jour comme de nuit. C'est la clé de votre liberté maritime.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">La Méthode Nautica Ré</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Nous privilégions une approche pédagogique moderne : accès à une plateforme de code en ligne 24h/24, cours théoriques en salle à La Flotte et formation pratique sur notre bateau-école dernière génération.
                </p>
                <div className="space-y-4">
                  {[
                    "Accès plateforme e-learning 24/7",
                    "Supports de cours papier inclus",
                    "Examens blancs corrigés",
                    "Bateau école Premium"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">Le Déroulement en 3 étapes</h2>
              <div className="relative">
                {/* Step Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-blue-100"></div>
                
                <div className="space-y-12 relative">
                  {[
                    { title: "1. Inscription administrative", desc: "Constitution du dossier (cerfa, timbre fiscal, certificat médical). Nous nous occupons de l'enregistrement.", icon: <Ship size={24} /> },
                    { title: "2. Validation du code", desc: "Apprentissage via notre plateforme et dans nos locaux, puis examen théorique (QCM) dans un centre agréé.", icon: <Clock size={24} /> },
                    { title: "3. Formation pratique", desc: "Minimum 2 heures à la barre du bateau-école pour valider les manœuvres fondamentales avec votre moniteur.", icon: <Navigation size={24} /> }
                  ].map((step, i) => (
                    <div key={i} className="flex items-start space-x-8">
                      <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="mr-2" /> Lieu de formation
                </h4>
                <p className="text-blue-50 opacity-90 mb-6">
                  La formation théorique se déroule dans nos locaux situés dans la Zone Artisanale de la Croix Michaud (à la Flotte) et la pratique au Port de La Flotte en Ré, facilitant l'accès pour les résidents et vacanciers.
                </p>
                <SafeLink to="/contact" className="block w-full py-4 bg-white text-blue-600 text-center font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                  Réserver ma session
                </SafeLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Others Permits Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Élargissez vos horizons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold mb-4">Permis Hauturier</h3>
              <p className="text-slate-600 mb-6">Naviguez sans limite de distance. Idéal pour les traversées et les passionnés de cartographie.</p>
              <SafeLink to="/contact" className="text-blue-600 font-bold flex items-center group">
                En savoir plus <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </SafeLink>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold mb-4">Permis Fluvial</h3>
              <p className="text-slate-600 mb-6">Pilotez sur les rivières, fleuves et canaux de France. Parfait pour le tourisme fluvial.</p>
              <SafeLink to="/contact" className="text-blue-600 font-bold flex items-center group">
                En savoir plus <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </SafeLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Permis;
