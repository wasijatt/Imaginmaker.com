
import Image from "next/image";
import style from "../modulerCss/HeroSection.module.css";

const Simplicity = () => {
  return (
    < div className="bg-black py-[10vh]">
    <div className="flex  px-6 lg:px-10 lg:py-10 py-6  relative border-[1px] border-[#333]   w-[95%] lg:w-[65%] m-auto rounded-3xl  justify-between items-center">
      <div className="flex flex-col w-[69%]  lg:w-[55%] ">

        <Image className="w-[20px] lg:w-[30px]" src="/Plan/quotes.png" alt="" width={30} height={100} />
        <h1 className="justify-center items-center  text-sm font-normal  lg:text-xl leading-tight text-white ">
          Simplicity Speaks Louder
          <div className="w-16 h-[3px] rounded-full  bg-white "></div>

          <span className="leading-9 text-[#7700ff] font-heading"> Imagin Maker&apos;s</span> <br /> Approach to More
          Impactful Designs.
        </h1>
      </div>
      <div className=" w-[30%] mld:w-[45%] text-center flex flex-row     ">
   
        <button className={`" lg:py-4    px-1 lg:px-10  py-2 purpleBg text-xs lg:text-[13px]  text-white rounded-full " ${style.boxShadow}`}>Let&apos;s Work Togather</button>
      </div>
    </div>
    </div>
  );
};
export default Simplicity;
