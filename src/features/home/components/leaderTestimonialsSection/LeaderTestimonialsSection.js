import React from 'react';
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './LeaderTestimonialsSection.scss';

const testimonials = [
  {
    name: 'Vertriebsleiter',
    quote: '"Unsere Führungskräfte haben gelernt, Verantwortung klarer zu nehmen &ndash; und unsere Teams haben das gespürt. Die Abschlussquote ist binnen weniger Monaten deutlich gestiegen."',
    image: AppIcons.testimonialImage1,
  },
  {
    name: 'Direktor General-Agentur &ndash; Versicherung',
    quote: '"ReflectIQ trifft den Nerv der Zeit: Persönlichkeitsentwicklung mit messbarer Wirkung auf Führung und Vertrieb. Dank ReflectIQ ist unser Team in kurzer Zeit auf einer ego-getriebenen Ich-Kultur zu einer leistungsfähigen Wir-Kultur gereift – mit klarer Vertriebsorientierung und spürbar mehr Zusammenarbeit."',
    image: AppIcons.testimonialImage2,
  },
  {
    name: 'CEO &ndash; einer Bank (3.000+ MA)',
    quote: '"Ich habe viele Programme gesehen &ndash; aber ReflectIQ schafft etwas, das selten gelingt: Führungskräfte UND Performance wachsen gemeinsam. Das ist nicht nur sinnvoll, sondern wirtschaftlich spürbar."',
    image: AppIcons.testimonialImage3,
  },
  {
    name: 'Sales Director &ndash; internationales B2B-SaaS-Unternehmen',
    quote: '"Was mich überzeugt hat: Die Verbindung aus starker Reflexion und vertrieblicher Klarheit. Mein Team agiert heute wie eine Einheit – mit messbarer Wirkung auf den Kunden. Das ist echte Peak Performance!"',
    image: AppIcons.testimonialImage4,
  },
];

const LeaderTestimonialsSection = () => {
  return (
    <section className="leader-testimonials-section">
      <div className="container">
        <h2 className="section-title">Was Leader über ReflectIQ sagen</h2>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 400} // 150ms delay between each card
            >
              <div className="testimonial-image-wrapper">
                <Image src={item.image} alt={item.name} className="testimonial-image" />
                <div className="testimonial-name-overlay">{item.name}</div>
              </div>
              <p className="testimonial-quote">{item.quote}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeaderTestimonialsSection;
