"use client";
import { useState } from "react";
import style from "../modulerCss/HeroSection.module.css";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { PiPencilSimpleFill } from "react-icons/pi";
import { BsDisplayFill } from "react-icons/bs";



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
      price: "999",
      // icon: "/Plan/pen.svg",
      icon: <PiPencilSimpleFill />
      ,
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
      price: "1799",
      des: "Double the requests. Pause or cancel anytime.",
      specs: [
        "Two request at a time",
        "Unlimited Social Media Design",
        "Animated Banners and Posts",
        "2 Figma Design",
        "2 Website Design",
        "Pause or cancel anytime",
      ],
      icon: <BsDisplayFill />
      ,

    },
  ];

  return (
    <div className="w-full text-white lg:w-[100%] m-auto flex flex-col justify-center items-center py-20 bg-black relative">
      <div className={`${style.memberShip} " " `}></div>
      <h1 className="text-xl  lg:text-[50px]">Memberships levels</h1>
      <div className="w-28  mt-6  h-1 bg-[#7D40FF]"></div>

      <p className="font-bold text-sm lg:text-xl lg:mt-3">
        Choose a plan that&apos;s right for you.
      </p>

      <div className="flex flex-col lg:flex-row justify-evenly items-center z-50 rounded-3xl mxl:mt-5 lg:mt-[50px] lg-w-[90%]  ">
        {planList.map((item, index) => (
          <div
            key={index}
            className="relative border-[1px] border-[#7D40FF] w-[98%]   lg:w-[25%] box-border	bg-black flex flex-col justify-center items-center rounded-3xl p-9 lg:px-12  my-8lg:my-4"
          >
            <div className="absolute p-4 rounded-full border-[1px] bg-black border-[#7700ff] m-auto top-0 -translate-x-0.5 -translate-y-1/2 text-2xl text-[#b1b1b1] font-bold">
              {item.icon}
             
            </div>
            <h2 className="text-[15px] mt-4  border-[1px] border-[#a3a3a3] py-1 px-4 rounded-full">
              {item.title}
            </h2>
            <h1 className="text-[35px]  font-bold  mt-4">
              ${item.price}/$
            </h1>
            <p className="text-[13px]   text-center">{item.des}</p>

            <ul className="mt-4">
              {item.specs.map((spec, idx) => (
                <li key={idx} className="mb-2 text-sm ">
                  <Image className="inline mr-3" width={15} height={15} alt="list-icon" quality={75} src={"/Plan/list-icon.svg"}></Image>
                  {spec}
                </li>
              ))}
            </ul>
            <button
              className={`${style.boxShadow} "mt-[30px]  rounded-3xl purpleBg  py-1 px-4 "`}
              onClick={() => handleOpen(item)}
            >
              Get Started
            </button>
          </div>
        ))}
        <div
          className={`${style.planboxShadow}" flex flex-col w-full lg:w-[28%] p-9  " `}
        >
          <div className="border-b-2 py-6 border-[#333]">
            <Image
              className="w-[65%] lg:w-[60%] m-auto "
              src="/Plan/booking.svg"
              width={80}
              height={80}
              alt="booking"
            />
            <h1 className="text-left text-2xl">Book</h1>
            <Link href={" https://wa.me/971567208725"} className=" text-white">
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
              src="/Plan/book.svg"
              width={80}
              height={80}
              alt="booking"
            />
            <h1>Book</h1>
            <Link href={" https://wa.me/971567208725"} className="text-[#7700ff]">Book A Call And Get Your First</Link>
            <h1 className="text-left text-xl  font-semibold">Design Free</h1>
            <Link href="" className=" mt-14">
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
              className="text-[#7700ff] text-[40px] bg-[#b8b7b7] rounded-full p-6 " onClick={handleClose} />
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
