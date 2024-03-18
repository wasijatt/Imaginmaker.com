"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Carousel from './Carousel';

const SmoothScrollExample = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const scrollPosition = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const windowHeight = container.clientHeight;
        const maxScroll = scrollHeight - windowHeight;

        // Calculate the scroll progress as a value between 0 and 1
        const scrollProgress = scrollPosition / maxScroll;

        // Animate the scroll position using Framer Motion
        controls.start({ y: maxScroll * scrollProgress, transition: { duration: 0.8 } });
      });
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [controls]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <motion.div
        ref={containerRef}
        style={{ overflowY: 'scroll', height: '100%', willChange: 'transform', scrollSnapType: 'none' }}
        animate={controls}
      >
        <motion.div style={{ height: '100vh', backgroundColor: 'red' }}><Carousel/></motion.div>
        <motion.div style={{ height: '100vh', backgroundColor: 'blue' }}>Section 2</motion.div>
        <motion.div style={{ height: '100vh', backgroundColor: 'green' }}><Carousel/><Carousel/><Carousel/><Carousel/><Carousel/><Carousel/><Carousel/><Carousel/><Carousel/><Carousel/></motion.div>
      </motion.div>
    </div>
  );
};

export default SmoothScrollExample;
