"use client";
import Link from "next/link";
import Image from "next/image";
import style from "../modulerCss/HeroSection.module.css";
import leftLogo from "../../../public/images/icons/leftLogo.png";
import { VscThreeBars } from "react-icons/vsc";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

export default function HeroSection({
  HeroSectionHead = "",
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
      <span key={index} className="inline-block">
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <div
      className="bg-cover bg-center relative px-4 sm:px-6 lg:px-12 py-4 lg:py-10"
      style={{
        backgroundImage: "url('/HeroSection/herobg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1
        ref={headingRef}
        className="text-white text-3xl lg:w-[65%]  sm:text-4xl lg:text-6xl lg:text-left text-center font-extrabold lg:leading-normal whitespace-normal mt-12"
      >
        {createLetterSpans(HeroSectionHead)}
      </h1>
      <p className="text-white text-base sm:text-lg lg:text-xl lg:text-left text-center mt-2">
        {HeroSectionPara}
      </p>
      <div className="text-center mt-6">
        <button
          className={`purpleBg px-5 py-2 rounded-3xl text-white ${style.boxShadow}`}
        >
          {HeroSectionButton}
        </button>
      </div>

      <div className="text-center text-white mt-4">
        Designs you will{" "}
        <span className="inline text-[#6600ff]">❤</span> Guaranteed
      </div>
    </div>
  );
}
