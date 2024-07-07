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
  ];

  return (
    <div className="p-1 lg:p-4 w-full purpleBg flex overflow-hidden py-5 px-3 justify-between">
      <div className="flex carisalslide items-center justify-between py-8">
        {images.map((src, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="mxl:w-[350px] 3xl:w-[400px] lg:px-7 p-1"
          >
            <Image
              className="rounded-2xl"
              src={src}
              width={400}
              height={400}
              alt="brands"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
