
"use client"
import { useEffect, useRef, useState } from 'react';
// import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ['/Reviews/1.png', '/Reviews/2.png', '/Reviews/3.png', '/Reviews/4.png', '/Reviews/5.png', '/Reviews/6.png'];
  const totalImages = images.length;
  const touchStartX = useRef(null);
  const controls = useAnimation();

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const startAutoPlay = () => {
    setInterval(handleNext, 3000);
  };

  useEffect(() => {
    startAutoPlay();
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current && e.touches.length) {
      const touchEndX = e.touches[0].clientX;
      if (touchEndX - touchStartX.current > 50) {
        handlePrev();
      } else if (touchStartX.current - touchEndX > 50) {
        handleNext();
      }
      touchStartX.current = null;
    }
  };

  useEffect(() => {
    controls.start({ opacity: 0, x: "-5vw" }).then(() => {
      controls.start({ opacity: 1, x: 0 });
    });
  }, [index]);

  return (
    <div className="relative w-full justify-center my-6" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {/* <button className="absolute left-1 top-1/2 transform -translate-y-1/2 purpleBg text-white px-1 md:px-4 py-1 md:py-4 rounded-full" onClick={handlePrev}>
        <MdOutlineNavigateBefore />
      </button> */}
      {/* <button className="absolute right-1 top-1/2 transform -translate-y-1/2 purpleBg text-white px-1 md:px-4 py-1 md:py-4 rounded-full" onClick={handleNext}>
        <MdOutlineNavigateNext />
      </button> */}
      <motion.div animate={controls} className="transition-opacity duration-1000">
        <img
          className="m-auto rounded md:rounded-3xl w-[300px] md:w-[400px]"
          src={images[index]}
          alt={`Slide ${index + 1}`}
        />
      </motion.div>
    </div>
  );
};

export default Slider;
