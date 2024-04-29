"use client";
import Link from "next/link";
import { FaInstagramSquare ,FaLinkedin ,FaDribbble,FaFacebook,FaBehance } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    { icon: <FaInstagramSquare />, link: "https://www.instagram.com/imaginmaker/" , label :"Instagramme" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61551109724275" , label :"Facebooook"  },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/imagin-maker/" , label :"LinkedIn" },
    { icon: <CiYoutube />, link: "https://youtube.com/@javedsomroo9792?si=74AP0H67tmddOSnK" , label :"Youtube"  },
    { icon: <FaDribbble />, link: "https://dribbble.com/imaginmaker"  , label :"Dribble" },
    { icon: <FaBehance />, link: "https://www.behance.net/imagin-maker" , label :"Behance" },
  ];

  return (
    <div className=" bg-[#191919] py-7 px-4 mdl:p-14">
      <div className="  flex w-full mdl:w-[90%] justify-between">
        <div className=" w-30% mdl:w-[40%] mt-2 mdl:m-auto p-3">
          <Image  src="/footer/footer-Icon.png" alt="" width={100} height={100} />
          <h1 className="text-[#908f8f] text-sm mdl:text-[18px]">Follow Us</h1>
          <div className="mdl:flex  items-center mt-5 text-sm mdl:text-2xl">
            {socialMedia.map((item, index) => (
              <Link
                target="blank"
                href={item.link}
                key={index}
                className="mr-1 mdl:mr-4 text-[#7700ff] flex items-center"
              >
                {Object.values(item)[0]}
                <span className="inline text-[#908f8f] mr-2 " >{item.label}</span>
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
          <Link className="footerLink"  target="blank" href={"/PrivacyPolicy"}>
            Privacy Policy
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
