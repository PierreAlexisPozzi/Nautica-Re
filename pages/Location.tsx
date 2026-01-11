
import React from 'react';
import SEO from '../components/SEO';
import { Ship, Users, Zap, Map, Navigation, CheckCircle, Anchor } from 'lucide-react';
import { BOATS } from '../constants';
import SafeLink from '../components/SafeLink';

const Location: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Location Bateau Île de Ré - La Flotte | Flotte Nautica Ré" 
        description="Louez un bateau au Port de La Flotte. Large choix de semi-rigides et coques open pour explorer l'Île de Ré, le Fort Boyard et l'Île d'Aix."
      />

      <header className="bg-blue-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/id/124/1600/900" alt="Texture nautique" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Louer un Bateau à La Flotte pour Explorer l'Île de Ré</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez les joyaux de la Charente-Maritime depuis la mer avec une flotte parfaitement entretenue et sécurisée.
          </p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Notre Flotte Sélectionnée</h2>
              <p className="text-slate-500">Du Port de La Flotte, accédez rapidement au Fier d'Ars, au Fort Boyard ou aux côtes de l'Île d'Aix.</p>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-full text-sm">
              <CheckCircle size={16} />
              <span>Armement de sécurité inclus</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {BOATS.map((boat) => (
              <div key={boat.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={boat.image} 
                    alt={boat.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-blue-900 shadow-sm uppercase tracking-wider">
                    Disponibilité Immédiate
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{boat.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Users size={18} className="mr-2 text-blue-400" />
                      <span>{boat.capacity} personnes</span>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Zap size={18} className="mr-2 text-blue-400" />
                      <span>{boat.power}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="text-slate-900 font-bold text-lg">{boat.price}</div>
                    <SafeLink to="/contact" className="bg-blue-900 text-white p-3 rounded-xl hover:bg-blue-800 transition-colors">
                      <Ship size={20} />
                    </SafeLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <img src="https://picsum.photos/id/163/800/600" alt="Carte navigation" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900"></div>
            </div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl font-serif font-bold mb-6">Zone de Navigation</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                    <Map size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Le Fier d'Ars</h4>
                    <p className="text-slate-400 text-sm">Explorez le nord de l'île, les marais et les bancs de sable à marée basse.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                    <Navigation size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fort Boyard & Île d'Aix</h4>
                    <p className="text-slate-400 text-sm">Une traversée incontournable pour admirer le fort historique et pique-niquer à Aix.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                    <Anchor size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pont de l'Île de Ré</h4>
                    <p className="text-slate-400 text-sm">Naviguez sous l'ouvrage d'art et rejoignez rapidement La Rochelle.</p>
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

export default Location;
