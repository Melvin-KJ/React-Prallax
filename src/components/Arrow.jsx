import React from 'react';
import '../styles/Arrow.css';

const Arrow = () => {
  //scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a onClick={scrollToTop} className="arrow">
      <i class="fa-solid fa-2x fa-chevron-up"></i>
    </a>
  );
};

export default Arrow;
