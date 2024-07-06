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
            switch (index % 6) {
              case 0:
                gsap.fromTo(
                  entry.target,
                  { opacity: 0, x: -100 },
                  { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 1:
                gsap.fromTo(
                  entry.target,
                  { opacity: 0, y: 100 },
                  { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 2:
                gsap.fromTo(
                  entry.target,
                  { opacity: 0, scale: 0.5 },
                  { opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
                );
                break;
              case 3:
                gsap.fromTo(
                  entry.target,
                  { opacity: 0, rotation: 15 },
                  { opacity: 1, rotation: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 4:
                gsap.fromTo(
                  entry.target,
                  { opacity: 0, x: 100 },
                  { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
                );
                break;
              case 5:
                gsap.fromTo(
                  entry.target,
                  { opacity: 0, y: -100 },
                  { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                );
                break;
              default:
                gsap.fromTo(
                  entry.target,
                  { opacity: 0 },
                  { opacity: 1, duration: 1, ease: "power4.out" }
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
      para: "Each of your designs is made especially for you and is 100% yours.",
    },
  ];

  return (
    <>
      <div className="mt-2 lg:mt-14 m-auto text-center w-full lg:w-[30%] ">
        <Image
          className="m-auto"
          src="/services/mem-logo.png"
          alt=""
          width={100}
          height={100}
        />
        <h1 className="text-3xl ">Membership benefits</h1>
        <p>
          Perks so good you will never need to go anywhere else for your design. Seriously.
        </p>
      </div>
      <div className=" lg:flex flex-wrap items-center justify-center m-auto w-full lg:w-[70%] ">
        {MembershipData.map((item, index) => (
          <div
            key={index}
            className=" lg:mt-14 flex flex-wrap lg:w-[30%] lg:p-6 lg:m-3 rounded-xl "
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div key={index} className="max-w-sm rounded overflow-hidden ">
              <Image
                className="w-[50px] m-auto "
                src={item.imgsrc}
                alt={item.title}
                width={50}
                height={50}
              />
              <div className=" lg:px-1 px-3 lg:py-4 py-2 ">
                <div className=" font-bold lg:text-2xl text-lg  text-center mb-2 ">
                  {item.title}
                </div>
                <p className=" lg:text-lg text-center ">{item.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MemberShip;
