
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}

export interface BoatModel {
  id: string;
  name: string;
  capacity: number;
  power: string;
  price: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
