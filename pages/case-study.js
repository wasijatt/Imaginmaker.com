
import { useState } from 'react';
import { Search } from 'lucide-react';
import { combineFonts, clashGrotesk, satoshi } from '@/lib/fonts';
import CaseStudyFirstSection from '@/components/casestudy/CaseStudyHero';
import Navbar from '@/components/Navbar';
import FeaturedProjects from '@/components/casestudy/secondSection';
import LetsTalkSection from '@/components/casestudy/thirdSection';
import Footer from '@/components/Footer';


export default function Home() {


    return (
      <main className={combineFonts(clashGrotesk, satoshi)}>
        <Navbar/>
        <CaseStudyFirstSection/>
        <FeaturedProjects/>
        <LetsTalkSection/>
        <Footer/>
            </main>
  )
}
