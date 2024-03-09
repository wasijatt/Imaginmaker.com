import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Modal = ({ image, onClose,onPrevSlide , onNextSlide }) => {
   
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 ">
      <div className="max-w-screen-lg h-[50vh] mdl:h-[90%]  items-center w-full p-4  rounded-lg">
        <img src={image} alt="Full Size Image" className="w-full h-full rounded-3xl" />
       
        <button className="absolute top-0 mdl:right-[21%] right-0 m-4 text-[#7700ff] px-6 py-6 rounded-full bg-white z-50" onClick={onClose}>
        <ImCross />
        </button>
        <button className="absolute top-1/2 left-0 mdl:left-[15%] m-4 bg-white text-[#7700ff] px-6 py-6 rounded-full z-50" onClick={onPrevSlide}>
        <FaLongArrowAltLeft />

        </button>
        <button className="absolute top-1/2 right-0  mdl:right-[15%] text-[#7700ff] px-6 py-6 rounded-full m-4 bg-white z-50" onClick={onNextSlide}>
        <FaLongArrowAltRight />

        </button>
        
      </div>
    </div>
  );
};

export default Modal;
