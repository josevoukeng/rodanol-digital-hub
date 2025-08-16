import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Zap, Users, GraduationCap, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Solutions de reporting et d'analyse des données pour prendre des décisions éclairées.",
      features: ["Tableaux de bord interactifs", "Analyse prédictive", "Reporting automatisé"]
    },
    {
      icon: Zap,
      title: "Automatisation des processus",
      description: "Mise en place de workflows intelligents pour optimiser vos opérations.",
      features: ["Power Automate", "Workflows personnalisés", "Intégrations API"]
    },
    {
      icon: Users,
      title: "Conseil & Accompagnement",
      description: "Aide stratégique pour réussir votre transformation digitale.",
      features: ["Audit digital", "Stratégie de transformation", "Accompagnement change"]
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Formation de vos équipes sur les outils digitaux et Power Platform.",
      features: ["Formation Power BI", "Formation Power Apps", "Certification équipes"]
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nous pouvons transformer votre entreprise avec des solutions digitales sur mesure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-0 bg-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gradient-primary">
            <Link to="/services" className="flex items-center gap-2">
              Découvrir tous nos services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;