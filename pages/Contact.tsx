
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Send, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'permis',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Cypriane ou Nicolas reviendront vers vous rapidement.");
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact & Accès | Nautica Ré Port de La Flotte" 
        description="Besoin d'un permis bateau ou d'une location ? Contactez Nautica Ré au Port de La Flotte. Réponse rapide garantie."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Contact & Accès</h1>
              <p className="text-xl text-slate-500 mb-12 font-light">
                Nous sommes à votre disposition pour toute question concernant nos formations ou la location de nos bateaux.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-blue-900 text-white rounded-2xl shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Bureau du Port</h4>
                    <p className="text-slate-600">Port de La Flotte, 17630 La Flotte, Île de Ré</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm font-bold flex items-center mt-2 hover:underline"
                    >
                      Ouvrir dans Google Maps <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-blue-900 text-white rounded-2xl shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Téléphone</h4>
                    <p className="text-slate-600">Appel direct : <a href="tel:+33600000000" className="hover:text-blue-600 transition-colors">06 00 00 00 00</a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-blue-900 text-white rounded-2xl shadow-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Horaires d'accueil</h4>
                    <p className="text-slate-600">7j/7 de 9h à 19h (Saison)</p>
                    <p className="text-slate-600 text-sm">Sur rendez-vous hors saison</p>
                  </div>
                </div>
              </div>

              {/* Mock Map */}
              <div className="w-full h-80 bg-slate-100 rounded-[2.5rem] border border-slate-200 overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                  <MapPin size={48} className="mb-2 opacity-20" />
                  <p className="font-bold uppercase tracking-widest text-xs opacity-50">Google Map Interactive</p>
                  <p className="text-xs opacity-40">Centrée sur le Port de La Flotte</p>
                </div>
                {/* Visual indicator of the map */}
                <img 
                  src="https://picsum.photos/id/164/1000/600" 
                  alt="Emplacement Nautica Ré" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>

            <div className="bg-slate-50 p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Votre Nom</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Ex: Jean Dupont"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Votre Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="votre@email.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Votre besoin</label>
                  <select 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="permis">Passer mon Permis Bateau</option>
                    <option value="location">Louer un Bateau</option>
                    <option value="coaching">Coaching & Services</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Comment pouvons-nous vous aider ?"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-5 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Envoyer la demande</span>
                </button>
              </form>
              <p className="text-center text-xs text-slate-400 mt-6">
                En envoyant ce formulaire, vous acceptez d'être recontacté dans le cadre de votre demande.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
