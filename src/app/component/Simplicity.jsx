
import Image from "next/image";
const Simplicity = () => {
  return (
    <div className="flex bg-[#191919] p-4 mdl:-mt-6 mdl:p-14 w-[95%] mdl:w-[70%] m-auto rounded-3xl">

      <h1 className="w-[69%]  mdl:w-[50%] justify-center items-center font-thin text-sm  mdl:text-[30px] text-white ">
        <Image className="w-[20px] mdl:w-[35px]" src="/Plan/quotes.png" alt="" width={35} height={100}/>
        Simplicity Speaks Louder
        <span className="leading-9 text-[#7700ff]"> Imagin Maker&apos;s</span> Approach to More
        Impactful Designs.
      </h1>
      <div className=" w-[30%] mld:w-[50%] text-center">
        <Image className="m-auto w-12 mdl:w-full " src="/Plan/but.png" alt="" width={100} height={100}/>
      <button className="mdl:py-2 mdl:px-8 py-1 purpleBg text-xs text-white rounded-3xl ">Let&apos;s Work Togather</button>
      </div>
    </div>
  );
};
export default Simplicity;
