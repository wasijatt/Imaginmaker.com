"use client";
import Link from "next/link";
import Image from "next/image";
import style from "../modulerCss/HeroSection.module.css";
import leftLogo from "../../../public/images/icons/leftLogo.png";
import middleLogo from "../../../public/images/icons/middleLogo.png";
import Heart from "../../../public/images/icons/heart.svg";
import { VscThreeBars } from "react-icons/vsc";

import { useState } from "react";

export default function HeroSection({
  HeroSectionHead,
  HeroSectionPara,
  HeroSectionButton,
}) {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="bg-[#181818] px-[2rem] mdl:px-[4rem] py-2">
      <div className="flex justify-between items-center ">
        <div className="">
          <Link href="/">
            <Image
              className=" w-[50%] h-[50%] mdl:w-[100%] mld:h-[100%] bg-transparent"
              src={leftLogo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="mdl:w-[60%] hidden  mdl:flex justify-between items-center  ">
          <Link href={"/CaseStudy"} className={`${style.navLinks}`}>
            Case Study{" "}
          </Link>
          <Link href={"/Weblog"} className={`${style.navLinks}`}>
            Weblog
          </Link>

          <Link href={"/"} className={`${style.navLinks}`}>
            {" "}
            <Image src={middleLogo} alt="logo" className="" />{" "}
          </Link>

          <Link href={"/Services"} className={`${style.navLinks}`}>
            Services
          </Link>
          <Link href={"/OurValues"} className={`${style.navLinks}`}>
            Our Values{" "}
          </Link>
        </div>

        <div className="">
          <Link href={"/getintouch"}
            className={`"purpleBg text-white px-5 py-2 hidden mdl:block rounded-3xl " ${style.boxShadow}`}
          >
            Get In Touch{" "}
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-[#7700ff] text-[30px]" onClick={mobileMenu}>
            <VscThreeBars />
          </button>
          {isOpen && (
            <div
              onClick={closemobileMenu}
              className="fixed inset-0 z-50  backdrop-blur-lg bg-[#000000e4] bg-opacity-50 overlay p-8  "
            >
              <div className=" flex flex-col text-2xl mt-[30vh]  leading-10  text-center  justify-center text-white">
                <Link href={"/CaseStudy"}>Case Study</Link>
                <Link href={"/Weblog"}>Weblog</Link>
                <Link href={"/ "}>Home</Link>
                <Link href={"/Services"}>Services</Link>
                <Link href={"/OurValues"}>Our Values</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <h1 className=" text-white text-[39px] tracking-wide mdl:ml-9	 mdl:text-[60px] font-extrabold text-center mdl:text-left w-full  mdl:w-[50%]">
        {HeroSectionHead}
      </h1>
      <p className="text-white text-xl mdl:ml-9	 font-normal">
        {HeroSectionPara}
      </p>
      <div className="w-[100%] text-center mt-6">
        {" "}
        <button
          className={`"purpleBg px-5 py-2 rounded-3xl text-white " ${style.boxShadow}`}
        >
          {HeroSectionButton}
        </button>
      </div>

      <div className="w-full text-center text-white mt-4  ">
        Designs you&apos;ll{" "}
        <div className="inline">
          <Image alt="Heart" src={Heart} className="inline" />
        </div>
        , guaranteed
      </div>
    </div>
  );
}
