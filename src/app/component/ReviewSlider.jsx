"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ['/Reviews/one.jpg', '/Reviews/two.jpg', '/Reviews/three.jpg', '/Reviews/four.jpg', '/Reviews/five.jpg'];
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

 


  
  return (
    <div className="relative w-full justify-center my-6" >
      <motion.div animate={controls} className="transition-opacity duration-1000">
        <Image
          className="m-auto rounded md:rounded-3xl w-[400px] md:w-[520px]"
          src={images[index]}
          alt={`Slide ${index + 1}`}
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  );
};

export default Slider;


