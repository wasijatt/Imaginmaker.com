import { useState } from 'react';
import { Search } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CafeSection from '@/components/QuickCraveCafe/first';
// import DiagonalSection from '@/components/QuickCraveCafe/quickcravesecond';



export default function QuickCraveCafe() {


    return (
        <main className={`${clashGrotesk.className} ${satoshi.className}`}>
            <Navbar/>
            <CafeSection/>
           {/* <DiagonalSection/> */}
            <Footer/>
        </main>
    )
}