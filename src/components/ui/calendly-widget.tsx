
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

// Extend window type for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/josevoukeng25/20min'
      });
    }
  };

  return (
    <Button 
      onClick={openCalendly}
      size="lg"
      className="w-full sm:w-auto"
    >
      <Calendar className="h-5 w-5 mr-2" />
      Réservez votre consultation gratuite
    </Button>
  );
};

export default CalendlyWidget;
