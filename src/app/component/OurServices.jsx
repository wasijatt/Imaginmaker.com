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
                  amount: 0.8, // Stagger effect
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
    {
      src: "/OurServices/4.svg",
      title: "Graphic Design",
      dis: "Crafting impactful visuals that bring your brand to life, from logos to full-scale branding solutions."
    }, {
      src: "/OurServices/3.svg",
      title: "Motion Design",
      dis: "Transform your brand with stunninganimations that captivate and engage.Our motion design brings your ideas to life with creativity and precision."
    }, {
      src: "/OurServices/2.svg",
      title: "UX/UI Design",
      dis: "Designing intuitive and visually appealing interfaces that enhance user experience, making every interaction seamless and enjoyable."
    }, {
      src: "/OurServices/1.svg",
      title: "Branding",
      dis: "Creating distinctive brand identities that connect with your audiencea nd elevate your business."
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#F9F9F9] py-6 lg:py-16 z-50 w-full flex flex-col justify-center items-center relative "
    >
      <div className="ourservices"></div>
      <h1 className="text-[28px] lg:text-[35px] text-[#1A1A1A] text-center z-50 ">
        Our Services
      </h1>
      <div className="w-20 h-1 rounded-full  bg-[#7D40FF] z-50"></div>

      <div className=" lg:w-[90%] z-50">

        <div className="w-full text-center mt-6 flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8 ">
            {imageSources.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-5 h-72 text-center border-2 py-10 px-3 rounded-xl border-[#7700ff] border-b-[20px] ${(index === 1 || index === 3) ? 'mt-10' : ''
                  // (index === 2 || index === 4) ? 'mb-6' : ''
                  }`}
              >
                <div className="w-[70px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={40}
                    height={40}
                    quality={75}
                    layout="responsive"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <h1 className="font-bold text-2xl mb-2">{item.title}</h1>
                <p className="text-[12px] font-medium font-satoshi">{item.dis}</p>
              </div>
            ))}
          </div>
          <button
            className={`purpleBg  text-white px-8 py-3 rounded-3xl text-sm lg:text-sm ${style.boxShadow}`}
          >
            Get Your Design Done
          </button>
        </div>

      </div>
    </div>

  );
};

export default OurServices;
