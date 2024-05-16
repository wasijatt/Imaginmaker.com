


"use client"
import { useEffect, useRef } from 'react';
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
const Footer = dynamic(() => import("../Footer"), { ssr: false });

const Homepage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Initializing Locomotive Scroll');
      const LocomotiveScroll = require('locomotive-scroll').default;
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      console.log('Locomotive Scroll initialized', scroll);

      return () => {
        if (scroll) {
          console.log('Destroying Locomotive Scroll');
          scroll.destroy();
        }
      };
    }
  }, []);

  return (
    <main className="main" data-scroll-container ref={scrollRef}>
      <section data-scroll-section data-scroll data-scroll-speed={0}>
        <HeroSection 
          HeroSectionHead={"A Design Agency With a Twist"}
          HeroSectionPara={"What You Think, We Can Design And Animate."}
          HeroSectionButton={"See Plans"}
        />
        <Carousel />
      </section>

      <section data-scroll-section data-scroll data-scroll-speed={10}>
        <Brands />
        <Services />
      </section>
      <section data-scroll-section data-scroll>
        <OurServices />
      </section>
      <section data-scroll-section data-scroll data-scroll-speed={0}>
        <MemberShip />
      </section>
      <section data-scroll-section data-scroll>
        <Plan />
      </section>
      <section data-scroll-section data-scroll>
        <Login />
      </section>
      <section data-scroll-section data-scroll>
        <Simplicity />
      </section>
      <section data-scroll-section data-scroll>
        <Counter />
      </section>
      <section data-scroll-section data-scroll>
        <Faqs />
      </section>
      <section data-scroll-section data-scroll>
        <Footer />
      </section>
    </main>
  );
}

export default Homepage;
