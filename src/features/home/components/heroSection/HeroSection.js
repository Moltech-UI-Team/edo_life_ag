import React from 'react'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import "./HeroSection.scss"

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section__effect">
          <Image src={AppIcons.EffectImage} alt="Effect" />
        </div>
        <div className="hero-section__content">
          <h1>Die neue Herzkammer<br />Deines Vertriebserfolgs</h1>
          <h3>Leadership, die High Performance-Teams<br />stärkt und entfesselt.</h3>
          <p>
            ReflectIQ Sales Leadership entfaltet das volle Potenzial starker Führung und
            selbstverantwortlicher Teams &ndash; für vertriebliche Höchstleistung, die sich messbar auszahlt.
          </p>
          <Button label="Button" />
        </div>
        <div className="hero-section__imgcontainer">
          <Image src={AppIcons.HeroSectionImage} alt="HeroSectionImage" />
        </div>
      </section>
      <section className='hero-section-middle'>
        <div className='hero-section-middle__content'>
          <div className="hero-section-middle__content__itemsection">
            <div className="hero-section-middle__content__itemsection__item">
              <div className='top'>
                <Image src={AppIcons.stockImage1} alt="HeroSectionImage" />
              </div>
              <div className='bottom'>
                Entwickle Leader, die Verantwortung übernehmen und Klarheit ausstrahlen
              </div>
            </div>
            <div className="hero-section-middle__content__itemsection__item">
              <div className='top'>
                <Image src={AppIcons.stockImage2} alt="HeroSectionImage" />
              </div>
              <div className='bottom'>
                Forme Teams, die mit innerem Antrieb und messbarer Performance überzeugen
              </div>
            </div>
            <div className="hero-section-middle__content__itemsection__item">
              <div className='top'>
                <Image src={AppIcons.stockImage3} alt="HeroSectionImage" />
              </div>
              <div className='bottom'>
                Verbinde Führung, Kultur und Vertrieb zu einem System mit Herz und Richtung
              </div>
            </div>
          </div>
        </div>
        <div className='hero-section-middle__content-2'>
          Was wäre, wenn nicht mehr Druck die Performance treibt &ndash; sondern Verbundenheit und Engagement ?
        </div>
      </section>
      <section className='hero-section-bottom'>
        <div className='hero-section-bottom__content'>
          <div className='hero-section-bottom__content__title'>
            Jetzt kostenfreies Strategiegespräch sichern
          </div>
          <div className='hero-section-bottom__content__description'>
            Finde heraus, wie aus Deinem Team eine echte Herzkammer für Wachstum und vertrieblichen Erfolg wird &ndash; mit messbarem Impact.
          </div>
          <div className='hero-section-bottom__content__button'>
            <Button label="Button" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection