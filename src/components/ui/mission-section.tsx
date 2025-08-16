import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Rocket } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Aider les entreprises à optimiser leurs processus grâce au digital pour gagner en efficacité et compétitivité."
    },
    {
      icon: Lightbulb,
      title: "Notre Expertise",
      description: "Une équipe d'experts en transformation digitale, Business Intelligence et automatisation des processus."
    },
    {
      icon: Rocket,
      title: "Notre Approche",
      description: "Un accompagnement personnalisé de A à Z, de la stratégie à la mise en œuvre, en passant par la formation."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Pourquoi choisir 
              <span className="text-primary block">Rodanol ?</span>
            </h2>
            
            <div className="space-y-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Button asChild size="lg" className="gradient-primary">
                <Link to="/contact">Commencer votre transformation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">En savoir plus</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Transformez votre entreprise dès aujourd'hui
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Consultation gratuite de 20 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Audit personnalisé de vos processus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Devis détaillé sous 48h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Accompagnement tout au long du projet</span>
                </div>
              </div>
              <Button 
                asChild 
                className="w-full mt-6 bg-white text-primary hover:bg-blue-50"
              >
                <Link to="/contact">Réserver votre consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;