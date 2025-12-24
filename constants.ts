import { ResumeData, LanguageCode } from './types';

// ==========================================
// SHARED DATA
// (Images, Dates, Tech stacks, Socials)
// ==========================================
const SHARED_DATA = {
  name: "David Rodrigues",
  email: "david28gva@gmail.com",
  phone: "41779065990",
  avatarUrl: "/david-rodrigues.jpg",
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/daviddas13jan/", icon: "linkedin" },
    { platform: "Email", url: "mailto:david28gva@gmail.com", icon: "mail" }
  ]
};

// ==========================================
// ENGLISH (EN) - Source of Truth
// ==========================================
const DATA_EN: ResumeData = {
  ...SHARED_DATA,
  title: "Project, Operations & Digital Transformation Specialist",
  about: "Strategic leader in digital transformation and operations with over 15 years of international experience. I architect systems and processes that drive growth and efficiency. Expert in AI-driven web development, user-centric design, and strategic planning, leading to significant business expansion. Key achievements include driving a 70% reduction in processing times and securing 40% in annual savings through operational excellence.",
  location: "Geneva, Switzerland",
  workPermit: "Work Permit B",
  skills: [
    { name: "Strategic Planning", category: "Strategic & Operations Management", level: 90 },
    { name: "Project Lifecycle Oversight", category: "Strategic & Operations Management", level: 90 },
    { name: "Business Process Optimisation", category: "Strategic & Operations Management", level: 90 },
    { name: "Change Management", category: "Strategic & Operations Management", level: 90 },
    { name: "Cross-Functional Coordination", category: "Strategic & Operations Management", level: 90 },
    { name: "Logistics Management", category: "Strategic & Operations Management", level: 90 },
    { name: "Talent Acquisition", category: "Strategic & Operations Management", level: 90 },
    { name: "Quantum ERP", category: "ERP & Admin Platforms", level: 95 },
    { name: "Microsoft 365 (SharePoint, Teams)", category: "ERP & Admin Platforms", level: 95 },
    { name: "Google Workspace", category: "ERP & Admin Platforms", level: 95 },
    { name: "Cloudflare (DNS/CDN)", category: "ERP & Admin Platforms", level: 95 },
    { name: "Web Hosting Admin", category: "ERP & Admin Platforms", level: 95 },
    { name: "Excel (Advanced)", category: "Data & Analytics", level: 90 },
    { name: "Power BI", category: "Data & Analytics", level: 90 },
    { name: "Tableau", category: "Data & Analytics", level: 90 },
    { name: "Google Analytics", category: "Data & Analytics", level: 90 },
    { name: "Google Search Console", category: "Data & Analytics", level: 90 },
    { name: "SEO", category: "Digital Marketing & Strategy", level: 95 },
    { name: "PPC", category: "Digital Marketing & Strategy", level: 95 },
    { name: "GEO", category: "Digital Marketing & Strategy", level: 95 },
    { name: "SMO", category: "Digital Marketing & Strategy", level: 95 },
    { name: "Mailchimp", category: "Digital Marketing & Strategy", level: 95 },
    { name: "HubSpot", category: "Digital Marketing & Strategy", level: 95 },
    { name: "WordPress", category: "Digital Marketing & Strategy", level: 95 },
    { name: "Semrush", category: "Digital Marketing & Strategy", level: 95 },
    { name: "Figma", category: "Design & Media", level: 97 },
    { name: "Adobe Creative Suite (Ps, Pr)", category: "Design & Media", level: 97 },
    { name: "Canva", category: "Design & Media", level: 97 },
    { name: "Descript", category: "Design & Media", level: 97 },
    { name: "Sound Forge", category: "Design & Media", level: 97 },
    { name: "Jira", category: "Project Management Tools", level: 80 },
    { name: "Asana", category: "Project Management Tools", level: 80 },
    { name: "Trello", category: "Project Management Tools", level: 80 },
    { name: "Monday.com", category: "Project Management Tools", level: 80 },
    { name: "Generative AI (ChatGPT, Gemini, Google AI Studio, Claude, Midjourney, Leonardo AI, Kling, Suno AI)", category: "AI & Creative Tools", level: 80 },
    { name: "Replit AI", category: "AI & Creative Tools", level: 80 },
    { name: "Firebase Studio", category: "AI & Creative Tools", level: 80 },
    { name: "Vercel", category: "Workflow & Documentation", level: 75 },
    { name: "GitHub", category: "Workflow & Documentation", level: 75 },
    { name: "Resend", category: "Workflow & Documentation", level: 75 },
    { name: "DocuSign", category: "Workflow & Documentation", level: 75 },
    { name: "Adobe Sign", category: "Workflow & Documentation", level: 75 }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Focal Point: Finance, Procurement & Inventory Projects",
      company: "United Nations Institute for Training and Research (UNITAR)",
      location: "Geneva, Switzerland",
      period: "11/2022 – 03/2025",
      description: [
        "Delivered exceptional financial control over a ~$140k project portfolio by orchestrating Quantum-based financial operations, ensuring precise fund allocation and informed strategic decision-making.",
        "Enhanced financial foresight by preparing and analysing weekly reports, improving forecast accuracy by 80%.",
        "Drove significant operational efficiency by implementing an optimised invoice tracking process, decreasing processing time by 70%.",
        "Generated substantial value through strategic procurement, achieving an average of 30% in cost savings on key acquisitions.",
        "Established and maintained a detailed inventory system for the Division’s assets, accurately tracking acquisitions, disposals, and write-offs, reducing discrepancies by 99%.",
        "Coordinated intricate logistics for 11+ training workshops, managing participant travel and daily subsistence allowance provisions for up to 40 participants."
      ],
      technologies: ["Quantum ERP", "Financial Ops", "Inventory Mgmt", "Logistics"]
    },
    {
      id: "exp-2",
      role: "Head: Digital Transformation, Budget, and HR",
      company: "The Smartmove2UK",
      location: "Remotely from Geneva",
      period: "04/2015 – Present",
      description: [
        "Direct strategic leadership across Budget, HR, and Digital Transformation, driving operational excellence by securing 40% in annual savings whilst scaling talent acquisition to support global expansion.",
        "Engineered the foundational user-centric digital transformation, redesigning the online journey and deploying an ERP-driven process that significantly elevated client consultation rates.",
        "Architected a scalable digital and operational blueprint that drove substantial international growth, culminating in the launch of two new branches in India and a new sister company in the UK.",
        "Currently spearheading the comprehensive digital strategy for the new UK entity, Conroy Baker Ltd., overseeing its website development, design, content, and performance marketing from inception.",
        "Developed and deployed custom 'UK Sponsorship Visa' and 'ILR' cost calculators for Conroy Baker Ltd., utilizing Google AI Studio for logic architecture, GitHub for version control, and Vercel for hosting.",
        "Engineered a dual-purpose automation loop using Resend to deliver detailed cost breakdowns while simultaneously routing user data to business development for lead qualification.",
        "Leading the development of a dynamic 'UK Spouse Visa' platform on Replit AI, featuring an embedded AI Chatbot and automated CMS for SEO.",
        "Secured rapid market traction for the new UK brand, generating a substantial volume of targeted client leads within the initial three months of launch, despite operating in a highly competitive London market."
      ],
      technologies: ["Digital Strategy", "HR Mgmt", "Performance Marketing", "AI Integration"]
    },
    {
      id: "exp-3",
      role: "Consultant: Digital Strategy & Operations",
      company: "Ghosh Group",
      location: "Remotely from Geneva",
      period: "04/2015 – Present",
      description: [
        "Serve as a foundational strategic partner, steering the company’s growth from inception to a prominent market player by continuously architecting and optimising its digital and operational framework.",
        "Built and now oversee the company’s entire online presence, having led its initial creation from domain acquisition and website design (ghoshgroups.com) to content and marketing strategy.",
        "Direct ongoing digital marketing initiatives, including PPC, while advising on talent acquisition to develop and scale high-performing teams.",
        "Instrumental in propelling significant business expansion, providing strategic counsel on operations and technology that led to the launch of two new high-end manufacturing factories.",
        "Delivered consistent financial impact, most recently achieving a 20% reduction in overhead expenses (FY2024) through strategic efficiency and procurement initiatives."
      ],
      technologies: ["Digital Strategy", "Operations", "PPC", "Web Development"]
    },
    {
      id: "exp-4",
      role: "Manager: MaerskLine.com",
      company: "Maersk Line",
      location: "Mumbai",
      period: "07/2010 – 03/2015",
      description: [
        "Led a CMS proof-of-concept initiative.",
        "Assisted in strategic planning and execution for the global launch of the revamped Maerskline.com (11 languages), including user behaviour analysis, CMS requirements, SOP development, and overcoming technical integration challenges with the core SAP environment.",
        "Enhanced global website translation processes and developed SLAs/SOPs for content updates.",
        "Championed the integration of the Eloqua email marketing tool across 11 languages, improving lead capture by 10%."
      ],
      technologies: ["CMS", "SAP Integration", "Eloqua", "Localization"]
    },
    {
      id: "exp-5",
      role: "Head: E-Marketing Department and Administration",
      company: "Loha Ispaat Ltd",
      location: "Mumbai",
      period: "07/2009 – 06/2010",
      description: [
        "Developed and managed departmental budgets (INR 200k).",
        "Created and implemented targeted training programmes for a 15+ member team, enhancing competencies in lead generation and boosting overall team performance.",
        "Supervised payroll and vendor contract management."
      ],
      technologies: ["Budget Mgmt", "Team Leadership", "E-Marketing", "Vendor Mgmt"]
    }
  ],
  projects: [
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
        "Facilitates seamless market expansion from a dominant position in the UAE to KSA, utilizing advanced SEO and GEO (Generative Engine Optimization) to capture high-value infrastructure contracts.",
        "Technical ecosystem includes reactive lead generation, performance analytics via GTM, and a roadmap for AI-driven Arabic localization and autonomous communication."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM"],
      imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600"
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
    { name: "French", level: "Basic" }
  ],
  interests: [
    "Applied Technology & Generative AI",
    "Human Dynamics & Communication",
    "Narrative Analysis & Storytelling"
  ],
  stats: [
    { label: "UN & Global Exp", value: "15", prefix: "", suffix: "+ Yrs" },
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
    sdgTooltip: "Climate Action: Built with sustainable web practices—optimized code, renewable energy infrastructure, and zero unnecessary data collection."
  }
};

