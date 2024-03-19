"use client"
import Image from 'next/image';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useState } from 'react';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ['/Reviews/1.png', '/Reviews/2.png', '/Reviews/3.png', '/Reviews/4.png', '/Reviews/5.png', '/Reviews/6.png'];
  const totalImages = images.length;

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full justify-center mt-6">
      <button className="absolute -left-12 top-1/2 transform -translate-y-1/2 purpleBg text-white  px-1 mdl:px-4 py-1 mdl:py-4 rounded-full" onClick={handlePrev}>
        <FaLongArrowAltLeft />
      </button>
      <button className="absolute -right-12 top-1/2 transform -translate-y-1/2 purpleBg text-white px-1 mdl:px-4 py-1 mdl:py-4 rounded-full" onClick={handleNext}>
        <FaLongArrowAltRight />
      </button>
      <Image  width={180} height={150} className="m-auto rounded mdl:rounded-3xl w-[300px] mdl:w-[400px]" src={images[index]} alt={`Slide ${index + 1}`} />
    </div>
  );
};

export default Slider;
