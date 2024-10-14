"use client";

import style from "../modulerCss/HeroSection.module.css";


import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

export default function HeroSection({
  mainText,
  subText,
  fhead,
  HeroSectionPara,
  HeroSectionButton,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const letters = headingRef.current.querySelectorAll('span');
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
      );
    }
  }, []);

  const createLetterSpans = (text = "") => {
    return text.split('').map((letter, index) => (
      <span key={index} className="inline-block clash ">
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <div
      className="pl-32 relative pr-4 sm:pr-6 lg:pr-12 py-4 lg:py-10"
      style={{
        backgroundImage: "url('/HeroSection/herobg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1
        ref={headingRef}
        className="text-white text-3xl    sm:text-4xl lg:text-6xl lg:text-left text-center lg:leading-10 font-extrabold   mt-12"
      >
       
   {mainText} <span className="ml-9 inline-block clash   text-[#7700ff] ">{subText}</span><br />{fhead} <span className="text-[100px] text-[#7700ff]">.</span>
  
      </h1>
      <p className="text-white text-base sm:text-lg lg:text-xl lg:text-left text-center w-1/2 mt-8">
        {HeroSectionPara}
      </p>
      <div className="text-center mt-6">
        <button
          className={`purpleBg px-5 lg:mt-16 py-2 rounded-3xl text-white ${style.boxShadow}`}
        >
          {HeroSectionButton}
        </button>
      </div>

      <div className="text-center text-white mt-4">
        Designs you will{" "}
        <span className="inline text-[#7700ff] text-[23px]">❤</span> Guaranteed
      </div>
    </div>
  );
}
