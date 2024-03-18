"use client ";
import style from "../modulerCss/HeroSection.module.css";
const Plan = () => {
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
    <div className="w-full mdl:w-[80%] m-auto text-center">
      <h1 className="text-[50px]">Memberships levels</h1>
      <p className="font-bold text-xl">Choose a plan that's right for you.</p>
      <img className="m-auto mt-9" src="/plan/logo.png" alt="" />
      <div className="   flex flex-col mdl:flex-row rounded-3xl mt-36">
        {planList.map((item, index) => (
          <div
            key={index}
            className={`${style.planboxShadow} "border w-full mdl:w-[28%]   rounded-lg p-9 mx-4 my-4"`}
          >
            <h2 className="text-3xl font-extrabold text-left mt-8 ">
              {item.title}
            </h2>
            <p className="font-sm text-left ">{item.des}</p>
            <h1 className="text-[30px] font-bold text-center mt-8">
              ${item.price}$/month
            </h1>
            <button
              className={`${style.boxShadow} " rounded-3xl purpleBg text-white py-2 px-8 mt-9"`}
            >
              Get Started
            </button>
            <h1 className="text-left font-extrabold mt-20">What's Included:</h1>
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
          className={`${style.planboxShadow}" flex flex-col w-full mdl:w-[28%] p-9  " `}
        >
          <div className="border-b-2 py-6 border-[#333]">
            <img
              className="w-[80%] mdl:w-[60%] m-auto"
              src="/Plan/booking.png"
              alt=""
            />
            <h1 className="text-left text-2xl">Book</h1>
            <p className="text-[#7700ff] ">
              If You Need Something Deferent, Let’s Call. We would love to help
              you.
            </p>
            <a
              href="tel:+923005837549"
              className=" text-xl font-semibold"
            >
              Book a call{" "}
            </a>
          </div>
          <div className="mt-9">
            <img
              className="w-[80%] mdl:w-[50%] m-auto "
              src="/Plan/book.png"
              alt=""
            />
            <h1>Book</h1>
            <p className="text-[#7700ff] ">
              Book A Call And Get Your First
            </p>
            <h1 className="text-left text-xl  font-semibold">Design Free</h1>
            <a href="" className="mt-14  ">
              How it works{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plan;
