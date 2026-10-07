import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Auto scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  // 2. Show/hide floating back to top button on scroll down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 3. Smooth scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-24 z-40 w-12 h-12 rounded-full bg-brand-card/90 backdrop-blur-md border border-brand-gold/60 text-brand-gold hover:text-brand-black hover:bg-gold-gradient shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-brand-gold/30"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <ChevronUp className="w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      )}
    </>
  );
};
