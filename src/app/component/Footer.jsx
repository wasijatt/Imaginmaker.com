"use client";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    { icon: <FaInstagramSquare />, link: "" },
    { icon: <FaFacebook />, link: "" },
    { icon: <FaLinkedin />, link: "" },
    { icon: <CiYoutube />, link: "" },
    { icon: <FaDribbble />, link: "" },
    { icon: <FaBehance />, link: "" },
  ];

  return (
    <div className=" bg-[#191919] py-7 px-4 mdl:p-14">
      <div className="  flex w-full mdl:w-[90%] justify-between">
        <div className=" w-30% mdl:w-[40%] mt-2 mdl:m-auto p-3">
          <img  src="/Footer/footer-Icon.png" alt="" />
          <h1 className="text-[#908f8f] text-sm mdl:text-[18px]">Follow Us</h1>
          <div className="flex items-center mt-5">
            {socialMedia.map((item, index) => (
              <Link
                target="blank"
                href={item.link}
                key={index}
                className="mr-1 mdl:mr-4 text-[#7700ff] text-sm mdl:text-2xl"
              >
                {Object.values(item)[0]}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="p-1 w-[33%] mdl:w-[28%]">
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
        <div className="mdl:flex w-[33%]">
          <div className="w-full mdl:w-1/2">
            <h1 className="footerHead">Contact Us</h1>
            <h1 className="footerHead">WhatsApp</h1>
            <h1 className="footerHead"> UAE:</h1>
            <Link className="footerLink"  target="blank" href={" https://wa.me/971567208725"}>
             
              UAE: +971 56 720 87 25
            </Link>

            <h1 className="footerHead">Pak: </h1>
            <Link className="footerLink"  target="blank" href={"https://wa.me/923005837549"}>
              +92 300 58 37 549
            </Link>
            <h1 className="footerHead">Email:</h1>
            <Link
              className="footerLink"
              href={"emilto:imaginmaker583@gmail.com"}  target="blank"
            >
         
              imaginmaker583@gmail.com
            </Link>
          </div>
          <div className="w-full mdl:w-1/2">
            <h1 className="footerHead">Address</h1>
            <h1 className="footerHead">Dubai Office</h1>
            <Link className="footerLink"  target="blank" href={""}>
    
              23rd St - Al Satwa - Dubai United Arab Emirates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
