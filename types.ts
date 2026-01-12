
export interface BoatModel {
  id: string;
  name: string;
  capacity: number;
  power: string;
  price: string;
  image: string;
  examples: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Fix: Added BlogPost interface to resolve "has no exported member 'BLOG_POSTS'" 
 * error in pages/Blog.tsx (which depends on this type via constants.tsx).
 */
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
