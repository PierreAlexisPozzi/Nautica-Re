
import { BoatModel, FAQItem, BlogPost } from './types';

export const LOGO_DATA = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhURERIWFRUXFxgXGBgVFxUYGBYVFxoXGBodGRUYHiggGBolGxkWIjIhJSktLi8uFx8zODMsNygtLisBCgoKDg0OGBAQFy0dHSUtLS0rLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAOIA3wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABMEAACAQMBBAYGBAoIBQQDAAABAgMABBEhBRIxQQYTIlFhcQcUMoGRoSNCcrEVUlNigpKywdHwJDNDc4Ois+E0VGNkwjV0o/EIFkT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgICAgMBAAAAAAAAAAABAhEhMRJBA1EyM2Ei/9oADAMBAAIRAxEAPwD3GiiigKKKKAooooCiiigKKKq9t9IbW0ANxMqE6KurO5PAJGuWY+QqnG3L+4/4Sx6qM/B9teluafm26ZkP6W776uhrKZuLqOMEyOqAc2YKPiazQ6MXU2t5tGZhzjtQLaPy3lzIf1xUiDoLs5SC1qkrD60+Z2+MpbWnAVP032Ypwb+2J7llRz8FJpI6c7PPC5B8kkP3LV1Bs+FBhIkUDgFRRj4CpAUDgKcDOnp1s4cbpR9pXX71qTZ9LdnykLHe2zE8As0Rb9XezVwyA8QD5ioV5sa2lG7LbxSDueNGHwIpwJqSA6ggjw1pVZl+gtiNYY2tznObaWWDB8o2A+VI/A20If+Gv+uUf2d5GrnyE0W6w82DU0NTRWVHSqWDP4Qs5IAP7aI+sQHxzGOsQfaQY7+daGwv4p0EkMiSIeDIwZT7xU0JNFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFZ/b/STqnFrax+sXbDIiBwsan680nCNPm2MAGgstsbXgtYzLcSLGg014sx4KqjVmPJRqazwuNoX/DVA2FsfruoN3IOW7GcrAPFstatwFStjdFt2QXd7J61da4dlxHCD9WCLUIPztWPM80tUUuw+o9raEvFHvSt7U0pMkz/AGpWy3uGnhVvNJuqWIJwCcKCSCDjujUuN9VcpIp8DAffg8q+r6+WorE7S2s8cIys93K+RyhMrMW/U+ZHfX1IK6/N6Yw427SXXIIPOlUVxdDVuxIweI0Pu5+/j76dpkaP9ofMf7EfCnqAooooGrtU9RtS1m4LcxyWz8PbQGeEn3CYfpCtVWX9IjbloLkcbaaCf9BZFEn/AMbPWnFWjL+kDtRW8X5W9tEPiolV2/yo1amsz0uTen2aD/zuf1ba6I+6rn8Jx5dcnMeN7Q6bxKjz1BoJtFQpNpxrjJIzu64JHbbcXUd7ae8U221491GycP7Oja9nf4AaaVBPdsAnuFJt1woHgKhrdmRH3cYGR7tRTxik/GFBKpBkHeKiG1bmR8TQtowIOnHxoil6ATgbNtP7lah+kTo1HtO33AAs6ZaGQ8m0ypx9RsAHu0PKn+gNuTs60Ix/UpV/6o3ePnWt6u4ncfM/RHpFPsm8LFWGCY7iI6EqDrpw31OoPmOBr6T2VtNJkSWNw8bqGRhwIP8APyrzf0w9BGmjN/bqDLGv0qr/AGkSg9oDm6/FfIVkvRL0z9VlFnO/9HlbsMTpDKfuRzgHuODzNdspM55TtibxuntXTaLNhdnmLaf/AE2p3Znsx/YT9kVH6YTYsLxTqfVpuH921TbBgY4jg5WNCe7RRXD06KP0ssPwVdfZX9ta8m9C12Y7mciKWTMIGIl3yO2pyRkaV6l6VY2Oy7piR7C8PtpXnXoCkC3dwT+QH+otdsP15OeX5R6le9Llt4yxsr0gDPZtyfmDge+src7dvNto1vYvBawsMS) no-repeat center center; background-size: contain; width: 100%; height: 100%;";

