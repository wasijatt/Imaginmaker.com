// import HeroSection from '@/components/heroSection';

"use client"
import { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import AnimatedCarousel from '@/components/Homecarousels';
import WhatWeDo from '@/components/WhatWeDo';
import { satoshi } from '@/lib/fonts';
import PerksSection from '@/components/perks-section';
import MembershipSection from '@/components/membership';
import WhyPeopleLikeUs from '@/components/why-people-like-us';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/HeroServices';
import LogoMarquee from '@/components/HeroLogoSection';



// import Footer from '@/components/Footer';


export default function Home() {


  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <HeroSection />
     <LogoMarquee/>
      <AnimatedCarousel />
      <WhatWeDo />
      <ServicesSection />
      <PerksSection />
      <MembershipSection />
      <WhyPeopleLikeUs />
      <ContactForm />
      <Footer />
    </main>
  )
}


