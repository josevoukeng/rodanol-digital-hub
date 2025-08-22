import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

const Article = () => {
  const { id } = useParams();
  
  // Données statiques des articles (en production, ceci viendrait d'une API)
  const articles = [
    {
      id: "1",
      title: "Les 5 étapes pour réussir sa transformation digitale",
      content: `
        <h2>Introduction</h2>
        <p>La transformation digitale n'est plus une option mais une nécessité pour rester compétitif dans le monde des affaires d'aujourd'hui. Chez Rodanol, nous accompagnons les entreprises dans cette démarche cruciale.</p>
        
        <h2>1. Évaluation de l'existant</h2>
        <p>Avant de commencer toute transformation, il est essentiel de faire un audit complet de vos processus actuels, de vos outils et de votre infrastructure technologique.</p>
        
        <h2>2. Définition de la stratégie</h2>
        <p>Une stratégie claire avec des objectifs mesurables est la clé du succès. Nous vous aidons à définir une roadmap adaptée à votre secteur d'activité.</p>
        
        <h2>3. Formation des équipes</h2>
        <p>Le changement ne peut réussir sans l'adhésion des équipes. Nos programmes de formation garantissent une adoption efficace des nouveaux outils.</p>
        
        <h2>4. Mise en œuvre progressive</h2>
        <p>Une approche par étapes permet de minimiser les risques et d'ajuster la stratégie en cours de route.</p>
        
        <h2>5. Mesure et optimisation</h2>
        <p>Le suivi des KPIs et l'optimisation continue assurent le succès à long terme de votre transformation digitale.</p>
      `,
      excerpt: "Découvrez notre méthodologie éprouvée pour accompagner votre entreprise dans sa transformation digitale.",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "Transformation Digitale",
      author: "Équipe Rodanol",
      image: "/src/assets/blog-1.jpg"
    },
    {
      id: "2",
      title: "Power BI : Comment créer des tableaux de bord efficaces",
      content: `
        <h2>L'importance des tableaux de bord</h2>
        <p>Un bon tableau de bord Power BI doit répondre aux questions métier essentielles et permettre une prise de décision rapide et éclairée.</p>
        
        <h2>Conception centée utilisateur</h2>
        <p>Avant de commencer, identifiez clairement qui utilisera le tableau de bord et quels sont leurs besoins spécifiques.</p>
        
        <h2>Choix des visualisations</h2>
        <p>Chaque type de donnée nécessite une visualisation adaptée. Nous vous guidons dans le choix optimal pour maximiser l'impact de vos données.</p>
        
        <h2>Performance et optimisation</h2>
        <p>Un tableau de bord lent est un tableau de bord inutile. Découvrez nos techniques d'optimisation pour des performances optimales.</p>
      `,
      excerpt: "Guide pratique pour concevoir des dashboards Power BI qui transforment vos données en insights.",
      date: "10 Mars 2024",
      readTime: "7 min",
      category: "Business Intelligence",
      author: "Équipe Rodanol",
      image: "/src/assets/blog-2.jpg"
    },
    {
      id: "3",
      title: "Automatisation : 10 processus à digitaliser en priorité",
      content: `
        <h2>Pourquoi automatiser ?</h2>
        <p>L'automatisation des processus peut transformer radicalement l'efficacité de votre entreprise en libérant du temps pour les tâches à plus forte valeur ajoutée.</p>
        
        <h2>Les 10 processus prioritaires</h2>
        <ol>
          <li><strong>Gestion des factures</strong> - Réduction des erreurs et gain de temps significatif</li>
          <li><strong>Onboarding des nouveaux employés</strong> - Expérience standardisée et efficace</li>
          <li><strong>Reporting financier</strong> - Données en temps réel et précision accrue</li>
          <li><strong>Gestion des commandes</strong> - Traitement plus rapide et suivi amélioré</li>
          <li><strong>Support client</strong> - Réponses automatisées pour les questions fréquentes</li>
          <li><strong>Gestion des stocks</strong> - Optimisation automatique des niveaux</li>
          <li><strong>Marketing email</strong> - Campagnes personnalisées et ciblées</li>
          <li><strong>Validation des données</strong> - Contrôle qualité automatisé</li>
          <li><strong>Planification des ressources</strong> - Allocation optimale et prévisionnelle</li>
          <li><strong>Backup et sécurité</strong> - Protection automatisée des données critiques</li>
        </ol>
        
        <h2>Comment commencer ?</h2>
        <p>Nous recommandons de débuter par les processus les plus répétitifs et chronophages pour un impact immédiat visible.</p>
      `,
      excerpt: "Identifiez les processus qui vous feront gagner le plus de temps grâce à l'automatisation.",
      date: "5 Mars 2024",
      readTime: "6 min",
      category: "Automatisation",
      author: "Équipe Rodanol",
      image: "/src/assets/blog-3.jpg"
    }
  ];

  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Article */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 mb-8" 
            asChild
          >
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Link>
          </Button>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Image d'article */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Contenu Article */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </article>

      {/* CTA Contact */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Besoin d'aide pour votre projet ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nos experts sont là pour vous accompagner dans votre transformation digitale.
          </p>
          <Button asChild size="lg" className="gradient-primary">
            <Link to="/contact">
              Contactez-nous
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;