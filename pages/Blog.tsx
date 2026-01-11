
import React from 'react';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';
import { Calendar, ChevronRight } from 'lucide-react';
import SafeLink from '../components/SafeLink';

const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Blog Nautica Ré | Guide de l'Île de Ré & Conseils Navigation" 
        description="Actualités du permis bateau, conseils pour louer un bateau à La Flotte et guides des plus beaux spots de l'Île de Ré."
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Blog / Guide de l'Île de Ré</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Nos conseils d'experts pour bien naviguer et profiter pleinement de la Charente-Maritime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-blue-500 font-bold uppercase tracking-widest mb-4">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                  </div>
                  <h2 className="text-xl font-serif font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <SafeLink 
                    to="/blog" 
                    className="inline-flex items-center font-bold text-slate-900 group/link"
                  >
                    Lire l'article
                    <ChevronRight size={18} className="ml-1 text-blue-600 group-hover/link:translate-x-1 transition-transform" />
                  </SafeLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
