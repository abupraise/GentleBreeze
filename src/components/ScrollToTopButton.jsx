import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 220;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  if (isMobile) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bg-[#ED3833] text-white rounded-xl p-3 shadow-lg h-14 w-14 flex items-center justify-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } ${
        isMobile ? 'bottom-20 right-4' : 'bottom-5 right-5'
      }`}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        style={{ fontSize: '24px' }}
        className="transition-transform duration-300 hover:translate-y-[-2px]"
      />
    </button>
  );
};

export default ScrollToTopButton;