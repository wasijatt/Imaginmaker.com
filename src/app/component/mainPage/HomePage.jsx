// "use client";
// import { useEffect, useRef, useState } from "react";
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
// const Cursor = dynamic(() => import("../Cursor"), { ssr: false });

// const Homepage = () => {
//   const scrollRef = useRef(null);
//   const [componentsLoaded, setComponentsLoaded] = useState(false);

//   useEffect(() => {
//     setComponentsLoaded(true);
//   }, []);

//   useEffect(() => {
//     if (componentsLoaded && typeof window !== "undefined") {
//       const LocomotiveScroll = require("locomotive-scroll").default;
//       const scroll = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         lerp: 0.05,
//         smoothMobile: true,
//       });

//       return () => {
//         if (scroll) {
//           scroll.destroy();
//         }
//       };
//     }
//   }, [componentsLoaded]);

//   return (
//     <main className="main" data-scroll-container ref={scrollRef}>
//       <Cursor/>

//       <section className="hidden mdl:block" data-scroll-section data-scroll-speed="1">
//         <HeroSection
//           HeroSectionHead={"A Design Agency With a Twist"}
//           HeroSectionPara={"What You Think, We Can Design And Animate."}
//           HeroSectionButton={"See Plans"}
//         />
//         <Carousel />
//       </section>
//       <section className="mdl:hidden" data-scroll-section data-scroll-speed="1">
//         <HeroSection
//           HeroSectionHead={"A Design Agency With a Twist"}
//           HeroSectionPara={"What You Think, We Can Design And Animate."}
//           HeroSectionButton={"See Plans"}
//         />
//         <Carousel />
//         <Brands />
//         <Services />
//       </section>

//       <section data-scroll-section data-scroll-speed="2">
//         <div data-scroll data-scroll-delay="0.1">
//           <Brands />
//         </div>
//         <div data-scroll data-scroll-delay="0.2">
//           <Services />
//         </div>
//       </section>
//       <section data-scroll-section data-scroll-speed="0">
//         <OurServices />
//       </section>
//       <section data-scroll-section data-scroll-speed="0">
//         <MemberShip />
//       </section>
//       <section data-scroll-section data-scroll-speed="0">
//         <Plan />
//       </section>
//       <section  data-scroll-section data-scroll-speed="0">
//         <Login />
//       </section>
//       <section data-scroll-section data-scroll-speed="0">
//         <Simplicity />
//       </section>
//       <section  data-scroll-section data-scroll-speed="0">
//         <Counter />
//       </section>
//       <section  data-scroll-section data-scroll-speed="0">
//         <Faqs />
//       </section>
//       <section data-scroll-section data-scroll-speed="0">
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
        className="hidden mdl:block"
        data-scroll-section
        data-scroll-speed="1"
        style={{ height: "55vh" }}
      >
        <HeroSection
          HeroSectionHead={"A Design Agency With a Twist"}
          HeroSectionPara={"What You Think, We Can Design And Animate."}
          HeroSectionButton={"See Plans"}
        />
      </section>
     
      <section
       className="hidden mdl:block"
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "50vh" }}
      >
        <Carousel />
      </section>
      <section
        className="mdl:hidden"
        data-scroll-section
        data-scroll-speed="1"
        style={{ height: "100vh" }}
      >
        <HeroSection
          HeroSectionHead={"A Design Agency With a Twist"}
          HeroSectionPara={"What You Think, We Can Design And Animate."}
          HeroSectionButton={"See Plans"}
        />
        <Carousel />
        <Brands />
        <Services />
      </section>

      <section
      className="mdl:block hidden"
        data-scroll-section
        data-scroll-speed="2"
        style={{ height: "15vh" }}
      >
        
          <Brands />
      
      </section>
      <section
      className="mdl:block hidden"

        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "70vh" }}
      >
        <Services />
      </section>
      <section
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "115vh" }}
      >
        <OurServices />
      </section>
      <section
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "90vh" }}
      >
        <MemberShip />
      </section>
      <section
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "75vh" }}
      >
        <Plan />
      </section>
      <section
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "85vh" }}
      >
        <Login />
      </section>
      <section
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "50vh" }}
      >
        <Simplicity />
      </section>
      <section
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "80vh" }}
      >
        <Counter />
      </section>
      <section
        data-scroll-section
        data-scroll-speed="0"
        style={{ height: "149vh" }}
      >
        <Faqs />

        <Footer />
      </section>
    </main>
  );
};

export default Homepage;
