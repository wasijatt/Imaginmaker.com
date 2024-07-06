

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
            const timeline = gsap.timeline();
            switch (index % 6) {
              case 0:
                timeline.fromTo(
                  entry.target,
                  { opacity: 0, y: 100 },
                  { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 1:
                timeline.fromTo(
                  entry.target,
                  { opacity: 0, x: 100 },
                  { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 2:
                timeline.fromTo(
                  entry.target,
                  { opacity: 0, y: -100 },
                  { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 3:
                timeline.fromTo(
                  entry.target,
                  { opacity: 0, x: -100 },
                  { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 4:
                timeline.fromTo(
                  entry.target,
                  { opacity: 0, scale: 0.5, rotation: 15 },
                  { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 5:
                timeline.fromTo(
                  entry.target,
                  { opacity: 0, scale: 0.5, rotation: -15 },
                  { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "power4.out" }
                );
                break;
              default:
                timeline.fromTo(
                  entry.target,
                  { opacity: 0, y: 100 },
                  { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                );
            }
          }
        });
      },
      { threshold: 0.2 }
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
    "/OurServices/Branding services-imaginmaker design agency.jpg",
    "/OurServices/motion graphics services-imaginmaker design agency.jpg",
    "/OurServices/Graphic Designing services-imaginmaker design agency.jpg",
    "/OurServices/illustration services-imaginmaker design agency.jpg",
    "/OurServices/ui-ux or app designing services-imaginmaker design agency.jpg",
    "/OurServices/web design  services-imaginmaker design agency.jpg",
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#181818] py-3 lg:py-16 mt-[5vh] m-auto"
    >
      <h1 className="text-[30px] lg:text-[50px] text-white text-center">
        Our Services
      </h1>
      <div className="flex flex-wrap m-auto w-full justify-center items-center mxl:mt-5 lg:w-[65%]">
        {imageSources.map((src, index) => (
          <div
            key={index}
            className="m-[.5rem] w-[40%] lg:w-[30%]"
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <Image
              className="w-full lg:w-[95%] mt-5 rounded-3xl"
              width={100}
              height={100}
              src={src}
              alt={`Service ${index + 1}`}
            />
          </div>
        ))}
        <div className="w-full text-center items-center mt-5">
          <button
            className={`purpleBg text-white px-7 m-auto mxl:mt-5 rounded-3xl py-2 text-sm lg:text-lg ${style.boxShadow}`}
          >
            Get Your Design Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
