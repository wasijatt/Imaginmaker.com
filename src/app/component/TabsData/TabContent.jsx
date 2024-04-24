import { useState } from 'react';
import Modal from '../Modal';

const TabContent = ({ GraphicData }) => {
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

  const imagesPerSlice = Math.ceil(GraphicData.length / 5); 

  return (
    <div className="flex flex-row flex-wrap w-[95%] mdl:w-[85%] m-auto">
      {[...Array(4)].map((_, i) => (
        <div className=" mdl:m-4 w-[46%] mdl:w-[21%] h-full" key={i}>
          {GraphicData.slice(i * imagesPerSlice, (i + 1) * imagesPerSlice).map((image, index) => (
            <img
              className="rounded mdl:rounded-3xl mx-2 m-2 mdl:m-7 w-full  h-full"
              key={i * imagesPerSlice + index}
              src={image}
              alt={`Graphic ${i * imagesPerSlice + index}`}
              width={100}
              height={100}
              style={{ width: '100%' }}
              onClick={() => openPopup(i * imagesPerSlice + index)}
            />
          ))}
        </div>
      ))}
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

export default TabContent;
