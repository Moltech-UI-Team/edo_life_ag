import React from 'react'
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './WhatMakesUsUniqueSection.scss';

const uniqueItems = [
    {
        image: AppIcons.uniqueSectionImage1,
        title: 'Minimale Zeitbindung, maximale Wirkung:',
        description: 'Kein Workshop-Marathon, keine methodische Überladung – Wirkung entsteht im Alltag.',
    },
    {
        image: AppIcons.uniqueSectionImage2,
        title: 'KI als Spiegel & Impulsgeber:',
        description: 'Muster und Dynamiken werden datenbasiert sichtbar gemacht – nicht moderiert, sondern messbar.',
    },
    {
        image: AppIcons.uniqueSectionImage3,
        title: 'Autonomie statt Abhängigkeit:',
        description: 'Teams entwickeln sich selbst –Führungskräfte werden zur Kraftquellen',
    },
    {
        image: AppIcons.uniqueSectionImage4,
        title: 'Wertebasierte Performance:',
        description: 'Sinn und Vertrieb schließen sich nicht aus – sie verstärken sich gegenseitig, weil Klarheit herrscht.',
    },
];


const WhatMakesUsUniqueSection = () => {
    return (
        <div className='what-makes-us-unique-section'>
            <div className='what-makes-us-unique-section__bg'>
                <Image src={AppIcons.natureBG} alt="whatMakesUsUniqueSectionBackground" />
            </div>
            <div className='what-makes-us-unique-section__content'>
                <div className="container">
                    <div className="title">
                        Was ReflectIQ einzigartig macht
                    </div>
                    <div className="description">
                        ReflectIQ ist keine weitere Maßnahme – sondern ein intelligentes System für nachhaltige Wirkung:
                    </div>
                    <div className="list">
                        {uniqueItems.map((item, index) => (
                            <div
                                className="item"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 400} // 150ms delay between each card
                            >
                                <div className="imgcontainer">
                                    <Image src={item.image} alt={`uniqueSectionImage${index + 1}`} />
                                </div>
                                <div className="description">
                                    <div className="title">{item.title}</div>
                                    <div className="description">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatMakesUsUniqueSection