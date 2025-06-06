import React from 'react'
import Image from 'next/image'
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import "./CallToActionSection.scss"

const CallToActionSection = () => {
  return (
    <div className="call-to-action-section">
      <div className='call-to-action-section__bg'>
        <Image src={AppIcons.callToActionSectionBg} alt="callToActionSectionBackground" />
      </div>
      <div className="container">
        <div className="title">
          Jetzt ist der Moment – denn Herausforderungen lösen sich nicht von selbst.
        </div>

        <div className='box'>
          <div className="description">
            ReflectIQ ist keine Maßnahme für irgendwann. Es ist eine strategische Entscheidung für jetzt– für Unternehmen, die nicht mehr warten wollen, bis der Vertriebsdruck steigt oder die Kultur ins Rutschen gerät. Je früher Du Dein Führungssystem in Bewegung bringst, desto mehr Dynamik gewinnst Du zurück.
          </div>
          <div className="description">
            Je früher Du Dein Führungssystem aktivierst, desto mehr Dynamik gewinnst Du zurück:
          </div>
          <ul>
            <li>Klarheit, die Entscheidungen beschleunigt.</li>
            <li>Verantwortung, die getragen wird.</li>
            <li>Vertriebserfolg, der aus echter Teamkraft entsteht.</li>
          </ul>
          <div className="description">
            Denn Systeme, die zu lange stillstehen, verlieren nicht nur Tempo – sondern oft auch genau die Menschen, die sie voranbringen könnten.
          </div>
          <div className="description step-2">
            „Starte mit dem Impuls, der aus Deinem Team eine Herzkammer für Wachstum macht.“ Ob Du mit einem Team beginnst oder mit dreißig – der erste Schritt entscheidet über alles, was folgt.”
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToActionSection