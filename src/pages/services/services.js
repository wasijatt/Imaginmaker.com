import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import ServicesFirstSection from '@/components/services/firstSection';
import { PortfolioGallery } from '@/components/services/PortfolioSection';
import Footer from '@/components/Footer';
import { PinterestGallery } from '@/components/services/GalleryGrid';

export default function services() {


  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <ServicesFirstSection />
      <PinterestGallery />
      {/* <Footer/> */}
    </main>
  )
}