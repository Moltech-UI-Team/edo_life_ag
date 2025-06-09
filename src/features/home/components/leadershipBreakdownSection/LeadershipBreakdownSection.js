import React from 'react'
import Image from 'next/image'
import "./LeadershipBreakdownSection.scss"
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import Button from '@/components/ui/button/Button'

const LeadershipBreakdownSection = () => {
  return (
    <section className="leadership-breakdown-section">
      <div className='section-1'>
        <div className='title'>Wenn Führung ins Stolpern gerät &ndash; und Teams aus dem Takt kommen.</div>
        <div className='section_item'>
          <div className='left imgcontainer' data-aos="fade-right">
            <Image src={AppIcons.leadership1} alt="leadership1" />
          </div>
          <div className='right' data-aos="fade-left">
            <div className='title'>
              Es beginnt leise &ndash; und endet in Leistungsverlust
            </div>
            <div className='description'>
              In vielen Unternehmen ist es kein lauter Knall &ndash; sondern ein schleichender Leistungsverlust:
            </div>
            <ul>
              <li>Teams funktionieren &ndash; aber sie brennen nicht.</li>
              <li> Führung wirkt noch professionell &ndash; doch intern häufen sich die Reibungen, Entscheidungen dauern, </li>
              <li>Vertrieb liefert &ndash; aber bleibt unter seinem wirklichen Potenzial.</li>
            </ul>
            <div className='description'>
              Der Grund: Klassische Führungskonzepte stoßen an ihre Grenzen.
            </div>
            <div className='description'>
              Was früher mit Zielvereinbarungen und Kontrolle funktionierte, verliert heute an Wirksamkeit. Unsicherheit, Wertewandel und wachsende Erwartungen von innen und außen erhöhen den Druck &ndash; doch das System bleibt starr. Und die „Herzkammer“ beginnt zu stolpern.
            </div>
          </div>
        </div>
        <div className='section_item'>
          <div className='left' data-aos="fade-right">
            <div className='title'>
              Warum klassische Methoden nicht mehr greifen
            </div>
            <ul>
              <li>Führung wirkt noch professionell &ndash; doch intern häufen sich die Reibungen, Entscheidungen dauern.</li>
              <li>Konflikte werden geschluckt &ndash; statt gelöst</li>
              <li>Vertrieb wird verwaltet &ndash; statt entfacht</li>
              <li>Innovationsfreude wird durch Fehlerangst ausgebremst</li>
              <li>Kundenanforderungen steigen &ndash; aber das System bleibt reaktiv</li>
              <li>Der Markt fordert Tempo &ndash; aber intern fehlt Richtung</li>
            </ul>
          </div>
          <div className='right' data-aos="fade-left">
            <Image src={AppIcons.leadership2} alt="leadership2" />
          </div>
        </div>
        <div className='section_item'>
          <div className='left' data-aos="fade-right">
            <Image src={AppIcons.leadership3} alt="leadership3" />
          </div>
          <div className='right' data-aos="fade-left">
            <div className='title'>
              Was passiert, wenn sich nichts ändert?
            </div>
            <div className='description'><strong>
              „Der Unterschied zwischen einem funktionierenden Team &ndash; und einem beflügelten Team &ndash; ist kein Coaching. - Es ist ein System.“</strong>
            </div>
            <ul>
              <li>Wenn das Herz eines Unternehmens &ndash; seine Leader und Teams &ndash; aus dem Takt gerät, dann zerfällt mehr als nur die Performance: Kultur wird zur Fassade. Reibung zum Normalzustand. Vertriebserfolg wird zur Glückssache &ndash; statt zur Konsequenz von Klarheit und Haltung.</li>
              <li><strong>Stillstand in der Führung heißt Rückschritt im Markt.</strong> Wer jetzt nicht in echte Bewegung investiert, verliert nicht nur Chancen – sondern genau die Menschen, die den Wandel tragen könnten.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='section-2' data-aos="fade-up">
        <div className='title'>
          ReflectIQ ist die strategische Intervention für Führung, Vertrieb und Teamdynamik &ndash; damit die Herzkammer wieder kraftvoll schlägt und Spitzenleistung kein Zufall bleibt.
        </div>
        <div className='description'>
          Jetzt Gespräch anfragen &ndash; bevor Reibung zur Routine wird.
        </div>
        <Button label="Button" />
      </div>
    </section>
  )
}

export default LeadershipBreakdownSection