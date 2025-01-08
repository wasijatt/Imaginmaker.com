import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { satoshi } from '@/lib/fonts'

export default function CapabilitiesSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ourvalues/ourvaluesecondbg.svg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading with underline */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Capabilities.
          </h2>
          <div className="mx-auto h-1 w-24 bg-[#6D40FF]"></div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-16 lg:gap-24">
          {/* Graphic Design */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 px-8">
            <div className="relative mx-auto aspect-square w-full max-w-[440px]">
              <Image
                src="/ourvalues/1.png"
                alt="Graphic Design Illustration"
                width={440}
                height={440}
                className="rounded-lg object-cover md:mt-32"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-6 text-3xl font-bold sm:text-4xl -mt-24 md:mt-24">
                Graphic Design
              </h3>
              <p className={`${satoshi.className} mb-8 text-gray-300 md:text-[15xpx] `}>
                We master graphic design, from ideation to coding, exemplified
                by our success with cplus.com. Our remote team excels in
                crafting exceptional websites for diverse business needs, be it
                B2B, B2C, or SaaS products. Our comprehensive approach ensures
                that every design not only looks stunning but also delivers
                measurable results for our clients across various industries.
              </p>
              <Button 
                className={`${satoshi.className} font-bold bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:bg-[#7D40FF] rounded-full py-2 w-32`}
              >
                Reach Us
              </Button>
            </div>
          </div>

          {/* Motion Design */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 px-8">
            <div className="relative mx-auto aspect-square w-full max-w-[440px] lg:order-2">
              <Image
                src="/ourvalues/2.png"
                alt="Motion Design Illustration"
                width={440}
                height={440}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center lg:order-1 md:-mt-46 md:px-16 -mt-44">
              <h3 className="mb-6 text-3xl font-bold sm:text-4xl mt-28">
                Motion Design
              </h3>
              <p className={`${satoshi.className} mb-8 line-clamp-4 text-gray-300 text-[18px]`}>
                Our motion design expertise brings static concepts to life through
                fluid animations and engaging interactions. We specialize in creating
                dynamic visual experiences that capture attention and convey messages
                effectively. From micro-interactions to full-scale animated productions,
                our team delivers motion design that enhances user engagement and
                strengthens brand storytelling.
              </p>
              <Button 
                className={`${satoshi.className} font-bold bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:bg-[#7D40FF] rounded-full py-2 w-32`}>
                Reach us
              </Button>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 px-8 md:-mt-24">
            <div className="relative mx-auto aspect-square w-full max-w-[440px]">
              <Image
                src="/ourvalues/3.png"
                alt="UI/UX Design Illustration"
                width={440}
                height={440}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center -mt-28 md:px-20">
              <h3 className="mb-6 text-3xl font-bold sm:text-4xl">
                UI/UX Design
              </h3>
              <p className="mb-8 line-clamp-4 text-gray-300 ">
                Our UI/UX design process focuses on creating intuitive, user-centric 
                interfaces that delight and engage. We combine aesthetics with 
                functionality, ensuring every interaction is purposeful and enjoyable. 
                From wireframing to prototyping, we craft seamless digital experiences 
                that not only meet but exceed user expectations, driving satisfaction 
                and conversion rates for our clients.
              </p>
              <Button 
                className={`${satoshi.className} bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:bg-[#7D40FF] font-bold rounded-full py-2 w-32`}
              >
                Reach us
              </Button>
            </div>
          </div>

          {/* Branding */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 px-8 md:-mt-20">
            <div className="relative mx-auto aspect-square w-full max-w-[440px] lg:order-2">
              <Image
                src="/ourvalues/4.png"
                alt="Branding Illustration"
                width={440}
                height={440}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center lg:order-1 -mt-28 md:px-16">
              <h3 className="mb-6 text-3xl font-bold sm:text-4xl">
                Branding
              </h3>
              <p className="mb-8 line-clamp-4 text-gray-300">
                Our branding expertise goes beyond logos and color palettes. We create 
                comprehensive brand identities that resonate with target audiences and 
                stand out in crowded markets. From brand strategy and positioning to 
                visual identity and voice, we develop cohesive branding solutions that 
                build recognition, trust, and loyalty. Let us help you tell your unique 
                story and make a lasting impression.
              </p>
              <Button 
                className={`${satoshi.className} font-bold bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:bg-[#7D40FF] rounded-full py-2 w-32`}
              >
                Reach us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

