import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { LogoMarquee } from '@/components/HeroLogoSection';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import CaseStudyHeroSection from '@/components/casestudy/CaseStudyHero';



export default function Home() {


    return (
        <main className={`${clashGrotesk.className} ${satoshi.className} sm:min-w-[100vw]`}>
            <Navbar/>
           <CaseStudyHeroSection/>
        </main>
    )
}
