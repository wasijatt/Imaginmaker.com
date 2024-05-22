"use client";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const LocomotiveScroll = require("locomotive-scroll").default;
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        damping: 0.1,
        lerp: 0.05,
        step: 50,
        smoothMobile: true,
      });

      return () => {
        if (scroll) {
          scroll.destroy();
        }
      };
    }
  }, []);

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
