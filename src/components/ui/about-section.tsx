import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Award, Target, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10+",
      label: "Années d'expérience"
    },
    {
      icon: Award,
      number: "50+",
      label: "Projets réalisés"
    },
    {
      icon: Target,
      number: "95%",
      label: "Clients satisfaits"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              À propos de <span className="text-primary">Rodanol</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Rodanol est une entreprise spécialisée dans la transformation digitale des entreprises. 
              Forte de plus de 10 années d'expérience, notre équipe d'experts accompagne les organisations 
              dans leur évolution technologique grâce à des solutions innovantes de Business Intelligence, 
              d'automatisation et de formation.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre mission est de démocratiser l'accès aux technologies de pointe et d'aider nos clients 
              à optimiser leurs processus pour gagner en efficacité et en compétitivité sur leur marché.
            </p>

            <Button asChild size="lg" className="group">
              <Link to="/contact" className="flex items-center gap-2">
                Découvrir notre approche
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;