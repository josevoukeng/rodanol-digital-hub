
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const latestArticles = [
    {
      id: 1,
      title: "Les 5 étapes pour réussir sa transformation digitale",
      excerpt: "Découvrez notre méthodologie éprouvée pour accompagner votre entreprise dans sa transformation digitale.",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "/src/assets/blog-1.jpg"
    },
    {
      id: 2,
      title: "Power BI : Comment créer des tableaux de bord efficaces",
      excerpt: "Guide pratique pour concevoir des dashboards Power BI qui transforment vos données en insights.",
      date: "10 Mars 2024",
      readTime: "7 min",
      image: "/src/assets/blog-2.jpg"
    },
    {
      id: 3,
      title: "Automatisation : 10 processus à digitaliser en priorité", 
      excerpt: "Identifiez les processus qui vous feront gagner le plus de temps grâce à l'automatisation.",
      date: "5 Mars 2024",
      readTime: "6 min",
      image: "/src/assets/blog-3.jpg"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos derniers articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conseils et actualités sur la transformation digitale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestArticles.map((article) => (
            <Card key={article.id} className="shadow-card hover:shadow-elegant transition-smooth border-0 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
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

        <div className="text-center">
          <Button asChild size="lg" className="gradient-primary">
            <Link to="/blog" className="flex items-center gap-2">
              Voir tous les articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
