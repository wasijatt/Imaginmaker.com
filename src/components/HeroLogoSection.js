"use client";

import React from "react";
import Image from "next/image";

export function LogoMarquee() {
    return (
        <div className="bg-black overflow-hidden py-4 sm:py-6 w-full">
            <div className="relative flex gap-0">
                {/* First set of logos */}
                <div className="flex animate-marquee whitespace-nowrap gap-0">
                    <div className="mx-3 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo1.png"
                            alt="Company Logo 1"
                            width={250}
                            height={100}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo2.png"
                            alt="Company Logo 2"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo3.png"
                            alt="Company Logo 3"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo4.png"
                            alt="Company Logo 4"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo5.png"
                            alt="Company Logo 5"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                </div>
                {/* Second set of logos (duplicate for seamless loop) */}
                <div className="flex animate-marquee2 whitespace-nowrap gap-0 absolute left-0">
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo1.png"
                            alt="Company Logo 1"
                            width={250}
                            height={100}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo2.png"
                            alt="Company Logo 2"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo3.png"
                            alt="Company Logo 3"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo4.png"
                            alt="Company Logo 4"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo5.png"
                            alt="Company Logo 5"
                            width={200}
                            height={70}
                            className="max-h-12 sm:max-h-12 md:max-h-16 w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
