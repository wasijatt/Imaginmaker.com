import { useState } from 'react';
import { Search } from 'lucide-react';
import { combineFonts, clashGrotesk, satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CafeSection from '@/components/QuickCraveCafe/first';
// import DiagonalSection from '@/components/QuickCraveCafe/quickcravesecond';



export default function QuickCraveCafe() {


    return (
        <main className={combineFonts(clashGrotesk, satoshi)}>
            <Navbar/>
            <CafeSection/>
           {/* <DiagonalSection/> */}
            <Footer/>
        </main>
    )
}