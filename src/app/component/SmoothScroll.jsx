
"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll = null;
    if (typeof window !== 'undefined') {
      try {
        const LocomotiveScroll = require('locomotive-scroll').default;

        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.03,
          multiplier: 0.8,
          class: 'is-reveal',
        });

        scroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0 , bottom:0, width: window.innerWidth, height: window.innerHeight };
          },
          pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
        });

        ScrollTrigger.addEventListener('refresh', () => scroll.update());
        ScrollTrigger.refresh();
      } catch (error) {
        console.error('Error initializing LocomotiveScroll:', error);
      }
    }

    return () => {
      if (scroll) {
        scroll.destroy();
        ScrollTrigger.removeEventListener('refresh', () => scroll.update());
      }
    };
  }, []);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
};

export default SmoothScroll;
