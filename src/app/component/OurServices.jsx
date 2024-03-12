import style from "../modulerCss/HeroSection.module.css"
const OurServices = () => {
  return (
<div className="bg-[#181818] py-16 mt-[5vh]">
    <h1 className="text-[64px] text-white text-center ">Our Services</h1>
    <div className="flex flex-wrap m-auto  w-[80%]">
        <div  className="ourServices   "><img className= " w-[90%] mt-5 rounded-3xl "  src="/Carousel/branding.jpg" alt="" /></div>
        <div className="ourServices   "><img className="rounded-3xl mt-5 w-[90%]"   src="/Carousel/branding.jpg" alt="" /></div>
        <div className="ourServices "  ><img  className="rounded-3xl mt-5 w-[90%] " src="/Carousel/branding.jpg" alt="" /></div>
        <div className="ourServices   "><img className="rounded-3xl mt-5 w-[90%]"  src="/Carousel/branding.jpg" alt="" /></div>
        <div className="ourServices   "><img className="rounded-3xl mt-5 w-[90%]"  src="/Carousel/branding.jpg" alt="" /></div>
        <div className="ourServices   "><img className="rounded-3xl mt-5 w-[90%]"  src="/Carousel/branding.jpg" alt="" /></div>

      <div className="w-full ml-[40%] mt-5 ">  <button className={`"bg-[#7700ff] text-white px-7 rounded-3xl py-2 text-xl" ${style.boxShadow}`}>Get Your Design Done </button></div>
    </div>
    
   

</div>
  )
}
export default OurServices;
