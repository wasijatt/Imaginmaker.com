"use client ";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./component/HeroSection"), {
  ssr: true,
  loading: () => <div className="bg-white animate-pulse h-32 w-full"></div>,
});
const Carousel = dynamic(() => import("./component/Carousel"), {
  ssr: true,
  loading: () => <div className="bg-white animate-pulse h-32 w-full"></div>,
});
const Brands = dynamic(() => import("./component/Brands"), {
  ssr: true,
  loading: () => <div className="bg-white animate-pulse h-32 w-full"></div>,
});
const Services = dynamic(() => import("./component/Services"), {
  ssr: true,
  loading: () => (
    <div className="bg-white animate-pulse h-32 w-full"> loading</div>
  ),
});
const OurServices = dynamic(() => import("./component/OurServices"), {
  ssr: true,
  loading: () => (
    <div className="bg-white animate-pulse h-32 w-full"> loading</div>
  ),
});
const MemberShip = dynamic(() => import("./component/MemberShip"), {
  ssr: true,
  loading: () => (
    <div className="bg-white animate-pulse h-32 w-full"> loading</div>
  ),
});
const Login = dynamic(() => import("./component/Login"), {
  ssr: true,
  loading: () => (
    <div className="bg-white animate-pulse h-32 w-full"> loading</div>
  ),
});
const Plan = dynamic(() => import("./component/Plan"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Simplicity = dynamic(() => import("./component/Simplicity"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Counter = dynamic(() => import("./component/Counter"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Faqs = dynamic(() => import("./component/Faqs"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Footer = dynamic(() => import("./component/Footer"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});

export default function page() {
  return (
    <div>
      <HeroSection
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />

      <div className=" p-1 mdl:p-4 w-full  purpleBg">
        <div className="m-auto w-[90%] ">
          <Carousel />
        </div>
      </div>

      
        <Brands />
          <Services />
        <OurServices />
        <MemberShip />
  <Plan />
        <Login />
    <Simplicity/>
    <Counter/>
     <Faqs/>
     <Footer/>
    </div>
  );
}
