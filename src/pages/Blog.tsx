import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BarChart3, Zap, TrendingUp } from "lucide-react";
import { articles } from "@/data/articles";

const Blog = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case "Business Intelligence":
        return BarChart3;
      case "Automatisation":
        return Zap;
      default:
        return TrendingUp;
    }
  };

  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);
  const FeaturedIcon = featuredArticle ? getIcon(featuredArticle.category) : null;

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
                <div className="gradient-primary text-white p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    {FeaturedIcon && <FeaturedIcon className="h-6 w-6" />}
                    <span className="text-blue-200">{featuredArticle.category}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-blue-200 text-sm mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <Button asChild className="bg-white text-primary hover:bg-blue-50 w-fit">
                    <Link to={`/blog/${featuredArticle.id}`} className="inline-flex items-center">
                      Lire l'article complet
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-4">Aperçu de l'article</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredArticle.content}
                    </p>
                  </div>
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
              <Card key={article.id} className="shadow-card hover:shadow-elegant transition-smooth border-0 h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {(() => { const Icon = getIcon(article.category); return <Icon className="h-5 w-5 text-primary" />; })()}
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
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/blog/${article.id}`} className="inline-flex items-center justify-center">
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