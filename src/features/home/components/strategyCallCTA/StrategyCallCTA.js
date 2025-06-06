import React from 'react'
import Image from 'next/image'
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import Button from '@/components/ui/button/Button'
import "./StrategyCallCTA.scss"

const StrategyCallCTA = () => {
    return (
        <div className="strategy-call-cta">
            <div className='strategy-call-cta__bg'>
                <Image src={AppIcons.strategyCallCTABackground} alt="strategyCallCTABackground" />
            </div>
            <div className="container">
                <div className="title">
                    Jetzt unverbindliches Strategiegespräch vereinbaren
                </div>
                <div className="description">
                    Binnen 30 Minuten setzen wir gemeinsam den Impuls, der Deine Organisation von innen heraus stärkt – mit SalesLeadership, die Wirkung zeigt.
                </div>
                <div>
                    <Button label="Button" />
                </div>
            </div>
        </div>
    )
}

export default StrategyCallCTA