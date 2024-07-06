import { useEffect } from 'react';
import gsap from 'gsap';

const useSmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin('scrollTo');

    const handleScroll = (event) => {
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: event.target.pageYOffset,
          autoKill: false, // Keep the animation running even when user scrolls manually
        },
        ease: 'power2.inOut',
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
