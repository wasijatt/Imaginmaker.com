'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { satoshi } from '@/lib/fonts';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    image: '/Reviews/1.png',
  },
  {
    id: 2,
    image: '/Reviews/1.png',
  },
  {
    id: 3,
    image: '/Reviews/1.png',
  },
];

export default function ServicesSection() {
  const [testimonialItems, setTestimonialItems] = useState(testimonials);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTestimonialItems((prev) => {
          const newItems = [...prev];
          const firstItem = newItems.shift();
          if (firstItem) newItems.push(firstItem);
          return newItems;
        });
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WhatWeDo/whatwedobackgroungraidient.webp"
          alt="Background"
          width={700}
          height={500}
          className="object-cover h-100% w-full overflow-hidden md:block hidden"
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
        <div className="container mx-auto relative bg-zinc-900/80 rounded-3xl p-8 backdrop-blur-sm">
          {/* Small Screen Layout */}
          <div className="md:hidden">
            <h1 className="text-2xl font-bold text-white text-center mb-6 tracking-wide">
              A Full-Service of
              <br />
              Design, Branding
              <br />
              and Animation Agency
            </h1>

            {[1, 2, 3].map((index) => (
              <div key={index} className="text-center mb-6">
                <Image
                  src={`/WhatWeDo/whatwedo${index}.png`}
                  alt={`Visual ${index}`}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
                <h3 className={`${satoshi.className} text-lg font-semibold text-white mt-4 tracking-wide`}>
                  {index === 1
                    ? 'Visual Versatility'
                    : index === 2
                    ? 'Relationships Over Transactions'
                    : 'Social Media Impact'}
                </h3>
                <p className={`${satoshi.className} text-gray-400 mt-2 tracking-normal mb-14`}>
                  {index === 1
                    ? 'Tailored design and animation, bringing your vision into sharpness.'
                    : index === 2
                    ? 'Prioritizing your success, we believe in forging lasting partnerships.'
                    : 'Crafted results that authentically connect with your audience, elevating your brand narrative.'}
                </p>
              </div>
            ))}

            <h2 className={`${satoshi.className} text-lg font-bold text-white text-center mt-12 -mb-20`}>
              What Our Clients Say About Us
            </h2>

            {/* Testimonials Carousel */}
            <div className="relative h-[350px] overflow-hidden mb-0">
              <div className="absolute inset-0 flex items-center justify-center">
                {testimonialItems.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute w-full px-6 transition-all duration-500 ease-in-out ${
                      index === 0
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-0 translate-x-full scale-70'
                    }`}
                  >
                    <div className="flex justify-center items-center h-28 w-10">
                      <Image
                        src={testimonial.image}
                        alt={`Testimonial ${testimonial.id}`}
                        fill
                        className="rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="text-center -mt-20">
              <Button
                href="/About-us"
                className="bg-[#6D40FF] shadow-lg hover:bg-[#7D40FF] text-white px-8 py-2 rounded-full font-bold"
              >
                About Us
              </Button>
            </div>
          </div>

          {/* Large Screen Layout */}

          <div className="absolute inset-0 z-0 rounded-lg overflow-hidden hidden md:grid">
            <Image
              src="/WhatWeDo/Whatwedoboxpenbackground-01.png"
              alt="Background"
              fill
              className="object-cover rounded-3xl"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-0"></div>
          </div>

          <div className="relative z-10 hidden md:grid lg:grid-cols-2 gap-12 p-10">
            <div className="space-y-12 md:px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
                A Full-Service of
                <br />
                Design, Branding
                <br />
                and Animation Agency
                <span className="inline-block h-3 w-3 rounded-full bg-[#6D40FF] align-middle ml-1" />
              </h1>

              <div className="space-y-8">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 relative">
                      <Image
                        src={`/WhatWeDo/whatwedo${index}.png`}
                        alt={`Visual ${index}`}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h3 className={`${satoshi.className} text-white font-semibold text-xl mb-2`}>
                        {index === 1
                          ? 'Visual Versatility'
                          : index === 2
                          ? 'Relationships Over Transactions'
                          : 'Social Media Impact'}
                      </h3>
                      <p className={`${satoshi.className} text-gray-400 text-xl`}>
                        {index === 1
                          ? 'Tailored design and animation, bringing your vision into sharpness.'
                          : index === 2
                          ? 'Prioritizing your success, we believe in forging lasting partnerships.'
                          : 'Crafted results that authentically connect with your audience, elevating your brand narrative.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center mt-10">
              <h2 className={`${satoshi.className} text-[1.2rem] font-bold text-white text-center -mb-6 tracking-wide`}>
                What Our Clients Say About Us
              </h2>

              <div className="relative h-[300px] overflow-hidden mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  {testimonialItems.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`absolute w-full px-6 transition-all duration-500 ease-in-out ${
                        index === 0
                          ? 'opacity-100 translate-x-0 scale-100'
                          : 'opacity-0 translate-x-full scale-70'
                      }`}
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          src={testimonial.image}
                          alt={`Testimonial ${testimonial.id}`}
                          width={410}
                          height={210}
                          className="rounded-3xl shadow-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center -mt-12">
                <Link href="/About-us">
                  <Button className={`${satoshi.className} bg-[#7D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:bg-[#6930D9] text-white px-8 py-2 rounded-full font-bold -mt-44`}>
                    About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
