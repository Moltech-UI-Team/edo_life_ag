import React from 'react'
import Image from 'next/image'
import "./LeadershipQuoteSection.scss"
import { AppIcons } from '@/utils/AppIcons/AppIcons'

const LeadershipQuoteSection = () => {
    return (
        <div className='leadership-quote-section'>
            <div className="container">
                <div className="left">
                    <div className="profile">
                        <Image src={AppIcons.hermannProfilePic} alt="hermannProfilePic" />
                    </div>
                </div>
                <div className="right">
                    <div className="quote">
                        „Führung ist nicht, Menschen zu bewegen. Es ist, Räume zu schaffen, in denen Menschen sich bewegen wollen. ReflectIQ schafft genau diese Räume – intelligent, menschlich und wirkungsvoll.“
                    </div>
                    <div className="name">
                       - Hermann Ladner, CEO Life Institut AG
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeadershipQuoteSection