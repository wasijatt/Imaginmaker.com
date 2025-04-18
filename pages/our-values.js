import { useState } from 'react';
import { Search } from 'lucide-react';
import { combineFonts, clashGrotesk, satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import OurValueHeroSection from '@/components/ourValues/ourvalueHero';
import CapabilitiesSection from '@/components/ourValues/CapabilitiesSection';
import Footer from '@/components/Footer';

export default function services() {


  return (
    <main className={combineFonts(clashGrotesk, satoshi)}>
      <Navbar />
      <OurValueHeroSection/>
      <CapabilitiesSection/>
      <Footer/>
    </main>
  )
}