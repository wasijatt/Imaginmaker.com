'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { clashGrotesk } from "@/lib/clashGroteskfont"
import Image from 'next/image';
import { satoshi } from '@/lib/fonts';
import Link from 'next/link';
export default function WhatWeDo() {
    return (
        <div className={`2xl:min-h-0 relative w-full min-h-screen py-6 px-4 sm:px-6 lg:px-8  ${clashGrotesk.className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden 2xl:h-[50rem]">
                <Image
                    src="/whatWeDo/whatwedobackgroungraidient.webp"
                    alt="Background Design"
                    fill
                    priority
                    className="object-cover object-center opacity-100"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/50 " />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto">
                <div className='flex justify-center items-center relative 2xl:top-[1rem]'>
                    <h2 className="text-center text-3xl font-medium text-white mb-12 lg:top-[1rem] ">
                        What We Do?
                        <span className='text-purple-500 flex justify-center items-center relative top-[-12px] mb-0'>_______</span>
                    </h2>

                </div>

                <div className="inset-0 z-100 p-8 lg:p-12 w-[26rem] h-[60rem] sm:w-[40rem] md:w-[45rem] md:h-[56rem] md:left-[2rem] relative overflow-hidden sm:h-[55rem] xl:h-[33rem] xl:w-[70rem] xl:left-[4.8rem] xl:justify-center lg:w-[60rem] xl:items-center xl:rounded-[23px] xl:top-[-3rem] 2xl:w-[82rem] 2xl:h-[36rem] 2xl:left-[-1rem] 2xl:rounded-[23px] 2xl:top-[-1rem] rounded-[40px] object-cover object-center opacity-100 ">
                    <Image
                        src="/whatWeDo/Whatwedoboxpenbackground-01.png"
                        alt="Card Background"
                        fill
                        className=""
                    />
                    <div className={`${clashGrotesk.className} lg:flex lg:gap-12 relative z-30 2xl:top-[2rem]`}>
                        {/* Left Column - Main Content */}
                        <div className="relative lg:w-1/2 space-y-8 mb-8 lg:mb-0 xl:top-[-0.5rem] xl:left-[4rem]">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white xl:leading-[1.2em] xl:text-[2em] ">
                                A Full-Service of
                                <br />
                                Design, Branding
                                <br />
                                and Animation Agency
                                <span className="text-purple-500">.</span>
                            </h3>
                            <div className=''>
                                <div className={`${satoshi.className} relative space-y-6 font-regular text-white text-lg xl:p-[60px] xl:top-[-5rem] xl:left-[-2.5rem]  xl:text-[0.9em] `}>
                                    <ServiceItem
                                        imageSrc="/whatWeDo/whatwedo1.png"
                                        title="Visual Versatility"
                                        description="Tailored design and animation, bringing your vision to life effortlessly."
                                    />
                                    <ServiceItem
                                        imageSrc="/whatWeDo/whatwedo2.png"
                                        title="Relationships Over Transactions"
                                        description="Prioritizing your success, we believe in forging lasting partnerships."
                                    />
                                    <ServiceItem
                                        imageSrc="/whatWeDo/whatwedo3.png"
                                        title="Social Media Impact"
                                        description="Crafted visuals that authentically connect with your audience, elevating your brand's narrative."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Carousel */}
                        <div className="lg:w-1/2 lg:flex lg:items-center">
                            <TestimonialCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceItem({ imageSrc, title, description }) {
    return (
        <div className="flex gap-7">
            <div className="flex-shrink-0">
                <div className="relative xl:w-12 xl:h-12 rounded-lg flex items-center justify-center xl:top-[0.5rem] xl:left-[-1rem]">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                </div>
            </div>
            <div>
                <h4 className="relative text-white font-semibold mb-0 text-xl xl:text-[1.1em] xl:top-[0.5em] xl:left-[-1rem]">
                    {title}
                </h4>
                <p className="relative mt-1 text-[#DDDDDD] text-base xl:text-[1em] xl:top-[0rem] xl:left-[-1rem]">
                    {description}
                </p>
            </div>
        </div>
    );
}

function TestimonialCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const reviewImages = [
        '/Reviews/1.png',
        '/Reviews/2.png',
        '/Reviews/3.png',
        // '/Reviews/4.png',
        '/Reviews/5.png',
        // '/Reviews/6.png',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % reviewImages.length);
                setNextImageIndex((prevIndex) => (prevIndex + 1) % reviewImages.length);
                setIsTransitioning(false);
            }, 1000); // 1 second for transition
        }, 3000); // 3 seconds per image

        return () => clearInterval(timer);
    }, [reviewImages.length]);

    return (
        <>
            <div className='relative xl:top-[-0.6rem] xl:left-[-1rem]'>
                <div>
                    <div className={`${satoshi.className} flex justify-center items-center relative top-[15rem] left-[-10rem]`}>
                        <Link href="/About-us">
                        <button className="bg-[#6F00FF] hover:bg-purple-[#6F00FF] shadow-sm  shadow-[#6F00FF] border-2 border-[#6F00FF] text-white mt-20 ml-80 px-12 lg:px-8 h-[2rem] md:py-1 flex rounded-full text-lg font-bold transition-all duration-200 relative md:top-6 transform hover:scale-105 hover:shadow-[#7F00FF] top-[-9rem] sm:top-[2rem] lg:top-[-3rem] lg:left-[3.5rem] xl:top-[-7em] xl:left-[2.3rem] xl:py-1 xl:h-[2.4rem] xl:px-5 xl:w-[7.5rem] ">
                            <span className='space-x-1 mr-1'>About</span> <span className='space-x-1'> Us</span>
                        </button>
                        </Link>
                    </div>
                    <div className={`${satoshi.className} flex justify-center items-center`}>
                        <h2 className='text-white xl:text-[18px] font-black relative sm:text-2xl top-[-9rem] sm:top-[-5em] sm:mb-1 sm:mt-[1rem] left-[0rem] lg:left-[3rem] lg:top-[-6.5rem] xl:w-[24rem] xl:left-[5.7rem] xl:top-[-9.5rem]'>What Our Clients Say About Us</h2>
                    </div>
                </div>
                <div className="relative xl:w-[22rem] xl:left-[4.8rem] overflow-hidden xl:h-[11rem] h-[8rem] w-[23rem] rounded-[18px] sm:w-[35rem] sm:h-[15rem] top-[-8rem] sm:top-[-6rem] md:w-[28rem] md:h-[15rem] lg:w-[50rem] lg:h-[15rem] xl:top-[-10rem]">
                    <div
                        key={currentImageIndex}
                        className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${isTransitioning ? 'slide-out scale-down' : ''}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={reviewImages[currentImageIndex]}
                                alt={`Review ${currentImageIndex + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-[18px]"
                            />
                        </div>
                    </div>

                    <div
                        key={nextImageIndex}
                        className={`absolute w-full h-full transition-all duration-1000 ease-in-out translate-x-full ${isTransitioning ? 'slide-in scale-up' : ''}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={reviewImages[nextImageIndex]}
                                alt={`Review ${nextImageIndex + 1}`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-[18px]"
                            />
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes slideOut {
                        0% { transform: translateX(0) scale(0.9); }
                        100% { transform: translateX(-100%) scale(0); }
                    }
                    @keyframes slideIn {
                        0% { transform: translateX(100%) scale(0.5); }
                        100% { transform: translateX(0) scale(1); }
                    }
                    .slide-out {
                        animation: slideOut 1s forwards;
                    }
                    .slide-in {
                        animation: slideIn 1s forwards;
                    }
                    .scale-down {
                        transform-origin: center center;
                    }
                    .scale-up {
                        transform-origin: center center;
                    }
                `}</style>
            </div>
        </>
    );
}
// export default TestimonialCarousel;

