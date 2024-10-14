"use client"
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import("../HeroSection"), { ssr: false });
const Carousel = dynamic(() => import("../Carousel"), { ssr: false });
const Brands = dynamic(() => import("../Brands"), { ssr: false });
const Services = dynamic(() => import("../Services"), { ssr: false });
const OurServices = dynamic(() => import("../OurServices"), { ssr: false });
const MemberShip = dynamic(() => import("../MemberShip"), { ssr: false });
const Plan = dynamic(() => import("../Plan"), { ssr: false });
const Login = dynamic(() => import("../Login"), { ssr: false });
const Simplicity = dynamic(() => import("../Simplicity"), { ssr: false });
const Counter = dynamic(() => import("../Counter"), { ssr: false });
const Faqs = dynamic(() => import("../Faqs"), { ssr: false });

const CustomCursor = dynamic(() => import("../Cursor"), { ssr: false });
const SmoothScroll = dynamic(() => import("../SmoothScroll"), { ssr: false });
import style from "../../modulerCss/HeroSection.module.css"
export default function Home() {
  return (

    // <SmoothScroll>

    //   <CustomCursor/>
    //   <HeroSection className="section" 
    //     HeroSectionHead={"A Design Agency With a Twist"}
    //        HeroSectionPara={"What You Think, We Can Design And Animate."}
    //        HeroSectionButton={"See Plans"} />
    //   <Carousel className="section" />
    //   <Brands className="section" />
    //   <Services  />
    //   <OurServices className="section" />
    //   <MemberShip className="section" />
    //   <Plan className="section" />
    //   <Login className="section" />
    //   <Simplicity className="section" />
    //   <Counter className="section" />

    //   <Faqs className="section" />



    // </SmoothScroll>
    <>
     

      <HeroSection mainText={"We are "} subText={'Creative'} fhead={"Design Agency"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"} />
      <Brands />
      <Carousel />
      <Services />
     <OurServices />
   <MemberShip/>
   <Plan/>
   <Simplicity/>


   <Counter  />
<Login/>
     <Faqs/>
      

    </>
  )
}
