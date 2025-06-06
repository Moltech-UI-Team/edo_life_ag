import React, { useRef, useEffect } from 'react';
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
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
  AppIcons.zuercherKantonalbankLogo,
];

const Clients = () => {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Auto scroll speed px per frame
    const autoScrollSpeed = 2;

    const autoScroll = () => {
      if (!slider) return;

      if (!isDown.current) {
        // If not dragging, scroll automatically
        slider.scrollLeft += autoScrollSpeed;

        // Loop back to start when reaching the end
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }

      autoScrollRef.current = requestAnimationFrame(autoScroll);
    };

    autoScrollRef.current = requestAnimationFrame(autoScroll);

    const onMouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault();

      const x = e.pageX ?? (e.touches && e.touches[0].pageX);
      if (x === undefined) return;

      const walk = (x - startX.current) * 2; // scroll speed multiplier
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUp = () => {
      if (isDown.current) {
        isDown.current = false;
        slider.classList.remove('active');
      }
    };

    const onMouseLeave = () => {
      if (isDown.current) {
        isDown.current = false;
        slider.classList.remove('active');
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onMouseMove, { passive: false });
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchcancel', onMouseUp);
    slider.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchend', onMouseUp);
      document.removeEventListener('touchcancel', onMouseUp);
      slider.removeEventListener('mouseleave', onMouseLeave);
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, []);

  const onMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add('active');
    startX.current = e.pageX ?? (e.touches && e.touches[0].pageX);
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  return (
    <div
      className="clients"
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {clientLogos.map((logo, index) => (
        <div className="clients__item" key={index}>
          <Image src={logo} alt={`client-logo-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Clients;