export const TRUST_STATS = [
  { label: "Réussite à l'examen", value: "98%" },
  { label: "Moniteurs diplômés", value: "Experts" },
  { label: "Sérieux & Pédagogie", value: "5j + 2j" },
  { label: "Avis Clients", value: "5/5" },
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/nautica_re?igsh=MWp1bmJ4endzYjRwZQ==",
  facebook: "https://www.facebook.com/p/Nautica-R%C3%A9-61575886004943/",
  iledere: "https://www.iledere.com/organiser-activites-et-loisirs/nautica-re-location-de-bateaux-la-flotte-fr-6111565/"
};

/* 
 * KNOWLEDGE GRAPH SEO & GEO (AI-Ready)
 * Structure de données complexe pour aider les IA (ChatGPT, Gemini) 
 * à comprendre les entités, les prix et la localisation.
 */
export const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nautica-re.fr",
    "name": "Nautica Ré",
    "alternateName": ["Nautica Ré - Bateau École", "Location Bateau La Flotte"],
    "description": "École de navigation agréée et service de location de bateaux à La Flotte (Île de Ré). Formation permis côtier et hauturier, coaching nautique et location de semi-rigides.",
    "url": "https://nautica-re.fr",
    "telephone": "+33688772630",
    "email": "contact@nautica-re.fr",
    "sameAs": [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.iledere
    ],
    "image": [
      "https://i.postimg.cc/mk7Yspnx/Logo-Nautica-Re.jpg",
      "https://www.iledere.com/app/uploads/iledere/2024/07/thumbs/vue-aerienne-port-la-flotte-ile-de-re-par-edouard-salmon-skystudio-640x640.webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 Bis rue de la Croix Michaud",
      "addressLocality": "La Flotte",
      "postalCode": "17630",
      "addressRegion": "Charente-Maritime",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.185623,
      "longitude": -1.328912
    },
    "areaServed": [
      { "@type": "City", "name": "La Flotte" },
      { "@type": "City", "name": "La Rochelle" },
      { "@type": "City", "name": "Sainte-Marie-de-Ré" },
      { "@type": "City", "name": "Saint-Martin-de-Ré" },
      { "@type": "AdministrativeArea", "name": "Île de Ré" },
      { "@type": "AdministrativeArea", "name": "Charente-Maritime" }
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Nicolas",
        "jobTitle": "Moniteur Bateau École & Gérant"
      },
      {
        "@type": "Person",
        "name": "Cypriane",
        "jobTitle": "Monitrice Bateau École & Gérante"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "€€",
    "knowsAbout": ["Permis Bateau Côtier", "Permis Hauturier", "Navigation", "Sécurité en Mer", "Location de Bateau", "Coaching Nautique"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Permis Bateau Côtier",
    "description": "Formation complète au permis plaisance option côtière à La Rochelle et Île de Ré. 5 heures de théorie + 2 heures de pratique en mer.",
    "provider": {
      "@type": "Organization",
      "name": "Nautica Ré",
      "sameAs": "https://nautica-re.fr"
    },
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "price": "330.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://nautica-re.fr/permis"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Blended",
      "courseWorkload": "PT7H",
      "location": "La Flotte, Île de Ré"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Location de Bateaux Semi-Rigides",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nautica Ré"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Port de La Flotte"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Flotte de location",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Semi-Rigide 12 Personnes",
            "description": "Location de bateau semi-rigide puissant (150-250cv) au départ de La Flotte."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "300.00",
            "priceCurrency": "EUR",
            "unitText": "DAY"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Coque Open Confort",
            "description": "Location de bateau type Coque Open pour balade en famille."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "250.00",
            "priceCurrency": "EUR",
            "unitText": "DAY"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien de temps faut-il pour passer le permis ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour garantir une réussite optimale et une vraie maîtrise du milieu marin, notre formation se déroule sur un minimum de 5 jours de théorie suivis de 2 jours de pratique intensive. Cette approche sérieuse nous permet d'afficher 98% de réussite."
        }
      },
      {
        "@type": "Question",
        "name": "Où se font les départs en mer ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Toutes nos locations de bateaux partent exclusivement du Port de La Flotte. Pour les formations permis bateau, vous avez le choix entre le Port de La Flotte ou le Port des Minimes à La Rochelle pour votre pratique."
        }
      },
      {
        "@type": "Question",
        "name": "Où passer son permis bateau à La Rochelle ou l'Île de Ré ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nautica Ré est situé idéalement à La Flotte (Île de Ré), à seulement 15min de La Rochelle. C'est le lieu parfait pour apprendre le code et la conduite en mer avec des moniteurs diplômés."
        }
      }
    ]
  }
];

