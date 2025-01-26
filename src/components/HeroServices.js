import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { satoshi } from '@/lib/fonts'

const services = [
  {
    title: "Graphic Design",
    icon: "/heroServices/1.svg",
    description: "Crafting impactful visuals that bring your brand to life, from logos to full-scale branding solutions.",
    href: "/services",
    position: "up"
  },
  {
    title: "Motion Design",
    icon: "/heroServices/2.svg",
    description: "Transform your brand with dynamic animations that captivate and engage. Our motion design brings your ideas to life with creativity and precision.",
    href: "/services",
    position: "down"
  },
  {
    title: "UI/UX Design",
    icon: "/heroServices/3.svg",
    description: "Designing intuitive and visually appealing interfaces that enhance user experiences, making every interactive exercise are enjoyable.",
    href: "/services",
    position: "up"
  },
  {
    title: "Branding",
    icon: "/heroServices/4.svg",
    description: "Creating distinct visual identities that resonate with your audiences and elevate your business.",
    href: "/services",
    position: "down"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-8 sm:py-16 px-14 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-16 mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-[#6D40FF] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-16 relative mt-20">
        {services.map((service, index) => (
          <Link 
            key={index} 
            href={service.href}
            className={`group block ${
              service.position === 'down' ? 'md:translate-y-8' : ''
            }`}
          >
            <div className="p-4 sm:p-6 md:p-8 rounded-3xl border border-[#6D40FF] border-b-[10px] h-full transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-lg bg-white transform-gpu">
              <div className="flex justify-center mb-4 sm:mb-6 group-hover:scale-[0.9523] transition-transform duration-500 ease-out">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="text-[#6D40FF]"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center group-hover:scale-[0.9523] transition-transform duration-500 ease-out text-black">
                {service.title}
              </h3>
              <p className={`${satoshi.className} text-sm sm:text-base text-gray-900 text-center leading-relaxed line-clamp-3 group-hover:scale-[0.9523] transition-transform duration-500 ease-out font-medium `}>
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Button 
          className={`${satoshi.className} rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:bg-[#7D40FF] text-white px-6 sm:px-8 py-3 sm:py-3 text-sm mt-10`}
        >
          Get your Design Done
        </Button>
      </div>
    </section>
  )
}

