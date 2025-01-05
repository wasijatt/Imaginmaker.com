import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import ServicesFirstSection from '@/components/services/firstSection';
import PortfolioSection from '@/components/services/PortfolioSection';
import Footer from '@/components/Footer';

export default function services() {


  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <ServicesFirstSection />
      <PortfolioSection/>
      <Footer/>
    </main>
  )
}