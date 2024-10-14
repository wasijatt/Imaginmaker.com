

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Counter = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const countersRef = useRef([]);

  const CounterData = [
    {
      imgsrc: "/Counter/1.svg",
      title: "Projects Completed",
      number: projects,
    },
    {
      imgsrc: "/Counter/2.svg",
      title: "Satisfied Clients",
      number: clients,
    },
    {
      imgsrc: "/Counter/3.svg",
      title: "Countries Worldwide",
      number: countries,
    },
  ];

  useEffect(() => {
    // Set the counter numbers after a delay
    setTimeout(() => {
      setProjects(1500);
      setClients(900);
      setCountries(157);
    }, 4000);

    // GSAP animation
    const animateCounters = (ref) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.3,
        } // Final state
      );
    };

    // IntersectionObserver to trigger animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all counters
    const currentRefs = countersRef.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-black  text-white flex flex-col justify-center items-center mt-4 lg:mt-12 p-4 lg:px-9 lg:py-15 ">
      <h1 className="mt-2 lg:mt-5 font-bold tracking-wide text-2xl lg:text-[35px]">
        Why People Like Us
      </h1>
      <div className="w-20 h-1 rounded-full mt-2 lg:mt-4  bg-[#7D40FF]"></div>
      <p className="text-center mt-6 text-base lg:text-[23px]">
        Professional Design Agency to Provide Solutions
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 lg:justify-between w-full lg:w-[80%] m-auto lg:mt-7">
        {CounterData.map((counterItem, index) => (
          <div
            ref={(el) => (countersRef.current[index] = el)}
            key={index}
            className="bg-[#222] text-center w-[90%] sm:w-[70%] md:w-[48%] lg:w-[30%]  py-10 lg:py-20 rounded-3xl"
          >
            <Image
              className="m-auto pb-5"
              width={80}
              height={80}
              src={counterItem.imgsrc}
              alt={counterItem.title}
            />
            <h1 className="text-xl lg:text-[40px] font-extrabold">
              {counterItem.number}+
            </h1>
            <h2 className="stoshi text-lg lg:text-[25px] mt-2 lg:mt-6 font-bold">
              {counterItem.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
