import { ResumeData, LanguageCode } from './types';

// ==========================================
// SHARED DATA
// (Images, Dates, Tech stacks, Socials)ILR 
// ==========================================
const SHARED_DATA = {
  name: "David Rodrigues",
      email: "hi@david-rds.com",
  phone: "41779065990",
  avatarUrl: "/david-rodrigues.jpg",
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/daviddas13jan/", icon: "linkedin" },
        { platform: "Email", url: "mailto:hi@david-rds.com", icon: "mail" }
  ]
};

// ==========================================
// ENGLISH (EN) - Source of Truth
// ==========================================
const DATA_EN: ResumeData = {
  ...SHARED_DATA,
  title: "Digital Transformation & Operations Specialist | AI‑Enabled Products & Platforms",
  about: "Strategic Digital Transformation Leader & Operation Specialist with 16+ years of international experience across UN, logistics, and legal services. Known for architecting and executing end-to-end transformation roadmaps that combine operating model redesign, ERP-driven process optimisation, and AI-powered digital products. Proven track record of cutting processing times by 70%, securing 40% annual savings, and enabling expansion into new markets including the UK and KSA. Equally, comfortable partnering with C-suite on strategy and leading cross-functional teams to deliver full-stack, AI-enabled platforms.",
  location: "Le Grand-Saconnex, Geneva, Switzerland",
  workPermit: "Work Permit B",
  skills: [
    { name: "Strategic Planning", category: "Strategic Operations", level: 95 },
    { name: "Operating Model & Process Design", category: "Strategic Operations", level: 94 },
    { name: "Business Process Optimisation", category: "Strategic Operations", level: 94 },
    { name: "Change Management", category: "Strategic Operations", level: 90 },
    { name: "Cross-Functional Leadership", category: "Strategic Operations", level: 92 },
    { name: "Talent Acquisition", category: "Strategic Operations", level: 88 },
    { name: "Vendor & Budget Management", category: "Strategic Operations", level: 92 },

    { name: "Quantum ERP", category: "Digital Transformation & ERP", level: 95 },
    { name: "ERP Implementation (SAP Environment)", category: "Digital Transformation & ERP", level: 88 },
    { name: "Service Design", category: "Digital Transformation & ERP", level: 90 },
    { name: "Microsoft 365 (SharePoint, Teams)", category: "Digital Transformation & ERP", level: 92 },
    { name: "Google Workspace", category: "Digital Transformation & ERP", level: 92 },
    { name: "Cloudflare (DNS/CDN)", category: "Digital Transformation & ERP", level: 88 },
    { name: "Web Hosting Admin", category: "Digital Transformation & ERP", level: 86 },

    { name: "AI-Driven Web Applications", category: "AI & Product Engineering", level: 92 },
    { name: "Generative AI (Google AI Studio, LLM Integration)", category: "AI & Product Engineering", level: 92 },
    { name: "React", category: "AI & Product Engineering", level: 90 },
    { name: "TypeScript", category: "AI & Product Engineering", level: 90 },
    { name: "Node.js", category: "AI & Product Engineering", level: 86 },
    { name: "Express.js", category: "AI & Product Engineering", level: 86 },
    { name: "PostgreSQL", category: "AI & Product Engineering", level: 84 },
    { name: "Drizzle ORM", category: "AI & Product Engineering", level: 82 },
    { name: "Tailwind CSS", category: "AI & Product Engineering", level: 88 },
    { name: "Vercel", category: "AI & Product Engineering", level: 86 },
    { name: "Firebase", category: "AI & Product Engineering", level: 84 },
    { name: "Supabase", category: "AI & Product Engineering", level: 80 },
    { name: "Resend", category: "AI & Product Engineering", level: 84 },
    { name: "GitHub", category: "AI & Product Engineering", level: 88 },

    { name: "SQL", category: "Data & Analytics", level: 85 },
    { name: "Excel (Advanced)", category: "Data & Analytics", level: 92 },
    { name: "Power BI", category: "Data & Analytics", level: 88 },
    { name: "Google Analytics (GA4)", category: "Data & Analytics", level: 86 },
    { name: "Google Tag Manager (GTM)", category: "Data & Analytics", level: 86 },
    { name: "SEO & GEO (Generative Engine Optimization)", category: "Data & Analytics", level: 92 },

    { name: "Figma", category: "Design & Media", level: 90 },
    { name: "Adobe Creative Suite (Photoshop, Premiere Pro)", category: "Design & Media", level: 88 },
    { name: "Canva", category: "Design & Media", level: 90 },
    { name: "Descript", category: "Design & Media", level: 84 },
    { name: "Sound Forge", category: "Design & Media", level: 82 },

    { name: "Jira", category: "Project Management Tools", level: 82 },
    { name: "Asana", category: "Project Management Tools", level: 82 },
    { name: "Trello", category: "Project Management Tools", level: 82 },
    { name: "Monday.com", category: "Project Management Tools", level: 82 }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Head: Digital Transformation, Budget, and HR",
      company: "The Smartmove2UK",
      location: "Remotely from Geneva",
      period: "04/2015 – Present",
      description: [
        "Own digital transformation, budget, and HR strategy, securing 40% annual savings while scaling teams to support international expansion, including two new branches in India and a UK sister company (Conroy Baker Ltd.).",
        "Designed the firm's operating model and digital blueprint end-to-end, transitioning from manual workflows to ERP-driven processes that significantly elevated client consultation rates.",
        "Spearheaded the digital go-to-market strategy for the new UK entity, defining the SEO and content roadmap that generated substantial lead volume within the first three months.",
        "Architected and coded a proprietary in-house CRM (React, TypeScript, PostgreSQL, Drizzle ORM) with role-based access control and multi-currency tracking, eliminating third-party SaaS costs and centralising visa pipeline visibility.",
        "Engineered a custom appointment platform integrating Razorpay, Stripe, and video conferencing with multi-location logic, multi-currency pricing, and automatic tax calculations (GST/VAT).",
        "Developed high-conversion compliance tools-including Sponsorship Cost and ILR & Absence calculators-using Google AI Studio logic and Resend automation for lead nurturing.",
        "Currently engineering the UK Spouse Visa platform using GEO standards and Framer Motion to achieve superior Core Web Vitals for high-value legal service conversion."
      ],
      technologies: ["Digital Transformation", "ERP", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Google AI Studio", "Resend"]
    },
    {
      id: "exp-2",
      role: "Consultant: Digital Strategy & Operations",
      company: "Ghosh Group",
      location: "Remotely from Geneva",
      period: "04/2015 – Present",
      description: [
        "Serve as a foundational strategic partner, steering growth from inception to a prominent market position by continuously optimising digital and operational frameworks.",
        "Engineered a React/Firebase-based B2B landing platform targeting Saudi Vision 2030 projects (NEOM, Red Sea), integrating Google Ads and GTM tracking to achieve a 7.80% CTR in launch week.",
        "Currently designing AI-based Arabic localization and semi-autonomous communication workflows to support high-value infrastructure bids in the region.",
        "Delivered consistent financial impact, including a 20% reduction in overhead expenses through strategic digital efficiency and procurement initiatives."
      ],
      technologies: ["Digital Strategy", "Operations", "React", "Firebase", "Google Ads", "GTM", "AI Localization"]
    },
    {
      id: "exp-3",
      role: "Focal Point: Finance, Procurement & Inventory Projects",
      company: "United Nations Institute for Training and Research (UNITAR)",
      location: "Geneva, Switzerland",
      period: "11/2022 – 03/2025",
      description: [
        "Delivered exceptional control over a ~$140k project portfolio by orchestrating Quantum ERP operations, ensuring precise fund allocation and informed strategic decision-making.",
        "Generated substantial value through strategic procurement, achieving an average of 30% cost savings on key acquisitions while ensuring strict compliance with UN guidelines.",
        "Coordinated logistics for 11+ training workshops, managing participant travel and Daily Subsistence Allowance provisions for up to 40 participants.",
        "Drove significant operational efficiency by implementing an optimised invoice tracking process, decreasing processing time by 70%.",
        "Established a detailed inventory system for Division assets, accurately tracking acquisitions and disposals and reducing discrepancies by 99%."
      ],
      technologies: ["Quantum ERP", "Financial Control", "Procurement", "Inventory", "Logistics"]
    },
    {
      id: "exp-4",
      role: "Manager: MaerskLine.com",
      company: "MAERSK LINE",
      location: "Mumbai",
      period: "07/2010 – 03/2015",
      description: [
        "Supported the strategic planning and global rollout of the revamped MaerskLine.com across 11 languages, coordinating with IT and regional teams to address integration with the core SAP environment.",
        "Led the integration of the Eloqua marketing automation platform across multiple markets, improving lead capture by approximately 10% through more structured digital campaigns.", "Oversaw web content and campaign messaging to ensure alignment with Maersk's brand, tone of voice, and communication guidelines across more than 37 regional clusters. Working with regional marketing and sales teams to maintain consistent, accurate, and compliant messaging while supporting local commercial objectives."
      ],
      technologies: ["CMS", "SAP Integration", "Eloqua", "Localization"]
    },
    {
      id: "exp-5",
      role: "Head: E-Marketing Department and Administration",
      company: "LOHA ISPAAT LTD",
      location: "Mumbai",
      period: "07/2009 – 06/2010",
      description: [
        "Developed a centralized budgeting system to manage INR 400k in digital marketing and HR expenditure with optimal resource allocation.",
        "Created and implemented targeted training programmes for a 15+ member team, enhancing lead generation capability and overall performance.",
        "Supervised payroll processing and negotiated vendor contracts to maintain operational continuity."
      ],
      technologies: ["Budget Management", "Team Leadership", "E-Marketing", "Vendor Management"]
    }
  ],
  projects: [
        {
      id: "proj-6",
      title: "Caseora - Immigration Case Management Platform",
      description: [
        "Architected a compliance-first SaaS platform for UK immigration advisory firms - enforcing a strict 21-step UKVI workflow with Hard Gate controls, role-based access, audit logging, and document management. Engineered to deliver 99% documentation efficiency gains and 100% compliance assurance.",
        "Caseora is a full-stack SaaS case management and document workflow platform I designed and built end-to-end for UK immigration advisory firms. The system guides Visa Documentation Executives through a rigorous 21-step compliance process - from client onboarding through to visa approval - with Hard Gate enforcement that prevents progression unless every prior step is fully completed.",
        "Every layer of the platform is built around UKVI document standards, with enforced naming conventions, real-time case tracking, and role-based access control. A director-level admin panel provides complete audit trail visibility across all cases and team activity.",
        "The result: a compliance-first architecture that eliminates manual documentation errors and process gaps - delivering an estimated 99% improvement in documentation workflow efficiency and establishing 100% process compliance across every case handled by the firm."
      ],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      imageUrl: "https://ghoshgroups.com/download/Immigration-Case-Management-Platform.jpg"
    },
    {
      id: "proj-1",
      title: "UK Immigration Tools Suite",
      description: [
        "UK Sponsorship Cost Calculator: Developed a multi-step estimator for businesses to calculate total Home Office fees (Licence, CoS, ISC, and Health Surcharges). Integrated automated lead capture via Google Sheets and secure multi-recipient email delivery using Resend.",
        "UK Visa Absence Calculator: Developed a comprehensive compliance tool for UK visa and citizenship applicants to verify travel history against complex Home Office limits.",
        "Indefinite Leave to Remain (ILR) Calculator: Built a critical tool to give immediate clarity on continuous lawful residence and earliest possible application date. The user feeds in the data and the total with breakup is forwarded to their email and the business development team for lead conversion."
      ],
      tags: ["Google AI Studio", "React", "TypeScript", "Vercel"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-2",
      title: "UK Spouse Visa Specialist Platform",
      description: [
        "Currently spearheading the development of a specialized high-conversion digital platform for UK immigration legal services. This project is in active development, designed with a premium, trust-building aesthetic to maximize conversion for high-value legal services.",
        "Engineering a fully SEO-optimized architecture, meticulously adhering to Core Web Vitals metrics and GEO (Generative Engine Optimization) standards to ensure superior search ranking and user experience."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-3",
      title: "Ghosh Group KSA Landing Page",
      description: [
        "Strategic B2B platform engineered to penetrate the Saudi Arabian construction market, specifically targeting supply chain demands for Vision 2030 mega-projects like NEOM, The Red Sea and Qiddiya.",
        "Facilitates seamless market expansion from a dominant UAE position to KSA, utilizing advanced SEO and GEO (Generative Engine Optimization) to capture high-value infrastructure contracts.",
        "Technical ecosystem includes end-to-end lead generation pipeline with Google Ads Search campaign (5 ad groups, 15 RSAs across English & Arabic), full conversion tracking via GTM with Google Ads conversion tags and Conversion Linker, achieving 7.80% CTR within launch week. Roadmap includes AI-driven Arabic localization and autonomous communication."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM", "Google Ads"],
      imageUrl: "https://ghoshgroups.com/download/core-web-vitals.jpg"
    },
    {
      id: "proj-4",
      title: "The SmartMove2UK – Booking Platform",
      description: [
        "Full-stack appointment scheduling platform for UK immigration consultancy services, enabling seamless client-to-specialist matchmaking across multiple Indian cities (Mumbai, Delhi, Bangalore, Chandigarh) and online channels (Google Meet, WhatsApp).",
        "Facilitates end-to-end consultation booking with intelligent specialist filtering based on location availability, session format preferences, and service expertise.",
        "Supports multi-currency pricing (GBP, INR, USD) with automatic tax calculation (GST, VAT, fixed tax), serving both domestic Indian and international clients.",
        "Technical ecosystem includes Razorpay payment integration, automated email confirmations via Resend, session-based admin authentication, an embeddable booking widget for external websites, and an admin dashboard with real-time appointment calendar, customer database, and payment tracking."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "Razorpay", "Resend"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-5",
      title: "The SmartMove2UK CRM – Customer Relationship Management System",
      description: [
        "Full-stack in-house CRM platform built for a UK immigration law firm, streamlining client relationship management, lead tracking, and case pipeline oversight across the entire visa application lifecycle.",
        "Delivers comprehensive contact management with visa-specific tracking fields (current visa, target visa, expiry dates), activity timeline logging (calls, emails, meetings, notes, tasks), and a real-time dashboard with key performance metrics, pipeline status overview, and date range filtering.",
        "Supports multi-currency financial tracking (GBP, INR, USD) for service fees, payments received, and outstanding balances.",
        "Features role-based access control across four tiers (Admin, Manager, Agent, Coordinator) with granular permissions for contact editing, deletion, lead assignment, and financial visibility. Includes email/password authentication with admin-provisioned accounts, first-login password change enforcement, CSV/Excel bulk import with column mapping and duplicate detection, and WhatsApp quick actions for direct client communication."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "TanStack Query", "Wouter"],
      imageUrl: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&q=80&w=600"
    }
  ],
  education: [
    {
      degree: "Bachelor’s Degree in Commerce",
      school: "Mumbai University",
      location: "Mumbai",
      period: "03/1995 – 04/1998"
    }
  ],
  certificates: [
    { name: "Fellowship Programme In Collaborative Leadership", issuer: "UNITAR", date: "04/2023" },
    { name: "Introduction to Generative AI", issuer: "Google Skills", date: "10/2025" },
    { name: "Introduction to Large Language Models", issuer: "Google Skills", date: "11/2025" },
    { name: "Gen AI: Unlock Foundational Concepts", issuer: "Google Skills", date: "12/2025" },
    { name: "Gen AI: Navigate the Landscape", issuer: "Google Skills", date: "12/2025" }
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Marathi", level: "Fluent" },
    { name: "French", level: "Basic" }
  ],
  interests: [
    "Applied Technology & Generative AI",
    "Human Dynamics & Communication",
    "Narrative Analysis & Storytelling"
  ],
  stats: [
    { label: "UN & Global Exp", value: "16", prefix: "", suffix: "+ Yrs" },
    { label: "Annual Savings", value: "40", prefix: "", suffix: "%" },
    { label: "Efficiency Boost", value: "70", prefix: "", suffix: "%" },
    { label: "Markets Expanded", value: "3", prefix: "", suffix: "" }
  ],
  testimonials: [
    {
      id: "t1",
      text: "David consistently demonstrated outstanding professionalism, dedication, and a strong work ethic. His ability to manage complex tasks with clarity and efficiency was invaluable.",
      author: "Alexander A. Mejia",
      role: "Director",
      company: "UNITAR"
    },
    {
      id: "t2",
      text: "David's strategic vision and operational expertise were instrumental in transforming our financial processes. His leadership in the digital transition set a new standard for efficiency.",
      author: "Olivier Maury",
      role: "Head of Finance & Budget Unit",
      company: "UNITAR"
    }
  ],
  ui: {
    basedIn: "Based in",
    unGlobalExp: "UN & Global Experience",
    hiIam: "Hi, I am",
    workPermit: "Work Permit B",
    experienceTitle: "Experience",
    skillsTitle: "Skills & Core Competencies",
    competencyOverview: "Holistic Competency Overview",
    projectsTitle: "Featured Projects",
    qualificationsTitle: "Qualifications & Insights",
    endorsementsTitle: "Endorsements",
    education: "Education",
    certificates: "Certificates & Badges",
    languages: "Languages",
    interests: "Interests",
    contact: "Contact",
    viewDetails: "View Details",
    showLess: "Show Less",
    online: "Online",
    askMe: "Ask me anything about David...",
    poweredBy: "Powered by Gemini",
    rightsReserved: "Rights Reserved",
    translationDisclaimer: "AI-assisted translations. Context may vary.",
    privacyNotice: "Privacy: This site doesn't collect data. AI chat is local-only.",
    sdgBadge: "UN SDG Goal 13",
    sdgTooltip: "Climate Action: Built with sustainable web practices-optimized code, renewable energy infrastructure, and zero unnecessary data collection."
  }
};

// ==========================================
// FRENCH (FR)
// ==========================================
const DATA_FR: ResumeData = {
  ...DATA_EN,
  title: "Spécialiste en transformation digitale et opérations | Produits et plateformes assistés par l’IA",
  about: "Responsable stratégique de la transformation numérique et spécialiste des opérations, avec plus de 16 ans d'expérience internationale dans les domaines des Nations Unies, de la logistique et des services juridiques. Reconnu pour la conception et la mise en œuvre de feuilles de route de transformation de bout en bout combinant la refonte des modèles opérationnels, l'optimisation des processus basée sur les ERP et les produits numériques alimentés par l'IA. A fait ses preuves en réduisant les délais de traitement de 70 %, en réalisant 40 % d'économies annuelles et en permettant l'expansion sur de nouveaux marchés, notamment au Royaume-Uni et en Arabie saoudite. Également à l'aise pour collaborer avec les cadres supérieurs sur la stratégie et diriger des équipes interfonctionnelles afin de fournir des plateformes complètes basées sur l'IA.",
  location: "Genève, Suisse",
  workPermit: "Permis de travail B",
  skills: DATA_EN.skills.map(s => ({
    ...s,
    category: s.category
      .replace("Strategic & Operations Management", "Gestion Stratégique & Opérations")
      .replace("Strategic Operations", "Opérations Stratégiques")
      .replace("ERP & Admin Platforms", "ERP & Plateformes Admin")
      .replace("Digital Transformation & ERP", "Transformation Numérique & ERP")
      .replace("Data & Analytics", "Données & Analytique")
      .replace("Digital Marketing & Strategy", "Marketing Numérique & Stratégie")
      .replace("Design & Médias", "Design & Médias")
      .replace("Design & Media", "Design & Médias") // Catch both variations
      .replace("Project Management Tools", "Outils de Gestion de Projet")
      .replace("AI & Creative Tools", "IA & Outils Créatifs")
      .replace("AI & Product Engineering", "IA & Ingénierie Produit")
      .replace("Workflow & Documentation", "Workflow & Documentation")
  })),
  experience: [     {       id: "exp-1",       role: "Responsable : Transformation numérique, budget et ressources humaines",       company: "The Smartmove2UK",       location: "À distance depuis Genève",       period: "04/2015 – Aujourd'hui",       description: [         "Responsable de la stratégie de transformation numérique, du budget et des ressources humaines, permettant de réaliser 40 % d'économies annuelles tout en développant les équipes pour soutenir l'expansion internationale, notamment avec l'ouverture de deux nouvelles succursales en Inde et la création d'une filiale au Royaume-Uni (Conroy Baker Ltd.).",         "Conception du modèle opérationnel et du plan numérique de bout en bout de l'entreprise, avec une transition des flux de travail manuels vers des processus pilotés par un ERP, ce qui a considérablement amélioré les taux de consultation des clients.",         "Direction de la stratégie de commercialisation numérique pour la nouvelle entité britannique, avec définition de la feuille de route en matière de référencement naturel (SEO) et de contenu, qui a généré un volume substantiel de prospects dès les trois premiers mois.",         "Conception et développement d'un CRM interne propriétaire (React, TypeScript, PostgreSQL, Drizzle ORM) avec contrôle d'accès basé sur les rôles et suivi multidevises, éliminant les coûts liés aux solutions SaaS tierces et centralisant la visibilité sur le pipeline des demandes de visa.",         "Conception d'une plateforme de prise de rendez-vous sur mesure intégrant Razorpay, Stripe et la visioconférence, avec une logique multi-sites, une tarification multidevise et des calculs automatiques de taxes (GST/TVA).",         "Développement d'outils de conformité à fort taux de conversion, notamment des calculateurs de coûts de parrainage et de droits de résidence illimités (ILR) et d'absences, à l'aide de la logique de Google AI Studio et de l'automatisation Resend pour la maturation des prospects.",         "Je développe actuellement la plateforme de visas de conjoint pour le Royaume-Uni en utilisant les normes GEO et Framer Motion afin d'obtenir des Core Web Vitals supérieurs pour une conversion optimale des services juridiques à forte valeur ajoutée."       ],       technologies: ["Digital Transformation", "ERP", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Google AI Studio", "Resend"]     },     {       id: "exp-2",       role: "Consultant : Stratégie et opérations numériques",       company: "Ghosh Group",       location: "À distance depuis Genève",       period: "04/2015 – Aujourd'hui",       description: [         "Jouer le rôle de partenaire stratégique essentiel, en pilotant la croissance depuis la création de l'entreprise jusqu'à l'atteinte d'une position dominante sur le marché, grâce à l'optimisation continue des structures numériques et opérationnelles.",         "Conception d'une plateforme d'atterrissage B2B basée sur React/Firebase ciblant les projets de la Vision 2030 de l'Arabie saoudite (NEOM, Mer Rouge), intégrant Google Ads et le suivi GTM pour atteindre un CTR de 7,80 % dès la semaine de lancement.",         "Conception en cours de workflows de localisation en arabe et de communication semi-autonomes basés sur l'IA pour soutenir les appels d'offres d'infrastructures à forte valeur ajoutée dans la région.",         "Impact financier constant, notamment une réduction de 20 % des frais généraux grâce à des initiatives stratégiques d'efficacité numérique et d'approvisionnement."       ],       technologies: ["Digital Strategy", "Operations", "React", "Firebase", "Google Ads", "GTM", "AI Localization"]     },     {       id: "exp-3",       role: "Focal Point: Finance, Procurement & Inventory Projects",       company: "United Nations Institute for Training and Research (UNITAR)",       location: "Genève, Suisse",       period: "11/2022 – 03/2025",       description: [         "Assurance d'un contrôle exceptionnel sur un portefeuille de projets d'environ 140 000 dollars grâce à la gestion des opérations du système ERP Quantum, garantissant une allocation précise des fonds et une prise de décision stratégique éclairée.",         "Génération d'une valeur ajoutée substantielle grâce à des achats stratégiques, permettant de réaliser en moyenne 30 % d'économies sur les acquisitions clés tout en garantissant le strict respect des directives de l'ONU.",         "Coordination logistique de plus de 11 ateliers de formation, gestion des déplacements des participants et des indemnités journalières de subsistance pour un maximum de 40 participants.",         "Amélioration significative de l'efficacité opérationnelle grâce à la mise en place d'un processus optimisé de suivi des factures, réduisant le temps de traitement de 70 %.",         "Mise en place d'un système d'inventaire détaillé pour les actifs de la Division, permettant un suivi précis des acquisitions et des cessions et réduisant les écarts de 99 %."       ],       technologies: ["Quantum ERP", "Financial Control", "Procurement", "Inventory", "Logistics"]     },     {       id: "exp-4",       role: "Manager: MaerskLine.com",       company: "MAERSK LINE",       location: "Mumbai",       period: "07/2010 – 03/2015",       description: [         "Participation à la planification stratégique et à la mise en œuvre du lancement mondial du site Maerskline.com remanié (11 langues), en surmontant les défis techniques liés à l'intégration avec l'environnement SAP central.",         "Promotion de l'intégration de la solution de marketing par e-mail Eloqua dans les 11 langues, ce qui a permis d'améliorer la capture de prospects de 10 %."       ],       technologies: ["CMS", "SAP Integration", "Eloqua", "Localization"]     },     { id: "exp-5", role: "Responsable : Département E-Marketing et Administration", company: "LOHA ISPAAT LTD", location: "Mumbai", period: "07/2009 – 06/2010", description: ["Mise en place d'un système budgétaire centralisé pour gérer les dépenses de 400 000 INR en marketing digital et ressources humaines, avec une allocation optimale des ressources.", "Création et mise en œuvre de programmes de formation ciblés pour une équipe de plus de 15 membres, améliorant la capacité de génération de leads et la performance globale.", "Supervisé la gestion des salaires et négocié les contrats avec les fournisseurs pour assurer la continuité opérationnelle."], technologies: [...DATA_EN.experience[4].technologies] },   ],
  projects: [
        {
      id: "proj-6",
      title: "Caseora - Plateforme de gestion des dossiers d'immigration",
      description: [
        "Conception d'une plateforme SaaS axée sur la conformité pour les cabinets de conseil en immigration au Royaume-Uni, mettant en œuvre un flux de travail UKVI rigoureux en 21 étapes avec des contrôles stricts aux étapes clés, un accès basé sur les rôles, la journalisation des audits et la gestion des documents. Conçue pour offrir un gain d'efficacité de 99 % dans la gestion des documents et une garantie de conformité à 100 %.",
        "Caseora est une plateforme SaaS complète de gestion des dossiers et de flux de travail documentaire que j'ai conçue et développée de bout en bout pour les cabinets de conseil en immigration au Royaume-Uni. Le système guide les responsables de la documentation des visas à travers un processus de conformité rigoureux en 21 étapes - de l'accueil du client jusqu'à l'approbation du visa - avec des contrôles stricts qui empêchent la progression tant que chaque étape précédente n'est pas entièrement terminée.",
        "Chaque couche de la plateforme est conçue autour des normes documentaires de l'UKVI, avec des conventions de nommage imposées, un suivi des dossiers en temps réel et un contrôle d'accès basé sur les rôles. Un panneau d'administration de niveau directionnel offre une visibilité complète sur la piste d'audit de tous les dossiers et de l'activité de l'équipe.",
        "Résultat : une architecture axée sur la conformité qui élimine les erreurs de documentation manuelles et les lacunes dans les processus, permettant une amélioration estimée à 99 % de l'efficacité du flux de travail documentaire et garantissant une conformité totale des processus pour chaque dossier traité par le cabinet."
      ],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      imageUrl: "https://ghoshgroups.com/download/Immigration-Case-Management-Platform.jpg"
    },
    {
      id: "proj-1",
      title: "Suite d'Outils Immigration UK",
      description: [
        "Calculateur de Coûts UK Sponsorship : Développé un estimateur multi-étapes pour les entreprises (Frais de licence, CoS, ISC, Surcharges Santé). Intégration de capture de leads via Google Sheets et livraison d'emails sécurisée via Resend.",
        "Calculateur d'Absence Visa UK : Outil de conformité complet pour vérifier l'historique de voyage par rapport aux limites complexes du Home Office.",
        "Calculateur ILR : Outil critique offrant une clarté immédiate sur la résidence légale continue et la date de demande la plus proche possible."
      ],
      tags: ["Google AI Studio", "React", "TypeScript", "Vercel"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-2",
      title: "Plateforme Spécialiste Visa Conjoint UK",
      description: [
        "Développement d'une plateforme numérique spécialisée à haute conversion pour les services juridiques d'immigration au Royaume-Uni. Design premium inspirant la confiance.",
        "Architecture entièrement optimisée SEO, respectant méticuleusement les Core Web Vitals et les normes GEO (Generative Engine Optimization)."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-3",
      title: "Page d'Accueil Ghosh Group KSA",
      description: [
        "Plateforme B2B stratégique conçue pour pénétrer le marché de la construction en Arabie saoudite (Vision 2030, NEOM, The Red Sea).",
        "Facilite l'expansion du marché des EAU vers l'Arabie saoudite, utilisant le SEO avancé et GEO pour capturer des contrats d'infrastructure de grande valeur.",
        "Écosystème technique incluant un pipeline de génération de leads de bout en bout avec une campagne Google Ads Search (5 groupes d'annonces, 15 RSA en anglais et arabe), un suivi complet des conversions via GTM avec balises de conversion Google Ads et Conversion Linker, atteignant un CTR de 7,80 % dès la semaine de lancement. La feuille de route inclut la localisation arabe pilotée par IA et la communication autonome."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM", "Google Ads"],
      imageUrl: "https://ghoshgroups.com/download/core-web-vitals.jpg"
    },
    {
      id: "proj-4",
      title: "The SmartMove2UK – Plateforme de Réservation",
      description: [
        "Plateforme full-stack de prise de rendez-vous pour des services de conseil en immigration UK, permettant un appariement fluide client–spécialiste dans plusieurs villes indiennes (Mumbai, Delhi, Bangalore, Chandigarh) et via des canaux en ligne (Google Meet, WhatsApp).",
        "Permet une réservation de consultation de bout en bout avec filtrage intelligent des spécialistes selon la disponibilité par localisation, les préférences de format de session et l'expertise de service.",
        "Prend en charge la tarification multi-devises (GBP, INR, USD) avec calcul automatique des taxes (GST, VAT, taxe fixe), pour les clients indiens et internationaux.",
        "Écosystème technique : intégration Razorpay pour les paiements sécurisés, confirmations email automatisées via Resend, authentification admin par session, widget de réservation intégrable pour des sites externes, et tableau de bord admin avec calendrier temps réel, base clients et suivi des paiements."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "Razorpay", "Resend"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-5",
      title: "The SmartMove2UK CRM – Système de Gestion de la Relation Client",
      description: [
        "Plateforme CRM interne full-stack conçue pour un cabinet d’immigration au Royaume-Uni, rationalisant la gestion des relations clients, le suivi des leads et la planification des consultations.",
        "Offre une gestion complète des contacts avec des champs de suivi spécifiques aux visas (visa actuel, visa visé, dates d’expiration), un journal chronologique des communications et un suivi de l’état du dossier de la consultation initiale à la résolution.",
        "Gère le suivi financier multi-devises (GBP, INR, USD) pour les frais de service, les paiements reçus et les soldes impayés.",
        "Inclut un contrôle d’accès basé sur les rôles à quatre niveaux (Admin, Manager, Agent, Coordinateur) avec des permissions granulaires pour l’édition, la suppression et l’exportation des données."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "TanStack Query", "Wouter"],
      imageUrl: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&q=80&w=600"
    }
  ],
  education: [
    {
      degree: "Licence en Commerce",
      school: "Université de Mumbai",
      location: "Mumbai",
      period: "03/1995 – 04/1998"
    }
  ],
  certificates: DATA_EN.certificates, // Automatically use certificates from English Data
  languages: [
    { name: "Anglais", level: "Courant" },
    { name: "Hindi", level: "Courant" },
        { name: "Marathi", level: "Courant" },
    { name: "Français", level: "Basique" }
  ],
  interests: [
    "Technologie Appliquée & IA Générative",
    "Dynamique Humaine & Communication",
    "Analyse Narrative & Storytelling"
  ],
  stats: [
    { label: "Exp. ONU & Global", value: "16", prefix: "", suffix: "+ Ans" },
    { label: "Économies Annuelles", value: "40", prefix: "", suffix: "%" },
    { label: "Gain d'Efficacité", value: "70", prefix: "", suffix: "%" },
    { label: "Marchés Étendus", value: "3", prefix: "", suffix: "" }
  ],
  testimonials: [
    {
      id: "t1",
      text: "David a constamment fait preuve d'un professionnalisme exceptionnel, de dévouement et d'une forte éthique de travail. Sa capacité à gérer des tâches complexes avec clarté était inestimable.",
      author: "Alexander A. Mejia",
      role: "Directeur",
      company: "UNITAR"
    },
    {
      id: "t2",
      text: "La vision stratégique et l'expertise opérationnelle de David ont joué un rôle déterminant dans la transformation de nos processus financiers. Son leadership dans la transition numérique a établi une nouvelle norme d'efficacité.",
      author: "Olivier Maury",
      role: "Chef de l'Unité Finances & Budget",
      company: "UNITAR"
    }
  ],
  ui: {
    basedIn: "Basé à",
    unGlobalExp: "Expérience ONU & Globale",
    hiIam: "Bonjour, je suis",
    workPermit: "Permis de travail B",
    experienceTitle: "Expérience",
    skillsTitle: "Compétences & Atouts",
    competencyOverview: "Aperçu Holistique des Compétences",
    projectsTitle: "Projets Phares",
    qualificationsTitle: "Qualifications & Insights",
    endorsementsTitle: "Recommandations",
    education: "Éducation",
    certificates: "Certificats & Badges",
    languages: "Langues",
    interests: "Intérêts",
    contact: "Contact",
    viewDetails: "Voir Détails",
    showLess: "Voir Moins",
    online: "En Ligne",
    askMe: "Posez-moi une question sur David...",
    poweredBy: "Propulsé par Gemini",
    rightsReserved: "Tous Droits Réservés",
    translationDisclaimer: "Traductions assistées par IA. Le contexte peut varier.",
    privacyNotice: "Confidentialité : Ce site ne collecte aucune donnée. Le chat IA est local.",
    sdgBadge: "Objectif ODD 13",
    sdgTooltip: "Action Climatique : Construit avec des pratiques web durables-code optimisé et zéro collecte de données inutile."
  }
};

// ==========================================
// GERMAN (DE)
// ==========================================
const DATA_DE: ResumeData = {
  ...DATA_EN,
  title: "Spezialist für digitale Transformation und operative Prozesse | KI-gestützte Produkte und Plattformen",
  about: "Strategischer Leiter für digitale Transformation und Betriebsspezialist mit über 16 Jahren internationaler Erfahrung in den Bereichen UN, Logistik und Rechtsdienstleistungen. Bekannt für die Konzeption und Umsetzung von End-to-End-Transformationsroadmaps, die die Neugestaltung von Betriebsmodellen, ERP-gesteuerte Prozessoptimierung und KI-gestützte digitale Produkte kombinieren. Nachweisliche Erfolge bei der Verkürzung von Bearbeitungszeiten um 70 %, der Erzielung von jährlichen Einsparungen von 40 % und der Erschließung neuer Märkte, darunter Großbritannien und Saudi-Arabien. Ebenso vertraut mit der Zusammenarbeit mit Führungskräften bei der Strategieentwicklung und der Leitung funktionsübergreifender Teams zur Bereitstellung von Full-Stack-Plattformen mit KI-Unterstützung.",
  location: "Genf, Schweiz",
  workPermit: "Arbeitsbewilligung B",
  skills: DATA_EN.skills.map(s => ({
    ...s,
    category: s.category
      .replace("Strategic & Operations Management", "Strategie & Betriebsmanagement")
      .replace("Strategic Operations", "Strategische Operationen")
      .replace("ERP & Admin Platforms", "ERP & Admin-Plattformen")
      .replace("Digital Transformation & ERP", "Digitale Transformation & ERP")
      .replace("Data & Analytics", "Daten & Analytik")
      .replace("Digital Marketing & Strategy", "Digitales Marketing & Strategie")
      .replace("Design & Media", "Design & Medien")
      .replace("Project Management Tools", "Projektmanagement-Tools")
      .replace("AI & Creative Tools", "KI & Kreativ-Tools")
      .replace("AI & Product Engineering", "KI & Produktentwicklung")
      .replace("Workflow & Documentation", "Workflow & Dokumentation")
  })),
  experience: [     {       id: "exp-1",       role: "Leiter: Digitale Transformation, Budget und Personalwesen",       company: "The Smartmove2UK",       location: "Im Homeoffice von Genf aus",       period: "04/2015 – heute",       description: [         "Verantwortlich für die Strategie in den Bereichen digitale Transformation, Budget und Personalwesen; Erzielung von jährlichen Einsparungen in Höhe von 40 % bei gleichzeitiger Erweiterung der Teams zur Unterstützung der internationalen Expansion, einschließlich zweier neuer Niederlassungen in Indien und einer britischen Schwesterfirma (Conroy Baker Ltd.).",         "Entwicklung des Betriebsmodells und des digitalen Blueprints des Unternehmens von Anfang bis Ende, Übergang von manuellen Arbeitsabläufen zu ERP-gesteuerten Prozessen, wodurch die Kundenberatungsraten deutlich gesteigert wurden.",         "Leitung der digitalen Markteinführungsstrategie für die neue britische Niederlassung, Definition der SEO- und Content-Roadmap, die innerhalb der ersten drei Monate ein beträchtliches Lead-Volumen generierte.",         "Entwicklung und Programmierung eines proprietären internen CRM-Systems (React, TypeScript, PostgreSQL, Drizzle ORM) mit rollenbasierter Zugriffskontrolle und Währungssüberwachung, wodurch Kosten für SaaS-Lösungen von Drittanbietern entfielen und die Transparenz der Visum-Pipeline zentralisiert wurde.",         "Entwicklung einer maßgeschneiderten Terminplattform, die Razorpay, Stripe und Videokonferenzen mit Multi-Standort-Logik, Preisgestaltung in mehreren Währungen und automatischen Steuerberechnungen (GST/MwSt.) integriert.",         "Entwicklung von Compliance-Tools mit hoher Konversionsrate – darunter Rechner für Sponsoring-Kosten sowie für ILR und Abwesenheiten – unter Verwendung der Logik von Google AI Studio und Resend-Automatisierung zur Lead-Pflege.",         "Derzeit Entwicklung der britischen Plattform für Ehegattenvisa unter Verwendung von GEO-Standards und Framer Motion, um überragende Core Web Vitals für die Konversion hochwertiger Rechtsdienstleistungen zu erzielen."       ],       technologies: ["Digital Transformation", "ERP", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Google AI Studio", "Resend"]     },     {       id: "exp-2",       role: "Berater: Digitale Strategie & Betrieb",       company: "Ghosh Group",       location: "Im Homeoffice von Genf aus",       period: "04/2015 – heute",       description: [         "Funktion als grundlegender strategischer Partner, der das Wachstum von der Gründung bis zu einer führenden Marktposition steuert, indem digitale und betriebliche Rahmenbedingungen kontinuierlich optimiert werden.",         "Entwicklung einer React/Firebase-basierten B2B-Landing-Plattform für Projekte im Rahmen der Saudi Vision 2030 (NEOM, Red Sea) unter Integration von Google Ads und GTM-Tracking, wodurch in der Startwoche eine Klickrate (CTR) von 7,80 % erzielt wurde.",         "Entwickle derzeit KI-basierte arabische Lokalisierungs- und halbautonome Kommunikationsworkflows zur Unterstützung hochwertiger Infrastruktur-Ausschreibungen in der Region.",         "Erzielte nachhaltige finanzielle Ergebnisse, darunter eine Senkung der Gemeinkosten um 20 % durch strategische Initiativen zur digitalen Effizienzsteigerung und Beschaffung."       ],       technologies: ["Digital Strategy", "Operations", "React", "Firebase", "Google Ads", "GTM", "AI Localization"]     },     {       id: "exp-3",       role: "Focal Point: Finance, Procurement & Inventory Projects",       company: "United Nations Institute for Training and Research (UNITAR)",       location: "Genf, Schweiz",       period: "11/2022 – 03/2025",       description: [         "Sicherte eine hervorragende Kontrolle über ein Projektportfolio im Wert von ca. 140.000 US-Dollar durch die Koordination der Quantum-ERP-Abläufe, wodurch eine präzise Mittelzuweisung und fundierte strategische Entscheidungen gewährleistet wurden.",         "Schuf erheblichen Mehrwert durch strategische Beschaffung und erzielte dabei durchschnittlich 30 % Kosteneinsparungen bei wichtigen Anschaffungen, während die strikte Einhaltung der UN-Richtlinien gewährleistet wurde.",         "Koordinierte die Logistik für mehr als 11 Schulungsworkshops und verwaltete die Reisekosten sowie die Tagegelder für bis zu 40 Teilnehmer.",         "Steigerte die betriebliche Effizienz erheblich durch die Einführung eines optimierten Rechnungsnachverfolgungsprozesses, wodurch die Bearbeitungszeit um 70 % verkürzt wurde.",         "Einrichtung eines detaillierten Bestandsverwaltungssystems für die Vermögenswerte der Abteilung, wodurch Anschaffungen und Veräußerungen genau nachverfolgt und Unstimmigkeiten um 99 % reduziert wurden."       ],       technologies: ["Quantum ERP", "Financial Control", "Procurement", "Inventory", "Logistics"]     },     {       id: "exp-4",       role: "Manager: MaerskLine.com",       company: "MAERSK LINE",       location: "Mumbai",       period: "07/2010 – 03/2015",       description: [         "Unterstützte die strategische Planung und die weltweite Einführung der neu gestalteten Website MaerskLine.com in 11 Sprachen und koordinierte dabei die Zusammenarbeit mit der IT-Abteilung und den regionalen Teams, um die Integration in die zentrale SAP-Umgebung sicherzustellen.",         "Leitete die Integration der Marketing-Automatisierungsplattform Eloqua in mehreren Märkten und verbesserte die Lead-Generierung durch besser strukturierte digitale Kampagnen um ca. 10 %.", "Beaufsichtigte Webinhalte und Kampagnenbotschaften, um die Übereinstimmung mit der Marke, dem Tonfall und den Kommunikationsrichtlinien von Maersk in mehr als 37 regionalen Clustern sicherzustellen. Arbeitete mit regionalen Marketing- und Vertriebsteams zusammen, um konsistente, genaue und konforme Botschaften zu gewährleisten und gleichzeitig lokale Geschäftsziele zu unterstützen."       ],       technologies: ["CMS", "SAP Integration", "Eloqua", "Localization"]     },     { id: "exp-5", role: "Leiter: E-Marketing-Abteilung und Verwaltung", company: "LOHA ISPAAT LTD", location: "Mumbai", period: "07/2009 – 06/2010", description: ["Entwicklung eines zentralisierten Budgetierungssystems zur Verwaltung von Ausgaben in Höhe von 400.000 INR für digitales Marketing und Personalwesen unter optimaler Ressourcenzuweisung.", "Erstellung und Umsetzung gezielter Schulungsprogramme für ein Team von mehr als 15 Mitarbeitern zur Verbesserung der Lead-Generierung und der Gesamtleistung.", "Beaufsichtigte die Lohn- und Gehaltsabrechnung und verhandelte Lieferantenverträge, um die Betriebskontinuität zu gewährleisten."], technologies: [...DATA_EN.experience[4].technologies] },   ],
  projects: [
        {
      id: "proj-6",
      title: "Caseora - Plattform für das Fallmanagement im Einwanderungswesen",
      description: [
        "Entwicklung einer Compliance-orientierten SaaS-Plattform für britische Einwanderungsberatungsunternehmen - zur Durchsetzung eines strengen 21-stufigen UKVI-Workflows mit strengen Kontrollpunkten, rollenbasiertem Zugriff, Audit-Protokollierung und Dokumentenmanagement. Entwickelt, um eine Steigerung der Dokumenteneffizienz um 99 % und eine 100-prozentige Compliance-Sicherheit zu gewährleisten.",
        "Caseora ist eine Full-Stack-SaaS-Plattform für Fallmanagement und Dokumenten-Workflow, die ich von Grund auf für britische Einwanderungsberatungsfirmen entworfen und entwickelt habe. Das System führt Visa-Dokumentationsbeauftragte durch einen strengen 21-stufigen Compliance-Prozess - vom Kunden-Onboarding bis zur Visumgenehmigung - mit Hard-Gate-Kontrollen, die den weiteren Fortschritt verhindern, solange nicht jeder vorherige Schritt vollständig abgeschlossen ist.",
        "Jede Ebene der Plattform basiert auf den Dokumentationsstandards der UKVI und umfasst verbindliche Namenskonventionen, Fallverfolgung in Echtzeit sowie rollenbasierte Zugriffskontrolle. Ein Admin-Panel auf Direktorenebene bietet vollständige Transparenz über den Prüfpfad aller Fälle und Teamaktivitäten.",
        "Das Ergebnis: eine Compliance-orientierte Architektur, die manuelle Dokumentationsfehler und Prozessslücken beseitigt - was zu einer geschätzten Effizienzsteigerung von 99 % im Dokumentations-Workflow führt und eine 100-prozentige Prozesskonformität bei jedem von der Firma bearbeiteten Fall gewährleistet."
      ],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      imageUrl: "https://ghoshgroups.com/download/Immigration-Case-Management-Platform.jpg"
    },
    {
      id: "proj-1",
      title: "UK-Einwanderungstools-Suite",
      description: [
        "UK Sponsorship Kostenrechner: Entwicklung eines mehrstufigen Schätzers für Unternehmen. Automatisierte Lead-Erfassung und E-Mail-Versand.",
        "UK Visa Abwesenheitsrechner: Compliance-Tool zur Überprüfung der Reisehistorie.",
        "ILR Rechner: Kritisches Tool für sofortige Klarheit über den rechtmäßigen Aufenthalt."
      ],
      tags: ["Google AI Studio", "React", "TypeScript", "Vercel"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-2",
      title: "Spezialplattform für UK-Ehegattenvisa",
      description: [
        "Entwicklung einer spezialisierten digitalen Plattform mit hoher Konversionsrate für UK-Einwanderungsdienste.",
        "Vollständig SEO-optimierte Architektur unter Einhaltung der Core Web Vitals und GEO-Standards."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-3",
      title: "Ghosh Group KSA-Landingpage",
      description: [
        "Strategische B2B-Plattform zur Erschließung des saudi-arabischen Baumarktes (Vision 2030, NEOM).",
        "Erleichtert die Marktexpansion von den VAE nach KSA unter Nutzung von fortgeschrittenem SEO und GEO.",
        "Technisches Ökosystem inkl. eine End-to-End-Lead-Generierungspipeline mit Google Ads Search-Kampagne (5 Anzeigengruppen, 15 RSAs in Englisch und Arabisch), vollständiges Conversion-Tracking über GTM mit Google Ads Conversion-Tags und Conversion Linker, mit einer CTR von 7,80 % in der Startwoche. Roadmap umfasst KI-gesteuerte arabische Lokalisierung und autonome Kommunikation."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM", "Google Ads"],
      imageUrl: "https://ghoshgroups.com/download/core-web-vitals.jpg"
    },
    {
      id: "proj-4",
      title: "The SmartMove2UK – Buchungsplattform",
      description: [
        "Full-Stack-Terminbuchungsplattform für UK-Einwanderungsberatung, mit nahtlosem Matching zwischen Kunden und Spezialisten in mehreren indischen Städten (Mumbai, Delhi, Bangalore, Chandigarh) sowie über Online-Kanäle (Google Meet, WhatsApp).",
        "Ermöglicht End-to-End-Buchungen mit intelligenter Spezialisten-Filterung nach Standortverfügbarkeit, bevorzugtem Sitzungsformat und Service-Expertise.",
        "Unterstützt Multi-Währungs-Preise (GBP, INR, USD) mit automatischer Steuerberechnung (GST, VAT, Fixsteuer) für inländische und internationale Kunden.",
        "Technisches Ökosystem: Razorpay-Zahlungsintegration, automatisierte E-Mail-Bestätigungen über Resend, sitzungsbasierte Admin-Authentifizierung, einbettbares Buchungs-Widget für externe Websites sowie ein Admin-Dashboard mit Echtzeit-Kalender, Kundendatenbank und Zahlungs-Tracking."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "Razorpay", "Resend"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-5",
      title: "The SmartMove2UK CRM – Kundenbeziehungsmanagement-System",
      description: [
        "Interne Full-Stack-CRM-Plattform für eine britische Einwanderungskanzlei, die das Kundenbeziehungsmanagement, die Lead-Verfolgung und die Beratungsplanung rationalisiert.",
        "Bietet umfassende Kontaktverwaltung mit visaspezifischen Tracking-Feldern (aktuelles Visum, Zielvisum, Ablaufdaten), chronologischem Kommunikationsjournal und Fallstatus-Tracking von der Erstberatung bis zur Lösung.",
        "Verwaltet Multi-Währungs-Finanztracking (GBP, INR, USD) für Servicegebühren, erhaltene Zahlungen und offene Salden.",
        "Umfasst eine vierstufige rollenbasierte Zugriffskontrolle (Admin, Manager, Agent, Koordinator) mit granularen Berechtigungen für Bearbeitung, Löschung und Datenexport."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "TanStack Query", "Wouter"],
      imageUrl: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&q=80&w=600"
    }
  ],
  education: [
    {
      degree: "Bachelor-Abschluss in Handel",
      school: "Universität Mumbai",
      location: "Mumbai",
      period: "03/1995 – 04/1998"
    }
  ],
  certificates: DATA_EN.certificates, // Automatically use certificates from English Data
  languages: [
    { name: "Englisch", level: "Fließend" },
    { name: "Hindi", level: "Fließend" },
        { name: "Marathi", level: "Fließend" },
    { name: "Französisch", level: "Grundkenntnisse" }
  ],
  interests: [
    "Angewandte Technologie & Gen AI",
    "Menschliche Dynamik & Kommunikation",
    "Narrative Analyse & Storytelling"
  ],
  stats: [
    { label: "UN & Global Erf.", value: "16", prefix: "", suffix: "+ Jahre" },
    { label: "Jährliche Einsparung", value: "40", prefix: "", suffix: "%" },
    { label: "Effizienzsteigerung", value: "70", prefix: "", suffix: "%" },
    { label: "Märkte Erweitert", value: "3", prefix: "", suffix: "" }
  ],
  testimonials: [
    {
      id: "t1",
      text: "David zeigte stets herausragende Professionalität, Engagement und eine starke Arbeitsmoral. Seine Fähigkeit, komplexe Aufgaben mit Klarheit zu bewältigen, war von unschätzbarem Wert.",
      author: "Alexander A. Mejia",
      role: "Direktor",
      company: "UNITAR"
    },
    {
      id: "t2",
      text: "Davids strategischer Weitblick und seine operative Expertise trugen maßgeblich zur Transformation unserer Finanzprozesse bei. Seine Führung bei der digitalen Umstellung setzte neue Maßstäbe für Effizienz.",
      author: "Olivier Maury",
      role: "Leiter Finanzen & Budget",
      company: "UNITAR"
    }
  ],
  ui: {
    basedIn: "Ansässig in",
    unGlobalExp: "UN & Globale Erfahrung",
    hiIam: "Hallo, ich bin",
    workPermit: "Arbeitsbewilligung B",
    experienceTitle: "Erfahrung",
    skillsTitle: "Fähigkeiten & Kompetenzen",
    competencyOverview: "Kompetenzübersicht",
    projectsTitle: "Ausgewählte Projekte",
    qualificationsTitle: "Qualifikationen",
    endorsementsTitle: "Empfehlungen",
    education: "Ausbildung",
    certificates: "Zertifikate & Abzeichen",
    languages: "Sprachen",
    interests: "Interessen",
    contact: "Kontakt",
    viewDetails: "Details Anzeigen",
    showLess: "Weniger Anzeigen",
    online: "Online",
    askMe: "Fragen Sie mich etwas über David...",
    poweredBy: "Unterstützt durch Gemini",
    rightsReserved: "Alle Rechte Vorbehalten",
    translationDisclaimer: "KI-unterstützte Übersetzungen.",
    privacyNotice: "Datenschutz: Keine Datenerfassung. KI-Chat ist lokal.",
    sdgBadge: "UN SDG Ziel 13",
    sdgTooltip: "Klimaschutz: Nachhaltige Web-Praktiken-optimierter Code und null unnötige Datenerfassung."
  }
};

// ==========================================
// SPANISH (ES)
// ==========================================
const DATA_ES: ResumeData = {
  ...DATA_EN,
  title: "Especialista en transformación digital y operaciones | Productos y plataformas impulsados por IA",
  about: "Líder estratégico en transformación digital y especialista en operaciones con más de 16 años de experiencia internacional en la ONU, logística y servicios jurídicos. Conocido por diseñar y ejecutar planes de transformación integrales que combinan el rediseño de modelos operativos, la optimización de procesos impulsada por ERP y productos digitales basados en IA. Tiene un historial probado de reducción de los tiempos de procesamiento en un 70 %, lo que ha permitido un ahorro anual del 40 % y la expansión a nuevos mercados, como el Reino Unido y Arabia Saudí. Asimismo, se siente cómodo colaborando con altos directivos en materia de estrategia y liderando equipos multifuncionales para ofrecer plataformas completas basadas en inteligencia artificial.",
  location: "Ginebra, Suiza",
  workPermit: "Permiso de trabajo B",
  skills: DATA_EN.skills.map(s => ({
    ...s,
    category: s.category
      .replace("Strategic & Operations Management", "Gestión Estratégica y de Operaciones")
      .replace("Strategic Operations", "Operaciones Estratégicas")
      .replace("ERP & Admin Platforms", "ERP y Plataformas Administrativas")
      .replace("Digital Transformation & ERP", "Transformación Digital y ERP")
      .replace("Data & Analytics", "Datos y Analítica")
      .replace("Digital Marketing & Strategy", "Marketing Digital y Estrategia")
      .replace("Design & Media", "Diseño y Medios")
      .replace("Project Management Tools", "Herramientas de Gestión de Proyectos")
      .replace("AI & Creative Tools", "IA y Herramientas Creativas")
      .replace("AI & Product Engineering", "IA e Ingeniería de Producto")
      .replace("Workflow & Documentation", "Flujo de Trabajo y Documentación")
  })),
  experience: [     {       id: "exp-1",       role: "Responsable de Transformación Digital, Presupuesto y Recursos Humanos",       company: "The Smartmove2UK",       location: "Trabajo a distancia desde Ginebra",       period: "04/2015 – Actualidad",       description: [         "Lideré la estrategia de transformación digital, presupuesto y recursos humanos, logrando un ahorro anual del 40 % al tiempo que ampliaba los equipos para respaldar la expansión internacional, incluyendo dos nuevas sucursales en la India y una empresa asociada en el Reino Unido (Conroy Baker Ltd.).",         "Diseñé el modelo operativo y el plan digital de la empresa de principio a fin, pasando de flujos de trabajo manuales a procesos basados en ERP que elevaron significativamente las tasas de consulta de los clientes.",         "Lideré la estrategia de comercialización digital para la nueva entidad del Reino Unido, definiendo la hoja de ruta de SEO y contenido que generó un volumen sustancial de clientes potenciales en los primeros tres meses.",         "Diseñé y programé un CRM interno propio (React, TypeScript, PostgreSQL, Drizzle ORM) con control de acceso basado en roles y seguimiento multidivisa, lo que eliminó los costes de SaaS de terceros y centralizó la visibilidad del proceso de tramitación de visados.",         "Diseñé una plataforma de citas personalizada que integra Razorpay, Stripe y videoconferencias con lógica multilocalización, precios en múltiples divisas y cálculos automáticos de impuestos (GST/IVA).",         "Desarrollé herramientas de cumplimiento normativo de alta conversión —incluidas calculadoras de costes de patrocinio y de ILR y ausencias— utilizando la lógica de Google AI Studio y la automatización de Resend para el cultivo de clientes potenciales.",         "Actualmente estoy desarrollando la plataforma de visados de cónyuge del Reino Unido utilizando estándares GEO y Framer Motion para lograr unos Core Web Vitals superiores y así conseguir una conversión de servicios jurídicos de alto valor."       ],       technologies: ["Digital Transformation", "ERP", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Google AI Studio", "Resend"]     },     {       id: "exp-2",       role: "Consultor: Estrategia y operaciones digitales",       company: "Ghosh Group",       location: "A distancia desde Ginebra",       period: "04/2015 – Actualidad",       description: [         "Actuar como socio estratégico fundamental, impulsando el crecimiento desde los inicios hasta alcanzar una posición destacada en el mercado mediante la optimización continua de los marcos digitales y operativos.",         "Diseñé una plataforma de aterrizaje B2B basada en React/Firebase dirigida a los proyectos de la Visión 2030 de Arabia Saudí (NEOM, Mar Rojo), integrando Google Ads y el seguimiento de GTM para lograr un CTR del 7,80 % en la semana de lanzamiento.",         "Actualmente, estoy diseñando flujos de trabajo de comunicación semiautónomos y de localización al árabe basados en IA para respaldar licitaciones de infraestructuras de alto valor en la región.",         "He generado un impacto financiero constante, incluida una reducción del 20 % en los gastos generales mediante iniciativas estratégicas de eficiencia digital y de contratación."       ],       technologies: ["Digital Strategy", "Operations", "React", "Firebase", "Google Ads", "GTM", "AI Localization"]     },     {       id: "exp-3",       role: "Focal Point: Finance, Procurement & Inventory Projects",       company: "United Nations Institute for Training and Research (UNITAR)",       location: "Ginebra, Suiza",       period: "11/2022 – 03/2025",       description: [         "Logré un control excepcional sobre una cartera de proyectos de aproximadamente 140 000 dólares mediante la coordinación de las operaciones del sistema Quantum ERP, lo que garantizó una asignación precisa de los fondos y una toma de decisiones estratégicas bien fundamentada.",         "Generé un valor sustancial mediante la contratación estratégica, logrando un ahorro medio del 30 % en las adquisiciones clave, al tiempo que garantizaba el estricto cumplimiento de las directrices de las Naciones Unidas.",         "Coordiné la logística de más de 11 talleres de formación, gestionando los viajes de los participantes y las dietas diarias para hasta 40 participantes.",         "Impulsé una eficiencia operativa significativa mediante la implementación de un proceso optimizado de seguimiento de facturas, reduciendo el tiempo de tramitación en un 70 %.",         "Establecí un sistema de inventario detallado para los activos de la División, realizando un seguimiento preciso de las adquisiciones y enajenaciones y reduciendo las discrepancias en un 99 %."       ],       technologies: ["Quantum ERP", "Financial Control", "Procurement", "Inventory", "Logistics"]     },     {       id: "exp-4",       role: "Manager: MaerskLine.com",       company: "MAERSK LINE",       location: "Mumbai",       period: "07/2010 – 03/2015",       description: [         "Apoyó la planificación estratégica y el lanzamiento global de la nueva versión de MaerskLine.com en 11 idiomas, coordinándose con los equipos de TI y regionales para gestionar la integración con el entorno central de SAP.",         "Dirigí la integración de la plataforma de automatización de marketing Eloqua en múltiples mercados, mejorando la captación de clientes potenciales en aproximadamente un 10 % mediante campañas digitales más estructuradas.", "Supervisé el contenido web y los mensajes de las campañas para garantizar la coherencia con la marca, el tono de voz y las directrices de comunicación de Maersk en más de 37 grupos regionales. Trabajé con los equipos regionales de marketing y ventas para mantener unos mensajes coherentes, precisos y conformes con las normas, al tiempo que apoyaba los objetivos comerciales locales."       ],       technologies: ["CMS", "SAP Integration", "Eloqua", "Localization"]     },     { id: "exp-5", role: "Leiter: E-Marketing-Abteilung und Verwaltung", company: "LOHA ISPAAT LTD", location: "Mumbai", period: "07/2009 – 06/2010", description: ["Entwicklung eines zentralisierten Budgetierungssystems zur Verwaltung von Ausgaben in Höhe von 400.000 INR für digitales Marketing und Personalwesen unter optimaler Ressourcenzuweisung.", "Erstellung und Umsetzung gezielter Schulungsprogramme für ein Team von mehr als 15 Mitarbeitern zur Verbesserung der Lead-Generierung und der Gesamtleistung.", "Beaufsichtigte die Lohn- und Gehaltsabrechnung und verhandelte Lieferantenverträge, um die Betriebskontinuität zu gewährleisten."], technologies: [...DATA_EN.experience[4].technologies] },   ],
  projects: [
        {
      id: "proj-6",
      title: "Caseora: plataforma de gestión de expedientes de inmigración",
      description: [
        "Diseñé una plataforma SaaS centrada en el cumplimiento normativo para empresas de asesoramiento en materia de inmigración del Reino Unido, que aplica un riguroso flujo de trabajo de 21 pasos de UKVI con controles de acceso estrictos, acceso basado en roles, registros de auditoría y gestión de documentos. Creada para ofrecer un aumento del 99 % en la eficiencia de la documentación y una garantía de cumplimiento del 100 %.",
        "Caseora es una plataforma SaaS de gestión de casos y flujo de trabajo documental de ciclo completo que diseñé y desarrollé de principio a fin para empresas de asesoramiento en materia de inmigración del Reino Unido. El sistema guía a los responsables de la documentación de visados a través de un riguroso proceso de cumplimiento de 21 pasos - desde la incorporación del cliente hasta la aprobación del visado - con controles de acceso estrictos que impiden avanzar a menos que se hayan completado todos los pasos anteriores.",
        "Cada capa de la plataforma se basa en los estándares de documentación de UKVI, con convenciones de nomenclatura obligatorias, seguimiento de casos en tiempo real y control de acceso basado en roles. Un panel de administración de nivel directivo proporciona una visibilidad completa del registro de auditoría en todos los casos y la actividad del equipo.",
        "El resultado: una arquitectura que prioriza el cumplimiento normativo y elimina los errores manuales en la documentación y las lagunas en los procesos, lo que supone una mejora estimada del 99 % en la eficiencia del flujo de trabajo de documentación y garantiza el cumplimiento normativo al 100 % en todos los casos gestionados por la empresa."
      ],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      imageUrl: "https://ghoshgroups.com/download/Immigration-Case-Management-Platform.jpg"
    },
    {
      id: "proj-1",
      title: "Suite de Herramientas de Inmigración UK",
      description: [
        "Calculadora de Costos de Patrocinio UK: Estimador de múltiples pasos para empresas. Captura automatizada de leads y entrega de correo segura.",
        "Calculadora de Ausencia de Visa UK: Herramienta de cumplimiento integral para verificar el historial de viajes.",
        "Calculadora ILR: Herramienta crítica para claridad inmediata sobre la residencia legal continua."
      ],
      tags: ["Google AI Studio", "React", "TypeScript", "Vercel"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-2",
      title: "Plataforma Especialista en Visa de Cónyuge UK",
      description: [
        "Desarrollo de una plataforma digital especializada de alta conversión para servicios legales de inmigración en el Reino Unido.",
        "Arquitectura totalmente optimizada para SEO, cumpliendo meticulosamente con Core Web Vitals y estándares GEO."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-3",
      title: "Página de Aterrizaje Ghosh Group KSA",
      description: [
        "Plataforma B2B estratégica diseñada para penetrar el mercado de la construcción en Arabia Saudita (Visión 2030, NEOM).",
        "Facilita la expansión del mercado de los EAU a KSA, utilizando SEO avanzado y GEO.",
        "Ecosistema técnico que incluye un pipeline de generación de leads de extremo a extremo con campaña Google Ads Search (5 grupos de anuncios, 15 RSA en inglés y árabe), seguimiento completo de conversiones vía GTM con etiquetas de conversión Google Ads y Conversion Linker, logrando un CTR del 7,80 % en la semana de lanzamiento. La hoja de ruta incluye localización árabe impulsada por IA y comunicación autónoma."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM", "Google Ads"],
      imageUrl: "https://ghoshgroups.com/download/core-web-vitals.jpg"
    },
    {
      id: "proj-4",
      title: "The SmartMove2UK – Plataforma de Reservas",
      description: [
        "Plataforma full-stack de programación de citas para consultoría de inmigración al Reino Unido, con emparejamiento fluido cliente–especialista en múltiples ciudades de India (Mumbai, Delhi, Bangalore, Chandigarh) y canales online (Google Meet, WhatsApp).",
        "Facilita la reserva de consultas de extremo a extremo con filtrado inteligente de especialistas según disponibilidad por ubicación, preferencias de formato de sesión y experiencia de servicio.",
        "Soporta precios multi-moneda (GBP, INR, USD) con cálculo automático de impuestos (GST, VAT, impuesto fijo), atendiendo a clientes nacionales e internacionales.",
        "Ecosistema técnico: integración de pagos Razorpay, confirmaciones de email automatizadas con Resend, autenticación de administrador basada en sesión, widget de reservas integrable para sitios externos y panel de administración con calendario en tiempo real, base de datos de clientes y seguimiento de pagos."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "Razorpay", "Resend"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "proj-5",
      title: "The SmartMove2UK CRM – Sistema de Gestión de Relaciones con Clientes",
      description: [
        "Plataforma CRM interna full-stack concebida para un despacho de inmigración en el Reino Unido, racionalizando la gestión de relaciones con clientes, el seguimiento de leads y la programación de consultas.",
        "Ofrece una gestión completa de contactos con campos de seguimiento específicos de visas (visa actual, visa objetivo, fechas de vencimiento), un diario cronológico de comunicaciones y seguimiento de estado del caso desde la consulta inicial hasta la resolución.",
        "Gestiona el seguimiento financiero multi-divisa (GBP, INR, USD) para tarifas de servicio, pagos recibidos y saldos pendientes.",
        "Incluye un control de acceso basado en roles de cuatro niveles (Admin, Manager, Agente, Coordinador) con permisos granulares para edición, eliminación y exportación de datos."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Drizzle ORM", "TanStack Query", "Wouter"],
      imageUrl: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&q=80&w=600"
    }
  ],
  education: [
    {
      degree: "Licenciatura en Comercio",
      school: "Universidad de Mumbai",
      location: "Mumbai",
      period: "03/1995 – 04/1998"
    }
  ],
  certificates: DATA_EN.certificates, // Automatically use certificates from English Data
  languages: [
    { name: "Inglés", level: "Fluido" },
    { name: "Hindi", level: "Fluido" },
        { name: "Marathi", level: "Fluido" },
    { name: "Francés", level: "Básico" }
  ],
  interests: [
    "Tecnología Aplicada e IA Generativa",
    "Dinámica Humana y Comunicación",
    "Análisis Narrativo y Storytelling"
  ],
  stats: [
    { label: "Exp. ONU y Global", value: "16", prefix: "", suffix: "+ Años" },
    { label: "Ahorro Anual", value: "40", prefix: "", suffix: "%" },
    { label: "Aumento Eficiencia", value: "70", prefix: "", suffix: "%" },
    { label: "Mercados Expandidos", value: "3", prefix: "", suffix: "" }
  ],
  testimonials: [
    {
      id: "t1",
      text: "David demostró constantemente un profesionalismo excepcional, dedicación y una fuerte ética de trabajo. Su capacidad para gestionar tareas complejas con claridad fue invaluable.",
      author: "Alexander A. Mejia",
      role: "Director",
      company: "UNITAR"
    },
    {
      id: "t2",
      text: "La visión estratégica y la experiencia operativa de David fueron fundamentales para transformar nuestros procesos financieros. Su liderazgo en la transición digital estableció un nuevo estándar de eficiencia.",
      author: "Olivier Maury",
      role: "Jefe de la Unidad de Finanzas y Presupuesto",
      company: "UNITAR"
    }
  ],
  ui: {
    basedIn: "Basado en",
    unGlobalExp: "Exp. ONU y Global",
    hiIam: "Hola, soy",
    workPermit: "Permiso de trabajo B",
    experienceTitle: "Experiencia",
    skillsTitle: "Habilidades y Competencias",
    competencyOverview: "Visión General de Competencias",
    projectsTitle: "Proyectos Destacados",
    qualificationsTitle: "Cualificaciones",
    endorsementsTitle: "Recomendaciones",
    education: "Educación",
    certificates: "Certificados e Insignias",
    languages: "Idiomas",
    interests: "Intereses",
    contact: "Contacto",
    viewDetails: "Ver Detalles",
    showLess: "Ver Menos",
    online: "En Línea",
    askMe: "Pregúntame algo sobre David...",
    poweredBy: "Impulsado por Gemini",
    rightsReserved: "Todos los Derechos Reservados",
    translationDisclaimer: "Traducciones asistidas por IA.",
    privacyNotice: "Privacidad: Sin recolección de datos. Chat IA es local.",
    sdgBadge: "Objetivo ODS 13",
    sdgTooltip: "Acción Climática: Construido con prácticas web sostenibles-código optimizado y cero recolección de datos innecesaria."
  }
};

export const ALL_DATA: Record<LanguageCode, ResumeData> = {
  en: DATA_EN,
  fr: DATA_FR,
  de: DATA_DE,
  es: DATA_ES
};
