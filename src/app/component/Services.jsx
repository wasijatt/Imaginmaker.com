import Link from "next/link";
import ReviewSlider from "../component/ReviewSlider";
import Image from "next/image";


const Services = () => {
  const servicesData = [
    { imgsrc: "/Services/1.png", heading: "Visual Versatility", des: "Tailored design and animation, bringing your vision to life effortlessly." },
    { imgsrc: "/Services/2.png", heading: "Relationships", des: "Over Transactions Prioritizing your success, we believe in forging lasting partnerships." },
    { imgsrc: "/Services/3.png", heading: "Social Media Impact", des: "Crafted visuals that authentically connect with your audience, elevating your brand's narrative." },
  ];

  return (
    <div className="bg-[#181818] rounded-3xl py-10  w-[90%] lg:w-[80%] mt-16 m-auto flex flex-col lg:flex-row p-2 lg:p-12 justify-center items-center ">
      <div className=" w-full lg:w-1/2">
        <div>
          <h1 className="text-white text-xl lg:text-[42px] text-center lg:text-left w-full lg:w-[80%] px-5 leading-sung tracking-[2px] leading-normal	 ">
            A Full-Service of Design, Branding and Animation Agency
          </h1>
        </div>
        <div>
     

<div className="hidden lg:flex lg:flex-col flex-wrap  lg:p-6  ">
    {servicesData.map((service, index) => (
      <div key={index} className="flex mt-3  lg:mt-10 w-[50%]  lg:w-full">
        <div >
          <Image className="w-[50] lg:w-full"  src={service.imgsrc} width={50} height={50} alt={service.heading} />
        </div>
        <div className="ml-2 lg:ml-5">
          <h2 className="text-white text-xs lg:text-lg   font-normal tracking-[2px]">{service.heading}</h2>
          <p className=" text-sm text-[#BCBCBC] w-full lg:w-[70%]">{service.des}</p>
        </div>
      
      </div>

    ))}
     
  </div>
  <button href={"/AboutUs"} className=" lg:hidden px-5 py-2 mt-5 m-auto  ml-[33%] purpleBg text-white rounded-2xl">
            About Us
          </button>

        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 justify-center items-center ">
        <h1 className="text-white text-center text-xl lg:text-2xl">
          What Our Clients Say About Us
        </h1>
        <ReviewSlider  />
        <div className=" text-center">
          <Link href={"/AboutUs"} className=" hidden lg:inline text-center px-10 mt-12 py-3 purpleBg text-white rounded-3xl">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Services;
