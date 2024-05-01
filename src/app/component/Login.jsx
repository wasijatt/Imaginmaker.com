"use client"
import style from "../modulerCss/HeroSection.module.css"
import Link from "next/link"

const Login = ( ) =>{

  
    return(
        <div className="flex flex-col mdl:flex-row ">
        <div className="p-[5%] mdl:p-[15%] text-center mdl:text-left">
            <h1 className="text-xl mdl:text-[45px]  font-extrabold">Have an idea?</h1>
            <p className="text-sm mdl:text-xl mt-3 mdl:mt-5 font-bold">Bring your next project to life. Please fill in the information below and one of our consultants will reach out to you today!
</p>
            <form className=" w-full mdl:w-[70%] mt-3 mdl:mt-6" action="" > 
            <input  className="w-full mdl:w-[40%]" type="text" placeholder="First Name"required />
            <input className="w-full mdl:w-[40%]"   type="Email" placeholder="Email" required />
            <input  className="w-full mdl:w-[40%]"  type="Number" placeholder="Phone Number" required />
            <input className="w-full mdl:w-[40%]"  type="text" placeholder="Address" required/> 
            <input className="w-full mdl:w-[90%]"   type= " textarea" placeholder="Interseted In" required /> 
            <button type="submit" className={`${style.boxShadow} " text-white ml-[5%] py-2 px-5 purpleBg " `} >Let&apos;s Go </button>
            </form>
        </div>
        <div className="w-full mdl:w-[28%]  text-center mdl:text-left mdl:mt-[30%]" >
            <h1 className="text-bold text-lg mdl:text-[30px]  ">Whatsapp</h1>
            <Link className="block font-extrabold text-sm mdl:text-[20px]" target="blank" href={" https://wa.me/971567208725"}> UAE: +971 56 720 87 25</Link>
            <Link className="block font-extrabold text-sm mdl:text-[20px]" target="blank" href={" https://wa.me/923005837549"}> Pak: +92 300 5837549</Link>
        </div>
        </div>
    )
}
export default Login