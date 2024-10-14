"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const MemberShip = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const currentRefs = itemRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = currentRefs.indexOf(entry.target);
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 50, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", stagger: { amount: 0.8 } }
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

  const MembershipData = [
    {
      imgsrc: "/membership/flexibility icone of imaginmaker design-agency of Pakistan.png",
      title: "Lightning fast delivery",
      para: "Get your design one at a time in just a few days on average.",
    },
    {
      imgsrc: "/membership/lightning-bolts icone of imagnmaker Design-agency in pakistan.png",
      title: "Flexible and scalable",
      para: "Scale up or down as needed, and pause or cancel at anytime.",
    },
    {
      imgsrc: "/membership/Unique and all yours icone of imaginmaker.png",
      title: "Unique and all yours",
      para: "Each of your designs is made especially and is 100% yours.",
    },
  ];

  return (
    <div className="py-6 lg:py-8 mt-5 w-full bg-[#7700ff] text-white">
      <div className="text-center w-full lg:w-[30%] mx-auto">
        <h1 className="text-xl lg:text-2xl w-full stoshi font-bold mb-3">
          Perks so good you will never need to go elsewhere for your design. Seriously.
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:w-[75%] mx-auto">
        {MembershipData.map((item, index) => (
          <div
            key={index}
            className="lg:mt-4 flex flex-col items-center justify-between lg:py-8 lg:w-[30%] lg:p-6 lg:m-3 mb-6"
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <Image
              className={`${
                index === 0 ? "w-[50px]" : "w-[40px] lg:w-24"
              } mb-4 mix-blend-multiply`}
              src={item.imgsrc}
              alt={item.title}
              width={index === 0 ? 100 : 50}
              height={index === 0 ? 50 : 50}
            />
            <div className="text-center">
              <h2 className="font-bold text-lg lg:text- stoshi mb-2">{item.title}</h2>
              <p className="text-sm stoshi">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberShip;

