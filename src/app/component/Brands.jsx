"use client";
import { useState } from "react";
import Modal from "./model";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";


const Brands = () => {
  const images = ['/Carousel/branding.jpg' , '/Carousel/Graphic designing.jpg', '/Carousel/illustration.jpg', '/Carousel/motion designing.jpg' ,'/Carousel/ui-ux.jpg','/Carousel/website-design.jpg']; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const visibleImages = 4; // Number of images visible at a time

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };
  const openModal = () => {
  
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
<div className="w-8 h-9 bg-black"></div>
  );
};

export default Brands;
