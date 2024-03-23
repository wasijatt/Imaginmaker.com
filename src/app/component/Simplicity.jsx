import Image from "next/image";
const Simplicity = () => {
  return (
    <div className="mdl:flex bg-[#191919] p-4 mdl:-mt-6 mdl:p-14 w-[70%] m-auto rounded-3xl">

      <h1 className="w-full mdl:w-[50%] justify-center items-center text-xl mdl:text-[30px] text-white ">
        <img className="" src="/Plan/quotes.png" alt="" />
        Simplicity Speaks Louder:
        <span className="leading-4 text-[#7700ff]"> Imagin Maker's</span> Approach to More
        Impactful Designs.
      </h1>
      <div className=" w-full mld:w-[50%] text-center">
        <img className="m-auto" src="/Plan/but.png" alt="" />
      <button className="py-2 px-8 purpleBg text-white rounded-3xl">Let’s Work Togather</button>
      </div>
    </div>
  );
};
export default Simplicity;
