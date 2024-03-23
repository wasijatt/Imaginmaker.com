"use client";
import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Carousel = () => {
  const images = [
    "/Carousel/branding.jpg",
    "/Carousel/Graphic designing.jpg",
    "/Carousel/illustration.jpg",
    "/Carousel/motion designing.jpg",
    "/Carousel/ui-ux.jpg",
    "/Carousel/website-design.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 3));
  const [showModal, setShowModal] = useState(false);
  

  const visibleImages = 5; 

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };



  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      setShowModal(false);
    }
  };

  return (
    <div className="p-1 mdl:p-4 w-full purpleBg">
      <div className="m-auto w-[90%] ">
        <div className="relative w-full p-2">
          {showModal && (
            <Modal
              isOpen={showModal}
              images={images[currentIndex]}
              selectedIndex={images[currentIndex]}
              onClose={handleOverlayClick}
              onPrevious={goToPrevSlide}
              onNext={goToNextSlide}
            />
          )}
          <div className="overflow-hidden mdl:mx-3 w-full">
            <div
              className="flex transition-transform ease-out duration-1000"
              style={{
                transform: `translateX(-${currentIndex * (100 / images.length)}%)`
              }}
            >
              {images.map((image, index) => (
                <motion.div
                  animate={index === activeIndex ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="w-full p-4"
                  style={{ flex: `0 0 ${100 / visibleImages}%` }}
                  onClick={() => openModal(index)}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-[100%] justify-center m-0 mdl:mx-4 rounded-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 -ml-[100px] transform -translate-y-1/2 bg-white text-[#7700ff] font-extrabold px-6 py-6 rounded-full "
            onClick={goToPrevSlide}
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-[#7700ff] font-extrabold px-6 py-6 rounded-full"
            onClick={goToNextSlide}
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
