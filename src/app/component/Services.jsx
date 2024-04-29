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
    <div className="bg-[#181818] rounded-3xl  w-full mdl:w-[70%] mt-16 m-auto flex flex-col mdl:flex-row p-2 mdl:p-12 justify-center items-center">
      <div className=" w-full mdl:w-1/2">
        <div>
          <h1 className="text-white text-xl mdl:text-[40px] text-center mdl:text-left w-full mdl:w-[80%] px-5 leading-sung font-bold leading-normal	 ">
            A Full-Service of Design, Branding and Animation Agency
          </h1>
        </div>
        <div>
     

<div className="flex mdl:flex-col flex-wrap p-2 mdl:p-6">
    {servicesData.map((service, index) => (
      <div key={index} className="flex mt-3  mdl:mt-7 w-[50%]  mdl:w-full">
        <div >
          <Image src={service.imgsrc} width={70} height={70} alt={service.heading} />
        </div>
        <div className="ml-2 mdl:ml-5">
          <h1 className="text-white text-sm mdl:text-2xl font-bold tracking-widest">{service.heading}</h1>
          <p className="text-white text-xs w-full mdl:w-[70%]">{service.des}</p>
        </div>
      </div>
    ))}
  </div>

        </div>
      </div>
      <div className="w-full mdl:w-1/2 p-4 justify-center items-center ">
        <h1 className="text-white text-center text-xl mdl:text-2xl">
          What Our Clients Say About Us
        </h1>
        <ReviewSlider  />
        <div className="w-full text-center">
          <Link href={"/AboutUs"} className="text-center px-10 mt-12 py-3 purpleBg text-white rounded-3xl">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Services;
