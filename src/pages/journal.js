import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import BlogHeader from '@/components/journal/hero';
import SubscribeSection from '@/components/journal/journalThird';

export default function journal() {


  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <BlogHeader/>
      <SubscribeSection/>
    </main>
  )
}