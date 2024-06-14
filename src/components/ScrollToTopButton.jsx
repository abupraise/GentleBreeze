import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-[#ED3833] text-white rounded-xl p-3 shadow-lg h-14 w-14 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '24px' }} />
    </button>
  );
};

export default ScrollToTopButton;
