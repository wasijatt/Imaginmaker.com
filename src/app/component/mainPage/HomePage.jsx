
"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

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
const Footer = dynamic(() => import("../Footer"), { ssr: false });
const Cursor = dynamic(() => import("../Cursor"), { ssr: false });

const Homepage = () => {
  const scrollRef = useRef(null);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    setComponentsLoaded(true);
  }, []);

  useEffect(() => {
    if (componentsLoaded && typeof window !== "undefined") {
      const LocomotiveScroll = require("locomotive-scroll").default;
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.05,
        smoothMobile: true,
      });

      return () => {
        if (scroll) {
          scroll.destroy();
        }
      };
    }
  }, [componentsLoaded]);

  return (
    <main className="main" data-scroll-container ref={scrollRef}>
      <Cursor />

      <section
        className="lg:block mxl:h-[400] 2xl:h-[500px]"
        data-scroll-section
        data-scroll-speed="1"
      
      >
        <HeroSection
          HeroSectionHead={"A Design Agency With a Twist"}
          HeroSectionPara={"What You Think, We Can Design And Animate."}
          HeroSectionButton={"See Plans"}
        />
      </section>
     
      <section
       className=" lg:block 2xl:h-[455px] mxl:h-[400]"
        data-scroll-section
        data-scroll-speed="0"
        
      >
        <Carousel />
      </section>
    

      <section
      className="lg:block  mxl:h-[] 2xl:h-[150px]"
        data-scroll-section
        data-scroll-speed="2"
        
      >
        
          <Brands />
      
      </section>
      <section
      className="lg:block  lg:h-[700px]"

        data-scroll-section
        data-scroll-speed="0"
    
      >
        <Services />
      </section>
      <section
      className="lg:h-[1050px]"
        data-scroll-section
        data-scroll-speed="0"
       
      >
        <OurServices />
      </section>
      <section
      className="lg:h-[850px]"
        data-scroll-section
        data-scroll-speed="0"

      >
        <MemberShip />
      </section>
      <section
      className="lg:h-[700px]"
        data-scroll-section
        data-scroll-speed="0"
      
      >
        <Plan />
      </section>
      <section
      className="lg:h-[720px]"
        data-scroll-section
        data-scroll-speed="0"
       
      >
        <Login />
      </section>
      <section
      className="lg:h-[380px]"
        data-scroll-section
        data-scroll-speed="0"
        
      >
        <Simplicity />
      </section>
      <section
      className="lg:h-[720px]"
        data-scroll-section
        data-scroll-speed="0"
        
      >
        <Counter />
      </section>
      <section
      className=" mxl:h-[1300] 2xl:h-[1200px]"

        data-scroll-section
        data-scroll-speed="0"
      
      >

        <Faqs />
        <Footer/>
      </section>
     
    </main>
  );
};

export default Homepage;
