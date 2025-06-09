import React from 'react';
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './TeamMomentumSection.scss';

const stats = [
  { value: '08/10', description: 'verlängern das Programm freiwillig für weitere Teamkohorten.' },
  { value: '93%', description: 'der Unternehmen erleben ein gestärktes Miteinander in ihren Teams.' },
  { value: '94%', description: 'der Führungskräfte berichten von spürbar mehr Klarheit in Entscheidungsprozessen.' },
  { value: '87%', description: 'der Vertriebsteams steigerten ihre Abschlussquote innerhalb von 4 Monaten.' },
];

const TeamMomentumSection = () => {
  return (
    <div
      className="team-momentum-section">
        <div className='team-momentum-section__bg'>
            <Image src={AppIcons.teamMomentumSectionBackground} alt="teamMomentumSectionBackground" />
        </div>
      <div className="team-momentum-section__left" data-aos="fade-right">
        {stats.map((stat, index) => (
          <div key={index} className="team-momentum-section__left__item">
            <div className="left">{stat.value}</div>
            <div className="right">{stat.description}</div>
          </div>
        ))}
      </div>

      <div className="team-momentum-section__right" data-aos="fade-left">
        <div className="highlight-box">
          <div className="percentage">93%</div>
          <div className="text">
            Denn wer einmal erlebt hat, wie ein Team sich selbst in Bewegung bringt, will mehr davon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMomentumSection;
