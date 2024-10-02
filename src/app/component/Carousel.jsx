"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const images = [
    "/Carousel/appDesigning.jpg",
    "/Carousel/branding.jpg",
    "/Carousel/illustration.jpg",
    "/Carousel/posterdesign.jpg",
    "/Carousel/websiteLandingPage.jpg",
    "/Carousel/ProductDesigning.jpg",
    "/Carousel/appDesigning.jpg",
    "/Carousel/branding.jpg",
    "/Carousel/illustration.jpg",
    "/Carousel/posterdesign.jpg",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      const interval = setInterval(() => {
        const { current } = carouselRef;
        if (current) {
          const firstChild = current.firstChild;
          current.style.transition = "transform 0.8s ease-in-out";
          current.style.transform = `translateX(-100%)`;
          setTimeout(() => {
            current.appendChild(firstChild);
            current.style.transition = "ease-in-out";
            current.style.transform = `translateX(0)`;
          }, 800); // Match duration of transition
        }
      }, 5000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="p-1 lg:p-4 w-full purpleBg flex overflow-hidden py-5 px-3 justify-between bg-[#7D40FF]">
      {/* Desktop view */}
      <div className={`hidden lg:flex carisalslide items-center justify-between py-8 gap-6 `}>
        {images.map((src, index) => (
          <div
            key={index}
            className="  w-[350px] sm:w-[45%] md:w-[30%] lg:w-[400px] xl:w-[330px] 2xl:w-[400px] p-2 m-0 lg:m-2"
          >
            <Image
              className="rounded-2xl w-full h-auto"
              src={src}
              alt="carousel image"
              width={400}
              layout="responsive"
              quality={75}
              loading="lazy"
              height={400}
            />
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="lg:hidden w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-800 ease-in-out "
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full  flex-shrink-0  "
            // style={{ flex: '0 0 100%' }}
            >
              <Image
                className="rounded-2xl ml-4 w-[330px] h-[330px] "
                src={src}
                alt="carousel image"
                width={400}
                layout="responsive"
                quality={75}
                loading="lazy"
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
