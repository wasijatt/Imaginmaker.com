// y

// "use client"
// import { useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';

// const HeroSection = dynamic(() => import("../HeroSection"), { ssr: false });
// const Carousel = dynamic(() => import("../Carousel"), { ssr: false });
// const Brands = dynamic(() => import("../Brands"), { ssr: false });
// const Services = dynamic(() => import("../Services"), { ssr: false });
// const OurServices = dynamic(() => import("../OurServices"), { ssr: false });
// const MemberShip = dynamic(() => import("../MemberShip"), { ssr: false });
// const Plan = dynamic(() => import("../Plan"), { ssr: false });
// const Login = dynamic(() => import("../Login"), { ssr: false });
// const Simplicity = dynamic(() => import("../Simplicity"), { ssr: false });
// const Counter = dynamic(() => import("../Counter"), { ssr: false });
// const Faqs = dynamic(() => import("../Faqs"), { ssr: false });
// const Footer = dynamic(() => import("../Footer"), { ssr: false });

// const Homepage = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       console.log('Initializing Locomotive Scroll');
//       const LocomotiveScroll = require('locomotive-scroll').default;
//       const scroll = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//       });

//       console.log('Locomotive Scroll initialized', scroll);

//       return () => {
//         if (scroll) {
//           console.log('Destroying Locomotive Scroll');
//           scroll.destroy();
//         }
//       };
//     }
//   }, []);

//   return (
//     <main className="main" data-scroll-container ref={scrollRef}>
//       <section data-scroll-section data-scroll data-scroll-speed={0}>
//         <HeroSection
//           HeroSectionHead={"A Design Agency With a Twist"}
//           HeroSectionPara={"What You Think, We Can Design And Animate."}
//           HeroSectionButton={"See Plans"}
//         />
//         <Carousel />
//       </section>

//       <section data-scroll-section data-scroll data-scroll-speed={10}>
//         <Brands />
//         <Services />
//       </section>
//       <section data-scroll-section data-scroll>
//         <OurServices />
//       </section>
//       <section data-scroll-section data-scroll data-scroll-speed={0}>
//         <MemberShip />
//       </section>
//       <section data-scroll-section data-scroll>
//         <Plan />
//       </section>
//       <section data-scroll-section data-scroll>
//         <Login />
//       </section>
//       <section data-scroll-section data-scroll>
//         <Simplicity />
//       </section>
//       <section data-scroll-section data-scroll>
//         <Counter />
//       </section>
//       <section data-scroll-section data-scroll>
//         <Faqs />
//       </section>
//       <section data-scroll-section data-scroll>
//         <Footer />
//       </section>
//     </main>
//   );
// }

// export default Homepage;

// "use client";
// import { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";

// const HeroSection = dynamic(() => import("../HeroSection"), { ssr: false });
// const Carousel = dynamic(() => import("../Carousel"), { ssr: false });
// const Brands = dynamic(() => import("../Brands"), { ssr: false });
// const Services = dynamic(() => import("../Services"), { ssr: false });
// const OurServices = dynamic(() => import("../OurServices"), { ssr: false });
// const MemberShip = dynamic(() => import("../MemberShip"), { ssr: false });
// const Plan = dynamic(() => import("../Plan"), { ssr: false });
// const Login = dynamic(() => import("../Login"), { ssr: false });
// const Simplicity = dynamic(() => import("../Simplicity"), { ssr: false });
// const Counter = dynamic(() => import("../Counter"), { ssr: false });
// const Faqs = dynamic(() => import("../Faqs"), { ssr: false });
// const Footer = dynamic(() => import("../Footer"), { ssr: false });

// const Homepage = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const LocomotiveScroll = require("locomotive-scroll").default;
//       const scroll = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         // damping: 0.1,
//         lerp: 0.05,
//         // step: 50,
//         smoothMobile: true,
//       });

//       return () => {
//         if (scroll) {
//           scroll.destroy();
//         }
//       };
//     }
//   }, []);

//   return (
//     <main className="main" data-scroll-container ref={scrollRef}>
//       <section data-scroll-section  data-scroll-speed="1">
//         <HeroSection
//           HeroSectionHead={"A Design Agency With a Twist"}
//           HeroSectionPara={"What You Think, We Can Design And Animate."}
//           HeroSectionButton={"See Plans"}
//         />
//         <Carousel />
//         <Brands />
//         <Services />

       
//       </section>

//       <section data-scroll-section data-scroll-speed="-1">
//         <div data-scroll data-scroll-delay="0">
//           <OurServices />
//           <MemberShip />

//         </div>
//         {/* <div data-scroll data-scroll-delay="0.2">
//           <Services />
//         </div> */}
//       </section>
//       {/* <section data-scroll-section data-scroll-speed="1">
//         <OurServices />
//       </section> */}
//       <section data-scroll-section data-scroll-speed="0">
//         <MemberShip />
//       </section>
//       <section data-scroll-section data-scroll-speed="0">
//         <Plan />
//       </section>
//       <section  className="mdl:-mt-[20vh]" data-scroll-section data-scroll-speed="1">
//         <Login />
//         <Simplicity />

//       </section>
   
//       <section data-scroll-section data-scroll-speed="1">
//         <Counter />
     
//       </section>
//      <section  className="mdl:-mt-[20vh]" data-scroll-section data-scroll-speed="2">
//         <Faqs />
     

//       </section> 
//      <section className="mdl:-mt-20 " data-scroll-section data-scroll-speed="1">
//         <Footer />
//       </section> 
//     </main>
//   );
// };

// export default Homepage;



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
    setComponentsLoaded(true);  // Set to true when all components are loaded
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
  }, [componentsLoaded]); // Run this effect only when components are loaded

  return (
    <main className="main" data-scroll-container ref={scrollRef}>
      <Cursor/>
      <section data-scroll-section data-scroll-speed="1">
        <HeroSection
          HeroSectionHead={"A Design Agency With a Twist"}
          HeroSectionPara={"What You Think, We Can Design And Animate."}
          HeroSectionButton={"See Plans"}
        />
        <Carousel />
      </section>
   
    <section className="hidden mdl:block" data-scroll-section data-scroll-speed="1">
      <HeroSection
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />
      <Carousel />
    </section>
    <section className="mdl:hidden" data-scroll-section data-scroll-speed="1">
      <HeroSection
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />
      <Carousel />
      <Brands />
      <Services />

    </section>

      <section data-scroll-section data-scroll-speed="2">
        <div data-scroll data-scroll-delay="0.1">
          <Brands />
        </div>
        <div data-scroll data-scroll-delay="0.2">
          <Services />
        </div>
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <OurServices />
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <MemberShip />
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <Plan />
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <Login />
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <Simplicity />
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <Counter />
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <Faqs />
      </section>
      <section data-scroll-section data-scroll-speed="0">
        <Footer />
      </section>
    </main>
  );
};

export default Homepage;
