import { ResumeData, LanguageCode } from './types';

// Shared Data (Images, Dates, Tech stacks don't change per language)
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

const DATA_EN: ResumeData = {
  ...SHARED_DATA,
  title: "Project, Operations & Digital Transformation Specialist",
  about: "Strategic leader in digital transformation and operations with over 15 years of international experience. I architect systems and processes that drive growth and efficiency. Expert in AI-driven web development, user-centric design, and strategic planning, leading to significant business expansion. Key achievements include driving a 70% reduction in processing times and securing 40% in annual savings through operational excellence.",
  location: "Geneva, Switzerland",
  workPermit: "Work Permit B",
  skills: [
    // Strategic & Operations Management (90%)
    { name: "Strategic Planning", category: "Strategic & Operations Management", level: 90 },
    { name: "Project Lifecycle Oversight", category: "Strategic & Operations Management", level: 90 },
    { name: "Business Process Optimisation", category: "Strategic & Operations Management", level: 90 },
    { name: "Change Management", category: "Strategic & Operations Management", level: 90 },
    { name: "Cross-Functional Coordination", category: "Strategic & Operations Management", level: 90 },
    { name: "Logistics Management", category: "Strategic & Operations Management", level: 90 },
    { name: "Talent Acquisition", category: "Strategic & Operations Management", level: 90 },

    // ERP & Admin Platforms (95%)
    { name: "Quantum ERP", category: "ERP & Admin Platforms", level: 95 },
    { name: "Microsoft 365 (SharePoint, Teams)", category: "ERP & Admin Platforms", level: 95 },
    { name: "Google Workspace", category: "ERP & Admin Platforms", level: 95 },
    { name: "Cloudflare (DNS/CDN)", category: "ERP & Admin Platforms", level: 95 },
    { name: "Web Hosting Admin", category: "ERP & Admin Platforms", level: 95 },

    // Data & Analytics (90%)
    { name: "Excel (Advanced)", category: "Data & Analytics", level: 90 },
    { name: "Power BI", category: "Data & Analytics", level: 90 },
    { name: "Tableau", category: "Data & Analytics", level: 90 },
    { name: "Google Analytics", category: "Data & Analytics", level: 90 },
    { name: "Google Search Console", category: "Data & Analytics", level: 90 },

    // Digital Marketing & Strategy (95%)
    { name: "SEO", category: "Digital Marketing & Strategy", level: 95 },
    { name: "PPC", category: "Digital Marketing & Strategy", level: 95 },
    { name: "GEO", category: "Digital Marketing & Strategy", level: 95 },
    { name: "SMO", category: "Digital Marketing & Strategy", level: 95 },
    { name: "Mailchimp", category: "Digital Marketing & Strategy", level: 95 },
    { name: "HubSpot", category: "Digital Marketing & Strategy", level: 95 },
    { name: "WordPress", category: "Digital Marketing & Strategy", level: 95 },
    { name: "Semrush", category: "Digital Marketing & Strategy", level: 95 },

    // Design & Media (97%)
    { name: "Figma", category: "Design & Media", level: 97 },
    { name: "Adobe Creative Suite (Ps, Pr)", category: "Design & Media", level: 97 },
    { name: "Canva", category: "Design & Media", level: 97 },
    { name: "Descript", category: "Design & Media", level: 97 },
    { name: "Sound Forge", category: "Design & Media", level: 97 },

    // Project Management Tools (80%)
    { name: "Jira", category: "Project Management Tools", level: 80 },
    { name: "Asana", category: "Project Management Tools", level: 80 },
    { name: "Trello", category: "Project Management Tools", level: 80 },
    { name: "Monday.com", category: "Project Management Tools", level: 80 },

    // AI & Creative Tools (80%)
    { name: "Generative AI (ChatGPT, Gemini, Google AI Studio, Claude, Midjourney, Leonardo AI, Kling, Suno AI)", category: "AI & Creative Tools", level: 80 },
    { name: "Replit AI", category: "AI & Creative Tools", level: 80 },
    { name: "Firebase Studio", category: "AI & Creative Tools", level: 80 },

    // Workflow & Documentation (75%)
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
    { name: "Gen AI: Beyond the Chatbot", issuer: "Google Skills", date: "12/2025" }
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
    { label: "UN & Global Exp", value: "15", prefix: "", suffix: "+ Yrs" },
    { label: "Annual Savings", value: "40", prefix: "", suffix: "%" },
    { label: "Efficiency Boost", value: "70", prefix: "", suffix: "%" },
    { label: "Markets Expanded", value: "3", prefix: "", suffix: "" }
  ],
  testimonials: [
    {
      id: "t1",
      text: "David consistently demonstrated outstanding professionalism, dedication, and a strong work ethic. His ability to manage complex tasks with clarity and efficiency was invaluable to the Division. His support was essential to the smooth functioning of our operations.",
      author: "Alexander A. Mejia",
      role: "Director, Division for People and Social Inclusion",
      company: "UNITAR"
    },
    {
      id: "t2",
      text: "David brought strong structure to a creative concept. He fully understood both the cultural nuance of the brand and the business side. His ability to balance technical, operational, and user-facing needs helped us move forward efficiently.",
      author: "Louis-Olivier Maury",
      role: "Independent Journalist",
      company: "Geneva"
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

const DATA_FR: ResumeData = {
  ...DATA_EN,
  title: "Spécialiste en projets, opérations et transformation numérique",
  about: "Leader stratégique en transformation numérique et opérations avec plus de 15 ans d'expérience internationale. Je conçois des systèmes et des processus qui favorisent la croissance et l'efficacité. Expert en développement web basé sur l'IA, en conception centrée sur l'utilisateur et en planification stratégique, ce qui a permis une expansion significative de l'activité. Parmi mes principales réalisations, je peux citer une réduction de 70 % des délais de traitement et une économie annuelle de 40 % grâce à l'excellence opérationnelle.",
  ui: {
    ...DATA_EN.ui,
    basedIn: "Basé à",
    unGlobalExp: "Expérience internationale et auprès des Nations Unies",
    hiIam: "Bonjour, je suis",
    workPermit: "Permis de travail B",
    experienceTitle: "Expérience",
    skillsTitle: "Compétences et aptitudes clés",
    competencyOverview: "Aperçu global des compétences",
    projectsTitle: "Projets Phares",
    qualificationsTitle: "Qualifications et connaissances",
    endorsementsTitle: "Recommandations",
    education: "Formation",
    certificates: "Certificats & Badges",
    languages: "Langues",
    interests: "Intérêts",
    contact: "Contact",
    viewDetails: "Voir Détails",
    showLess: "Voir Moins",
    online: "En ligne",
    askMe: "Posez-moi une question sur David...",
    poweredBy: "Propulsé par Gemini",
    rightsReserved: "Tous Droits Réservés",
    translationDisclaimer: "Traductions assistées par IA.",
    privacyNotice: "Confidentialité : ce site ne collecte pas de données. Le chat IA est uniquement local.",
    sdgBadge: "ODD 13 ONU",
    sdgTooltip: "Action climatique : Construit avec des pratiques numériques durables—code optimisé, infrastructure énergétique renouvelable, et zéro collecte de données inutile."
  }
};

const DATA_DE: ResumeData = {
  ...DATA_EN,
  title: "Spezialist für Projekte, Betrieb und digitale Transformation",
  about: "Strategischer Leiter im Bereich digitale Transformation und Betrieb mit über 15 Jahren internationaler Erfahrung. Ich entwickle Systeme und Prozesse, die Wachstum und Effizienz fördern. Experte für KI-gesteuerte Webentwicklung, nutzerorientiertes Design und strategische Planung, was zu einer bedeutenden Geschäftsausweitung führt. Zu meinen wichtigsten Erfolgen zählen die Verkürzung der Bearbeitungszeiten um 70 % und die Erzielung von jährlichen Einsparungen in Höhe von 40 % durch operative Exzellenz.",
  ui: {
    ...DATA_EN.ui,
    basedIn: "Sitz in",
    unGlobalExp: "Erfahrung bei den Vereinten Nationen und auf globaler Ebene",
    hiIam: "Hallo, ich bin",
    workPermit: "Arbeitserlaubnis B",
    experienceTitle: "Erfahrung",
    skillsTitle: "Fähigkeiten und Kernkompetenzen",
    competencyOverview: "Ganzheitliche Kompetenzübersicht",
    projectsTitle: "Ausgewählte Projekte",
    qualificationsTitle: "Qualifikationen und Einblicke",
    endorsementsTitle: "Empfehlungen",
    education: "Ausbildung",
    certificates: "Zertifikate",
    languages: "Sprachen",
    interests: "Interessen",
    contact: "Kontakt",
    viewDetails: "Details Anzeigen",
    showLess: "Weniger Anzeigen",
    online: "Online",
    askMe: "Frag mich etwas über David...",
    poweredBy: "Angetrieben von Gemini",
    rightsReserved: "Alle Rechte vorbehalten",
    translationDisclaimer: "KI-gestützte Übersetzungen.",
    privacyNotice: "Datenschutz: Diese Website sammelt keine Daten. Der KI-Chat ist nur lokal verfügbar.",
    sdgBadge: "UN-SDG 13",
    sdgTooltip: "Klimaschutz: Entwickelt mit nachhaltigen Webpraktiken—optimierter Code, erneuerbare Energieinfrastruktur und keine unnötige Datenerfassung."
  }
};

const DATA_ES: ResumeData = {
  ...DATA_EN,
  title: "Especialista en proyectos, operaciones y transformación digital",
  about: "Líder estratégico en transformación digital y operaciones con más de 15 años de experiencia internacional. Diseño sistemas y procesos que impulsan el crecimiento y la eficiencia. Experto en desarrollo web basado en inteligencia artificial, diseño centrado en el usuario y planificación estratégica, lo que ha dado lugar a una importante expansión empresarial. Entre mis principales logros se incluyen la reducción del 70 % en los tiempos de procesamiento y el ahorro del 40 % en los costes anuales gracias a la excelencia operativa.",
  ui: {
    ...DATA_EN.ui,
    basedIn: "Con sede en",
    unGlobalExp: "Experiencia en la ONU y a nivel mundial.",
    hiIam: "Hola, soy",
    workPermit: "Permiso de trabajo B.",
    experienceTitle: "Experiencia",
    skillsTitle: "Habilidades y competencias básicas",
    competencyOverview: "Descripción general de las competencias holísticas",
    projectsTitle: "Proyectos Destacados",
    qualificationsTitle: "Cualificaciones y conocimientos",
    endorsementsTitle: "Recommandaciones",
    education: "Educación",
    certificates: "Certificados",
    languages: "Idiomas",
    interests: "Intereses",
    contact: "Contacto",
    viewDetails: "Ver Detalles",
    showLess: "Ver Menos",
    online: "En línea",
    askMe: "Pregúntame sobre David...",
    poweredBy: "Impulsado por Gemini",
    rightsReserved: "Todos los derechos reservados",
    translationDisclaimer: "Traducciones asistidas por IA.",
    privacyNotice: "Privacidad: Este sitio no recopila datos. El chat con IA es solo local.",
    sdgBadge: "ODS 13 ONU",
    sdgTooltip: "Acción por el clima: Construido con prácticas web sostenibles—código optimizado, infraestructura de energía renovable, y cero recopilación de datos innecesaria."
  }
};

export const ALL_DATA: Record<LanguageCode, ResumeData> = {
  en: DATA_EN,
  fr: DATA_FR,
  de: DATA_DE,
  es: DATA_ES
};