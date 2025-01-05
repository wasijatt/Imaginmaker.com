import Image from 'next/image';
import { CircleDot } from 'lucide-react';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';

export default function OurValueHeroSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroSection/herobg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-100"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-8 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-6">
          {/* Heading with dot */}
          <h1 className={`${clashGrotesk.className} flex flex-col items-start text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl relative top-[3.5rem] mb-12 2xl:top-[6rem] 2xl:mb-24 tracking-wide`}>
            Imagin Maker A
            <span className="flex items-center">
              Design Agency
              <svg className='relative top-2' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_3597_81)">
<circle cx="7.5" cy="7.5" r="7.5" fill="url(#paint0_linear_3597_81)"/>
</g>
<defs>
<filter id="filter0_i_3597_81" x="-1.15385" y="0" width="16.1538" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1.15385"/>
<feGaussianBlur stdDeviation="0.634615"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_3597_81"/>
</filter>
<linearGradient id="paint0_linear_3597_81" x1="9.80769" y1="11.5385" x2="-6.51228" y2="12.4245" gradientUnits="userSpaceOnUse">
<stop stop-color="#7D40FF"/>
<stop offset="1" stop-color="#6F00FF"/>
</linearGradient>
</defs>
</svg>

            </span>
          </h1>

          {/* Description */}
          <p className={`${satoshi.className} max-w-xl text-lg text-gray-300`}>
            Confidence and Creativity Unite! Our team offers premium, affordable
            design services. Join us to shape a skilled, self-made future.
          </p>

          {/* Arrow Image */}
          <div className="relative h-8 w-60 px-8">
            <Image
              src="/casestudy/arrowsvg.svg"
              alt="Decorative arrow"
              fill
              className="object-contain"
            />
          </div>

          {/* Button */}
          <div className="flex w-full justify-center pt-4 ">
            <button className="rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)]  px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#7D40FF] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
