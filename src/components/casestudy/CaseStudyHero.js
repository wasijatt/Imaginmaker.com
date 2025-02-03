'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { satoshi } from '@/lib/fonts'
import Link from 'next/link'
import { clashGrotesk } from '@/lib/clashGroteskfont'

export default function CaseStudyFirstSection() {
  return (
    <section className="relative min-h-[70vh ] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
            <Image
              src="/HeroSection/herobg.jpg"
              alt="Hero background"
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              priority
            />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 py-8 md:py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-10 md:-mt-3">
          <div className="max-w-2xl 2xl:mb-32 mb-10 relative md:top-[5rem] ">
            {/* Heading with Purple Dot */}
            <h1 className={`${clashGrotesk.className} mb-6 -mt-4 text-5xl font-bold tracking-wide text-white sm:text-6xl lg:text-7xl`}>
              Case Study
              <br />
              Analysis
              <span className="inline-block h-4 w-4 rounded-full bg-[#6D40FF] align-middle ml-1" />
            </h1>


            {/* Description Text */}
            <p className="mb-8 text-lg text-gray-200 sm:text-xl">
              Unlocking insights, perfecting excellence—your go-to for polished
              content. Dive into our enriching case study experience!
            </p>

            {/* Arrow SVG */}
            <div>
              <Image
                src="/casestudy/arrowsvg.svg" // Replace with your actual SVG path
                alt="Decorative arrow"
                width={280}
                height={20}
                className="max-w-[280px]"
              />
            </div>
          </div>

          {/* Button - Centered */}
          <div className="flex justify-center w-full">
            <Link href={'/contact'}>
            <Button 
              className={`${satoshi.className} bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-12 py-2 text-lg hover:bg-[#7D40FF] rounded-full font-bold text-white 2xl:relative 2xl:top-[3rem]`}
              >
              Join Us
            </Button>
              </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
