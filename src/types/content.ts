export interface Settings {
  brand: string;
  tagline: string;
  phone_display: string;
  phone_tel: string;
  email: string;
  address: string;
  service_area: string;
  whatsapp_link: string;
  instagram: string;
  linkedin: string;
}

export interface Machine {
  name: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Vertical {
  title: string;
  description: string;
}

export interface HomeContent {
  hero_eyebrow: string;
  hero_headline: string;
  hero_lead: string;
  verticals: Vertical[];
}

export interface PageHero {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface PagesContent {
  machines: PageHero;
  solutions: PageHero;
  about: PageHero;
  contact: PageHero;
}

export interface ImagesContent {
  hero: string;
  lounge: string;
  banner: string;
}
