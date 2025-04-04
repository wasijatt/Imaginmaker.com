'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { satoshi } from '@/lib/fonts'

export default function FeaturedProjects() {
  return (
    <section className="relative min-h-screen w-full bg-black py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/casestudy/secondbg.jpg" // Replace with your actual background image
          alt="Background texture"
          layout="fill"
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Featured Projects</h2>
          <div className="mx-auto mt-4 h-1 w-32 bg-[#6D40FF]"></div>
        </div>

        {/* Project Cards */}
        <div className="space-y-20 md:space-y-32 px-8">
          {/* QuickCrave Project */}
          <div className="grid gap-8 2xl:gap-32 lg:grid-cols-2 lg:gap-12">
            {/* Project Image */}
            <div className="overflow-hidden rounded-3xl bg-[#D2F34C]">
              <Image
                src="/casestudy/featuredproject1.jpg" // Replace with your actual image
                alt="QuickCrave cafe platform mockup"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <Image
                  src="/casestudy/quickcravelogo.svg" // Replace with your actual logo
                  alt="QuickCrave Logo"
                  width={300}
                  height={130}
                />
              </div>
              <p className="text-lg text-gray-300">
                QuickCrave Cafe and Restaurant branding redefined! This design
                showcases a multidisciplinary approach, creating an all-in-one
                online ordering platform to enhance restaurant services.
              </p>
              <div className="flex flex-wrap items-center gap-4 2xl:gap-16 sm:gap-6">
<div className='gap-5 flex flex-wrap'>
<Link 
                  href="#" 
                  className={`${satoshi.className} text-gray-400 transition-colors hover:text-white underline font-bold`}
                >
                  Food
                </Link>
                <Link 
                  href="#" 
                  className={`${satoshi.className} text-gray-400 transition-colors hover:text-white underline font-bold`}
                >
                  Cafe & Restaurant
                </Link>
</div>
<Link href={"/QuickCraveCafe"}>
                <Button 
                  className=" bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white rounded-full py-1 px-5"
                >
                  Let&apos;s Go
                </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Growth Capital Project */}
          <div className="grid gap-8 2xl:gap-32 lg:grid-cols-2 lg:gap-12">
            {/* Project Content */}
            <div className="flex flex-col justify-center space-y-6 lg:order-1">
              <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <Image
                  src="/casestudy/capitalgrowthlogo.svg" // Replace with your actual logo
                  alt="Growth Capital Logo"
                  width={300}
                  height={30}
                />
              </div>
              <p className="text-lg text-gray-300">
                Redefining The Growth Capital&apos;s brand essence! Our innovative
                approach combines research and design to elevate your financial
                services, creating a comprehensive platform aligned with your
                objectives.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 2xl:gap-16">
<div className='flex flex-wrap gap-4 sm:gap-6'>
<Link 
                  href="#" 
                  className="text-gray-400 transition-colors hover:text-white underline"
                >
                  Investment
                </Link>
                <Link 
                  href="#" 
                  className="text-gray-400 transition-colors hover:text-white underline"
                >
                  Real-Estate
                </Link>
</div>

                <Button 
                  className="bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white rounded-full py-1 px-5"
                >
                  Let&apos;s Go
                </Button>
              </div>
            </div>

            {/* Project Image */}
            <div className="overflow-hidden rounded-3xl bg-[#7B61FF] lg:order-2">
              <Image
                src="/casestudy/featuredproject2.jpg" // Replace with your actual image
                alt="Growth Capital platform mockup"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
