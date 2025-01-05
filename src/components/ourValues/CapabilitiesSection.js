import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Image from 'next/image';

export default function CapabilitiesSection() {
  const services = [
    {
      title: "Graphic Design",
      description:
        "We master graphic design, from shadow to coding, exemplified by our success with top brands. Our motion team, ready to take on any challenge, specializes in future business needs, be it B2B, B2C or SaaS products.",
      image: "/ourValues/1.png",
      imagePosition: "order-1",
      textPosition: "order-2",
      buttonPosition: "order-3",
      titlePosition: "order-1",
      descPosition: "order-2",
    },
    {
      title: "Motion Design",
      description:
        "We're motion experts, turning concepts into captivating animations. Our nimble team, inspired by successful collaborations, specializes in bringing brands to life with dynamic visuals.",
      image: "/ourValues/2.png",
      imagePosition: "order-2",
      textPosition: "order-1",
      buttonPosition: "order-3",
      titlePosition: "order-1",
      descPosition: "order-2",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting seamless user flows. Specializing in UI/UX design, we transform ideas into intuitive interfaces. From conceptualization to launch, our expertise ensures user-centric solutions that ignite growth.",
      image: "/ourValues/3.png",
      imagePosition: "order-1",
      textPosition: "order-2",
      buttonPosition: "order-3",
      titlePosition: "order-1",
      descPosition: "order-2",
    },
    {
      title: "Branding",
      description:
        "We're branding experts, transforming ideas into compelling brand identities. Our nimble team, backed by industry leading experience, specializes in creating memorable experiences that resonate with your brand.",
      image: "/ourValues/4.png",
      imagePosition: "order-2",
      textPosition: "order-1",
      buttonPosition: "order-3",
      titlePosition: "order-1",
      descPosition: "order-2",
    },
  ];

  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ourvalues/ourvaluesecondbg.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-9 py-16 md:py-24 justify-center">
        {/* Main Heading */}
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Capabilities
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#6D40FF]" />
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 max-w-7xl space-y-20 md:-space-y-28">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-8 md:gap-2"
            >
              {/* Flexible Container */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image Container */}
                <div className={`flex-1 ${service.imagePosition}`}>
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={440}
                      height={440}
                      className="object-cover md:mt-28 relative"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className={`flex flex-1 flex-col items-start justify-center space-y-6 md:px-44 md:mt-44 ${service.textPosition}`}>
                  {/* Title */}
                  <h3 className={`${clashGrotesk.className} text-2xl font-bold text-white sm:text-3xl -mt-28 ${service.titlePosition}`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`${satoshi.className} text-gray-400 ${service.descPosition}`}>
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <div className={service.buttonPosition}>
                    <button className="rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7D40FF] mb-36">
                      Read Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
