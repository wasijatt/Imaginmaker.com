import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';
import Image from 'next/image';

export default function ServicesFirstSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroSection/herobg.jpg"
          alt="Background"
          fill
          className="object-cover brightness-100"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 py-20 sm:px-6 lg:px-8 min-h-[600px] 2xl:mt-18 lg:mt-6 2xl:top-24 top-10 mb-8">
        <div className={`${clashGrotesk.className} max-w-3xl tracking-wide`}>
          {/* Heading with Purple Dot */}
          <h1 className="mb-6 text-4xl font-bold tracking-wide text-white sm:text-5xl md:text-6xl lg:text-6xl">
            Personalized Solutions
            <br />
            <span className="flex items-center">
              for Achieving Goals
              <Image
                src="/services/circle.svg"
                alt=""
                width={8}
                height={8}
                className="hidden md:block ml-2 h-2 w-2 rounded-full bg-[#6D40FF] sm:h-6 sm:w-6 relative top-0 right-[0rem] max-sm:top-[1.6rem] max-sm:right-[12.7rem] md:right-[0rem] 2xl:left-[0rem] 2xl:top-[0.5rem] md:top-[0.5rem] sm:top-[0rem] sm:right-[0rem]"
              />
            </span>
          </h1>

          {/* Description */}
          <div className="relative mb-8 max-w-xl">
            <p className="text-lg text-gray-200 sm:text-xl ">
              Our Compact Team Delivers Personalized Solutions, Uniting Quality and Affordability to Help You Achieve Your Goals.
            </p>
            <div className="mt-2 2xl:mt-4">
              <Image
                src="/casestudy/arrowsvg.svg"
                alt="Arrow"
                width={332}
                height={332}
                className="w-43 h-8"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-28 left-0 right-0 flex justify-center w-full">
            <button className={`${satoshi.className} rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)]  px-8 py-3 text-base text-white transition-all hover:bg-[#7D40FF] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10 font-bold`}>
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
