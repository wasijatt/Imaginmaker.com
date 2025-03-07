"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { clashGrotesk } from "@/lib/clashGroteskfont"
import { satoshi } from "@/lib/fonts"

export default function HeroSection() {
  const scrollToMembership = () => {
    const membershipSection = document.getElementById("membership")
    if (membershipSection) {
      membershipSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6
      /* Height adjustments for different screens */
      h-[53vh] 
      sm:h-[60vh] 
      md:min-h-[500px] md:h-[70vh] 
      lg:h-[80vh] 
      xl:h-[75vh] 
      2xl:h-[70vh]
      /* Special case for 1024x600 screens */
      [height:600px]:[width:1024px]:h-[85vh]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/HeroSection/herobg.jpg" alt="Background" fill className="object-cover opacity-100" priority />
        <div className="absolute inset-0" />
      </div>

      {/* Content Container */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-2 sm:px-4 
        py-10 sm:py-16 md:py-20
        mt-4 sm:mt-8 md:mt-0 2xl:mt-28
        [height:600px]:[width:1024px]:py-10 [height:600px]:[width:1024px]:mt-[12rem]"
      >
        <div className="flex flex-col items-start">
          {/* Heading Section */}
          <div className="relative mb-4 sm:mb-6 [height:600px]:[width:1024px]:mb-3">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide">
              <span>We are </span>
              <span className={`${clashGrotesk.className} relative inline-block text-[#6D40FF] font-medium`}>
                Creative
                {/* Star SVG */}
                <svg
                  className="absolute -right-4 -top-2 h-6 w-6 md:-right-6 md:-top-3 md:h-8 md:w-8 text-[#6D40FF]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
                </svg>
              </span>
              <br />
              <span>Design Agency</span>
              <span className="inline-block h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#6D40FF] align-middle ml-1" />
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl tracking-wide text-gray-300 [height:600px]:[width:1024px]:mb-3 [height:600px]:[width:1024px]:text-base">
            What You Think, We Can Design for your Businesses!
          </p>

          {/* Arrow Image */}
          <div className="mb-8 sm:mb-10 md:mb-12 [height:600px]:[width:1024px]:mb-4">
            <Image
              src="/casestudy/arrowsvg.svg"
              alt="Arrow"
              width={200}
              height={40}
              className="w-[180px] sm:w-[220px] md:w-[250px] h-auto"
            />
          </div>

          {/* Button and Footer Text Container */}
          <div className="flex w-full flex-col items-center space-y-3 sm:space-y-4 [height:600px]:[width:1024px]:space-y-2">
            {/* Button */}
            <button
              onClick={scrollToMembership}
              className={`${satoshi.className} tracking-normal rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] 
                px-6 sm:px-8 py-2 
                text-base sm:text-lg 
                font-semibold text-white transition-colors hover:bg-[#6D40FF]/90 
                mt-4 sm:mt-6 md:mt-10 [height:600px]:[width:1024px]:mt-2 [height:600px]:[width:1024px]:py-1.5 [height:600px]:[width:1024px]:text-base`}
            >
              See Plans
            </button>

            {/* Footer Text */}
            <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-white">
              <span>Designs you&apos;ll</span>
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-[#6D40FF]" />
              <span>Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

