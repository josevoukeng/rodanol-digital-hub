
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BarChart3, Zap, TrendingUp } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les 5 étapes pour réussir sa transformation digitale",
      excerpt: "Découvrez notre méthodologie éprouvée pour accompagner votre entreprise dans sa transformation digitale.",
      content: "La transformation digitale n'est plus une option mais une nécessité pour rester compétitif...",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "Transformation Digitale",
      icon: TrendingUp,
      image: "/src/assets/blog-1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Power BI : Comment créer des tableaux de bord efficaces",
      excerpt: "Guide pratique pour concevoir des dashboards Power BI qui transforment vos données en insights.",
      content: "Un bon tableau de bord Power BI doit répondre aux questions métier essentielles...",
      date: "10 Mars 2024",
      readTime: "7 min",
      category: "Business Intelligence",
      icon: BarChart3,
      image: "/src/assets/blog-2.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Automatisation : 10 processus à digitaliser en priorité",
      excerpt: "Identifiez les processus qui vous feront gagner le plus de temps grâce à l'automatisation.",
      content: "L'automatisation des processus peut transformer radicalement l'efficacité de votre entreprise...",
      date: "5 Mars 2024",
      readTime: "6 min",
      category: "Automatisation",
      icon: Zap,
      image: "/src/assets/blog-3.jpg",
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Blog */}
      <section className="relative py-24 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog Rodanol
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Conseils, guides pratiques et actualités sur la transformation digitale
          </p>
        </div>
      </section>

      {/* Article mis en avant */}
      {featuredArticle && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                Article mis en avant
              </span>
            </div>
            
            <Card className="shadow-elegant border-0 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <featuredArticle.icon className="h-5 w-5" />
                      <span className="text-sm">{featuredArticle.category}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredArticle.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Button className="gradient-primary w-fit" asChild>
                    <Link to={`/blog/${featuredArticle.id}`}>
                      Lire l'article complet
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Grille d'articles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Tous nos articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="shadow-card hover:shadow-elegant transition-smooth border-0 h-full overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <article.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm text-primary font-medium">{article.category}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${article.id}`}>
                      Lire l'article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Restez informé de nos derniers articles
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Recevez chaque semaine nos conseils et actualités sur la transformation digitale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="gradient-primary px-8">
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Une question sur nos articles ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nos experts sont là pour répondre à vos questions et vous accompagner.
          </p>
          <Button asChild size="lg" className="gradient-primary">
            <Link to="/contact" className="flex items-center gap-2">
              Contactez nos experts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
