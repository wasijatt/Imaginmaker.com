// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Carousel = () => {
//   const images = [
//     "/Carousel/appDesigning.jpg",
//     "/Carousel/branding.jpg",
//     "/Carousel/illustration.jpg",
//     "/Carousel/posterdesign.jpg",
//     "/Carousel/websiteLandingPage.jpg",
//     "/Carousel/ProductDesigning.jpg",
//   ];

//   return (
//     <div className="p-1 lg:p-4 w-full purpleBg flex overflow-hidden py-5 px-3 justify-between">
//       <div className="flex carisalslide items-center justify-between py-8">
//         {images.map((src, index) => (
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.5 }}
//             key={index}
//             className="mxl:w-[350px] 3xl:w-[400px] lg:px-5 p-1"
//           >
//             <img
//               className="rounded-2xl"
//               src={src}
//               width={400}
//               height={400}
//               alt="brands"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;



"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Carousel = () => {
  // List of image paths relative to the public directory
  const images = [
    "/images/appDesigning.jpg",
    "/images/branding.jpg",
    "/images/illustration.jpg",
    "/images/posterdesign.jpg",
    "/images/websiteLandingPage.jpg",
    "/images/ProductDesigning.jpg",
  ];

  return (
    <div className="p-1 lg:p-4 w-full purpleBg flex overflow-hidden py-5 px-3 justify-between">
      <div className="flex carisalslide items-center justify-between py-8">
        {images.map((src, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="mxl:w-[350px] 3xl:w-[400px] lg:px-5 p-1"
          >
            <Image
              className="rounded-2xl"
              src={`${src}?nf_resize=fit&w=400&q=80`} // Netlify transformation parameters
              alt="carousel image"
              width={400}
              height={400}
              layout="responsive"
              placeholder="blur"
              blurDataURL={`${src}?nf_resize=fit&w=10&q=10`} // Low-res placeholder for blur effect
              priority={index === 0} // Prioritize the first image
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
