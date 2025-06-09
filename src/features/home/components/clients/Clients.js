import React from 'react';
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './Clients.scss';

const clientLogos = [
  AppIcons.swissligeLogo,
  AppIcons.bkwLogo,
  AppIcons.boehringerIngelheimLogo,
  AppIcons.caritasLogo,
  AppIcons.cssVersicherungLogo,
  AppIcons.sbbCffFfsLogo,
  AppIcons.unescoLogo,
  AppIcons.zuercherKantonalbankLogo,
];

const Clients = () => {
  return (
    <div className="clients-marquee">
      <div className="marquee__inner">
        <div className="marquee__group">
          {clientLogos.map((logo, index) => (
            <div className="clients-marquee__item" key={`original-${index}`}>
              <Image src={logo} alt={`client-logo-${index}`} height={40} />
            </div>
          ))}
          {clientLogos.map((logo, index) => (
            <div className="clients-marquee__item" key={`duplicate-${index}`}>
              <Image src={logo} alt={`client-logo-dup-${index}`} height={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
