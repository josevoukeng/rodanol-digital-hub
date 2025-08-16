import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Clock, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ nom: "", email: "", objet: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Contact */}
      <section className="relative py-24 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Discutons de votre projet de transformation digitale
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="objet" className="block text-sm font-medium text-foreground mb-2">
                    Objet *
                  </label>
                  <Input
                    id="objet"
                    name="objet"
                    type="text"
                    required
                    value={formData.objet}
                    onChange={handleChange}
                    className="h-12"
                    placeholder="Sujet de votre demande"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-primary">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Informations et RDV */}
            <div className="space-y-8">
              
              {/* Informations de contact */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>contact@rodanol.fr</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Paris, France</span>
                  </div>
                </CardContent>
              </Card>

              {/* Réservation RDV */}
              <Card className="shadow-card border-0 gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Réservez votre consultation gratuite
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    20 minutes pour analyser vos besoins
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-200" />
                      <span>Durée : 20 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-200" />
                      <span>Consultation personnalisée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-200" />
                      <span>Disponible sous 48h</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-white text-primary hover:bg-blue-50"
                    size="lg"
                  >
                    <a href="https://calendly.com/rodanol/20min" target="_blank" rel="noreferrer">
                      Réserver un créneau
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Processus */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Notre processus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Écoute et analyse</h4>
                        <p className="text-sm text-muted-foreground">Nous analysons vos besoins et contraintes</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Proposition sur mesure</h4>
                        <p className="text-sm text-muted-foreground">Devis détaillé sous 48h</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Mise en œuvre</h4>
                        <p className="text-sm text-muted-foreground">Accompagnement jusqu'à la réussite</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;