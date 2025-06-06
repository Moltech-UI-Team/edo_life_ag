import React from 'react'
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './WhatMakesUsUniqueSection.scss';

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
                        <div className="item">
                            <div className="imgcontainer">
                                <Image src={AppIcons.uniqueSectionImage1} alt="teamMomentumSectionImage1" />
                            </div>
                            <div className="description">
                                <div className="title">
                                    Minimale Zeitbindung, maximale Wirkung:
                                </div>
                                <div className="description">
                                    Kein Workshop-Marathon, keine methodische Überladung – Wirkung entsteht im Alltag.
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imgcontainer">
                                <Image src={AppIcons.uniqueSectionImage2} alt="teamMomentumSectionImage2" />
                            </div>
                            <div className="description">
                                <div className="title">
                                    KI als Spiegel & Impulsgeber:
                                </div>
                                <div className="description">
                                    Muster und Dynamiken werden datenbasiert sichtbar gemacht – nicht moderiert, sondern messbar.
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imgcontainer">
                                <Image src={AppIcons.uniqueSectionImage3} alt="teamMomentumSectionImage3" />
                            </div>
                            <div className="description">
                                <div className="title">
                                    Autonomie statt Abhängigkeit:
                                </div>
                                <div className="description">
                                    Teams entwickeln sich selbst –Führungskräfte werden zur Kraftquellen
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imgcontainer">
                                <Image src={AppIcons.uniqueSectionImage4} alt="teamMomentumSectionImage4" />
                            </div>
                            <div className="description">
                                <div className="title">
                                    Wertebasierte Performance:
                                </div>
                                <div className="description">
                                    Sinn und Vertrieb schließen sich nicht aus – sie verstärken sich gegenseitig, weil Klarheit herrscht.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatMakesUsUniqueSection