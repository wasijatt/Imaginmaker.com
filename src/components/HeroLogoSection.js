'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function LogoMarquee() {
  const logos = [
    { url: "/logoanimation/animationlogo1.png", alt: "Company Logo 1" },
    { url: "/logoanimation/animationlogo2.png", alt: "Company Logo 2" },
    { url: "/logoanimation/animationlogo3.png", alt: "Company Logo 3" },
    { url: "/logoanimation/animationlogo4.png", alt: "Company Logo 4" },
    { url: "/logoanimation/animationlogo5.png", alt: "Company Logo 5" },
  ];

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth === 0) return;

    const animate = async () => {
      await controls.start({
        x: [0, -containerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    };

    animate();
  }, [controls, containerWidth]);

  return (
    <div className="w-full bg-black py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden">
      <div ref={containerRef} className="relative">
        <motion.div
          className="flex space-x-6 sm:space-x-6 md:space-x-8 lg:space-x-10 whitespace-nowrap"
          animate={controls}
          style={{ width: `${containerWidth * 2}px` }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{ width: `${containerWidth / logos.length}px` }}
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={48}
                height={48}
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
