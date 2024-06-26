"use client ";
import { useState } from "react";
import style from "../modulerCss/HeroSection.module.css";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";


const Plan = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [payment, setpayment] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleOpen = (plan) => {
    setSelectedPlan(plan);
    setShowPopup(true);
  };
  
  const handlePayments = () => { 
    setShowPopup(false);
setpayment(true)
  }
  const handlePaymentsClose = () => { 
setpayment(false)
   
  }
 
  

  const acounts = [ 
    "/Acounts/Credit Card.png",
    "/Acounts/Paypal.png",
    "/Acounts/Transparent.png",
    "/Acounts/Visa Card.png",
  ];

  const planList = [
    {
      title: "Standard",
      price: "1000",
      des: "One request a time. Pause or cancel anytime.",
      specs: [
        "One request at a time",
        "Unlimited Social Media Design",
        "Animated Banners and Posts",
        "1 Figma Design",
        "1 Website Design",
        "Pause or cancel anytime",
      ],
    },
    {
      title: "Pro",
      price: "1800",
      des: "Double the requests. Pause or cancel anytime.",
      specs: [
        "Two request at a time",
        "Unlimited Social Media Design",
        "Animated Banners and Posts",
        "2 Figma Design",
        "2 Website Design",
        "Pause or cancel anytime",
      ],
    },
  ];

  return (
    <div className="w-full lg:w-[80%] m-auto text-center">
      <h1 className="text-xl mt-5 lg:text-[50px]">Memberships levels</h1>
      <p className="font-bold text-sm lg:text-xl lg:mt-3">
        Choose a plan that&apos;s right for you.
      </p>
      <Image
        className="m-auto mt-9"
        src="/plan/logo.png"
        alt="logo"
        width={200}
        height={200}
      />
      <div className="flex flex-col lg:flex-row rounded-3xl mxl:mt-5 lg:mt-26">
        {planList.map((item, index) => (
          <div
            key={index}
            className={`${style.planboxShadow} "border w-[98%] lg:w-[28%] box-border	  rounded-lg p-9 lg:mx-4 my-4"`}
          >
            <h2 className="text-3xl font-extrabold text-left mt-8">
              {item.title}
            </h2>
            <p className="font-sm text-left ">{item.des}</p>
            <h1 className="text-[30px] font-bold text-center mt-8">
              ${item.price}$/month
            </h1>
            <button
              className={`${style.boxShadow} "mt-6 rounded-3xl purpleBg text-white py-2 px-8 mt-9"`}
              onClick={() => handleOpen(item)} 
            >
              Get Started
            </button>
            <h1 className="text-left font-extrabold mt-20">
              What&apos;s Included:
            </h1>
            <ul className="mt-4 text-left">
              {item.specs.map((spec, idx) => (
                <li key={idx} className="mb-2">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div
          className={`${style.planboxShadow}" flex flex-col w-full lg:w-[28%] p-9  " `}
        >
          <div className="border-b-2 py-6 border-[#333]">
            <Image
              className="w-[65%] lg:w-[60%] m-auto"
              src="/Plan/booking.png"
              width={80}
              height={80}
              alt="booking"
            />
            <h1 className="text-left text-2xl">Book</h1>
            <Link href={" https://wa.me/971567208725"} className="text-[#7700ff]">
              If You Need Something Deferent, Let’s Call. We would love to help
              you.
            </Link>
            <a href="tel:+923005837549" className="text-xl font-semibold">
              Book a call
            </a>
          </div>
          <div className="mt-9">
            <Image
              className="w-[70%] lg:w-[50%] m-auto "
              src="/Plan/book.png"
              width={80}
              height={80}
              alt="booking"
            />
            <h1>Book</h1>
            <Link href={" https://wa.me/971567208725"} className="text-[#7700ff]">Book A Call And Get Your First</Link>
            <h1 className="text-left text-xl  font-semibold">Design Free</h1>
            <Link href="" className="mt-14">
              How it works
            </Link>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-xl bg-[#10101051] bg-opacity-50 overlay"
          onClick={handleClose}
        >

          <div className="w-full lg:w-[70%] h-full lg:h-[400px] bg-[#ffffff] flex flex-wrap px-10 rounded-2xl ">
          <div className="p-6 absolute right-4" ><RxCross2 
  className="text-[#7700ff] text-[40px] bg-[#b8b7b7] rounded-full p-6 " onClick={handleClose}/>
</div>
            <div className={`${style.planboxShadow} "w-full lg:w-[30%] m-4 bg-[#eeeded] p-4 rounded-3xl" `}>
              
              <h1 className=" text-[20px] lg:text-[30px] font-bold text-center mt-8">Choose One </h1> 
              <div className="flex flex-wrap">
                {acounts.map((imageSrc, index) => (
                  <Image onClick={handlePayments} className="w-[30%] " width={100} height={100} key={index} src={imageSrc} alt={`Image ${index}`} />
                ))}
              </div>
            </div>
            <div className={`${style.planboxShadow} "w-full lg:w-[30%] m-4 bg-[#eeeded] p-4 justify-between " `}>
              <h1 className="text-3xl font-extrabold mt-8">{selectedPlan.title}</h1>
              <p className="font-sm text-left" >{selectedPlan.des}</p>
              <h1 className="text-[15px] lg:text-[30px] font-bold text-center mt-8">{selectedPlan.price}/month</h1>
              <p>Pause or cancel anytime</p>
            </div>
            <div className={`${style.planboxShadow} " w-full lg:w-[30%] m-4 bg-[#eeeded] p-4 " `}>
         
             
            <ul className="mt-4 text-left">
          {selectedPlan.specs.map((spec, idx) => (
            <li key={idx} className="mb-2">
              {spec}
            </li>
          ))}
        </ul>
            </div>
          </div>
        </div>
      )}
      {payment && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-xl bg-[#10101051] bg-opacity-50 overlay"
        onClick={handlePaymentsClose}
        >
         <div className="w-1/2 bg-white">jhgydYASIU</div>
        </div>
      )}
    </div>
  );
};

export default Plan;
