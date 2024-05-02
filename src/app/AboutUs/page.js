
"use client";
import Link from "next/link";
import { useState } from "react";
import HeroSection from "../component/HeroSection";
import Footer from "../component/Footer";
import Login from "../component/Login";
import Image from "next/image";
import { FaInstagramSquare ,FaLinkedin  } from "react-icons/fa";

const Page = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imagePaths = [
    {
      src: "/AboutUs/Over.jpg",
      overlay: "/Aboutus/Madni.jpg",
      member: "Jaan Muhammad",
      dasignation: "Ui/Ux Designer",
      dis: "Senior UI/UX designer in imaginmaker.",
      socialmedia:[
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/imagin-maker/" , },
        { icon: <FaInstagramSquare />, link: "https://www.instagram.com/imaginmaker/" , }

      ],
    },
    {
      src: "/AboutUs/Overlay1.jpg",
      overlay: "/AboutUs/Muhammad Wasim.jpg",
      member: "Muhammad Wasim",
      dasignation: "Full stack Developer",
      dis: "Senior Devloper in imaginmaker.",
      socialmedia:[
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-wasim-57400a301/" , },
        { icon: <FaInstagramSquare />, link: "https://www.instagram.com/wasi_development/" , }

      ],
    },
    {
      src: "/AboutUs/6.jpg",
      overlay: "/AboutUs/Yousaf.jpg",
      member: "Muhammad Yousaf",
      dasignation: "Graphic Designer",
      dis: "Senior Graphic designer in imaginmaker.",
      socialmedia:[
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/imagin-maker/" , },
        { icon: <FaInstagramSquare />, link: "https://www.instagram.com/imaginmaker/" , }

      ],
    },
    {
      src: "/AboutUs/anas1.jpg",
      overlay: "/AboutUs/anas.jpg",
      member: "Muhammad Anas",
      dasignation: "Wordpress Developer",
      dis: " Wordpress Developer in imaginmaker.",
      socialmedia:[
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/imagin-maker/" , },
        { icon: <FaInstagramSquare />, link: "https://www.instagram.com/imaginmaker/" , }

      ],
    },
    {
      src: "/AboutUs/4.jpg",
      overlay: "/AboutUs/Abdullah.jpg",
      member: "Abdullah Rajput",
      dasignation: "Graphic Designer",
      dis: "Senior Graphic designer in imaginmaker.",
      socialmedia:[
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/imagin-maker/" , },
        { icon: <FaInstagramSquare />, link: "https://www.instagram.com/imaginmaker/" , }

      ],    },
  ];

  return (
    <>
      <HeroSection
        HeroSectionHead={"Let&apos;s craft brilliance together"}
        HeroSectionPara={
          "We deal with intricate challenges and transform them into holistic experiences."
        }
        HeroSectionButton={"Get in Touch"}
      />
      <div className="mdl:flex w-full mdl:w-[80%] m-auto items-center p-3 mdl:p-12">
        <h1 className=" mdl:w-1/2 text-center text-xl mdl:text-3xl p-3">
          Who we are
        </h1>
        <p className="w-full mdl:w-1/2 text-center text-sm mdl:text-2xl font-semibold">
          Welcome to our design agency! We&apos;re a team committed to
          empowering the next generation with design skills. Offering affordable
          services, we&apos;re on a mission to make quality design accessible to
          all. Trusted by businesses and individuals, we offer free
          consultations to guide you. Whether an agency seeking support or an
          individual in need, we&apos;re here to help.
        </p>
      </div>
      <div className="justify-center">
        <h1 className=" w-full mdl:w-[80%] m-auto text-center text-xl mdl:text-[40px] p-4">
          Things that define us
        </h1>
        <div className="flex items-center mt-5 ">
          <Image
            width={100}
            height={100}
            className="w-[15%]"
            src="/Aboutus/1.png"
            alt="image"
          />
          <div className="">
            <h1 className="text-xl mdl:text-3xl  ">Great Work Ethic</h1>
            <p className="text-sm mdl:text-xl w-[60%]  font-semibold">
              Our focus on professionalism ensures top-notch design solutions,
              setting us apart in the industry.
            </p>
          </div>
        </div>

        <div className=" flex w-full items-center mt-5">
          <div className="w-[50%]"></div>
          <Image
            width={100}
            height={100}
            className="w-[15%] "
            src="/Aboutus/2.png"
            alt=""
          />
          <div className="">
            <h1 className="text-xl mdl:text-3xl ">High Energy, High Spirits</h1>
            <p className="text-sm mdl:text-xl w-[60%] font-semibold">
              At Algoryte, fun fuels our creativity! We craft memorable
              simulations and branding experiences with passion and energy.
            </p>
          </div>
        </div>
        <div className="flex  mt-5 items-center">
          <Image
            width={100}
            height={100}
            className="w-[15%] "
            src="/Aboutus/3.png"
            alt="us "
          />
          <div className="">
            <h1 className="text-xl mdl:text-3xl ">Going The Extra Mile</h1>
            <p className="text-sm mdl:text-xl w-[60%] font-semibold">
              We&apos;re committed to exceeding expectations by delivering
              optimal value with meticulous attention to detail, ensuring your
              needs are always met.
            </p>
          </div>
        </div>
        <div className="flex mt-5 w-full items-center ">
          <div className="w-[50%]"></div>
          <Image
            width={100}
            height={100}
            className="w-[15%] "
            src="/Aboutus/4.png"
            alt="us "
          />
          <div className="">
            <h1 className="text-xl mdl:text-3xl ">Up For A Challenge</h1>
            <p className="text-sm mdl:text-xl font-semibold w-[60%]">
              We thrive on creativity and enjoy tackling challenges that push us
              to think outside the box!
            </p>
          </div>
        </div>
      </div>

      <div className="mdl:flex w-full p-2 mdl:p-[4%] m-auto text-white bg-[#191919] mt-5">
        <div className="w-full mdl:w-[70%] mdl:p-8">
          <h1 className="text-xl mdl:text-3xl  font-bold">Our Founder</h1>
          <p className="text-sm mdl:text-xl leading-loose	p-4 w-full mdl:w-[80%] ">
            Meet Javed Somroo, the creative force driving ImaginMaker. With 5
            years of expertise in graphic design, branding, and professional
            digital marketing, Javed leads our team in Pakistan, spearheading
            innovative projects that captivate audiences worldwide. His diverse
            skill set encompasses graphic and motion designing, digital
            marketing, animation, UI/UX design, video editing, photography, and
            branding, ensuring every project exceeds expectations.
          </p>
          <Link
            className="text-sm text-[#7700ff]"
            href={"https://www.linkedin.com/in/javed-somroo-bb32bb247/"}
          >
            Linkdin.com/JAVEDSOMROO
          </Link>
        </div>
        <Image
          width={100}
          height={100}
          src={"/AboutUs/JavedSomroo.jpg"}
          alt="Javed Somroo"
          className="w-full mdl:w-[400px]  "
        />
      </div>

      <div className="bg-[#191919] text-center text-white p-4 mdl:py-28">
        <h1 className="text-xl mdl:text-[40px] font-bold"> Our Team</h1>
        
        <div className="hidden  mdl:flex w-full m-auto justify-evenly mt-7 mdl:w-[60%]">
          {imagePaths.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                width={100}
                height={100}
                src={item.src}
                className="w-full rounded-full mdl:w-[300px]"
                alt="Muhammad Madni,The Figma Designer"
              />
              {hoveredIndex === index && (
                <div className="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center text-center bg-[#1E1E24] rounded-[30px] mdl:rounded-full">
                  <div>
                    <Image
                      className="rounded-full m-auto"
                      src={item.overlay}
                      width={100}
                      height={100}
                      alt="overlay"
                    />
                     <h1 className="text-lg mdl:text-xl font-light tracking-[3px]"> {item.member}</h1>
                  <p className="text-[#7700ff] text-sm mdl:text-xl">{item.dasignation}</p>
                  <p className="text-sm">{item.dis}</p>
                  <p className="flex justify-center mt-4 text-[#7700ff] text-2xl">
                    {item.socialmedia.map((social, idx) => (
                      <Link key={idx} href={social.link} className="mr-2" target="_blank" rel="noopener noreferrer">
                        {social.icon}
                      </Link>
                    ))}
                  </p>
                  </div>
                </div>
              )}
            </div>

          ))}
        </div>




        <div className=" hidden mdl:flex justify-evenly m-auto w-full mdl:w-[45%]">
          {imagePaths.slice(3).map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                width={100}
                height={100}
                src={item.src}
                className="w-full rounded-full mdl:w-[300px]"
                alt="Muhammad Madni,The Figma Designer"
              />
              {hoveredIndex === index + 3 && (
                <div className="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center text-center bg-[#1E1E24] rounded-full">
                  <div>
                    <Image
                      className="rounded-full m-auto"
                      alt="ovelay image"
                      src={item.overlay}
                      width={100}
                      height={100}
                    />
                  <h1 className="text-lg mdl:text-2xl font-light tracking-[3px]"> {item.member}</h1>
                  <p className="text-[#7700ff] text-sm mdl:text-xl">{item.dasignation}</p>
                  <p className="text-sm" >{item.dis}</p>
                  <p className="flex justify-center mt-4 text-[#7700ff] text-2xl">
                    {item.socialmedia.map((social, idx) => (
                      <Link key={idx} href={social.link} className="mr-2" target="_blank" rel="noopener noreferrer">
                        {social.icon}
                      </Link>
                    ))}
                  </p>
                  </div>
                </div>
              )}
            </div>
            




          ))}
        </div>
      </div>
      <div className="w-full mdl:hidden text-white bg-[#181818]"> 
      {imagePaths.map((item, index) => (
                <div key={index} className="  w-[85%] h-full z-50 flex justify-center m-auto items-center text-center bg-[#1E1E24] rounded-2xl mdl:rounded-full mt-2 py-14">
                  <div>
                    <Image
                      className="rounded-full m-auto"
                      src={item.overlay}
                      alt="ovelay image"
                      width={100}
                      height={100}
                    />
                     <h1 className="text-lg mdl:text-xl font-light tracking-[3px]"> {item.member}</h1>
                  <p className="text-[#7700ff] text-sm mdl:text-xl">{item.dasignation}</p>
                  <p className="text-sm">{item.dis}</p>
                  <p className="flex justify-center mt-4 text-[#7700ff] text-2xl">
                    {item.socialmedia.map((social, idx) => (
                      <Link key={idx} href={social.link} className="mr-2" target="_blank" rel="noopener noreferrer">
                        {social.icon}
                      </Link>
                    ))}
                  </p>
                  </div>
                </div>

          ))}
      </div>
      <Login />
      <Footer />
    </>
  );
};
export default Page;