// ==========================================
// FRENCH (FR)
// ==========================================
const DATA_FR: ResumeData = {
  ...DATA_EN,
  title: "Spécialiste en Gestion de Projet, Opérations & Transformation Numérique",
  about: "Leader stratégique en transformation numérique et opérations avec plus de 15 ans d'expérience internationale. Je conçois des systèmes et des processus qui stimulent la croissance et l'efficacité. Expert en développement web piloté par l'IA, design centré sur l'utilisateur et planification stratégique, menant à une expansion commerciale significative. Mes réalisations incluent une réduction de 70 % des délais de traitement et 40 % d'économies annuelles grâce à l'excellence opérationnelle.",
  location: "Genève, Suisse",
  workPermit: "Permis de travail B",
  skills: DATA_EN.skills.map(s => ({
    ...s,
    category: s.category
      .replace("Strategic & Operations Management", "Gestion Stratégique & Opérations")
      .replace("ERP & Admin Platforms", "ERP & Plateformes Admin")
      .replace("Data & Analytics", "Données & Analytique")
      .replace("Digital Marketing & Strategy", "Marketing Numérique & Stratégie")
      .replace("Design & Médias", "Design & Médias")
      .replace("Design & Media", "Design & Médias") // Catch both variations
      .replace("Project Management Tools", "Outils de Gestion de Projet")
      .replace("AI & Creative Tools", "IA & Outils Créatifs")
      .replace("Workflow & Documentation", "Workflow & Documentation")
  })),
  experience: [
    {
      id: "exp-1",
      role: "Point Focal : Projets Finance, Achats & Inventaire",
      company: "Institut des Nations Unies pour la Formation et la Recherche (UNITAR)",
      location: "Genève, Suisse",
      period: "11/2022 – 03/2025",
      description: [
        "Assuré un contrôle financier exceptionnel sur un portefeuille de projets (~140k $) en orchestrant les opérations financières basées sur Quantum, garantissant une allocation précise des fonds.",
        "Amélioré la prévision financière en préparant et analysant des rapports hebdomadaires, augmentant la précision des prévisions de 80 %.",
        "Piloté une efficacité opérationnelle significative en optimisant le suivi des factures, réduisant le temps de traitement de 70 %.",
        "Généré une valeur substantielle grâce à des achats stratégiques, réalisant une moyenne de 30 % d'économies sur les acquisitions clés.",
        "Mis en place un système d'inventaire détaillé pour les actifs de la Division, suivant avec précision les acquisitions et les cessions, réduisant les écarts de 99 %.",
        "Coordonné la logistique complexe de plus de 11 ateliers de formation, gérant les voyages et les indemnités journalières de subsistance pour jusqu'à 40 participants."
      ],
      technologies: ["Quantum ERP", "Ops Financières", "Gestion Inventaire", "Logistique"]
    },
    {
      id: "exp-2",
      role: "Responsable : Transformation Numérique, Budget et RH",
      company: "The Smartmove2UK",
      location: "À distance depuis Genève",
      period: "04/2015 – Présent",
      description: [
        "Direction stratégique du Budget, des RH et de la Transformation Numérique, sécurisant 40 % d'économies annuelles tout en développant l'acquisition de talents.",
        "Conçu la transformation numérique centrée sur l'utilisateur, refondant le parcours en ligne et déployant un processus ERP qui a considérablement élevé les taux de consultation client.",
        "Architecturé un plan numérique et opérationnel évolutif favorisant une croissance internationale substantielle (lancement de deux succursales en Inde et une entité au Royaume-Uni).",
        "Dirige actuellement la stratégie numérique globale pour la nouvelle entité britannique, Conroy Baker Ltd., supervisant le développement web, le design, le contenu et le marketing de performance.",
        "Développé des calculateurs de coûts 'UK Sponsorship Visa' et 'ILR' personnalisés, utilisant Google AI Studio, GitHub et Vercel.",
        "Conçu une boucle d'automatisation à double objectif utilisant Resend pour livrer des détails de coûts tout en routant les données utilisateurs pour la qualification de leads.",
        "Dirige le développement d'une plateforme dynamique 'UK Spouse Visa' sur Replit AI, avec Chatbot IA intégré et CMS automatisé pour le SEO.",
        "Obtenu une traction rapide sur le marché pour la nouvelle marque britannique, générant un volume substantiel de leads qualifiés dès les trois premiers mois."
      ],
      technologies: ["Stratégie Numérique", "Gestion RH", "Marketing Performance", "Intégration IA"]
    },
    {
      id: "exp-3",
      role: "Consultant : Stratégie Numérique & Opérations",
      company: "Ghosh Group",
      location: "À distance depuis Genève",
      period: "04/2015 – Présent",
      description: [
        "Partenaire stratégique fondateur, pilotant la croissance de l'entreprise de sa création à un acteur majeur du marché en optimisant son cadre numérique et opérationnel.",
        "Construit et supervise l'ensemble de la présence en ligne, de l'acquisition de domaine à la conception du site web (ghoshgroups.com) et à la stratégie marketing.",
        "Dirige les initiatives de marketing numérique (PPC) tout en conseillant sur l'acquisition de talents pour développer des équipes performantes.",
        "Instrumental dans l'expansion significative de l'entreprise, fournissant des conseils stratégiques menant au lancement de deux nouvelles usines de fabrication haut de gamme.",
        "Obtenu une réduction de 20 % des frais généraux (FY2024) grâce à des initiatives d'efficacité stratégique et d'achat."
      ],
      technologies: ["Stratégie Numérique", "Opérations", "PPC", "Dév Web"]
    },
    {
      id: "exp-4",
      role: "Manager : MaerskLine.com",
      company: "Maersk Line",
      location: "Mumbai",
      period: "07/2010 – 03/2015",
      description: [
        "Dirigé une initiative de preuve de concept CMS.",
        "Assisté à la planification stratégique pour le lancement mondial de Maerskline.com (11 langues), incluant l'analyse comportementale et le développement de SOP.",
        "Amélioré les processus de traduction de sites web mondiaux et développé des SLA/SOP pour les mises à jour de contenu.",
        "Champion de l'intégration de l'outil d'email marketing Eloqua dans 11 langues, améliorant la capture de leads de 10 %."
      ],
      technologies: ["CMS", "Intégration SAP", "Eloqua", "Localisation"]
    },
    {
      id: "exp-5",
      role: "Responsable : Département E-Marketing et Administration",
      company: "Loha Ispaat Ltd",
      location: "Mumbai",
      period: "07/2009 – 06/2010",
      description: [
        "Développé et géré les budgets départementaux (200k INR).",
        "Créé et mis en œuvre des programmes de formation ciblés pour une équipe de 15+ personnes, améliorant la génération de leads.",
        "Supervisé la paie et la gestion des contrats fournisseurs."
      ],
      technologies: ["Gestion Budget", "Leadership", "E-Marketing", "Gestion Fournisseurs"]
    }
  ],
  projects: [
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
        "Plateforme B2B stratégique conçue pour pénétrer le marché de la construction en Arabie Saoudite (Vision 2030, NEOM, The Red Sea).",
        "Facilite l'expansion du marché des EAU vers l'Arabie Saoudite, utilisant le SEO avancé et GEO pour capturer des contrats d'infrastructure de grande valeur.",
        "Écosystème technique incluant la génération de leads réactive, l'analyse via GTM et une roadmap pour la localisation arabe par IA."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM"],
      imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600"
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
    { name: "Français", level: "Basique" }
  ],
  interests: [
    "Technologie Appliquée & IA Générative",
    "Dynamique Humaine & Communication",
    "Analyse Narrative & Storytelling"
  ],
  stats: [
    { label: "Exp. ONU & Global", value: "15", prefix: "", suffix: "+ Ans" },
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
    sdgTooltip: "Action Climatique : Construit avec des pratiques web durables—code optimisé et zéro collecte de données inutile."
  }
};

