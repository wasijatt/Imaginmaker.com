"use client";
import { useState } from "react";
import Modal from "./model";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {motion} from "framer-motion"


const Carousel = () => {
  const images = ['/Carousel/branding.jpg' , '/Carousel/Graphic designing.jpg', '/Carousel/illustration.jpg', '/Carousel/motion designing.jpg' ,'/Carousel/ui-ux.jpg','/Carousel/website-design.jpg']; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 3));
  const [showModal, setShowModal] = useState(false);
  const visibleImages = 4; // Number of images visible at a time

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex)
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex)
  };
  const openModal = () => {
  
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (

    <div className="relative w-full  p-2">
       {showModal && (
        <Modal image={images[currentIndex]} onClose={closeModal}
        onPrevSlide={goToPrevSlide}
        onNextSlide={goToNextSlide} />
        )}
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
          {images.map((image, index) => (
            <motion.div
            animate={index === activeIndex ? { scale: 1.1 } : { scale: 1 }} // Scale up the active image
            transition={{ duration: 0.3 }} // Adjust the duration as needed
              key={index}
              className="w-full "
              style={{ flex: `0 0 ${100 /visibleImages}%` }}
              onClick={openModal}
            >
              <img src={image} alt={`Image ${index + 1}`} className="w-[80%] m-1 mdl:m-4 rounded-3xl"  />
            </motion.div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 -ml-[100px] transform -translate-y-1/2 bg-white text-[#7700ff]  font-extrabold px-6 py-6 rounded-full "
        onClick={goToPrevSlide}
      >
     <FaLongArrowAltLeft />
 
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-[#7700ff]  font-extrabold px-6 py-6 rounded-full"
        onClick={goToNextSlide}
      >
       <FaLongArrowAltRight />

      </button>
    </div>
  );
};

export default Carousel;
