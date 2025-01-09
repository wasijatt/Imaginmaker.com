"use client"
import { clashGrotesk } from '@/lib/clashGroteskfont'
import { satoshi } from '@/lib/fonts'
import Image from 'next/image'

export default function AboutHeroSection() {
    return (
        <section className="relative min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <Image
                src="/HeroSection/herobg.jpg"
                alt="Background"
                fill
                className="object-cover object-center opacity-100"
                priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-8 md:mt-28">
                <div className="max-w-2xl">
                    {/* Heading with Purple Dot */}
                    <div className="flex items-start mb-6">
                        <h1 className={`${clashGrotesk.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide`}>
                            Let&apos;s Craft Brilliance Together
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                                <g filter="url(#filter0_i_3597_81)">
                                    <circle cx="7.5" cy="7.5" r="7.5" fill="url(#paint0_linear_3597_81)" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_3597_81" x="-1.15385" y="0" width="16.1538" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="-1.15385" />
                                        <feGaussianBlur stdDeviation="0.634615" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3597_81" />
                                    </filter>
                                    <linearGradient id="paint0_linear_3597_81" x1="9.80769" y1="11.5385" x2="-6.51228" y2="12.4245" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7D40FF" />
                                        <stop offset="1" stop-color="#6F00FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className={`${satoshi.className} text-gray-300 text-lg md:text-xl mb-4`}>
                        We deal with intricate challenges and transform them into holistic experiences.
                    </p>

                    {/* Arrow Image */}
                    <div className="relative w-80 h-12 mb-16">
                        <Image
                            src="/casestudy/arrowsvg.svg"
                            alt="Arrow"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Button - Centered in the section */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -mb-6">
                <button className={`${satoshi.className} bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-[#6D40FF] transition-colors duration-200`}>
                    Connect
                </button>
            </div>
        </section>
    )
}
