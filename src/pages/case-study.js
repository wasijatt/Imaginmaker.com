'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import { clashGrotesk } from '@/lib/clashGroteskfont'
import { satoshi } from '@/lib/fonts'

export default function HeroSection() {
    return (
        <>
        <Navbar/>
        <section className="relative h-[50vh] w-full overflow-hidden xl:h-[88vh]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/HeroSection/herobg.jpg" // Replace with your actual image path
                    alt="Background texture"
                    fill
                    className="object-cover brightness-100"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className={`${clashGrotesk.className} relative z-10 mx-auto max-w-7xl px-8 py-20 sm:px-6 lg:px-8 top-[2rem] xl:top-[3rem] `}>
                    <div className=" flex flex-col">
                        <div className="relative max-w-2xl mb-10 xl:left-[4rem]">
                        {/* Heading with Purple Dot */}
                            <h1 className="mb-6 text-5xl xl:text-[4rem] font-bold text-white sm:text-6xl lg:text-7xl tracking-wide space-y-[23px]">
                            Case Study
                            <br />
                            Analysis
                            <span className="text-purple-600">.</span>
                        </h1>

                        {/* Description Text */}
                        <p className={`${satoshi.className} mb-8 text-lg text-gray-200 sm:text-xl font-medium`}>
                            Unlocking insights, perfecting excellence—your go-to for polished
                            content. Dive into our enriching case study experience!
                        </p>

                        {/* Arrow SVG */}
                        <div>
                            <Image
                                src="/arrow.svg" // Replace with your actual SVG path
                                alt="Decorative arrow"
                                width={280}
                                height={20}
                                className="max-w-[280px]"
                            />
                        </div>
                    </div>

                    {/* Button - Centered */}
                    <div className="flex justify-center w-full">
                        <Button
                            className="bg-purple-600 px-8 py-6 text-lg hover:bg-purple-700"
                        >
                            Join Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