// ==========================================
// GERMAN (DE)
// ==========================================
const DATA_DE: ResumeData = {
  ...DATA_EN,
  title: "Spezialist für Projektmanagement, Betrieb & Digitale Transformation",
  about: "Strategische Führungskraft in digitaler Transformation und Betrieb mit über 15 Jahren internationaler Erfahrung. Ich entwerfe Systeme und Prozesse, die Wachstum und Effizienz fördern. Experte für KI-gestützte Webentwicklung, nutzerzentriertes Design und strategische Planung. Zu den wichtigsten Erfolgen gehören eine Reduzierung der Bearbeitungszeiten um 70 % und jährliche Einsparungen von 40 % durch operative Exzellenz.",
  location: "Genf, Schweiz",
  workPermit: "Arbeitsbewilligung B",
  skills: DATA_EN.skills.map(s => ({
    ...s,
    category: s.category
      .replace("Strategic & Operations Management", "Strategie & Betriebsmanagement")
      .replace("ERP & Admin Platforms", "ERP & Admin-Plattformen")
      .replace("Data & Analytics", "Daten & Analytik")
      .replace("Digital Marketing & Strategy", "Digitales Marketing & Strategie")
      .replace("Design & Media", "Design & Medien")
      .replace("Project Management Tools", "Projektmanagement-Tools")
      .replace("AI & Creative Tools", "KI & Kreativ-Tools")
      .replace("Workflow & Documentation", "Workflow & Dokumentation")
  })),
  experience: [
    {
      id: "exp-1",
      role: "Focal Point: Finanzen, Beschaffung & Inventar",
      company: "United Nations Institute for Training and Research (UNITAR)",
      location: "Genf, Schweiz",
      period: "11/2022 – 03/2025",
      description: [
        "Außergewöhnliche Finanzkontrolle über ein Projektportfolio von ~140.000 $ durch Orchestrierung von Quantum-basierten Finanzoperationen.",
        "Verbesserung der finanziellen Vorausschau durch Erstellung und Analyse wöchentlicher Berichte (80 % genauere Prognosen).",
        "Signifikante operative Effizienzsteigerung durch optimierte Rechnungsverfolgung (70 % weniger Bearbeitungszeit).",
        "Substanzielle Wertschöpfung durch strategische Beschaffung (durchschnittlich 30 % Kosteneinsparungen).",
        "Etablierung eines detaillierten Inventarsystems, Reduzierung von Diskrepanzen um 99 %.",
        "Koordination komplexer Logistik für 11+ Trainingsworkshops."
      ],
      technologies: ["Quantum ERP", "Finanz-Ops", "Inventar", "Logistik"]
    },
    {
      id: "exp-2",
      role: "Leiter: Digitale Transformation, Budget und HR",
      company: "The Smartmove2UK",
      location: "Remote aus Genf",
      period: "04/2015 – Heute",
      description: [
        "Strategische Führung in Budget, HR und digitaler Transformation; Sicherung von 40 % jährlichen Einsparungen.",
        "Entwicklung der grundlegenden nutzerzentrierten digitalen Transformation und eines ERP-gesteuerten Prozesses.",
        "Architekt eines skalierbaren digitalen und operativen Plans, der zu internationalem Wachstum führte (neue Filialen in Indien und UK).",
        "Leitung der umfassenden digitalen Strategie für die neue UK-Einheit, Conroy Baker Ltd.",
        "Entwicklung benutzerdefinierter Kostenrechner mit Google AI Studio, GitHub und Vercel.",
        "Entwicklung einer dualen Automatisierungsschleife mit Resend für Kostendetails und Lead-Qualifizierung.",
        "Entwicklung einer dynamischen 'UK Spouse Visa'-Plattform auf Replit AI mit integriertem KI-Chatbot.",
        "Schnelle Marktdurchdringung für die neue UK-Marke in den ersten drei Monaten."
      ],
      technologies: ["Digitale Strategie", "HR Mgmt", "Performance Mktg", "KI-Integration"]
    },
    {
      id: "exp-3",
      role: "Berater: Digitale Strategie & Betrieb",
      company: "Ghosh Group",
      location: "Remote aus Genf",
      period: "04/2015 – Heute",
      description: [
        "Strategischer Gründungspartner, der das Wachstum des Unternehmens vom Start bis zum Marktführer steuert.",
        "Aufbau und Überwachung der gesamten Online-Präsenz (ghoshgroups.com) und Marketingstrategie.",
        "Leitung laufender digitaler Marketinginitiativen (PPC) und Beratung bei der Talentakquise.",
        "Maßgeblich an der Geschäftsexpansion und dem Start zweier neuer High-End-Fabriken beteiligt.",
        "Erzielung einer Reduzierung der Gemeinkosten um 20 % (GJ 2024) durch Effizienzinitiativen."
      ],
      technologies: ["Digitale Strategie", "Betrieb", "PPC", "Webentwicklung"]
    },
    {
      id: "exp-4",
      role: "Manager: MaerskLine.com",
      company: "Maersk Line",
      location: "Mumbai",
      period: "07/2010 – 03/2015",
      description: [
        "Leitung einer CMS-Proof-of-Concept-Initiative.",
        "Unterstützung bei strategischer Planung und Umsetzung für den globalen Relaunch von Maerskline.com (11 Sprachen).",
        "Verbesserung globaler Website-Übersetzungsprozesse und Entwicklung von SLAs/SOPs.",
        "Integration des E-Mail-Marketing-Tools Eloqua (10 % bessere Lead-Erfassung)."
      ],
      technologies: ["CMS", "SAP Integration", "Eloqua", "Lokalisierung"]
    },
    {
      id: "exp-5",
      role: "Leiter: E-Marketing & Administration",
      company: "Loha Ispaat Ltd",
      location: "Mumbai",
      period: "07/2009 – 06/2010",
      description: [
        "Entwicklung und Verwaltung von Abteilungsbudgets.",
        "Erstellung gezielter Trainingsprogramme für ein 15+ köpfiges Team.",
        "Überwachung von Gehaltsabrechnungen und Lieferantenverträgen."
      ],
      technologies: ["Budget Mgmt", "Teamführung", "E-Marketing", "Vendor Mgmt"]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "UK Immigration Tools Suite",
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
      title: "Ghosh Group KSA Landing Page",
      description: [
        "Strategische B2B-Plattform zur Erschließung des saudi-arabischen Baumarktes (Vision 2030, NEOM).",
        "Erleichtert die Marktexpansion von den VAE nach KSA unter Nutzung von fortgeschrittenem SEO und GEO.",
        "Technisches Ökosystem inkl. Lead-Generierung, GTM-Analyse und KI-gesteuerter arabischer Lokalisierung."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM"],
      imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600"
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
    { name: "Französisch", level: "Grundkenntnisse" }
  ],
  interests: [
    "Angewandte Technologie & Gen AI",
    "Menschliche Dynamik & Kommunikation",
    "Narrative Analyse & Storytelling"
  ],
  stats: [
    { label: "UN & Global Erf.", value: "15", prefix: "", suffix: "+ Jahre" },
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
    sdgTooltip: "Klimaschutz: Nachhaltige Web-Praktiken—optimierter Code und null unnötige Datenerfassung."
  }
};

// ==========================================
// SPANISH (ES)
// ==========================================
const DATA_ES: ResumeData = {
  ...DATA_EN,
  title: "Especialista en Gestión de Proyectos, Operaciones y Transformación Digital",
  about: "Líder estratégico en transformación digital y operaciones con más de 15 años de experiencia internacional. Arquitecto sistemas y procesos que impulsan el crecimiento y la eficiencia. Experto en desarrollo web impulsado por IA, diseño centrado en el usuario y planificación estratégica. Mis logros incluyen una reducción del 70% en tiempos de procesamiento y un 40% de ahorro anual mediante la excelencia operativa.",
  location: "Ginebra, Suiza",
  workPermit: "Permiso de trabajo B",
  skills: DATA_EN.skills.map(s => ({
    ...s,
    category: s.category
      .replace("Strategic & Operations Management", "Gestión Estratégica y de Operaciones")
      .replace("ERP & Admin Platforms", "ERP y Plataformas Administrativas")
      .replace("Data & Analytics", "Datos y Analítica")
      .replace("Digital Marketing & Strategy", "Marketing Digital y Estrategia")
      .replace("Design & Media", "Diseño y Medios")
      .replace("Project Management Tools", "Herramientas de Gestión de Proyectos")
      .replace("AI & Creative Tools", "IA y Herramientas Creativas")
      .replace("Workflow & Documentation", "Flujo de Trabajo y Documentación")
  })),
  experience: [
    {
      id: "exp-1",
      role: "Punto Focal: Proyectos de Finanzas, Adquisiciones e Inventario",
      company: "Instituto de las Naciones Unidas para Formación Profesional e Investigaciones (UNITAR)",
      location: "Ginebra, Suiza",
      period: "11/2022 – 03/2025",
      description: [
        "Control financiero excepcional sobre un portafolio de proyectos de ~$140k orquestando operaciones financieras basadas en Quantum.",
        "Mejora de la previsión financiera mediante la preparación y análisis de informes semanales (80% de precisión mejorada).",
        "Impulso de eficiencia operativa significativa optimizando el seguimiento de facturas (70% menos tiempo de procesamiento).",
        "Generación de valor sustancial a través de adquisiciones estratégicas (promedio de 30% de ahorro en costos).",
        "Establecimiento y mantenimiento de un sistema de inventario detallado, reduciendo discrepancias en un 99%.",
        "Coordinación logística compleja para más de 11 talleres de capacitación."
      ],
      technologies: ["Quantum ERP", "Ops Financieras", "Gestión Inventario", "Logística"]
    },
    {
      id: "exp-2",
      role: "Jefe: Transformación Digital, Presupuesto y RR.HH.",
      company: "The Smartmove2UK",
      location: "Remoto desde Ginebra",
      period: "04/2015 – Presente",
      description: [
        "Liderazgo estratégico en Presupuesto, RR.HH. y Transformación Digital, asegurando un 40% de ahorro anual.",
        "Ingeniería de la transformación digital centrada en el usuario y despliegue de un proceso ERP.",
        "Arquitectura de un plan digital y operativo escalable que impulsó un crecimiento internacional sustancial (nuevas sucursales en India y Reino Unido).",
        "Liderazgo de la estrategia digital integral para la nueva entidad en el Reino Unido, Conroy Baker Ltd.",
        "Desarrollo de calculadoras de costos personalizadas con Google AI Studio, GitHub y Vercel.",
        "Ingeniería de un bucle de automatización dual usando Resend para detalles de costos y calificación de leads.",
        "Desarrollo de una plataforma dinámica 'UK Spouse Visa' en Replit AI con Chatbot de IA integrado.",
        "Tracción rápida de mercado para la nueva marca del Reino Unido en los primeros tres meses."
      ],
      technologies: ["Estrategia Digital", "Gestión RR.HH.", "Marketing Rendimiento", "Integración IA"]
    },
    {
      id: "exp-3",
      role: "Consultor: Estrategia Digital y Operaciones",
      company: "Ghosh Group",
      location: "Remoto desde Ginebra",
      period: "04/2015 – Presente",
      description: [
        "Socio estratégico fundador, dirigiendo el crecimiento de la empresa desde su inicio hasta convertirse en un actor destacado del mercado.",
        "Construcción y supervisión de toda la presencia en línea (ghoshgroups.com) y estrategia de marketing.",
        "Dirección de iniciativas de marketing digital (PPC) y asesoramiento en adquisición de talento.",
        "Instrumental en la expansión comercial significativa y el lanzamiento de dos nuevas fábricas de alta gama.",
        "Logro de una reducción del 20% en gastos generales (FY2024) mediante iniciativas de eficiencia."
      ],
      technologies: ["Estrategia Digital", "Operaciones", "PPC", "Desarrollo Web"]
    },
    {
      id: "exp-4",
      role: "Gerente: MaerskLine.com",
      company: "Maersk Line",
      location: "Mumbai",
      period: "07/2010 – 03/2015",
      description: [
        "Liderazgo de una iniciativa de prueba de concepto de CMS.",
        "Asistencia en la planificación estratégica para el lanzamiento global de Maerskline.com (11 idiomas).",
        "Mejora de los procesos de traducción de sitios web globales y desarrollo de SLAs/SOPs.",
        "Integración de la herramienta de marketing por correo electrónico Eloqua (10% de mejora en captura de leads)."
      ],
      technologies: ["CMS", "Integración SAP", "Eloqua", "Localización"]
    },
    {
      id: "exp-5",
      role: "Jefe: Departamento de E-Marketing y Administración",
      company: "Loha Ispaat Ltd",
      location: "Mumbai",
      period: "07/2009 – 06/2010",
      description: [
        "Desarrollo y gestión de presupuestos departamentales.",
        "Creación e implementación de programas de capacitación específicos para un equipo de más de 15 personas.",
        "Supervisión de nóminas y gestión de contratos de proveedores."
      ],
      technologies: ["Gestión Presupuesto", "Liderazgo Equipo", "E-Marketing", "Proveedores"]
    }
  ],
  projects: [
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
        "Plataforma B2B estratégica diseñada para penetrar el mercado de la construcción en Arabie Saoudite (Visión 2030, NEOM).",
        "Facilita la expansión del mercado de los EAU a KSA, utilizando SEO avanzado y GEO.",
        "Ecosistema técnico que incluye generación reactiva de leads, análisis GTM y localización árabe impulsada por IA."
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GTM"],
      imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=600"
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
    { name: "Francés", level: "Básico" }
  ],
  interests: [
    "Tecnología Aplicada e IA Generativa",
    "Dinámica Humana y Comunicación",
    "Análisis Narrativo y Storytelling"
  ],
  stats: [
    { label: "Exp. ONU y Global", value: "15", prefix: "", suffix: "+ Años" },
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
    sdgTooltip: "Acción Climática: Construido con prácticas web sostenibles—código optimizado y cero recolección de datos innecesaria."
  }
};

export const ALL_DATA: Record<LanguageCode, ResumeData> = {
  en: DATA_EN,
  fr: DATA_FR,
  de: DATA_DE,
  es: DATA_ES
};
