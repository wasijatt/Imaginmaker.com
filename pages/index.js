"use client"
import { useState } from 'react';
import { Search } from 'lucide-react';
import { combineFonts, clashGrotesk, satoshi } from '@/lib/fonts'; // Single import for all font-related items
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AnimatedCarousel from '@/components/Homecarousels';
import WhatWeDo from '@/components/WhatWeDo';
import PerksSection from '@/components/perks-section';
import MembershipSection from '@/components/membership';
import WhyPeopleLikeUs from '@/components/why-people-like-us';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/HeroServices';
import LogoMarquee from '@/components/HeroLogoSection';

export default function Home() {
  return (
    <main className={combineFonts(clashGrotesk, satoshi)}>
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
