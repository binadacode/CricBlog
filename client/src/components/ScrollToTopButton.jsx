import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8 z-50 p-4 rounded-full
        bg-white/20 backdrop-blur-lg border border-cyan-300
        text-cyan-300 text-xl
        shadow-[0_0_15px_#00f6ff]
        hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_#00f6ff]
        transition-all duration-300 ease-in-out animate-pulse
      "
      aria-label="Scroll to Top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
