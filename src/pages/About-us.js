import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import AboutHeroSection from '@/components/about/first';
import AboutSecondSection from '@/components/about/aboutsecond';
import AboutContactForm from '@/components/about/aboutthird';

export default function about() {


    return (
        <main className={`${clashGrotesk.className} ${satoshi.className}`}>
            <Navbar />
            <AboutHeroSection/>
            <AboutSecondSection/>
            <AboutContactForm/>
        </main>
    )
}