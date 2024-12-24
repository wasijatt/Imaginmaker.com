'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';

const services = [
  {
    icon: '/heroServices/1.svg',
    title: 'Graphic Design',
    description: 'Crafting impactful visuals that bring your brand to life, from logos to full-scale branding solutions.',
  },
  {
    icon: '/heroServices/2.svg',
    title: 'Motion Design',
    description: 'Transform your brand with stunning animations that captivate and engage. Our motion design brings your ideas to life with creativity and precision.',
  },
  {
    icon: '/heroServices/3.svg',
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing interfaces that enhance user experience, making every interaction seamless and enjoyable.',
  },
  {
    icon: '/heroServices/4.svg',
    title: 'Branding',
    description: 'Creating distinctive brand identities that connect with your audiences and elevate your business.',
  },
];

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-7">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-[3rem] font-bold relative top-[4rem] inline-block">
          Our Services
          <span className="absolute bottom-[-12px] xl:left-24 left-16 w-[85px] h-1 bg-[#6F00FF]" />
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mb-16 relative xl:gap-x-[-330px] xl:gap-y-16 p-24">
        {services.map((service, index) => (
          <Link
            href="/services"
            key={service.title}
            className={`group relative w-full h-[260px] block ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
          >
            {/* Main Card */}
            <div className="relative inset-0 bg-white rounded-[18px] xl:w-[17rem] xl:h-[17.0rem] xl:p-0 xl:space-x-0 border-[1px] border-[#6F00FF] border-b-[13px] p-6 transition-all duration-500 ease-in-out group-hover:scale-[1.03] group-hover:shadow-lg">
              <div className="flex justify-center mb-16">
                <div className="p-3 rounded-lg mb-[-50px] mt-[14px]">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={68}
                    height={68}
                    className="w-17 h-17"
                  />
                </div>
              </div>
              <div className={`flex justify-center relative top-[-10px] ${clashGrotesk.className}`}>
                <h3 className="text-[26px] font-bold text-center mb-[2px] mt-[-12px]">{service.title}</h3>
              </div>
              <div className={`flex justify-center relative p-2 xl:p-0 xl:pl-[14px] xl:pr-[14px] ${satoshi.className}`}>
                <p className="text-[#1A1A1A] text-center text-sm font-medium ">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className={`text-center ${satoshi.className}`}>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-[#6F00FF] hover:bg-[#7F00FF] text-white px-7 py-2 rounded-full text-lg font-bold transition-colors duration-300 relative top-[-3rem] shadow-[1px_1px_10px_1px_rgba(125,64,255,55)]"
          >
            Get your Design Done
          </Button>
        </Link>
      </div>
    </section>
  );
}
