
"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const Capabilities = () => {

  return (
    <div id="capabilities" className="w-[80%] m-auto my-9">
      <h1 className="text-xl lg:text-[40px]">Capabilities</h1>
      <div className=" ">
        <div className="flex w-full lg:w-[80%] lg:ml-[5%] m-2 lg:mt-9 justify-around items-center ">
          <div className="w-1/2"> <Image className="rounded-xl w-[200px] lg:w-[300px]" src="/our values/Design.jpg"  width={200} height={200} alt="" /> </div>
          <div className=" w-1/2 lg:w-[40%]">
            <h1 className="text-xl font-semibold lg:text-3xl">Design</h1>
            <motion.p className="font-normal p-3  text-sm lg:text-xl mt-2 lg:mt-8" >We master graphic design, from ideation to coding, exemplified by our success with cgplus.com. Our remote team excels in crafting exceptional websites for diverse business needs, be it B2B, B2C, or SaaS products.</motion.p>
            <button className="border-[#7700ff] border-2 px-4 py-2 font-semibold lg:mt-4 rounded-xl">Contact us</button>
          </div>
        </div>
        <div className="flex w-full lg:w-[80%] lg:ml-[5%] m-2 lg:mt-9 justify-around items-center  ">
          <div className="w-1/2 lg:w-[40%]">
            <h1 className="text-xl font-semibold lg:text-3xl">Motion Design</h1>
            <motion.p className="font-normal p-3  text-sm lg:text-xl mt-2 lg:mt-8" >We&apos;re motion design experts, turning concepts into captivating animations. Our remote team, inspired by successes like cgplus.com, specializes in bringing brands to life with dynamic visuals.</motion.p>
            <button className="border-[#7700ff] border-2 px-4 py-2 lg:mt-4 font-semibold rounded-xl">Let&apos;s Talk</button>
          </div>
          <div className="w-1/2"> <Image className="rounded-xl m-auto w-[200px] lg:w-[300px]" src="/our values/MotionDesign.jpg" width={200} height={200} alt="" /> </div>
        </div>
        <div className="flex w-full lg:w-[80%] lg:ml-[5%] m-2 lg:mt-9 justify-around items-center ">
          <div className="w-1/2"> <Image className="rounded-xl  w-[200px] lg:w-[300px]" src="/our values/uiux design.jpg" width={200} height={200}  alt="" /> </div>
          <div className="w-1/2 lg:w-[40%]">
            <h1 className="text-xl font-semibold lg:text-3xl">UI/UX Design</h1>
            <motion.p className="font-normal p-3  text-sm lg:text-xl mt-2 lg:mt-8" >Crafting seamless experiences is our forte. Specializing in UI/UX design, we transform ideas into intuitive interfaces. From conceptualization to launch, our expertise ensures user-centric designs that elevate digital experiences.</motion.p>
            <button className="border-[#7700ff] border-2 px-4 py-2 lg:mt-4 font-semibold rounded-xl">Reach us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
