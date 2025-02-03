import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import BlogHeader from '@/components/journal/hero';
import SubscribeSection from '@/components/journal/journalThird';
import Footer from '@/components/Footer';
import BlogSection from '@/components/journal/blog';

export default function journal() {


  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <BlogHeader/>
      <BlogSection/>
      <SubscribeSection/>
      <Footer/>
    </main>
  )
}