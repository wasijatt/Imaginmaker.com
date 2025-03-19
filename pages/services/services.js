"use client";
import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import ServicesFirstSection from '@/components/services/firstSection';
import { PortfolioGallery } from '@/components/services/PortfolioSection';
import Footer from '@/components/Footer';
import { PinterestGallery } from '@/components/services/GalleryGrid';

export default function Services() { // Renamed to "Services" (uppercase)
  const [activeCategory, setActiveCategory] = useState("graphic");
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <ServicesFirstSection />
      <PinterestGallery 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory}
        activeSubcategory={activeSubcategory}
        onSubcategoryChange={setActiveSubcategory}
      />
      {/* <Footer/> */}
    </main>
  );
}