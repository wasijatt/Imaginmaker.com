import { clashGrotesk } from "@/lib/clashGroteskfont";
import { satoshi } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function ContactFirstSection() {
    return (
        <section className="relative min-h-[400px] w-full overflow-hidden sm:min-h-[500px] lg:min-h-[600px]">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/HeroSection/herobg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-purple-900/90 opacity-0" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-6xl px-8 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 2xl:mt-28 mt-16">
                <div className="flex flex-col items-start space-y-6 sm:space-y-8">
                    {/* Heading with SVG Elements */}
                    <div className="relative">
                        {/* Purple Circle SVG */}
                        <svg
                            className="absolute -right-6 -top-6 h-12 w-12 sm:-right-8 sm:-top-8 sm:h-16 sm:w-16 text-purple-600"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="50" cy="50" r="50" fill="currentColor" fillOpacity="0.2" />
                        </svg>

                        <div className="flex flex-col">
                            <h1 className={`${clashGrotesk.className} text-4xl sm:text-5xl lg:text-8xl font-bold tracking-wide text-white`}>
                                We&apos;
                                re
                            </h1>
                            <h1
                                className={`${clashGrotesk.className} -mb-1 text-4xl sm:text-5xl lg:text-8xl font-bold tracking-wide text-white flex items-center`}
                            >
                                Listening
                                <span className="ml-2">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_i_3597_81)">
                                            <circle cx="7.5" cy="7.5" r="7.5" fill="url(#paint0_linear_3597_81)" />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_i_3597_81"
                                                x="-1.15385"
                                                y="0"
                                                width="16.1538"
                                                height="15"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset dx="-1.15385" />
                                                <feGaussianBlur stdDeviation="0.634615" />
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0"
                                                />
                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3597_81" />
                                            </filter>
                                            <linearGradient
                                                id="paint0_linear_3597_81"
                                                x1="9.80769"
                                                y1="11.5385"
                                                x2="-6.51228"
                                                y2="12.4245"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#7D40FF" />
                                                <stop offset="1" stopColor="#6F00FF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Subtext with Arrow */}
                    <div className={`${satoshi.className} flex flex-col space-y-4`}>
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 tracking-normal">
                            Please fill out this form, or send us mail.
                        </p>
                        <div className="flex items-center space-x-2">
                            <svg width="198" height="7" viewBox="0 0 198 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="2.02734" width="183" height="2" fill="#F9F9F9" />
                                <path d="M188.343 4.93708L191.675 6.02734L197.991 3.33747L197.991 3.32802L192.566 3.32487C192.52 3.45972 192.443 3.58627 192.335 3.69392C191.958 4.07128 191.347 4.07128 190.969 3.69392C190.592 3.31657 190.592 2.70501 190.969 2.32766C191.347 1.9503 191.958 1.9503 192.335 2.32766C192.445 2.43703 192.522 2.56644 192.568 2.70387L198 2.69127L198 2.68955L191.655 -3.6385e-05L188.329 1.09767L188.343 4.93708Z" fill="#F9F9F9" />
                                <path d="M191.25 2.82196C191.404 2.66821 191.653 2.66821 191.807 2.82196C191.96 2.97571 191.96 3.22508 191.807 3.37883C191.653 3.53258 191.404 3.53258 191.25 3.37883C191.096 3.22508 191.096 2.97571 191.25 2.82196Z" fill="#F9F9F9" />
                                <path d="M185.355 0.789682L187.385 0.789682C187.582 0.789682 187.741 0.948869 187.741 1.14499L187.741 4.8693C187.741 5.06571 187.581 5.22461 187.385 5.22461L185.355 5.22461C185.159 5.22461 185 5.06542 185 4.8693L185 1.14499C185 0.948869 185.159 0.789682 185.355 0.789682Z" fill="#F9F9F9" />
                            </svg>

                        </div>
                    </div>

                    {/* Button */}
                    <div className="w-full pt-6 sm:pt-8 lg:pt-12">
                        <div className="flex justify-center">
                            <Link
                                href="#"
                                className={`${satoshi.className} relative inline-flex items-center justify-center rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg text-white transition-all duration-300 hover:bg-[#7D40FF] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black font-bold tracking-normal`}
                            >
                                <span className="relative z-10">Hire Us</span>
                                <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] blur-lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
