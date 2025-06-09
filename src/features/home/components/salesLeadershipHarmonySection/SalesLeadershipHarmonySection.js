import React from 'react'
import Image from 'next/image'
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import "./SalesLeadershipHarmonySection.scss"

const SalesLeadershipHarmonySection = () => {
    return (
        <section className="sales-leadership-harmony-section">
            <div className='container'>
                <div className='title'>
                    ReflectIQ Sales Leadership &ndash; wenn Klarheit, Kultur und Vertrieb im Takt schlagen
                </div>
                <div className='content'>
                    <div className='left' data-aos="fade-right">
                        <div className='imgcontainer'>
                            <div className='item'>
                                <Image src={AppIcons.harmonySectionImage} alt="harmonySectionImage" />
                                <div className='title'>
                                    “Viele Programme bringen Erkenntnis. ReflectIQ bringt High Performance &ndash; im Alltag, im Dialog, im Vertrieb.”
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right' data-aos="fade-left">
                        <div className='description'>
                            ReflectIQ Sales Leadership ist kein Training, kein Workshop und kein Coaching.&ndash; Es ist ein hochflexibles, 6-monatiges Führungssystem, das sich nahtlos in den Alltag integriert – präzise, minimalinvasiv und wirkungsstark.
                        </div>
                        <div className='description'>
                            Ein Führungssystem etablieren, das Klarheit schafft, Haltung stärkt und High Performance Teams von innen heraus aktiviert – dauerhaft und messbar.
                        </div>
                        <div className='description'>
                            ReflectIQ wirkt nicht von außen &ndash; sondern setzt dort an, wo echte Veränderung entsteht: Im Denken, Fühlen und Handeln der Menschen, die Dein Vertriebssystem am Laufen halten.
                        </div>
                        <div className='description'>
                            Statt Kalenderchaos und Schulungsmarathons entsteht ein kontinuierlicher Entwicklungsprozess: Ein präziser Mix aus KI-gestützter Reflexion, Teamspiegelung, und punktgenauem Mentoring, der Führung und Zusammenarbeit in Bewegung bringt – und Wirkung sichtbar macht.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SalesLeadershipHarmonySection