export const PHONE_1 = "06 88 77 26 30";
export const PHONE_2 = "06 88 77 01 54";

export const FAQS: FAQItem[] = [
  {
    question: "Combien de temps faut-il pour passer le permis ?",
    answer: "Pour garantir une réussite optimale et une vraie maîtrise du milieu marin, notre formation se déroule sur un minimum de 5 jours de théorie suivis de 2 jours de pratique intensive. Cette approche sérieuse nous permet d'afficher 98% de réussite."
  },
  {
    question: "Quel est votre taux de réussite ?",
    answer: "Nous sommes fiers d'afficher un taux de réussite de 98% au premier examen grâce à notre méthode pédagogique personnalisée et nos tests blancs en conditions réelles."
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Nos bureaux à La Flotte vous accueillent du lundi au samedi, de 9h à 18h. Nous sommes joignables sur nos deux lignes directes pour toute demande."
  },
  {
    question: "Où se trouve précisément votre agence ?",
    answer: "Nous sommes situés au 2 Bis rue de la Croix Michaud, 17630 La Flotte. C'est ici que se déroulent les cours théoriques pour tous les permis."
  },
  {
    question: "Où se font les départs en mer ?",
    answer: "Toutes nos locations partent exclusivement du Port de La Flotte. Pour les permis, vous avez le choix entre le Port de La Flotte ou le Port des Minimes à La Rochelle pour votre pratique."
  }
];

export const BOATS: BoatModel[] = [
  {
    id: 'semi-rigide',
    name: 'Bateaux Semi-Rigides',
    capacity: 12,
    power: 'De 100cv à 250cv',
    price: 'À partir de 300€',
    image: 'https://www.grouperouxelmarine.com/wp-content/uploads/2024/01/bateau-highfield-sport-med-700-9488993-yb-1.jpg',
    examples: 'Zodiac Pro, Bombard Sunrider, Highfield Patrol.'
  },
  {
    id: 'coque-open',
    name: 'Coques Open & Plaisance',
    capacity: 8,
    power: 'De 100cv à 200cv',
    price: 'À partir de 250€',
    image: 'https://www.meadream-sailing.com/wp-content/uploads/2023/06/G82C1555-1024x683.jpg',
    examples: 'Jeanneau Cap Camarat, Beneteau Flyer.'
  },
  {
    id: 'cabine',
    name: 'Unités avec Cabine / Cruiser',
    capacity: 6,
    power: '150cv et +',
    price: 'À partir de 420€',
    image: 'https://www.beneteau.com/sites/default/files/styles/standard_large/public/2023-09/flyer-10-pilot-edition3.jpg.webp?itok=ztIVhiST',
    examples: 'Jeanneau Merry Fisher, Beneteau Antares.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'passer-son-permis-a-la-flotte',
    title: 'Pourquoi passer son permis à La Flotte ?',
    excerpt: 'Découvrez les avantages d\'une formation personnalisée sur l\'île de Ré et les spécificités de notre zone de navigation.',
    date: '15 Juillet 2025',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800'
  }
];
