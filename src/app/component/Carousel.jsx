"use client"
import { useState, useEffect, useCallback } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";

const Carousel = () => {
  const images = [
    "/Carousel/appDesigning.jpg",
    "/Carousel/branding.jpg",
    "/Carousel/illustration.jpg",
    "/Carousel/ProductDesigning.jpg",
    "/Carousel/posterdesign.jpg",
    "/Carousel/websiteLandingPage.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 3));
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleImages, setVisibleImages] = useState(); 

  const goToPrevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setActiveIndex(newIndex);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); 
      setVisibleImages(window.innerWidth > 768 ? 4 : 3); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 
    const interval = setInterval(goToNextSlide, 3000); 
    return () => {
      window.removeEventListener("resize", handleResize); 
      clearInterval(interval);
    };
  }, [goToNextSlide]); 
  
  return (
    <div className="p-1 lg:p-4 w-full purpleBg ">
      <div className="m-auto w-[90%] ">
        <div className="relative w-full lg:p-2">
          <div className="overflow-hidden lg:mx-3 w-full">
            <div
              className="flex transition-transform ease-in-out  duration-1000"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`
              }}
            >
              {images.map((image, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="w-full lg:p-4 p-1"
                  style={{ flex: `0 0 ${100 / visibleImages}%` }}
                >
                  <Image
                    src={image}
                    alt={image}
                    width={100}
                    height={100}
                    className="w-[100%] justify-center  lg:mx-2 rounded-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2  lg:-ml-[100px] transform -translate-y-1/2 bg-white text-[#7700ff] font-extrabold lg:px-6 p-2 lg:py-6 rounded-full "
            onClick={goToPrevSlide}
          >
            <MdOutlineNavigateBefore />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-[#7700ff] font-extrabold lg:px-6 p-2 lg:py-6 rounded-full"
            onClick={goToNextSlide}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
