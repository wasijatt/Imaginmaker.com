"use client";
import Link from "next/link";
import Image from "next/image";
import style from "../modulerCss/HeroSection.module.css";
import leftLogo from "../../../public/images/icons/leftLogo.png";
import middleLogo from "../../../public/images/icons/middleLogo.png";
// import Heart from "../../../public/images/icons/heart.jpg";
import { VscThreeBars } from "react-icons/vsc";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

export default function HeroSection({
  HeroSectionHead = "", // Add default value here
  HeroSectionPara,
  HeroSectionButton,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll('span');
      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  const createWordSpans = (text = "") => { // Add default value here
    return text.split(' ').map((word, index) => (
      <span key={index} className="inline-block">
        {word}&nbsp;
      </span>
    ));
  };

  const mobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const closemenu = () => {
    setIsOpen(false);
  };
  const closemobileMenu = (event) => {
    if (event.target.classList.contains("overlay")) {
      closemenu();
    }
  };



  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [activeButton, setActiveButton] = useState(null); // Track which button is being hovered

  const handleMouseMove = (e , buttonId) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const xRotation = ((clientY - top) / height - 0.1) * -50;
    const yRotation = ((clientX - left) / width - 0.1) * -40;

    setRotateX(xRotation);
    setRotateY(yRotation);
    setActiveButton(buttonId); // Set the active button
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setActiveButton(null); // Reset the active button
  };

  const buttonStyles = (buttonId) => ({
    transform:
      activeButton === buttonId
        ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        : "none",
  });
  return (
    <div className="bg-[#000000] px-[2rem] lg:px-[6rem] py-2 lg:py-10">
      <div className="flex justify-between items-center lg:px-8">
        <div className="">
          <Link href="/">
            <Image
              className=" w-[50%] h-[50%] lg:w-[90%] mld:h-[90%] bg-transparent"
              src={leftLogo}
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="lg:w-[60%] hidden lg:flex justify-between items-center">
          <Link href={"/CaseStudy"} className={`${style.navLinks}`}>
            Case Study
          </Link>
          <Link href={"/Weblog"} className={`${style.navLinks}`}>
            Weblog
          </Link>
          <Link href={"/"} className={`${style.navLinks}`}>
            <Image src={middleLogo} alt="logo" width={200} height={50} />
          </Link>
          <Link href={"/Services"} className={`${style.navLinks}`}>
            Services
          </Link>
          <Link href={"/OurValues"} className={`${style.navLinks}`}>
            Our Values
          </Link>
        </div>
        
        <div className="perspective-[1000px]">
        <Link
        href="/getintouch"
        className="bg-purple-600 text-white px-5 py-2 hidden md:block lg:block rounded-3xl shadow-lg transition-transform duration-300 ease-out"
        onMouseMove={(e) => handleMouseMove(e, "button1")}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className="block transform-gpu transition-transform duration-300"
          style={{
            transform: activeButton === "button1" ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : "none",
          }}
        >
          Get In Touch
        </span>
      </Link>
        </div>
        <div className="md:hidden">
          <button className="text-[#7700ff] text-[30px]" onClick={mobileMenu}>
            <VscThreeBars />
          </button>
          {isOpen && (
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              onClick={closemobileMenu}
              className="fixed inset-0 z-50 backdrop-blur-lg bg-[#000000e4] bg-opacity-50 overlay p-8"
            >
              <div className="flex flex-col text-2xl mt-[30vh] leading-10 text-center justify-center text-white">
                <Link href={"/CaseStudy"}>Case Study</Link>
                <Link href={"/Weblog"}>Weblog</Link>
                <Link href={"/ "}>Home</Link>
                <Link href={"/Services"}>Services</Link>
                <Link href={"/OurValues"}>Our Values</Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <h1
        ref={headingRef}
        className="text-white text-[39px] tracking-wide lg:ml-9 lg:text-[60px] font-extrabold text-center lg:text-left w-full lg:w-[50%] lg:mt-9"
      >
        {createWordSpans(HeroSectionHead)}
      </h1>
      <p className="text-white text-xl lg:ml-9 w-[60%] font-normal">
        {HeroSectionPara}
      </p>
      <div className="w-[100%] text-center mt-6">
        <button
        id="button2"
          className={`"purpleBg px-5 py-2 rounded-3xl text-white " ${style.boxShadow}`}
          onMouseMove={(e) => handleMouseMove(e, "button2")}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: activeButton === "button2" ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : "none",
          }}        >
          {HeroSectionButton}
        </button>
      </div>

      <div className="w-full text-center text-white mt-4">
        Designs you will{" "}
        <div className="inline">
          {/* <Image alt="Heart" src={Heart} className="inline bg-blend-normal" width={20} height={20} /> */}
        </div>
        Guaranteed
      </div>
    </div>
  );
}
