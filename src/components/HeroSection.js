'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { clashGrotesk } from '@/lib/clashGroteskfont'
import { satoshi } from '@/lib/fonts'

export default function HeroSection() {
  return (
    <section className="relative md:min-h-[600px] h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[75vh] 2xl:h-[70vh] w-full overflow-hidden px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroSection/herobg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 my-14 md:mt-28 mt-20">
        <div className="flex flex-col items-start">
          {/* Heading Section */}
          <div className="relative mb-6 ">
            <h1 className="text-3xl font-bold text-white md:text-6xl lg:text-7xl tracking-wide">
              <span>We are{' '}</span>
              <span className={`${clashGrotesk.className} relative inline-block text-[#6D40FF] font-medium `}>
                Creative
                {/* Star SVG */}
                <svg
                  className="absolute -right-8 -top-6 h-8 w-8 text-[#6D40FF]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
                </svg>
              </span>
              <br />
              <span>Design Agency</span>
              <span className="inline-block h-5 w-5 rounded-full bg-[#6D40FF] align-middle ml-1" />
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mb-6 text-lg text-gray-300 md:text-xl">
            What You Think, We Can Design for your Businesses!
          </p>

          {/* Arrow Image */}
          <div className="mb-12">
            <Image
              src="/casestudy/arrowsvg.svg"
              alt="Arrow"
              width={250}
              height={50}
            />
          </div>

          {/* Button and Footer Text Container */}
          <div className="flex w-full flex-col items-center space-y-4">
            {/* Button */}
            <button className={`${satoshi.className} rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-purple-700 md:mt-10 `}>
              See Plans
            </button>

            {/* Footer Text */}
            <div className="flex items-center justify-center space-x-2 text-white">
              <span>Designs you&apos;ll</span>
              <Heart className="h-5 w-5 text-[#6D40FF]" />
              <span>Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
