
import React, { useState } from 'react';
import SEO from '../components/SEO';
// Added Anchor to the imports to resolve the missing reference on line 82
import { MapPin, Phone, Mail, Send, Clock, ExternalLink, ChevronRight, Anchor } from 'lucide-react';
import { PHONE_1, PHONE_2 } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'permis',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Notre équipe reviendra vers vous dans les plus brefs délais.");
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact & Horaires Nautica Ré | La Flotte en Ré" 
        description="Nos bureaux sont situés au 2 Bis rue de la Croix Michaud à La Flotte. Ouvert du Lundi au Samedi de 9h à 18h."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 uppercase tracking-tight italic">Gardons le contact</h1>
              <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                Une question sur nos tarifs, nos sessions de code ou nos disponibilités de location ? Notre équipe vous accueille à <strong>La Flotte</strong>.
              </p>

              <div className="space-y-12 mb-16">
                <div className="flex items-start space-x-8 group">
                  <div className="p-5 bg-blue-900 text-white rounded-[1.5rem] shadow-xl flex-shrink-0 transition-transform group-hover:scale-110 duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-widest mb-2 italic">Bureau & Agence</h4>
                    <p className="text-slate-600 text-lg leading-snug">2 Bis rue de la Croix Michaud,<br />17630 La Flotte, Île de Ré</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=2+Bis+rue+de+la+Croix+Michaud+La+Flotte" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-xs font-bold flex items-center mt-3 hover:underline uppercase tracking-widest"
                    >
                      Nous trouver sur la carte <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-8 group">
                  <div className="p-5 bg-blue-900 text-white rounded-[1.5rem] shadow-xl flex-shrink-0 transition-transform group-hover:scale-110 duration-500">
                    <Phone size={28} />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-widest italic">Appelez-nous</h4>
                    <div className="space-y-2">
                      <a href={`tel:${PHONE_1.replace(/\s/g, '')}`} className="text-slate-600 font-bold text-2xl hover:text-blue-600 transition-colors tracking-tighter block">{PHONE_1}</a>
                      <a href={`tel:${PHONE_2.replace(/\s/g, '')}`} className="text-slate-600 font-bold text-2xl hover:text-blue-600 transition-colors tracking-tighter block">{PHONE_2}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-8 group">
                  <div className="p-5 bg-blue-900 text-white rounded-[1.5rem] shadow-xl flex-shrink-0 transition-transform group-hover:scale-110 duration-500">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg uppercase tracking-widest mb-2 italic">Horaires d'accueil</h4>
                    <p className="text-slate-600 text-lg">Lundi au Samedi : <span className="text-blue-900 font-bold">09:00 — 18:00</span></p>
                    <div className="mt-2 bg-blue-50 px-3 py-1 rounded-full text-[10px] text-blue-600 font-bold uppercase tracking-widest w-fit">Fermé le Dimanche</div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="relative p-10 bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden shadow-inner group">
                <Anchor className="absolute -bottom-10 -left-10 text-slate-200 opacity-20 group-hover:rotate-12 transition-transform duration-1000" size={240} />
                <div className="relative z-10">
                  <h5 className="font-serif italic text-2xl text-slate-900 mb-3">Vivez la mer autrement</h5>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Toute l'année, Nautica Ré vous accompagne pour vos projets nautiques avec passion et expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl self-start relative">
              <div className="absolute top-0 right-10 w-20 h-1 bg-blue-600"></div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-10 uppercase tracking-tight italic">Message Rapide</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Nom complet</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-blue-600 px-4 py-4 focus:outline-none transition-all text-sm font-medium"
                      placeholder="Ex: Sophie Martin"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-blue-600 px-4 py-4 focus:outline-none transition-all text-sm font-medium"
                      placeholder="sophie@email.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Type de demande</label>
                  <select 
                    className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-blue-600 px-4 py-4 focus:outline-none transition-all cursor-pointer text-sm font-bold uppercase tracking-widest"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="permis">Permis Côtier</option>
                    <option value="permis_ext">Extension Hauturier / Fluvial</option>
                    <option value="location">Location de Bateau</option>
                    <option value="coaching">Coaching nautique</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 border-b-2 border-slate-200 focus:border-blue-600 px-4 py-4 focus:outline-none transition-all text-sm font-medium"
                    placeholder="Décrivez votre projet nautique..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-6 rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center space-x-4 uppercase tracking-[0.2em] text-xs"
                >
                  <Send size={20} />
                  <span>Envoyer ma demande</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
