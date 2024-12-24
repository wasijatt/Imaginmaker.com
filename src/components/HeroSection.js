import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';
import { cn } from "@/lib/utils";
import { clashGrotesk } from "@/lib/clashGroteskfont";
import { satoshi } from '@/lib/fonts';
import HomeStar from './ui/star';

export default function HeroSection() {
  return (
    <section className="h-[60vh] xl:h-[90vh] 2xl:h-[80vh] relative overflow-hidden">
      <Image
        src="/HeroSection/herobg.jpg"
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-0" />
      <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col justify-center h-full relative z-10  ">
        <div className="max-w-4xl lg:mx-24">
          <div className='relative top-28 2xl:left-[-2rem]'>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              We are{" "}
              <span className="relative inline-block font-medium text-[#7D40FF]">
                Creative
                <span className="absolute -top-1 -right-4 text-[#6F00FF]">
                  <HomeStar />
                </span>
              </span>
              <br />
              Design Agency
              <span className="font-bold text-[#9F00FF] relative lg:left-[31rem] lg:-top-8">
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_i_3172_140)">
                    <circle cx="7.5" cy="8" r="7.5" fill="url(#paint0_linear_3172_140)" />
                  </g>
                  <defs>
                    <filter id="filter0_i_3172_140" x="-1.15385" y="0.5" width="16.1538" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-1.15385" />
                      <feGaussianBlur stdDeviation="0.634615" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3172_140" />
                    </filter>
                    <linearGradient id="paint0_linear_3172_140" x1="9.80769" y1="12.0385" x2="-6.51228" y2="12.9245" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7D40FF" />
                      <stop offset="1" stopColor="#6F00FF" />
                    </linearGradient>
                  </defs>
                </svg>

                </span>
            </h1>

            <div className="mt-6 mb-8">
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                What You Think, We Can Design for your Businesses!
              </p>
              <div className="mt-4">
                <svg width="198" height="7" viewBox="0 0 198 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="3" width="183" height="2" fill="#F9F9F9" />
                  <path d="M188.343 5.90973L191.675 7L197.991 4.31013L197.991 4.30068L192.566 4.29753C192.52 4.43238 192.443 4.55893 192.335 4.66658C191.958 5.04394 191.347 5.04394 190.969 4.66658C190.592 4.28923 190.592 3.67767 190.969 3.30031C191.347 2.92296 191.958 2.92296 192.335 3.30031C192.445 3.40968 192.522 3.53909 192.568 3.67652L198 3.66393L198 3.66221L191.655 0.97262L188.329 2.07033L188.343 5.90973Z" fill="#F9F9F9" />
                  <path d="M191.25 3.79462C191.404 3.64087 191.653 3.64087 191.807 3.79462C191.961 3.94836 191.961 4.19774 191.807 4.35149C191.653 4.50523 191.404 4.50523 191.25 4.35149C191.096 4.19774 191.096 3.94836 191.25 3.79462Z" fill="#F9F9F9" />
                  <path d="M185.355 1.76234L187.385 1.76234C187.582 1.76234 187.741 1.92152 187.741 2.11765L187.741 5.84196C187.741 6.03836 187.581 6.19727 187.385 6.19727L185.355 6.19727C185.159 6.19727 185 6.03808 185 5.84196L185 2.11765C185 1.92153 185.159 1.76234 185.355 1.76234Z" fill="#F9F9F9" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex flex-col items-center relative right-[10rem] top-8 md:left-[-5rem] 2xl:left-[1rem] 2xl:top-[3rem]">
            <button className={`${satoshi.className} bg-[#7D40FF] hover:bg-purple-[#6F00FF] shadow-[#8F00FF] border-2 border-[#7D40FF] text-white mt-20 ml-80 px-12 2xl:py-[6px] 2xl:px-[28px] lg:px-8 py-0 md:py-1 flex rounded-full text-lg font-bold transition-all duration-200 relative md:top-6 transform hover:scale-105 shadow-sm hover:shadow-purple-500/25`}>
              See Plans
            </button>

            <div className="hidden md:flex items-center gap-2 text-gray-300 ml-80">
              <span className='flex relative'> Designs <span className='space-x-3'> you&apos;ll</span>
              </span>
              <span className="text-purple-500 text-2xl">❤️</span>
              <span>Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

