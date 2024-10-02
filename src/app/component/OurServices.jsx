"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import style from "../modulerCss/HeroSection.module.css";

const OurServices = () => {
  const imageRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentRefs = imageRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = currentRefs.indexOf(entry.target);
            gsap.fromTo(
              entry.target,
              {
                opacity: 0,
                y: 50,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                stagger: {
                  amount: 0.3, // Stagger effect
                  from: "start", // Start the stagger from the start
                },
              }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const imageSources = [
    
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#F9F9F9] py-6 lg:py-16 z-50 w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-[28px] lg:text-[35px] text-[#1A1A1A] text-center ">
        Our Services
      </h1>
      <div className="w-20 h-1 rounded-full  bg-[#7D40FF]"></div>

      <div className="flex flex-wrap justify-center items-center mx-auto lg:w-[80%]">
       
        <div className="w-full text-center mt-6">
          <button
            className={`purpleBg text-white px-8 py-3 rounded-3xl text-sm lg:text-lg ${style.boxShadow}`}
          >
            Get Your Design Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
