import React from 'react'
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import Image from 'next/image'
import "./UserCentricSection.scss"
import Button from '@/components/ui/button/Button'

const UserCentricSection = () => {
    return (
        <>
            <div className="user-centric-section">
                <div className='user-centric-section__top-section'>
                    <div className='title'>
                        ReflectIQ passt sich Deinen Bedürfnissen an &ndash; nicht umgekehrt.
                    </div>
                    <div className='content'>
                        <div className='left'>
                            <div className='description'>
                                Ob für eine einzelne Vertriebsführungskraft, ein gesamtes Sales-Team oder als Rollout für mehrere Führungsebenen &ndash; ReflectIQ Sales Leadership wird so konfiguriert, dass es genau dort ansetzt, wo die größte Wirkung entsteht_&ndash; im Zentrum der Führung, im Herzen des Teams, in der Logik Deines Vertriebs.
                            </div>
                        </div>
                        <div className='right'>
                            <div className='item'>🧠 Führung entwickelt sich. </div>
                            <div className='item'>❤️ Haltung entsteht. </div>
                            <div className='item'>📈 Vertrieb wächst. </div>
                        </div>
                    </div>
                </div>
                <div className='user-centric-section__middle-section'>
                    <div className='left'>
                        <Image src={AppIcons.userCentricSectionImage1} alt="userCentricSectionImage1" />
                    </div>
                    <div className='right'>
                        <div className='box'>
                            <div className='description'>
                                ReflectIQ ist kein Produkt von der Stange – sondern eine Individuallösung, die unternehmensspezifisch wirkt. Und die Rendite erzeugt: kulturell, menschlich und wirtschaftlich.
                            </div>
                            <ul>
                                <li>Individuell planbar: Vom Einzelteam bis zum konzernweiten Rollout</li>
                                <li>Klar strukturiert: Kickoff, Reflexion, Teamintervention, Mentoring</li>
                                <li>Skalierbar & anschlussfähig: Für jede Organisationsebene</li>
                                <li>Technisch einfach umsetzbar: Kein Systemwechsel, DSGVO-konform</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='user-centric-section__bottom-section'>
                    <div className='left'>
                        <div className='box'>
                            <div className='description'>
                                ReflectIQ fügt sich nahtlos in den Arbeitsalltag ein – mit minimalem Zeitaufwand und maximaler Wirkung dort, wo es zählt: im Denken, Fühlen und Handeln von Führungskräften, Vertrieb und den Teams, die täglich die Herzkammer Deiner Vertriebserfolgs bilden.
                            </div>
                            <div className='description'>
                                Der ROI entsteht schnell, oft schon dann,
                                <ul>
                                    <li>wenn ein einziger Mitarbeiter bleibt,</li>
                                    <li>ein Team nicht innerlich kündigt,</li>
                                    <li>oder ein Abschluss gelingt, der sonst verlorengegangen wäre.</li>
                                </ul>
                                ReflectIQ rechnet sich nicht irgendwann – sondern ab dem Moment, in dem Energie wieder spürbar wird.
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Image src={AppIcons.userCentricSectionImage2} alt="userCentricSectionImage2" />
                    </div>
                </div>
            </div>
            <div className='user-centric-section-2'>
                <div className="container">
                    <div className='title'>
                        Jetzt unverbindliches Strategiegespräch vereinbaren
                    </div>
                    <div className='content'>
                        Finde heraus, welches Format für Dein Unternehmen den größten Hebel entfaltet.
                    </div>
                    <Button label="Button" />
                </div>
            </div>
        </>
    )
}

export default UserCentricSection