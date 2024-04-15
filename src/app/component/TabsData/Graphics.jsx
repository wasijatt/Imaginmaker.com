
import { useState } from 'react';
import Modal from '../Modal';
import Image from 'next/image';
const Graphics = ({GraphicData}) => {
 

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setShowPopup(true);
  };
  const handleOverlayClick = (event) => {
        if (event.target.classList.contains('overlay')) {
          closePopup();
        }
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

  return (
    <div className="flex flex-row flex-wrap w-[85%] m-auto">
      
      <div className=" m-4 w-[23%] h-full">
         {GraphicData.slice(0, 7).map((image, index) => (
          <img
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index}
            src={image}
            width={100}
            height={100}
            alt={`Graphic ${index}`}
            
            onClick={() => openPopup(index)}
          />
        ))}
      </div>
      <div className=" m-4 w-[23%] h-full">
        {GraphicData.slice(7, 13).map((image, index) => (
          <Image
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index + 7}
            src={image}
            width={100}
            height={100}
            alt={`Graphic ${index}`}
            style={{ width: "100%" }}
            onClick={() => openPopup(index + 7)}
          />
        ))}
      </div>
      <div className=" m-4 w-[23%] h-full">
        {GraphicData.slice(13, 20).map((image, index) => (
          <Image
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index + 13}
            src={image}
            alt={`Graphic ${index}`}
            width={100}
            height={100}
            style={{ width: "100%" }}
            onClick={() => openPopup(index + 13)}
          />
        ))}
      </div>
      <div className=" m-4 w-[23%] h-full">
        {GraphicData.slice(20, 25).map((image, index) => (
          <Image
            className="rounded-3xl m-7 w-full mdl:w-[100%] h-full"
            key={index + 20}
            src={image}
            alt={`Graphic ${index}`}
            width={100}
            height={100}
            style={{ width: "100%" }}
            onClick={() => openPopup(index + 20)}
          />
        ))}
      </div>
      <Modal
        isOpen={showPopup}
        onClose={handleOverlayClick}
        images={GraphicData}
        selectedIndex={selectedImageIndex}
        onPrevious={goToPreviousImage}
        onNext={goToNextImage}
      />
    </div>
  );
};

export default Graphics;
