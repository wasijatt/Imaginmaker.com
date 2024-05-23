"use client"
import style from "../modulerCss/HeroSection.module.css";

import Image from "next/image";

const OurServices = () => {
  const imageSources = [
    "/OurServices/branding.jpg",
    "/OurServices/Graphic-Designer-illustration.jpg",
    "/OurServices/website-design.jpg",
    "/OurServices/ui-ux.jpg",
    "/OurServices/motion graphics.jpg",
    "/OurServices/Graphic-Designer.jpg",
  ];
  return (
    <div className=" bg-[#181818] py-3 mdl:py-16 mt-[5vh] m-auto ">
      <h1 className=" text-[30px] mdl:text-[50px] text-white text-center">Our Services</h1>
      <div className="flex flex-wrap m-auto w-full justify-center items-center   mdl:w-[65%]">
        {imageSources.map((src, index) => (
          <div key={index}
            
            className="m-[.5rem]  w-[40%] mdl:w-[30%]"
          >
            <Image
              className=" w-full mdl:w-[95%] mt-5 rounded-3xl"
              key={index}
              width={100}
              height={100}
              src={src}
              alt={`Branding ${index + 1}`}
            />
          </div>
        ))}
        <div className="w-full text-center items-center mt-5">
          <button className={`purpleBg text-white px-7 m-auto  rounded-3xl py-2 text-sm mdl:text-lg ${style.boxShadow}`}>Get Your Design Done</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

