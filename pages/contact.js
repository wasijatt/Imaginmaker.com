import { useState } from 'react';
import { Search } from 'lucide-react';
import { combineFonts, clashGrotesk, satoshi } from '@/lib/fonts';
import ContactFirstSection from '@/components/contact/first';
import Navbar from '@/components/Navbar';
import ContactSecondSection from '@/components/contact/second';
import Footer from '@/components/Footer';

export default function contact() {


    return (
        <main className={combineFonts(clashGrotesk, satoshi)}>
            <Navbar/>
            <ContactFirstSection />
            <ContactSecondSection/>
            <Footer/>
        </main>
    )
}