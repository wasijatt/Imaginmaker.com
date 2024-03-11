"use client"
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { useState } from 'react';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ['/Reviews/1.jpg', 'Reviews/2.jpg', '/Reviews/3.jpg', '/Reviews/4.jpg','/Reviews/5.jpg'];

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full justify-center ">
      
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#7700ff] text-white px-4 py-4 rounded-full" onClick={handlePrev}>
      <FaLongArrowAltLeft />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#7700ff] text-white px-4 py-4 rounded-full" onClick={handleNext}>
      <FaLongArrowAltRight />
      </button>
      <Image width={250} height={200} className="w-full" src={`/Reviews/${images[index]}.jpg`} alt={`Slide ${index + 1}`} />
    </div>
  );
};

export default Slider;
