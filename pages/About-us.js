import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import AboutHeroSection from '@/components/about/first';
import AboutSecondSection from '@/components/about/aboutsecond';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/second';

export default function about() {


    return (
        <main className={`${clashGrotesk.className} ${satoshi.className}`}>
            <Navbar />
            <AboutHeroSection/>
            <AboutSecondSection/>
            <ContactForm/>
            <Footer/>
        </main>
    )
}