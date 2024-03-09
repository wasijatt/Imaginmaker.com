import Image from "next/image"
import style from "../modulerCss/HeroSection.module.css"
import leftLogo from "../../../public/images/icons/leftLogo.png"
import middleLogo from "../../../public/images/icons/middleLogo.png"
import Heart from "../../../public/images/icons/heart.svg"
export default function HeroSection({HeroSectionHead, HeroSectionPara,HeroSectionButton}) {
  return (
<div className="bg-[#181818] px-[4rem] py-2">


    <div className='flex justify-between items-center '>
      <div className=""> 
      <a href=""><Image className=" w-[100%] h-[100%] bg-transparent" src={leftLogo} alt="logo"/>
      </a>
      </div>
     <div className=" w-[65%] flex justify-between items-center ">
      <a className={`${style.navLinks}`} href="">Case Study </a>
      <a className={`${style.navLinks}`} href="">Weblog</a>
      <a className={`${style.navLinks}`} href=""> <Image src={middleLogo} className="" /> </a>
      <a className={`${style.navLinks}`} href="">Services</a>
      <a className={`${style.navLinks}`} href="">Our Values </a>
     </div>
     <div className="">
      <button className={`"bg-[#7700ff] px-5 py-2 rounded-3xl text-white" ${style.boxShadow}`}>Get In Touch </button>
     </div>
    </div>

<h1 className=" text-white text-[60px] font-extrabold">{HeroSectionHead}</h1>
<p className="text-white text-2xl font-semibold">{HeroSectionPara}</p>
   <div className="w-[100%] text-center mt-6"> <button className={`"bg-[#7700ff] px-5 py-2 rounded-3xl  " ${style.boxShadow}`}>
{HeroSectionButton}
    </button>
    </div>

    <div className="w-full text-center text-white mt-4  ">Designs you'll <div className="inline"><Image src={Heart} className="inline"/></div>, guaranteed</div>
    </div>
  )
}
