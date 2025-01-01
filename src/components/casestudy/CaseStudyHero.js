'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { satoshi } from '@/lib/fonts'

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
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col ">
          <div className="max-w-2xl 2xl:mb-32 mb-10 relative md:top-[4rem]">
            {/* Heading with Purple Dot */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Case Study
              <br />
              Analysis
              <span className="font-bold text-[#9F00FF] relative md:top-[-2.5rem] md:left-[17rem] top-[-1.8rem] left-[11.5rem] sm:left-[14.5rem]">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_i_3172_140)">
                    <circle cx="7.5" cy="8" r="7.5" fill="url(#paint0_linear_3172_140)" />
                  </g>
                  <defs>
                    <filter id="filter0_i_3172_140" x="-1.15385" y="0.5" width="16.1538" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-1.15385" />
                      <feGaussianBlur stdDeviation="0.634615" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3172_140" />
                    </filter>
                    <linearGradient id="paint0_linear_3172_140" x1="9.80769" y1="12.0385" x2="-6.51228" y2="12.9245" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7D40FF" />
                      <stop offset="1" stopColor="#6F00FF" />
                    </linearGradient>
                  </defs>
                </svg>

                </span>
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
            <Button 
              className={`${satoshi.className} bg-[#8D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-12 py-2 text-lg hover:bg-purple-700 rounded-full font-bold text-whiteb 2xl:relative 2xl:top-[3rem]`}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
