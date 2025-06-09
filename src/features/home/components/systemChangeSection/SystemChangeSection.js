import React from 'react'
import Image from 'next/image'
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import './SystemChangeSection.scss'
import Button from '@/components/ui/button/Button'

const SystemChangeSection = () => {
    return (
        <div className='system-change-section'>
            <div className='system-change-section__bg'>
                <Image src={AppIcons.systemChangeSectionBackground} alt="systemChangeSectionBackground" />
            </div>
            <div className='system-change-section__content'>
                <div className="left" data-aos="fade-right">
                    <div className="box">
                        <div className="title">
                            ReflectIQ bringt Bewegung in festgefahrene Systeme – ohne die Organisation zu blockieren.
                        </div>
                        <div className="description">
                            Ein kraftvoller Kickoff aktiviert alle Beteiligten, regelmäßige Reflexionsimpulse vertiefen Erkenntnisse, und ein erfahrener ReflectIQ Mentor begleitet Führungskräfte und Teams punktgenau – präzise dort, wo es wirkt.
                        </div>
                    </div>
                </div>
                <div className="right" data-aos="fade-left">
                    <div className="box">
                        <div className="title">
                        Du willst Führung entwickeln, ohne Zeit zu verlieren?
                        </div>
                        <div className="description">
                        Jetzt Gespräch vereinbaren – und sehen, wie ReflectIQ auch Dein Team zu einem echten Erfolgsorgan macht.
                        </div>
                        <Button label="Button" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SystemChangeSection