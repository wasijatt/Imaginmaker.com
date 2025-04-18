import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import ContactFirstSection from '@/components/contact/first';
import Navbar from '@/components/Navbar';
import ContactSecondSection from '@/components/contact/second';
import Footer from '@/components/Footer';

export default function contact() {


    return (
        <main className={`${clashGrotesk.className} ${satoshi.className}`}>
            <Navbar/>
            <ContactFirstSection />
            <ContactSecondSection/>
            <Footer/>
        </main>
    )
}