'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './FaqSection.scss';

const faqData = [
  {
    question: 'Ist ReflectIQ ein klassisches Training oder Coaching-Programm?',
    answer: 'ReflectIQ ist kein klassisches Training, sondern ein digitales, begleitendes Reflexions-Tool für Führungskräfte.'
  },
  {
    question: 'Wie viel Zeit müssen unsere Führungskräfte oder Teams investieren?',
    answer: 'In der Regel reichen wenige Minuten pro Woche – ReflectIQ ist sehr effizient gestaltet.'
  },
  {
    question: 'Funktioniert ReflectIQ auch für größere Organisationen oder Konzerne?',
    answer: 'Ja, ReflectIQ ist skalierbar und eignet sich für kleine Teams genauso wie für große Organisationen.'
  },
  {
    question: 'Was passiert, wenn sich einzelne Führungskräfte oder Teams „sperren“?',
    answer: 'Das Tool schafft durch kluge Fragen einen sicheren Raum – die Teilnahme bleibt freiwillig, aber wird meist gerne angenommen.'
  },
  {
    question: 'Wie wird die Wirkung messbar gemacht?',
    answer: 'Durch regelmäßiges Feedback, klare Ziele und optional quantitative Auswertungen können Fortschritte sichtbar gemacht werden.'
  },
  {
    question: 'Wie sicher ist der Umgang mit Daten bei ReflectIQ?',
    answer: 'Datensicherheit hat höchste Priorität – ReflectIQ erfüllt alle gängigen DSGVO-Vorgaben.'
  },
  {
    question: 'Können wir ReflectIQ auch nur mit einem Team testen?',
    answer: 'Ja, ein Pilotprojekt mit einem Team ist problemlos möglich, um das Tool kennenzulernen.'
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
        <div className="left">
          <Image src={AppIcons.faqSectionImage} alt="faqSectionImage" />
        </div>
        <div className="right">
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
