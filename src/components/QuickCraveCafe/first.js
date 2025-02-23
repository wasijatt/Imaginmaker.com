import Image from "next/image"

export default function CafeSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image src="/HeroSection/herobg.jpg" alt="Background" fill className="object-cover" priority />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="container relative mx-auto grid gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:gap-12 lg:px-8">
        {/* Left content */}
        <div className="order-2 space-y-8 md:order-1">
          <div className="space-y-6">
            <Image
              src="/QuickCraveCafe/QuickCraveCafeLogo.svg"
              alt="Quickcrave Cafe Logo"
              width={150}
              height={90}
              className="md:h-24 h-14 md:mt-44 md:mb-20 w-auto px-4"
            />
            <div className="flex md:mx-20">
              <div className="relative mr-4 w-px bg-[#ec9e27]">
                <div className="absolute bottom-0 left-0 h-16 w-px bg-[#ec9e27]"></div>
              </div>
              <p className="max-w-md text-lg text-white md:mb-1 md:-mt-2">
                Restaurant rebranding with a touch of behavioral psychology and a hint of café culture, boosting
                conversion rates by 50%.
              </p>
            </div>
          </div>

          <div className="relative grid gap-8 text-white sm:grid-cols-2 px-8 md:mx-10 ">
            <div className="space-y-4 md:mt-20">
              <h3 className="text-sm font-medium text-gray-300">Platforms:</h3>
              <p className="text-xl">Web, Desktop & Mobile</p>
            </div>
            <div className="space-y-4 md:mt-20">
              <h3 className="text-sm font-medium text-gray-300">Deliverables:</h3>
              <p className="text-xl">UI, UX, Brand & Strategy</p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/QuickCraveCafe/QuickCraveCafeLaptop.png"
              alt="Quickcrave Cafe Website Preview"
              fill
              className="rounded-lg object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

