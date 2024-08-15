"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Counter = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const countersRef = useRef([]);
  const controls = useAnimation();

  const CounterData = [
    {
      imgsrc: "/Counter/1.png",
      title: "Projects Completed",
      number: projects,
    },
    {
      imgsrc: "/Counter/2.png",
      title: "Satisfied Clients",
      number: clients,
    },
    {
      imgsrc: "/Counter/3.png",
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      countersRef.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#191919] mt-4 lg:mt-12 p-4 lg:px-9 lg:py-15 mb-3">
      <h1 className="text-center text-white mt-2 lg:mt-5 font-bold tracking-wide text-2xl lg:text-[35px]">
        Why People Like Us
      </h1>
      <p className="text-center text-white mt-6 text-base lg:text-[23px]">
        Professional Design Agency to Provide Solutions
      </p>
      <div className="flex flex-wrap justify-center items-center lg:justify-between w-full lg:w-[80%] m-auto lg:mt-7">
        {CounterData.map((counterItem, index) => (
          <motion.div
            ref={(el) => (countersRef.current[index] = el)}
            key={index}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            className="bg-white text-center w-[90%] sm:w-[70%] md:w-[48%] lg:w-[30%] m-4 py-10 lg:py-20 rounded-3xl"
          >
            <Image
              className="m-auto pb-5"
              width={80}
              height={80}
              src={counterItem.imgsrc}
              alt={counterItem.title}
            />
            <h1 className="text-xl lg:text-[40px] font-extrabold text-[#7700ff]">
              {counterItem.number}+
            </h1>
            <h2 className="text-lg lg:text-[25px] mt-2 lg:mt-6 font-bold text-[#7700ff]">
              {counterItem.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
