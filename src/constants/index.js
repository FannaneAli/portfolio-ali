import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs, // <-- ajoute bien s2m dans src/assets/index.js
} from "../assets";
// src/constants/index.js
import s2m from "../assets/s2m.png"; // <-- ajoute cette ligne

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

/* ======== SERVICES (alignÃ©s Ã  ton CV) ======== */
const services = [
  { title: "Back-end Spring Boot", icon: backend },
  { title: "Front-end Angular/TS", icon: web },
  { title: "APIs REST â€¢ JWT/RBAC", icon: creator },
  { title: "PostgreSQL â€¢ Docker", icon: mobile },
];

/* ======== TECHNOLOGIES (on garde tes icÃ´nes existantes) ======== */
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

/* ======== EXPERIENCES (S2M + Freelance; bÃ©nÃ©volat retirÃ©) ======== */
const experiences = [
  {
    title: "Stage PFA â€” SociÃ©tÃ© MaghrÃ©bine de MonÃ©tique (S2M)",
    company_name: "Casablanca",
    icon: s2m,          // nÃ©cessite lâ€™export de s2m dans src/assets/index.js
    iconBg: "#ffffff",  // ajuste si besoin (#0e1320 si ton logo est clair)
    date: "1 juillet 2025 â€” 15 septembre 2025",
    points: [
      "Conception et rÃ©alisation dâ€™une plateforme USSD multi-tenant, multi-operator et multi-menu.",
      "Back-end Spring Boot : APIs REST (menus, options, validation, publication), sÃ©curitÃ© JWT/RBAC, audit et journalisation.",
      "Front-end Vue.js : back-office dâ€™administration (builder dâ€™arborescences, prÃ©-vÃ©rifications, workflow de publication).",
      "Isolation par institution, paramÃ¨tres opÃ©rateurs (timeouts, encodage GSM7/UCS2), traÃ§abilitÃ© par code USSD.",
      "Impact : time-to-market rÃ©duit de plusieurs jours Ã  quelques heures.",
      "Stack : Spring Boot, Vue.js, MySQL, Docker, JWT/RBAC, tests Postman.",
    ],
  },
  {
    title: "Projet freelance â€” Plateforme piÃ¨ces automobiles",
    company_name: "Full-stack",
    icon: web,          // remplace par ton propre logo si tu en as un
    iconBg: "#0e1320",
    date: "1 juillet 2024 â€” 31 aoÃ»t 2024",
    points: [
      "Catalogue (rÃ©fÃ©rences, compatibilitÃ©s, prix, stocks) avec import/export CSV et images produits.",
      "Workflow commande â†’ paiement â†’ facture & bon de livraison.",
      "Suivi logistique (statuts, transporteurs, historiques) et rÃ´les (admin, magasin, compta).",
      "Stack : Angular, Spring Boot, PostgreSQL, JWT.",
    ],
  },
];

/* ======== TESTIMONIALS (inchangÃ©s; tu pourras les remplacer plus tard) ======== */
const testimonials = [
  {
    testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

/* ======== PROJECTS (d'après ta section Projets) ======== */
const projects = [
  {
    name: "Digitalisation Doctorants — Microservices",
    description:
        "Plateforme complète de gestion du parcours doctoral : inscription, validation du sujet, suivi d'encadrement et organisation de soutenance. Architecture microservices Spring Boot avec authentification JWT et contrôle d'accès RBAC. Interface Angular moderne avec formulaires dynamiques, upload de documents, système de commentaires et tableau de bord analytique. Orchestration automatisée des rappels et suivi des délais administratifs.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "angular", color: "pink-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/FannaneAli/serviceAuth",
  },
  {
    name: "Universal DB RAG — NL to SQL",
    description:
        "Agent intelligent basé sur l'architecture RAG (Retrieval-Augmented Generation) permettant de convertir des questions en langage naturel en requêtes SQL optimisées. Indexation automatique du schéma de base de données et des documents métiers via embeddings vectoriels. Système de garde-fous avec permissions par rôle, exécution en lecture seule et validation syntaxique. Réponses enrichies avec sources et extraits tabulaires.",
    tags: [
      { name: "python", color: "yellow-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "langchain", color: "purple-text-gradient" },
      { name: "pgvector", color: "blue-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/FannaneAli/universal-db-rag-v2",
  },
  {
    name: "Flutter Deep Learning — App Mobile",
    description:
        "Application mobile Flutter intégrant des modèles de deep learning pour la reconnaissance d'images et le traitement intelligent. Gestion multi-rôles (admin, enseignant, étudiant) avec Firebase Authentication. Fonctionnalités avancées : emplois du temps dynamiques, création de séances, système de pointage (QR Code / GPS), gestion des justificatifs d'absence et intégration Google Maps pour la géolocalisation.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
      { name: "tensorflow", color: "orange-text-gradient" },
      { name: "maps", color: "green-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/FannaneAli/flutter_deeplearning_projet",
  },
];

export { services, technologies, experiences, testimonials, projects };