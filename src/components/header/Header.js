'use client';

import React, { useState } from 'react';
import './Header.scss';
import { AppIcons } from '@/utils/AppIcons/AppIcons';
import Image from 'next/image';
import Button from '../ui/button/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className='left-section'>
        <div className="logo">
          <div className='logo_img_container'>
            <Image src={AppIcons.Logo} alt="Life Institut Logo" width={40} height={40} />
          </div>
          <span>Life Institut AG</span>
        </div>
      </div>

      <div className='right-section'>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#">Leistungen</a>
          <a href="#">Unser Versprechen</a>
          <a href="#">Strategiegespräch</a>
        </nav>

        <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <Button label="Button" />
      </div>
    </header>
  );
};

export default Header;
