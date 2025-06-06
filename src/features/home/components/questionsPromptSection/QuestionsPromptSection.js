import React from 'react'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import { AppIcons } from '@/utils/AppIcons/AppIcons'
import "./QuestionsPromptSection.scss"

const QuestionsPromptSection = () => {
    return (
        <div className="questions-prompt-section">
            <div className='message-box'>
                <div className="title">Du hast noch offene Fragen?</div>
                <div className="description">Vereinbare jetzt ein unverbindliches Erstgespräch. Wir nehmen uns Zeit für Deine Situation.</div>
                <Button label="Button" />
            </div>
            <div className="bg">
                <Image src={AppIcons.questionsPromptSectionImage} alt="questionsPromptSectionImage" />
            </div>
        </div>
    )
}

export default QuestionsPromptSection