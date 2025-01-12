'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/Carousel/appDesigning.webp',
  '/Carousel/branding.webp',
//   '/Carousel/carouselsatic.png',
  '/Carousel/illustration.webp',
  '/Carousel/posterdesign.webp',
  '/Carousel/productDesigning.webp',
  '/Carousel/websiteLandingPage.webp',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <div className="w-full overflow-hidden bg-purple-600 p-4 h-[38vh]">
      <div className="relative mx-auto max-w-28xl">
        {isMobile ? (
          <div className="flex gap-4">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative w-full shrink-0 overflow-hidden rounded-3xl bg-white mt-4"
              >
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `${-currentIndex * 25}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {[...images, ...images.slice(0, 3)].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative w-1/4 shrink-0 overflow-hidden rounded-3xl bg-white md:h-[300px] md:w-[300px] mt-8"
                >
                  <img
                    src={image}
                    alt={`Slide ${(index % images.length) + 1}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {!isMobile && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
