
import Image from "next/image";
const Simplicity = () => {
  return (
    <div className="mdl:flex bg-[#191919] p-4 mdl:-mt-6 mdl:p-14 w-[95%] mdl:w-[70%] m-auto rounded-3xl">

      <h1 className="w-full mdl:w-[50%] justify-center items-center text-xl mdl:text-[30px] text-white ">
        <Image className="" src="/Plan/quotes.png" alt="" width={35} height={100}/>
        Simplicity Speaks Louder
        <span className="leading-4 text-[#7700ff]"> Imagin Maker&apos;s</span> Approach to More
        Impactful Designs.
      </h1>
      <div className=" w-full mld:w-[50%] text-center">
        <Image className="m-auto" src="/Plan/but.png" alt="" width={100} height={100}/>
      <button className="py-2 px-8 purpleBg text-white rounded-3xl">Let&apos;s Work Togather</button>
      </div>
    </div>
  );
};
export default Simplicity;
