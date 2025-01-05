import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import OurValueHeroSection from '@/components/ourValues/ourvalueHero';
import CapabilitiesSection from '@/components/ourValues/CapabilitiesSection';

export default function services() {


  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <OurValueHeroSection/>
      <CapabilitiesSection/>
    </main>
  )
}