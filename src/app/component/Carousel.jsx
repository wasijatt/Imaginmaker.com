"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Carousel = () => {
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

  return (
    <div className="p-1 lg:p-4 w-full purpleBg flex overflow-hidden py-5 px-3 justify-between">
      <div className="flex carisalslide items-center justify-between py-8 gap-4 ">
        {images.map((src, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="w-[350px] sm:w-[45%] md:w-[30%] lg:w-[400px] xl:w-[330px] 2xl:w-[400px] p-2 m-0 lg:m-2"
          >
            <Image
              className="rounded-2xl w-full h-auto "
              src={src}
              alt="carousel image"
              width={400}
              height={400}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
