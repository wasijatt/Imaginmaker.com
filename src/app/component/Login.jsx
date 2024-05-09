"use client";
import style from "../modulerCss/HeroSection.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col mdl:flex-row  justify-center  ">
      <div className="p-[5%] mdl:p-[10%] text-center mdl:w-[70%] mdl:text-left relative">
        <h1 className="text-xl mdl:text-[45px]  font-extrabold">
          Have an idea?
        </h1>
        <p className="text-sm mdl:text-xl mt-3 mdl:mt-5 font-bold">
          Bring your next project to life. Please fill in the information below
          and one of our consultants will reach out to you today!
        </p>
        <form className=" w-full mdl:w-[%] mt-3 mdl:mt-6" action="">
          <input
            className="w-full mdl:w-[40%]"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="w-full mdl:w-[40%]"
            type="Email"
            placeholder="Email"
            required
          />
          <input
            className="w-full mdl:w-[40%]"
            type="Number"
            placeholder="Phone Number"
            required
          />
          <input
            className="w-full mdl:w-[40%]"
            type="text"
            placeholder="Address"
            required
          />
          <input
            className="w-full mdl:w-[45%] block"
            type=" textarea"
            placeholder="Interseted In"
            required
          />
          <button
            type="submit"
            className={`${style.boxShadow} " text-white ml-[5%] py-2 px-5 purpleBg " `}
          >
            Let&apos;s Go{" "}
          </button>
          <div className="w-1/2 mdl:w-30%] m-auto  mdl:inline text-center mdl:text-left mdl:absolute mdl:-right-28  ">
            <h1 className="text-normal text-lg md:text-[18px]  text-[#00BA34] ">
              Whatsapp
            </h1>
            <Link
              className="block font-extrabold text-sm mdl:text-[17px]  mdl:mt-4"
              target="blank"
              href={" https://wa.me/971567208725"}
            >
              {" "}
              UAE: +971 56 720 87 25
            </Link>
            <Link
              className="block font-extrabold text-sm mdl:text-[17px] mdl:mt-2"
              target="blank"
              href={" https://wa.me/923005837549"}
            >
              {" "}
              Pak: +92 300 5837549
            </Link>
          </div>
        </form>
      </div>
   
    </div>
  );
};
export default Login;
