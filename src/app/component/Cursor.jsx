"use client"
import { useState, useEffect } from "react";
import Brands from "./Brands"; 

const Cursor = () => {
  const [position, setPosition] = useState({ });
  const [brandsHovered, setBrandsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleScroll = () => {
    setPosition((prevPosition) => ({ ...prevPosition }));
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBrandsEnter = () => {
    setBrandsHovered(true);
  };

  const handleBrandsLeave = () => {
    setBrandsHovered(false);
  };

  const cursorStyle = {
    left: position.x,
    top: position.y,
    backgroundColor: brandsHovered ? "#7700ff7e" : "#7700ff", 
    width: "10px",
    height: "10px",
    
    zIndex: brandsHovered ? 9999 : 50, 
  };

  return (
    <>
      <div
        onMouseEnter={handleBrandsEnter}
        onMouseLeave={handleBrandsLeave}
      >
      
      </div>
      <div
        className="fixed z-50 bg-[#7700ff7e] rounded-full pointer-events-none transition-all duration-300 ease-linear"
        style={cursorStyle}
      />
    </>
  );
};

export default Cursor;
