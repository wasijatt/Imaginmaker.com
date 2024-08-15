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
              { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", stagger: { amount: 0.3 } }
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
      imgsrc: "/membership/hobbies.jpg",
      title: "Design Board",
      para: "Add as many design requests to your board as you'd like.",
    },
    {
      imgsrc: "/membership/lightning-bolts icone of imagnmaker Design-agency in pakistan.jpg",
      title: "Lightning fast delivery",
      para: "Get your design one at a time in just a few days on average.",
    },
    {
      imgsrc: "/membership/Fixed monthly rate icon of imaginmaker.jpg",
      title: "Fixed monthly rate",
      para: "No surprises here! Pay the same fixed price each month.",
    },
    {
      imgsrc: "/membership/Top-notch quality icone of imaginmaker design-agency in pakistan.jpg",
      title: "Top-notch quality",
      para: "Insane design quality at your fingertips whenever you need it.",
    },
    {
      imgsrc: "/membership/flexibility icone of imaginmaker design-agency of Pakistan.png",
      title: "Flexible and scalable",
      para: "Scale up or down as needed, and pause or cancel at anytime.",
    },
    {
      imgsrc: "/membership/Unique and all yours icone of imaginmaker.jpg",
      title: "Unique and all yours",
      para: "Each of your designs is made especially and is 100% yours.",
    },
  ];

  return (
    <div className=" py-6 lg:py-16 mt-5 w-full">
      <div className="text-center w-full lg:w-[30%] mx-auto mb-6">
        <Image
          className="m-auto"
          src="/services/mem-logo.png"
          alt="Membership Logo"
          width={100}
          height={100}
        />
        <h1 className="text-2xl lg:text-3xl  mb-3">Membership Benefits</h1>
        <p className=" text-sm lg:text-base">
          Perks so good you will never need to go anywhere else for your design. Seriously.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:w-[75%] mx-auto">
        {MembershipData.map((item, index) => (
          <div
            key={index}
            className="lg:mt-10 flex flex-col items-center lg:py-10 lg:w-[30%] lg:p-6 lg:m-3 rounded-xl border-x-2 bg-[#f3f2f2] p-4 mb-6"
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <Image
              className="w-16 lg:w-24 mb-4  mix-blend-multiply"
              src={item.imgsrc}
              alt={item.title}
              width={50}
              height={50}
            />
            <div className="text-center">
              <h2 className="font-bold text-lg lg:text- mb-2">{item.title}</h2>
              <p className="text-sm lg:text-base -300">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberShip;
