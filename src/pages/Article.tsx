import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { articles } from "@/data/articles";

const Article = () => {
  const { id } = useParams();
  const articleId = Number(id);
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-muted-foreground">Article introuvable.</p>
          <Button asChild className="mt-6">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <article className="bg-background">
        <header className="relative py-16 gradient-hero text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center justify-center gap-6 text-blue-100">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <Card className="overflow-hidden border-0 shadow-elegant">
            <img
              src={article.image}
              alt={`Illustration de l'article: ${article.title}`}
              className="w-full h-64 object-cover"
              loading="eager"
              decoding="async"
            />
            <CardContent className="prose dark:prose-invert max-w-none py-8">
              <p>{article.content}</p>
              <p>
                Cet article est un aperçu. Bientôt, vous pourrez lire la version
                complète ici même.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/blog" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour au blog
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Article;
