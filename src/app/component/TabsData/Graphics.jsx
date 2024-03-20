

import { useState } from 'react';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { motion } from 'framer-motion';

const Graphics = () => {
  const GraphicData = [
    "/images/servicesPage/Grphic designing/book cover design.jpg",
    "/images/servicesPage/Grphic designing/Iphone-15---black-friday---poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Boulivard -  perfume poster design for adds-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Dous link poster design for facbooke-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/I phone poster design 50% discount.jpg",
    "/images/servicesPage/Grphic designing/instagram post for worker.jpg",
    "/images/servicesPage/Grphic designing/Infust Flower poster design for insagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Iphone-12--black-friday---poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Infust Flower poster design for insagram-by imaginmaker (2).jpg",
    "/images/servicesPage/Grphic designing/Impression -   perfume poster design for adds-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/worker.jpg",
    "/images/servicesPage/Grphic designing/worker trucks posters design for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Worker trucks insgtaram post-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Worker trucks insgtaram post.jpg",
    "/images/servicesPage/Grphic designing/Vocal truth -concert poster  desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/university  posters design -by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Vintage  perfume poster design for adds-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/university  posters design -by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/sourse apple toofie poster design for insagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Instagram poster designing.jpg",
    "/images/servicesPage/Grphic designing/International education university-poster-designed by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Iphone-13---black-friday---poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/KIDS-POSTER-poster desin for instagram post-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/KIDS-POSTER-poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/man T shirt posters poster desin for instagram-by imaginmaker.jpg",
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? GraphicData.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === GraphicData.length - 1 ? 0 : prevIndex + 1));
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('overlay')) {
      closePopup();
    }
  };

  return (
    <div className="flex flex-row flex-wrap w-[90%] m-auto">
      <div className=" m-4 w-[23%] h-full">
        {GraphicData.slice(0, 7).map((image, index) => (
          <img
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index}
            src={image}
            alt={`Graphic ${index}`}
            style={{ width: "100%" }}
            onClick={() => openPopup(index)}
          />
        ))}
      </div>
      <div className=" m-4 w-[23%] h-full">
        {GraphicData.slice(7, 13).map((image, index) => (
          <img
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index + 7}
            src={image}
            alt={`Graphic ${index}`}
            style={{ width: "100%" }}
            onClick={() => openPopup(index + 7)}
          />
        ))}
      </div>
      <div className=" m-4 w-[23%] h-full">
        {GraphicData.slice(13, 20).map((image, index) => (
          <img
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index + 13}
            src={image}
            alt={`Graphic ${index}`}
            style={{ width: "100%" }}
            onClick={() => openPopup(index + 13)}
          />
        ))}
      </div>
      <div className=" m-4 w-[23%] h-full">
        {GraphicData.slice(20, 25).map((image, index) => (
          <img
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index + 20}
            src={image}
            alt={`Graphic ${index}`}
            style={{ width: "100%" }}
            onClick={() => openPopup(index + 20)}
          />
        ))}
      </div>
      {showPopup && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-center items-center bg-[#000000c8] bg-opacity-50 overlay" onClick={handleOverlayClick}>
        <motion.div className="w-70%"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <div className="relative w-[800px]">
            <img
              src={GraphicData[selectedImageIndex]}
              alt={`Graphic ${selectedImageIndex}`}
              className="rounded-lg h-full w-full"
            />
          </div>
          <div className="flex justify-between mt-4">
            <button className="text-[#7700ff] bg-white rounded-full absolute -left-[10%] top-1/2 p-3" onClick={goToPreviousImage}>
            <MdOutlineNavigateBefore className='text-xl' />

            </button>
            <button className="text-[#7700ff] bg-white  rounded-full absolute -right-[10%] top-1/2 p-3" onClick={goToNextImage}>
            <MdOutlineNavigateNext className='text-xl' />


            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </div>
);
};

export default Graphics;
