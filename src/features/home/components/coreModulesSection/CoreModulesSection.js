import React from 'react';
import './CoreModulesSection.scss';

const modules = [
  {
    title: '1. Individuelle Reflexion mit KI-Unterstützung',
    description: `→ Führung beginnt bei sich selbst. 
Die KI-gestützte Selbstreflexion macht innere Haltung, blinde Flecken und Entwicklungspotenziale sichtbar – ganz ohne Frontaltraining.`,
  },
  {
    title: '2. Teamdynamik aktivieren – im echten Kontext',
    description: `→ Die KI-gestützte Teamanalyse zeigt Reibungspunkte und Wahrnehmungsunterschiede – konsequent und hilfreich. 
Daraus entstehen echte Dialoge, Klarheit und Veränderung – geführt vom Team selbst, nicht von Externen.`,
  },
  {
    title: '3. Vertriebsleistung synchronisieren',
    description: `→ Die KI zeigt, wo Energie verloren geht – und wo ungenutzte Stärken liegen. 
Gezielte Impulse und minimalinvasive Teaminterventionen entfalten eine Dynamik, die Sales Performance messbar steigert.`,
  },
];

const CoreModulesSection = () => {
  return (
    <section className='core-modules-section'>
      <div className='container'>
        <h2 className='title'>Die drei zentralen Wirkmodule</h2>
        <div className='bubbles'>
          {modules.map((mod, index) => (
            <div className={`bubble bubble-${index + 1}`} key={index}>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreModulesSection;
