"use client";
import HeroSection from "../HeroSection";
import Tabs from "../Tabs";
import Simplicity from "../Simplicity";
import Login from "../Login";
import Cursor from "../Cursor";
import Footer from "../Footer";
import { useEffect, useRef, useState } from "react";

const Page = () => {
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
        data-scroll-container
        ref={scrollRef}
        className="main lg:h-[1700px] overflow-auto"
        data-scroll-section
        data-scroll-speed="0"
      >
        <Tabs />
      </section>
      <section
        className="lg:h-[350px] mt-[10vh]"
        data-scroll-section
        data-scroll-speed="0"
      >
        <Simplicity />
      </section>
      <section className="lg:h-[720px]" data-scroll-section data-scroll-speed="0">
        <Login />
      </section>
      <Cursor />
      <section className="lg:h-[360px]" data-scroll-section data-scroll-speed="0">
        <Footer />
      </section>
    </main>
  );
};

export default Page;
