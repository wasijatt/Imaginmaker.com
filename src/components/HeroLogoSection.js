"use client";

import React from "react";
import Image from "next/image";

export function LogoMarquee() {
    return (
        <div className="w-full bg-black overflow-hidden py-4 sm:py-6">
            <div className="relative flex gap-0">
                {/* First set of logos */}
                <div className="flex animate-marquee whitespace-nowrap gap-0">
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo1.png"
                            alt="Company Logo 1"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo2.png"
                            alt="Company Logo 2"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo3.png"
                            alt="Company Logo 3"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo4.png"
                            alt="Company Logo 4"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo5.png"
                            alt="Company Logo 5"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                </div>
                {/* Second set of logos (duplicate for seamless loop) */}
                <div className="flex animate-marquee2 whitespace-nowrap gap-0 absolute left-0">
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo1.png"
                            alt="Company Logo 1"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo2.png"
                            alt="Company Logo 2"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo3.png"
                            alt="Company Logo 3"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo4.png"
                            alt="Company Logo 4"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                    <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 flex items-center">
                        <Image
                            src="/logoanimation/animationlogo5.png"
                            alt="Company Logo 5"
                            width={200}
                            height={70}
                            className="max-h-8 sm:max-h-10 md:max-h-12 w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

