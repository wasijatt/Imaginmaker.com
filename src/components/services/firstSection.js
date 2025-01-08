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
                            <svg className='relative left-[0.3rem] max-sm:left-[-12rem] max-sm:top-6 ' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <button className={`${satoshi.className} rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-8 py-3 text-base text-white transition-all hover:bg-[#7D40FF] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10 font-bold`}>
                            Connect With Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
