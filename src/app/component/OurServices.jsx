import style from "../modulerCss/HeroSection.module.css";




const OurServices = () => {
  const imageSources = [
    "/Carousel/branding.jpg",
    "/Carousel/branding.jpg",
    "/Carousel/branding.jpg",
    "/Carousel/branding.jpg",
    "/Carousel/branding.jpg",
    "/Carousel/branding.jpg",
  ];
  return (
    <div className="bg-[#181818] py-16 mt-[5vh]">
      <h1 className=" text-[20px] mdl:text-[64px] text-white text-center">Our Services</h1>
      <div className="flex flex-wrap m-auto w-full  mdl:w-[70%]">
        {imageSources.map((src, index) => (
          <div
            
            className="ourServices w-full mdl:w-[30%]"
          >
            <img
              className=" w-full mdl:w-[95%] mt-5 rounded-3xl"
              src={src}
              alt={`Branding ${index + 1}`}
            />
          </div>
        ))}
        <div className="w-full  mdl:ml-[40%] mt-5">
          <button className={`purpleBg text-white px-7 m-auto mt-7  rounded-3xl py-2 text-xl ${style.boxShadow}`}>Get Your Design Done</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

