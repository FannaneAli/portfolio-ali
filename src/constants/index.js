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

/* ======== SERVICES (alignés à ton CV) ======== */
const services = [
  { title: "Back-end Spring Boot", icon: backend },
  { title: "Front-end Angular/TS", icon: web },
  { title: "APIs REST • JWT/RBAC", icon: creator },
  { title: "PostgreSQL • Docker", icon: mobile },
];

/* ======== TECHNOLOGIES (on garde tes icônes existantes) ======== */
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

/* ======== EXPERIENCES (S2M + Freelance; bénévolat retiré) ======== */
const experiences = [
  {
    title: "Stage PFA — Société Maghrébine de Monétique (S2M)",
    company_name: "Casablanca",
    icon: s2m,          // nécessite l’export de s2m dans src/assets/index.js
    iconBg: "#ffffff",  // ajuste si besoin (#0e1320 si ton logo est clair)
    date: "1 juillet 2025 — 15 septembre 2025",
    points: [
      "Conception et réalisation d’une plateforme USSD multi-tenant, multi-operator et multi-menu.",
      "Back-end Spring Boot : APIs REST (menus, options, validation, publication), sécurité JWT/RBAC, audit et journalisation.",
      "Front-end Vue.js : back-office d’administration (builder d’arborescences, pré-vérifications, workflow de publication).",
      "Isolation par institution, paramètres opérateurs (timeouts, encodage GSM7/UCS2), traçabilité par code USSD.",
      "Impact : time-to-market réduit de plusieurs jours à quelques heures.",
      "Stack : Spring Boot, Vue.js, MySQL, Docker, JWT/RBAC, tests Postman.",
    ],
  },
  {
    title: "Projet freelance — Plateforme pièces automobiles",
    company_name: "Full-stack",
    icon: web,          // remplace par ton propre logo si tu en as un
    iconBg: "#0e1320",
    date: "1 juillet 2024 — 31 août 2024",
    points: [
      "Catalogue (références, compatibilités, prix, stocks) avec import/export CSV et images produits.",
      "Workflow commande → paiement → facture & bon de livraison.",
      "Suivi logistique (statuts, transporteurs, historiques) et rôles (admin, magasin, compta).",
      "Stack : Angular, Spring Boot, PostgreSQL, JWT.",
    ],
  },
];

/* ======== TESTIMONIALS (inchangés; tu pourras les remplacer plus tard) ======== */
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

/* ======== PROJECTS (d’après ta section Projets) ======== */
const projects = [
  {
    name: "Digitalisation doctorants (microservices)",
    description:
        "Cadrage des processus (dossier, validations, encadrements, soutenance). Services Spring Boot sécurisés (JWT/RBAC). Front Angular pour workflow (formulaires, pièces jointes, commentaires, tableau de bord). Orchestration (rappels, délais, statuts), audit, exports.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "angular", color: "pink-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
    ],
    image: carrent, // placeholder; remplace par un visuel projet si tu veux
    source_code_link:
        "https://github.com/FannaneAli/serviceAuth",
  },
  {
    name: "Agent IA RAG — NL → SQL",
    description:
        "RAG : index du schéma & docs métiers (embeddings), récupération ciblée, prompting pour génération SQL. Garde-fous : permissions par rôle, exécution read-only, vérification syntaxe/impact. Réponses sourcées (résumé + extrait tabulaire).",
    tags: [
      { name: "python", color: "yellow-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "langchain", color: "purple-text-gradient" },
      { name: "pgvector", color: "blue-text-gradient" },
    ],
    image: jobit, // placeholder
    source_code_link:
        "https://github.com/FannaneAli/rag-sql-assistant",
  },
  {
    name: "PFA — App Flutter (École)",
    description:
        "Gestion des rôles (admin/enseignant/étudiant) via Firebase Auth. Emplois du temps, création de séances, pointage d’absence (QR/GPS), justificatifs. Intégration Google Maps.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
      { name: "maps", color: "green-text-gradient" },
    ],
    image: tripguide, // placeholder
    source_code_link:
        "https://github.com/FannaneAli/flutter-school-attendance",
  },
];

export { services, technologies, experiences, testimonials, projects };
