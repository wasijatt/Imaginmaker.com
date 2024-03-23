// import { useState } from "react";
// import { ImCross } from "react-icons/im";
// import { FaLongArrowAltLeft } from "react-icons/fa";
// import { FaLongArrowAltRight } from "react-icons/fa";

// const Modal = ({ image, onClose,onPrevSlide , onNextSlide }) => {
   
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 ">
//       <div className="max-w-screen-lg h-[50vh] mdl:h-[90%]  items-center w-full p-4  rounded-lg">
//         <img src={image} alt="Full Size Image" className="w-full h-full rounded-3xl" />
       
//         <button className="absolute top-0 mdl:right-[21%] right-0 m-4 text-[#7700ff] px-6 py-6 rounded-full bg-white z-50" onClick={onClose}>
//         <ImCross />
//         </button>
//         <button className="absolute top-1/2 left-0 mdl:left-[15%] m-4 bg-white text-[#7700ff] px-6 py-6 rounded-full z-50" onClick={onPrevSlide}>
//         <FaLongArrowAltLeft />

//         </button>
//         <button className="absolute top-1/2 right-0  mdl:right-[15%] text-[#7700ff] px-6 py-6 rounded-full m-4 bg-white z-50" onClick={onNextSlide}>
//         <FaLongArrowAltRight />

//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default Modal;

import { motion } from 'framer-motion';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const Modal = ({ isOpen, onClose, images, selectedIndex, onPrevious, onNext }) => {

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-lg bg-[#000000e4] bg-opacity-50 overlay"
          onClick={onClose}
        >
          <motion.div
            className="w-70%"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative  w-[800px]">
              <img
                src={images[selectedIndex]}
                alt={`Graphic ${selectedIndex}`}
                className="rounded-lg h-full w-full"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button className="text-[#7700ff] bg-white rounded-full absolute -left-[10%] top-1/2 p-3" onClick={onPrevious}>
                <MdOutlineNavigateBefore className='text-xl' />
              </button>
              <button className="text-[#7700ff] bg-white  rounded-full absolute -right-[10%] top-1/2 p-3" onClick={onNext}>
                <MdOutlineNavigateNext className='text-xl' />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;

