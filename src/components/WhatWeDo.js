'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { satoshi } from '@/lib/fonts'

const testimonials = [
  {
    id: 1,
    image: "/Reviews/1.png"
  },
  {
    id: 2,
    image: "/Reviews/1.png"
  },
  {
    id: 3,
    image: "/Reviews/1.png"
  }
]

export default function ServicesSection() {
  const [testimonialItems, setTestimonialItems] = useState(testimonials)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setTestimonialItems(prev => {
          const newItems = [...prev]
          const firstItem = newItems.shift()
          if (firstItem) newItems.push(firstItem)
          return newItems
        })
        setIsAnimating(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatWeDo/whatwedobackgroungraidient.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 w-full min-h-screen bg-black/80 px-4 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">What We Do?</h2>
          <div className="w-24 h-1 bg-[#6D40FF] mx-auto"></div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto relative">
          <div className="relative bg-zinc-900/80 rounded-3xl p-8 backdrop-blur-sm">
            {/* Internal Background Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src="/WhatWeDo/Whatwedoboxpenbackground-01.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative grid lg:grid-cols-2 gap-12 z-10">
              {/* Left Column */}
              <div className="space-y-12 md:px-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  A Full-Service of<br />
                  Design, Branding<br />
                  and Animation Agency<span className="inline-block h-3 w-3 rounded-full bg-[#6D40FF] align-middle ml-1" />
                </h1>

                <div className="space-y-8 ">
                  {/* Service Items */}
                  <div className="md:flex gap-6 hidden">
                    <div className="flex-shrink-0 w-12 h-12 relative">
                      <Image
                        src="/WhatWeDo/whatwedo1.png"
                        alt="Visual Versatility"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className={`${satoshi.className} text-white font-semibold text-xl mb-2`}>Visual Versatility</h3>
                      <p className="text-gray-400 md:text-[1rem] md:flex md:flex-col">Tailored design and animation, bringing <span>your vision into sharpness.</span> </p>
                    </div>
                  </div>

                  <div className="md:flex gap-6 hidden">
                    <div className="flex-shrink-0 w-12 h-12 relative">
                      <Image
                        src="/WhatWeDo/whatwedo2.png"
                        alt="Relationships"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className={`${satoshi.className} text-white font-semibold text-[1.1rem] mb-2 tracking-normal`}>Relationships Over Transactions</h3>
                      <p className="text-gray-400 md:flex md:flex-col">Prioritizing your success, we believe in <span>forging lasting partnerships.</span></p>
                    </div>
                  </div>

                  <div className="md:flex gap-6 hidden">
                    <div className="flex-shrink-0 w-12 h-12 relative">
                      <Image
                        src="/WhatWeDo/whatwedo3.png"
                        alt="Social Media"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className={`${satoshi.className} text-white font-semibold text-xl mb-2`}>Social Media Impact</h3>
                      <p className="text-gray-400 md:flex md:flex-col">Crafted results that authentically connect with <span>your audience&apos; elevating your brand&apos;s</span> narrative.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center">
                <h2 className={`${satoshi.className} text-[01rem] md:text-[1.2rem] font-bold text-white text-center md:-mb-12 -mt-12 -mb-20 `}>
                  What Our Clients Say About Us
                </h2>

                {/* Testimonials Carousel */}
                <div className="relative h-[300px] overflow-hidden mb-2 md:mb-12">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {testimonialItems.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={`absolute w-full px-2 transition-all duration-500 ease-in-out ${
                          index === 0
                            ? 'opacity-100 translate-x-0 scale-100'
                            : 'opacity-0 translate-x-full scale-70'
                        }`}
                      >
                        <div className="flex justify-center items-center">
                          <Image
                            src={testimonial.image}
                            alt={`Testimonial ${testimonial.id}`}
                            width={400}
                            height={300}
                            className="rounded-2xl shadow-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="text-center -mt-20 mb-3">
                  <Button className={`${satoshi.className} bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:bg-[#7D40FF] text-white px-8 py-2 rounded-full font-bold`}>
                    About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
