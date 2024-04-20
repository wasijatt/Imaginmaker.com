

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/brands/1.png", width: 153, height: 22 },
  { src: "/brands/2.png", width: 179, height: 26 },
  { src: "/brands/3.png", width: 137, height: 23 },
  { src: "/brands/4.png", width: 134, height: 55 },
  { src: "/brands/5.png", width: 128, height: 32 },
  { src: "/brands/6.png", width: 142, height: 31 },
  { src: "/brands/7.png", width: 112, height: 39 },
  { src: "/brands/8.png", width: 118, height: 22 },
];

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const visibleImages = isDesktop ? 5 : 3;

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768); 
    const interval = setInterval(goToNextSlide, 3000); 
    return () => clearInterval(interval);
  }, [currentIndex]);
  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  
  };

  return (
    
    <div className="w-full bg-gray-900 flex overflow-hidden p-10 ">
 <div
              className="flex transition-transform ease-in-out items-center justify-between  duration-1000"
              style={{
                transform: `translateX(${currentIndex * (100 / images.length)}%)`
              }}
            >
      {images.map((image, index) => (
        <div className="ml-12" key={index}>
          <Image className=" ml-12 items-center" src={image.src} alt="brands" width={image.width} height={image.height}  style={{ flex: `0 0 ${100 / visibleImages}%` }} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Brands;
