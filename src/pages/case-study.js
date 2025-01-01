
import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import CaseStudyFirstSection from '@/components/casestudy/CaseStudyHero';
import Navbar from '@/components/Navbar';
import FeaturedProjects from '@/components/casestudy/secondSection';


export default function Home() {


    return (
      <main className={`${clashGrotesk.className} ${satoshi.className} sm:min-w-[100vw]`}>
        <Navbar/>
        <CaseStudyFirstSection/>
        <FeaturedProjects/>
            </main>
  )
}
