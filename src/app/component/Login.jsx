"use client";
import style from "../modulerCss/HeroSection.module.css";


const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center">
      <div className="flex flex-col justify-center items-center p-[5%] lg:p-[10%] text-center lg:w-[70%] lg:text-left relative">
        <h1 className="text-xl lg:text-[45px]  font-extrabold">
          Have an idea?
        </h1>
        <div className="w-20 h-1 rounded-full mt-2 lg:mt-4  bg-[#7D40FF]"></div>
        <p className="text-[10px] lg:text-sm mt-3 lg:mt-5 stoshi text-center">
          Bring your next project to life. Please fill in the information below
          and one of our consultants will reach out to you today!
        </p>
        <form className=" text-center w-full lg:w-[%] mt-3 lg:mt-6" action="">
          <input
            className="w-full lg:w-[40%]"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="w-full lg:w-[40%]"
            type="Email"
            placeholder="Email"
            required
          />
          <input
            className="w-full lg:w-[40%]"
            type="Number"
            placeholder="Phone Number"
            required
          />
          <input
            className="w-full lg:w-[40%]"
            type="text"
            placeholder="Interested In"
            required
          />
         
          <button
            type="submit"
            className={`${style.boxShadow} " text-white py-2 px-5 purpleBg " `}
          >
            Let&apos;s Go{" "}
          </button>
          {/* <div className="w-1/2 lg:w-30%] m-auto  lg:inline text-center lg:text-left lg:absolute lg:-right-28  ">
            <h1 className="text-normal text-lg md:text-[18px]  text-[#00BA34] ">
              Whatsapp
            </h1>
            <Link
              className="block font-extrabold text-sm lg:text-[17px]  lg:mt-4"
              target="blank"
              href={" https://wa.me/971567208725"}
            >
              {" "}
              UAE: +971 56 720 87 25
            </Link>
            <Link
              className="block font-extrabold text-sm lg:text-[17px] lg:mt-2"
              target="blank"
              href={" https://wa.me/923005837549"}
            >
              {" "}
              Pak: +92 300 5837549
            </Link>
          </div> */}
        </form>
      </div>
   
    </div>
  );
};
export default Login;
