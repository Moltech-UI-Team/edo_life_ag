import React from 'react';
import Image from 'next/image';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo">
          <Image src={AppIcons.Logo} alt="Life Institut Logo" width={40} height={40} />
        </div>

        {/* Text Content */}
        <div className="footer__text">
          <h2>Folge ReflectIQ &ndash; für Einblicke, Impulse und Perspektiven:</h2>
          <p>
            „Führung ist nicht, Menschen zu bewegen. Es ist, Räume zu schaffen, in denen Menschen sich bewegen wollen.
            ReflectIQ schafft genau diese Räume &ndash; intelligent, menschlich und wirkungsvoll.“<br />
            <span>&mdash; Hermann Ladner, CEO Life Institut AG</span>
          </p>
        </div>

        {/* Social Media */}
        <div className="footer__social">
          <p>Social Media</p>
          <p>Social Media</p>
          <p>Social Media</p>
        </div>

        {/* Legal Links */}
        <div className="footer__legal">
          <p>AGB / Nutzungsbedingungen</p>
          <p>Impressum / Datenschutz</p>
        </div>
      </div>
    </footer>
  );
};
