/**
 * Global types for Portfolio Localization
 * Validated for compatibility with Gemini-driven dynamic content
 */

export type LanguageCode = 'en' | 'fr' | 'de' | 'es';

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string[];
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Stat {
  label: string;
  value: string;
  prefix: string;
  suffix: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
}

export interface UIStrings {
  basedIn: string;
  unGlobalExp: string;
  hiIam: string;
  workPermit: string;
  experienceTitle: string;
  skillsTitle: string;
  competencyOverview: string;
  projectsTitle: string;
  qualificationsTitle: string;
  endorsementsTitle: string;
  education: string;
  certificates: string;
  languages: string;
  interests: string;
  contact: string;
  viewDetails: string;
  showLess: string;
  online: string;
  askMe: string;
  poweredBy: string;
  rightsReserved: string;
  translationDisclaimer: string;
  privacyNotice: string;
  sdgBadge: string;
  sdgTooltip: string;
}

export interface ResumeData {
  // Shared Data properties
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  socials: Social[];
  skills: Skill[];
  
  // Localized Data properties
  title: string;
  about: string;
  location: string;
  workPermit: string;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certificates: Certificate[];
  languages: Language[];
  interests: string[];
  stats: Stat[];
  testimonials: Testimonial[];
  ui: UIStrings;
}