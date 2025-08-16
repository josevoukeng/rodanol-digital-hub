import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Zap, Users, GraduationCap, Check, ArrowRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transformez vos données en insights actionnables avec nos solutions de BI avancées.",
      longDescription: "Notre expertise en Business Intelligence vous permet de prendre des décisions éclairées grâce à des données fiables et des analyses approfondies.",
      features: [
        "Tableaux de bord Power BI interactifs",
        "Modélisation de données avancée", 
        "Analyse prédictive et machine learning",
        "Reporting automatisé",
        "Intégration multi-sources",
        "Formation équipes BI"
      ],
      benefits: [
        "Réduction de 60% du temps de reporting",
        "Amélioration de la prise de décision",
        "Visualisation en temps réel",
        "ROI mesurable rapidement"
      ]
    },
    {
      icon: Zap,
      title: "Automatisation des processus",
      description: "Optimisez vos opérations avec des workflows intelligents et des processus automatisés.",
      longDescription: "Gagnez du temps et réduisez les erreurs en automatisant vos processus répétitifs avec Power Automate et des solutions sur mesure.",
      features: [
        "Workflows Power Automate",
        "Intégrations API personnalisées",
        "Automatisation des emails",
        "Processus d'approbation digitaux",
        "Synchronisation de données",
        "Notifications intelligentes"
      ],
      benefits: [
        "Économie de 40h/semaine par processus",
        "Réduction des erreurs humaines",
        "Amélioration de la productivité",
        "Traçabilité complète"
      ]
    },
    {
      icon: Users,
      title: "Conseil & Accompagnement",
      description: "Bénéficiez de notre expertise pour définir et mettre en œuvre votre stratégie digitale.",
      longDescription: "Un accompagnement personnalisé pour réussir votre transformation digitale, de l'audit initial à la mise en production.",
      features: [
        "Audit digital complet",
        "Définition de stratégie",
        "Gestion de projet",
        "Accompagnement au changement",
        "Support technique",
        "Maintenance et évolution"
      ],
      benefits: [
        "Feuille de route claire",
        "Risques minimisés",
        "Adoption utilisateur optimisée",
        "Support continu"
      ]
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Formez vos équipes aux outils digitaux et à Power Platform pour une autonomie totale.",
      longDescription: "Des formations sur mesure pour que vos équipes maîtrisent parfaitement les outils déployés.",
      features: [
        "Formation Power BI",
        "Formation Power Apps",
        "Formation Power Automate",
        "Certification Microsoft",
        "Sessions pratiques",
        "Support post-formation"
      ],
      benefits: [
        "Équipes autonomes",
        "Certifications reconnues",
        "Amélioration des compétences",
        "Valorisation professionnelle"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Services */}
      <section className="relative py-24 gradient-hero text-white">
        <img
          src={servicesHero}
          alt="Services digitaux Rodanol"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
          decoding="async"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Des solutions digitales complètes pour transformer votre entreprise
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Fonctionnalités</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-4">Bénéfices</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <ArrowRight className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button asChild size="lg" className="gradient-primary">
                      <Link to="/contact">Discuter de ce service</Link>
                    </Button>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <Card className="shadow-elegant border-0 bg-card">
                      <CardHeader>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="gradient-primary rounded-lg p-6 text-white">
                          <h4 className="font-semibold mb-4">Pourquoi ce service ?</h4>
                          <p className="text-blue-100 leading-relaxed">
                            {service.longDescription}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous pour discuter de vos besoins et découvrir comment nos services peuvent vous aider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary">
              <Link to="/contact" className="flex items-center gap-2">
                Contactez-nous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">Lire nos articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;