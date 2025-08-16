import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-digital-transformation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      <img
        src={heroImage}
        alt="Transformation digitale chez Rodanol"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
        decoding="async"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Transformez votre entreprise 
            <span className="block text-blue-200">avec le digital</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Rodanol accompagne les entreprises dans leur transformation digitale grâce à la Business Intelligence, 
            l'automatisation des processus et des formations expertes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 transition-bounce text-lg px-8 py-6 h-auto"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Contactez-nous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 transition-bounce text-lg px-8 py-6 h-auto"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Réserver un RDV
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;