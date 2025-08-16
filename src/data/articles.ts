import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

export type ArticleCategory =
  | "Transformation Digitale"
  | "Business Intelligence"
  | "Automatisation"
  | "Formation";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: ArticleCategory;
  featured?: boolean;
  image: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Les 5 étapes pour réussir sa transformation digitale",
    excerpt:
      "Découvrez notre méthodologie éprouvée pour accompagner votre entreprise dans sa transformation digitale.",
    content:
      "La transformation digitale n'est plus une option mais une nécessité pour rester compétitif...",
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Transformation Digitale",
    featured: true,
    image: blog1,
  },
  {
    id: 2,
    title: "Power BI : Comment créer des tableaux de bord efficaces",
    excerpt:
      "Guide pratique pour concevoir des dashboards Power BI qui transforment vos données en insights.",
    content:
      "Un bon tableau de bord Power BI doit répondre aux questions métier essentielles...",
    date: "10 Mars 2024",
    readTime: "7 min",
    category: "Business Intelligence",
    image: blog2,
  },
  {
    id: 3,
    title: "Automatisation : 10 processus à digitaliser en priorité",
    excerpt:
      "Identifiez les processus qui vous feront gagner le plus de temps grâce à l'automatisation.",
    content:
      "L'automatisation des processus peut transformer radicalement l'efficacité de votre entreprise...",
    date: "5 Mars 2024",
    readTime: "6 min",
    category: "Automatisation",
    image: blog3,
  },
  {
    id: 4,
    title: "ROI de la Business Intelligence : Comment le mesurer ?",
    excerpt:
      "Méthodes et indicateurs clés pour calculer le retour sur investissement de vos projets BI.",
    content:
      "Mesurer le ROI d'un projet Business Intelligence nécessite une approche structurée...",
    date: "1 Mars 2024",
    readTime: "8 min",
    category: "Business Intelligence",
    image: blog4,
  },
  {
    id: 5,
    title: "Power Automate vs développement custom : que choisir ?",
    excerpt:
      "Analyse comparative pour vous aider à choisir la meilleure solution d'automatisation.",
    content:
      "Le choix entre Power Automate et un développement sur mesure dépend de plusieurs facteurs...",
    date: "25 Février 2024",
    readTime: "6 min",
    category: "Automatisation",
    image: blog5,
  },
  {
    id: 6,
    title: "Formation équipes : clés de succès d'un projet digital",
    excerpt:
      "Pourquoi la formation est cruciale et comment bien l'organiser pour maximiser l'adoption.",
    content:
      "Le succès d'un projet de transformation digitale repose en grande partie sur l'adoption...",
    date: "20 Février 2024",
    readTime: "5 min",
    category: "Formation",
    image: blog6,
  },
];
