'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './FaqSection.scss';

const faqData = [
  {
    question: 'Ist ReflectIQ ein klassisches Training oder Coaching-Programm?',
    answer: 'Nein. ReflectIQ ist ein systemisches Führungssystem, das sich nahtlos in den Arbeitsalltag integriert. Statt Schulungen oder starren Formaten arbeitet ReflectIQ mit flexiblen Impulsen, KI-gestützter Reflexion und gezielter Begleitung – genau dort, wo in der Organisation echte Bewegung möglich ist. '
  },
  {
    question: 'Wie viel Zeit müssen unsere Führungskräfte oder Teams investieren?',
    answer: 'Weniger, als Du denkst – und deutlich weniger, als klassische Programme erfordern. ReflectIQ ist so konzipiert, dass maximale Wirkung mit minimalem Zeitaufwand entsteht. Das System arbeitet im Hintergrund, Führung und Team setzen gezielte Impulse um – ohne dass der Alltag blockiert wird.'
  },
  {
    question: 'Funktioniert ReflectIQ auch für größere Organisationen oder Konzerne?',
    answer: 'Ja – ReflectIQ ist vollständig skalierbar. Egal ob Einzelteam, mehrere Führungsebenen oder konzernweite Rollouts: Das System lässt sich flexibel auf Größe, Struktur und Kultur abstimmen – ohne an Wirksamkeit zu verlieren. '
  },
  {
    question: 'Was passiert, wenn sich einzelne Führungskräfte oder Teams „sperren“?',
    answer: 'Das ist normal – und sogar einkalkuliert. ReflectIQ erzeugt keine künstliche Motivation, sondern echte Einsicht. Gerade durch die KI-gestützte Spiegelung und die Impulslogik entstehen Dialoge, die sonst nicht stattfinden – oft sogar gerade bei den „kritischen Köpfen“. '
  },
  {
    question: 'Wie wird die Wirkung messbar gemacht?',
    answer: 'ReflectIQ liefert über die integrierte KI, qualitative Teamspiegelungen und Feedbackschleifen klare Datenpunkte – sowohl zur individuellen Entwicklung als auch zur Systemveränderung. Veränderung bleibt nicht Gefühl – sie wird sichtbar und steuerbar. '
  },
  {
    question: 'Können wir ReflectIQ auch nur mit einem Team testen?',
    answer: 'Ja, ein Pilotformat ist jederzeit möglich. Viele Kunden starten gezielt klein, z. b. mit einem 10-köpfigen Team, um die Wirkung zu erleben – und rollen dann aus, wenn sie überzeugt sind. ReflectIQ ist darauf ausgelegt, Wirkung auch im Kleinen zu entfalten. '
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title">FAQ</h2>
      <div className="container">
        <div className="left" data-aos="fade-right">
          <Image src={AppIcons.faqSectionImage} alt="faqSectionImage" />
        </div>
        <div className="right" data-aos="fade-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="question">
                <span className="number">{index + 1}.</span> {item.question}
                <span className="line" />
              </div>
              <div className="answer">
                {openIndex === index && <p>{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
