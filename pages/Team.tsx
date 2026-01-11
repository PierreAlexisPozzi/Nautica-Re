
import React from 'react';
import SEO from '../components/SEO';
import { Award, ShieldCheck, Heart } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="L'Équipe Nautica Ré | Experts Permis Bateau Île de Ré" 
        description="Faites connaissance avec Cypriane et Nicolas, fondateurs de Nautica Ré. Moniteurs diplômés et passionnés de navigation à La Flotte."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Les Fondateurs de Nautica Ré : Cypriane & Nicolas</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Nautica Ré est née de la rencontre de deux experts du nautisme souhaitant partager leur amour de la mer et leur savoir-faire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
              <img 
                src="https://picsum.photos/id/64/800/1000" 
                alt="Cypriane et Nicolas - Nautica Ré" 
                className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-8 rounded-3xl shadow-xl max-w-xs">
                <p className="font-serif italic text-lg leading-relaxed">
                  "L'accessibilité et l'excellence sont les maîtres-mots de notre école."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-slate-900">Une école à taille humaine</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cypriane, gérante et monitrice, apporte sa rigueur et sa passion pour la transmission. Nicolas, co-gérant, met son expérience de la navigation au service de votre sécurité. Ensemble, ils ont créé un espace où l'on apprend avec sérieux mais toujours dans la convivialité.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Expertise Certifiée</h4>
                    <p className="text-slate-500">Moniteurs diplômés d'État avec plus de 10 ans d'expérience en mer.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Sécurité Prioritaire</h4>
                    <p className="text-slate-500">Formations basées sur les réflexes de sécurité et la connaissance parfaite de l'environnement local.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Passion Transmission</h4>
                    <p className="text-slate-500">Nous aimons voir nos élèves gagner en confiance et prendre plaisir à naviguer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
