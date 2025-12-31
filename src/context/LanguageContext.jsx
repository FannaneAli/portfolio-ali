import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("portfolio-language");
    return saved || "fr";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ========== TRANSLATIONS ==========
const translations = {
  fr: {
    // Navbar
    "nav.about": "À propos",
    "nav.work": "Expériences",
    "nav.contact": "Contact",
    "nav.subtitle": "Futur Ingénieur",

    // Hero
    "hero.greeting": "Salut, je suis",
    "hero.description": "Je développe des applications web full-stack, des APIs REST sécurisées et des solutions basées sur l'IA.",

    // About
    "about.subtitle": "Introduction",
    "about.title": "Présentation.",
    "about.description": "Je suis un développeur full-stack passionné avec une expertise en Spring Boot, Angular et Python. J'ai de l'expérience dans la création de plateformes sécurisées avec JWT/RBAC, d'architectures microservices et d'agents IA basés sur RAG. Je suis motivé par la résolution de problèmes complexes et la livraison de solutions efficaces.",

    // Services
    "service.backend": "Back-end Spring Boot",
    "service.frontend": "Front-end Angular/TS",
    "service.api": "APIs REST • JWT/RBAC",
    "service.database": "PostgreSQL • Docker",

    // Experience
    "experience.subtitle": "Parcours",
    "experience.title": "Expériences professionnelles.",

    // Experience 1 - S2M
    "exp1.title": "Stage PFA — Société Maghrébine de Monétique (S2M)",
    "exp1.company": "Casablanca",
    "exp1.date": "1 juillet 2025 — 15 septembre 2025",
    "exp1.point1": "Conception et réalisation d'une plateforme USSD multi-tenant, multi-operator et multi-menu.",
    "exp1.point2": "Back-end Spring Boot : APIs REST (menus, options, validation, publication), sécurité JWT/RBAC, audit et journalisation.",
    "exp1.point3": "Front-end Vue.js : back-office d'administration (builder d'arborescences, pré-vérifications, workflow de publication).",
    "exp1.point4": "Isolation par institution, paramètres opérateurs (timeouts, encodage GSM7/UCS2), traçabilité par code USSD.",
    "exp1.point5": "Impact : time-to-market réduit de plusieurs jours à quelques heures.",
    "exp1.point6": "Stack : Spring Boot, Vue.js, MySQL, Docker, JWT/RBAC, tests Postman.",

    // Experience 2 - Freelance
    "exp2.title": "Projet freelance — Plateforme pièces automobiles",
    "exp2.company": "Full-stack",
    "exp2.date": "1 juillet 2024 — 31 août 2024",
    "exp2.point1": "Catalogue (références, compatibilités, prix, stocks) avec import/export CSV et images produits.",
    "exp2.point2": "Workflow commande → paiement → facture & bon de livraison.",
    "exp2.point3": "Suivi logistique (statuts, transporteurs, historiques) et rôles (admin, magasin, compta).",
    "exp2.point4": "Stack : Angular, Spring Boot, PostgreSQL, JWT.",

    // Works
    "works.subtitle": "Mon travail",
    "works.title": "Projets.",
    "works.description": "Les projets suivants illustrent mes compétences et mon expérience à travers des exemples concrets. Chaque projet est brièvement décrit avec des liens vers les dépôts de code. Ils reflètent ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer des projets efficacement.",

    // Project 1 - Doctorants
    "project1.name": "Digitalisation Doctorants — Microservices",
    "project1.description": "Plateforme complète de gestion du parcours doctoral : inscription, validation du sujet, suivi d'encadrement et organisation de soutenance. Architecture microservices Spring Boot avec authentification JWT et contrôle d'accès RBAC. Interface Angular moderne avec formulaires dynamiques, upload de documents, système de commentaires et tableau de bord analytique.",

    // Project 2 - RAG
    "project2.name": "Universal DB RAG — NL to SQL",
    "project2.description": "Agent intelligent basé sur l'architecture RAG (Retrieval-Augmented Generation) permettant de convertir des questions en langage naturel en requêtes SQL optimisées. Indexation automatique du schéma de base de données et des documents métiers via embeddings vectoriels. Système de garde-fous avec permissions par rôle, exécution en lecture seule.",

    // Project 3 - Flutter
    "project3.name": "Flutter Deep Learning — App Mobile",
    "project3.description": "Application mobile Flutter intégrant des modèles de deep learning pour la reconnaissance d'images et le traitement intelligent. Gestion multi-rôles (admin, enseignant, étudiant) avec Firebase Authentication. Fonctionnalités avancées : emplois du temps dynamiques, système de pointage (QR Code / GPS).",

    // Contact
    "contact.subtitle": "Prendre contact",
    "contact.title": "Contact.",
    "contact.name": "Votre nom",
    "contact.name.placeholder": "Quel est votre nom ?",
    "contact.email": "Votre email",
    "contact.email.placeholder": "Quelle est votre adresse email ?",
    "contact.message": "Votre message",
    "contact.message.placeholder": "Que souhaitez-vous dire ?",
    "contact.send": "Envoyer",
    "contact.sending": "Envoi en cours...",
    "contact.success": "Merci ! Je vous répondrai dès que possible.",
    "contact.error": "Oups ! Une erreur s'est produite. Veuillez réessayer.",

    // Feedbacks
    "feedbacks.subtitle": "Ce que les autres disent",
    "feedbacks.title": "Témoignages.",

    // Footer
    "footer.description": "Développeur Full-Stack passionné par la création de solutions web innovantes et performantes.",
    "footer.quickLinks": "Liens rapides",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés.",
  },

  en: {
    // Navbar
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.subtitle": "Future Engineer",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.description": "I develop full-stack web applications, secure REST APIs and AI-based solutions.",

    // About
    "about.subtitle": "Introduction",
    "about.title": "Overview.",
    "about.description": "I'm a passionate full-stack developer with expertise in Spring Boot, Angular, and Python. I have experience building secure platforms with JWT/RBAC, microservices architectures, and RAG-based AI agents. I'm driven by solving complex problems and delivering efficient solutions.",

    // Services
    "service.backend": "Back-end Spring Boot",
    "service.frontend": "Front-end Angular/TS",
    "service.api": "REST APIs • JWT/RBAC",
    "service.database": "PostgreSQL • Docker",

    // Experience
    "experience.subtitle": "What I have done so far",
    "experience.title": "Work Experience.",

    // Experience 1 - S2M
    "exp1.title": "PFA Internship — Société Maghrébine de Monétique (S2M)",
    "exp1.company": "Casablanca",
    "exp1.date": "July 1, 2025 — September 15, 2025",
    "exp1.point1": "Design and development of a multi-tenant, multi-operator and multi-menu USSD platform.",
    "exp1.point2": "Spring Boot back-end: REST APIs (menus, options, validation, publication), JWT/RBAC security, audit and logging.",
    "exp1.point3": "Vue.js front-end: administration back-office (tree builder, pre-checks, publication workflow).",
    "exp1.point4": "Institution isolation, operator parameters (timeouts, GSM7/UCS2 encoding), traceability by USSD code.",
    "exp1.point5": "Impact: time-to-market reduced from several days to a few hours.",
    "exp1.point6": "Stack: Spring Boot, Vue.js, MySQL, Docker, JWT/RBAC, Postman tests.",

    // Experience 2 - Freelance
    "exp2.title": "Freelance Project — Auto Parts Platform",
    "exp2.company": "Full-stack",
    "exp2.date": "July 1, 2024 — August 31, 2024",
    "exp2.point1": "Catalog (references, compatibilities, prices, stocks) with CSV import/export and product images.",
    "exp2.point2": "Order workflow → payment → invoice & delivery note.",
    "exp2.point3": "Logistics tracking (statuses, carriers, history) and roles (admin, warehouse, accounting).",
    "exp2.point4": "Stack: Angular, Spring Boot, PostgreSQL, JWT.",

    // Works
    "works.subtitle": "My work",
    "works.title": "Projects.",
    "works.description": "The following projects showcase my skills and experience through real-world examples. Each project is briefly described with links to code repositories. They reflect my ability to solve complex problems, work with different technologies and manage projects effectively.",

    // Project 1 - Doctorants
    "project1.name": "PhD Students Digitalization — Microservices",
    "project1.description": "Complete platform for managing the doctoral journey: registration, subject validation, supervision monitoring and thesis defense organization. Spring Boot microservices architecture with JWT authentication and RBAC access control. Modern Angular interface with dynamic forms, document upload, comment system and analytical dashboard.",

    // Project 2 - RAG
    "project2.name": "Universal DB RAG — NL to SQL",
    "project2.description": "Intelligent agent based on RAG (Retrieval-Augmented Generation) architecture to convert natural language questions into optimized SQL queries. Automatic indexing of database schema and business documents via vector embeddings. Safeguard system with role-based permissions, read-only execution.",

    // Project 3 - Flutter
    "project3.name": "Flutter Deep Learning — Mobile App",
    "project3.description": "Flutter mobile application integrating deep learning models for image recognition and intelligent processing. Multi-role management (admin, teacher, student) with Firebase Authentication. Advanced features: dynamic schedules, attendance system (QR Code / GPS).",

    // Contact
    "contact.subtitle": "Get in touch",
    "contact.title": "Contact.",
    "contact.name": "Your Name",
    "contact.name.placeholder": "What's your name?",
    "contact.email": "Your Email",
    "contact.email.placeholder": "What's your email address?",
    "contact.message": "Your Message",
    "contact.message.placeholder": "What do you want to say?",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.success": "Thank you! I will get back to you as soon as possible.",
    "contact.error": "Oops! Something went wrong. Please try again.",

    // Feedbacks
    "feedbacks.subtitle": "What others say",
    "feedbacks.title": "Testimonials.",

    // Footer
    "footer.description": "Full-Stack Developer passionate about creating innovative and high-performance web solutions.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
  },
};

export default LanguageContext;
