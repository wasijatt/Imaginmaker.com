"use client";
import Link from "next/link";
import { FaInstagramSquare ,FaLinkedin ,FaDribbble,FaFacebook,FaBehance } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    { icon: <FaInstagramSquare />, link: "https://www.instagram.com/imaginmaker/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61551109724275"  },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/imagin-maker/"  },
    { icon: <CiYoutube />, link: "https://youtube.com/@javedsomroo9792?si=74AP0H67tmddOSnK"  },
    { icon: <FaDribbble />, link: "https://dribbble.com/imaginmaker"   },
    { icon: <FaBehance />, link: "https://www.behance.net/imagin-maker" },
  ];

  return (
    <div className=" bg-[#191919] py-7 mt-3 px-4 lg:p-14 lg:h-[40vh]">
      <div className="  flex w-full lg:w-[90%] justify-between">
        <div className=" w-28% lg:w-[50%] mt-2 lg:ml-[12%] p-3">
          <Image  src="/footer/footer-Icon.png" alt="" width={100} height={100} />
          <h1 className="text-[#908f8f] text-sm lg:text-[18px]">Follow Us</h1>
          <div className=" flex  items-center mt-32 lg:mt-5 text-lg  lg:text-2xl">
            {socialMedia.map((item, index) => (
              <Link
                target="blank"
                href={item.link}
                key={index}
                className="mr-1 lg:mr-4 text-[#7700ff] flex items-center"
              >
                {Object.values(item)[0]}
          
              </Link>
            ))}
          </div>
          <div className=" hidden lg:flex mt-[70px]   text-[#908f8f]">
          <p >© 2024 Imagin Maker    </p>
          <Link className="ml-4  font-bold " href={"/PrivacyPolicy"}>Terms</Link>
          <Link className="ml-4  font-bold " target="blank" href={"/PrivacyPolicy"}>
            Privacy 
          </Link>
          </div>
        </div>
        
        <div className="p-1 w-[33%] lg:w-[28%]">
          <h1 className="footerHead">What We Offer</h1>
              
          <Link className="footerLink " target="blank" href={""}>
            Graphic Design
          </Link>
          <Link className="footerLink"  target="blank" href={""}>
            Motion Design
          </Link>
          <Link className="footerLink"  target="blank" href={""}>
            UI/UX Design
          </Link>
          <Link className="footerLink"  target="blank" href={""}>
            Website Design
          </Link>
          <Link className="footerLink"  target="blank" href={""}>
            Branding
          </Link>
         
        </div>
        <div className="lg:flex w-[50%]">
          <div className="w-full lg:w-1/2">
            <h1 className="footerHead">Contact Us</h1>
            <h2 className="footerHead">WhatsApp</h2>
            <h2 className="footerHead"> UAE:</h2>
            <Link className="footerLink"  target="blank" href={" https://wa.me/971567208725"}>
             
              UAE: +971 56 720 87 25
            </Link>

            <h2 className="footerHead">Pak: </h2>
            <Link className="footerLink"  target="blank" href={"https://wa.me/923005837549"}>
              +92 300 58 37 549
            </Link>
            <h2 className="footerHead">Email:</h2>
            <Link
              className="footerLink"
              href={"emilto:imaginmaker583@gmail.com"}  target="blank"
            >
         
              imaginmaker583@gmail.com
            </Link>
          </div>
          <div className="w-full lg:w-1/2 mt-7 lg:mt-0">
            <h1 className="footerHead">Address</h1>
            <h2 className="footerHead">Dubai Office</h2>
            <Link className="footerLink"  target="blank" href={""}>
    
              23rd St - Al Satwa - Dubai United Arab Emirates
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-[70px]   text-[#908f8f]">
          <p className=" inline ">© 2024 Imagin Maker    </p>
          <Link className="ml-4  font-bold " href={"/PrivacyPolicy"}>Terms</Link>
          <Link className="ml-4  font-bold " target="blank" href={"/PrivacyPolicy"}>
            Privacy 
          </Link>
          </div>
    </div>
  );
};
export default Footer;
