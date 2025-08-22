
import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/josevoukeng25/20min"
      style={{
        minWidth: '320px',
        height: '700px',
        width: '100%'
      }}
    />
  );
};

export default CalendlyWidget;
