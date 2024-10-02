"use client"
import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";
import Link from 'next/link';
import Image from 'next/image';
import style from "../modulerCss/HeroSection.module.css";
import middleLogo from "../../../public/images/icons/middleLogo.png";
const Header = () => {
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
    <div>
       <div className="flex justify-between items-center pl-32 pr-28 h-24 bg-[#101010]  border-b-2 border-[#333] ">
        <Link href="/">
          <Image
            className="w-[50%] lg:w-[100%] bg-transparent"
            src={middleLogo}
            alt="Imaginmaker"
            width={280}
            height={90}
          />
        </Link>
        <div className="hidden lg:flex lg:w-[45%] justify-between items-center">
          <Link href="/CaseStudy" className={style.navLinks}>
            Case Study
          </Link>
          <Link href="/Weblog" className={style.navLinks}>
            Journel
          </Link>
          
          <Link href="/Services" className={style.navLinks}>
            Services
          </Link>
          <Link href="/OurValues" className={style.navLinks}>
            Our Values
          </Link>
        </div>
        <div className="lg:hidden">
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
              <div className="flex flex-col text-xl mt-[30vh] leading-10 text-center justify-center text-white">
                <Link href="/CaseStudy" onClick={closemenu}>
                  Case Study
                </Link>
                <Link href="/Weblog" onClick={closemenu}>
                  Weblog
                </Link>
                <Link href="/" onClick={closemenu}>
                  Home
                </Link>
                <Link href="/Services" onClick={closemenu}>
                  Services
                </Link>
                <Link href="/OurValues" onClick={closemenu}>
                  Our Values
                </Link>
              </div>
            </motion.div>
          )}
        </div>
        <div className="hidden md:block">
          <Link
            href="/getintouch"
            className="bg-purple-600 text-white px-5 py-2 rounded-3xl shadow-lg transition-transform duration-300 ease-out"
            // onMouseMove={(e) => handleMouseMove(e, "button1")}
            // onMouseLeave={handleMouseLeave}
            // style={buttonStyles("button1")}
          >
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Header
