
"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Capabilities = () => {
  const [opacity, setOpacity] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentPosition = document.getElementById('capabilities').offsetTop;
      const scrollDistance = scrollPosition - contentPosition + windowHeight;

   
      const newOpacity = Math.min(Math.max(scrollDistance / windowHeight, 0), 1);
      setOpacity(newOpacity);
    };


    window.addEventListener('scroll', handleScroll);

    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    
    controls.start({ opacity: opacity });
  }, [opacity, controls]);

  return (
    <div id="capabilities" className="w-[80%] m-auto my-9">
      <h1 className="text-xl mdl:text-[40px]">Capabilities</h1>
      <div className=" ">
        <div className="flex w-full mdl:w-[80%] mdl:ml-[5%] m-2 mdl:mt-9 justify-around items-center ">
          <div className="w-1/2"> <img className="rounded-xl w-[200px] mdl:w-[300px]" src="/our values/Design.jpg" alt="" /> </div>
          <div className=" w-1/2 mdl:w-[40%]">
            <h1 className="text-xl font-semibold mdl:text-3xl">Design</h1>
            <motion.p className="font-normal p-3  text-sm mdl:text-xl mt-2 mdl:mt-8" style={{ opacity: opacity }}>We master graphic design, from ideation to coding, exemplified by our success with cgplus.com. Our remote team excels in crafting exceptional websites for diverse business needs, be it B2B, B2C, or SaaS products.</motion.p>
            <button className="border-[#7700ff] border-2 px-4 py-2 font-semibold mdl:mt-4 rounded-xl">Contact us</button>
          </div>
        </div>
        <div className="flex w-full mdl:w-[80%] mdl:ml-[5%] m-2 mdl:mt-9 justify-around items-center  ">
          <div className="w-1/2 mdl:w-[40%]">
            <h1 className="text-xl font-semibold mdl:text-3xl">Motion Design</h1>
            <motion.p className="font-normal p-3  text-sm mdl:text-xl mt-2 mdl:mt-8" style={{ opacity: opacity }}>We're motion design experts, turning concepts into captivating animations. Our remote team, inspired by successes like cgplus.com, specializes in bringing brands to life with dynamic visuals.</motion.p>
            <button className="border-[#7700ff] border-2 px-4 py-2 mdl:mt-4 font-semibold rounded-xl">Let’s Talk</button>
          </div>
          <div className="w-1/2"> <img className="rounded-xl m-auto w-[200px] mdl:w-[300px]" src="/our values/MotionDesign.jpg" alt="" /> </div>
        </div>
        <div className="flex w-full mdl:w-[80%] mdl:ml-[5%] m-2 mdl:mt-9 justify-around items-center ">
          <div className="w-1/2"> <img className="rounded-xl  w-[200px] mdl:w-[300px]" src="/our values/uiux design.jpg" alt="" /> </div>
          <div className="w-1/2 mdl:w-[40%]">
            <h1 className="text-xl font-semibold mdl:text-3xl">UI/UX Design</h1>
            <motion.p className="font-normal p-3  text-sm mdl:text-xl mt-2 mdl:mt-8" style={{ opacity: opacity }}>Crafting seamless experiences is our forte. Specializing in UI/UX design, we transform ideas into intuitive interfaces. From conceptualization to launch, our expertise ensures user-centric designs that elevate digital experiences.</motion.p>
            <button className="border-[#7700ff] border-2 px-4 py-2 mdl:mt-4 font-semibold rounded-xl">Reach us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
