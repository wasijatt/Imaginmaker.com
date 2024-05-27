
import Image from "next/image";
import style from "../modulerCss/HeroSection.module.css";

const Simplicity = () => {
  return (
    <div className="flex bg-[#191919] px-6 py-6 mdl:px-20 mdl:py-28 relative  mdl:-mt-6  w-[95%] mdl:w-[65%] m-auto rounded-3xl  justify-between items-center">
      <div className="flex flex-col w-[69%]  mdl:w-[55%] ">

        <Image className="w-[20px] mdl:w-[30px]" src="/Plan/quotes.png" alt="" width={30} height={100}/>
      <h3 className="justify-center items-center  text-sm font-normal  mdl:text-[30px] leading-tight text-white ">
        Simplicity Speaks Louder
        <span className="leading-9 text-[#7700ff]"> Imagin Maker&apos;s</span> Approach to More
        Impactful Designs.
      </h3>
      </div>
      <div className=" w-[30%] mld:w-[45%] text-center flex flex-row     ">
        <Image className="m-auto w-12 mdl:w-[200px] absolute -right-0 -top-3 mdl:-top-0  rounded-3xl " src="/Plan/but.png" alt="" width={100} height={100}/>
      <button className={`" mdl:py-5 px-1 mdl:px-10  py-2 purpleBg text-xs mdl:text-[18px]  text-white rounded-full " ${style.boxShadow}`}>Let&apos;s Work Togather</button>
      </div>
    </div>
  );
};
export default Simplicity;
