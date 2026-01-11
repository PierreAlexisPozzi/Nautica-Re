
import React from 'react';
import { Ship, Anchor, MapPin, Phone, Mail, Award, Compass, Users } from 'lucide-react';
import { BoatModel, BlogPost, FAQItem } from './types';

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Nautica Ré",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Port de La Flotte",
    "addressLocality": "La Flotte",
    "postalCode": "17630",
    "addressRegion": "Charente-Maritime",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.1883,
    "longitude": -1.3267
  },
  "url": "https://www.nautica-re.fr",
  "founder": ["Cypriane", "Nicolas"],
  "description": "École de navigation et loueur de bateaux sur l'Île de Ré.",
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Course",
      "name": "Permis Bateau Côtier"
    }
  }
};

export const BOATS: BoatModel[] = [
  {
    id: '1',
    name: 'Semi-Rigide Zodiac Open 7',
    capacity: 10,
    power: '225 CV',
    price: 'À partir de 450€/jour',
    image: 'https://picsum.photos/id/211/600/400'
  },
  {
    id: '2',
    name: 'Coque Open Jeanneau Cap Camarat',
    capacity: 7,
    power: '150 CV',
    price: 'À partir de 350€/jour',
    image: 'https://picsum.photos/id/212/600/400'
  },
  {
    id: '3',
    name: 'Semi-Rigide Bombard Sunrider',
    capacity: 6,
    power: '115 CV',
    price: 'À partir de 280€/jour',
    image: 'https://picsum.photos/id/338/600/400'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "Comment bien préparer son dossier de permis bateau en 2025 ?",
    excerpt: "Anticipez les démarches administratives pour naviguer dès les premiers rayons de soleil.",
    date: "12 Janvier 2025",
    slug: "preparer-dossier-permis-2025",
    image: "https://picsum.photos/id/10/600/400"
  },
  {
    id: '2',
    title: "Les 5 plus beaux mouillages autour de l'Île de Ré.",
    excerpt: "Découvrez nos spots secrets du Fier d'Ars à la pointe de Sablanceaux.",
    date: "5 Janvier 2025",
    slug: "beaux-mouillages-ile-de-re",
    image: "https://picsum.photos/id/11/600/400"
  },
  {
    id: '3',
    title: "Pourquoi passer son permis bateau hors saison à La Flotte ?",
    excerpt: "Calme, disponibilité et conditions idéales pour apprendre sereinement.",
    date: "28 Décembre 2024",
    slug: "permis-bateau-hors-saison",
    image: "https://picsum.photos/id/12/600/400"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Peut-on passer le permis bateau en un week-end ?",
    answer: "Oui, chez Nautica Ré nous proposons des formules accélérées permettant de valider la théorie et la pratique sur des créneaux condensés, idéal pour les résidents secondaires ou les vacanciers."
  },
  {
    question: "Quel est l'âge minimum pour le permis côtier ?",
    answer: "Il est possible de passer le permis côtier dès l'âge de 16 ans."
  },
  {
    question: "Où se déroulent les cours pratiques ?",
    answer: "La formation pratique se fait directement au départ du Port de La Flotte sur notre bateau-école dédié."
  }
];
