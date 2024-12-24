'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useInView from '@/components/ui/react-intersection-observer'
import { satoshi } from '@/lib/fonts'
import { clashGrotesk } from '@/lib/clashGroteskfont'

const StatBoxProps = {
    icon: 'string',
    number: 'string',
    description: 'string',
    index: 'number'
}

const StatBox = ({ icon, number, description, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div
            ref={ref}
            className={`bg-[#1A1A1A] rounded-[20px] p-4 text-center transform
                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                hover:bg-[#0A0A0A] group w-full max-w-[280px] aspect-square flex flex-col items-center justify-center
                border border-[#1A1A1A] backdrop-blur-sm transition-all duration-1000 ease-out`}
            style={{
                boxShadow: '0 0 10px rgba(125, 64, 255, 0.05)'
            }}
        >
            <div>
                <Image
                    src={icon}
                    alt={description}
                    width={100}
                    height={100}
                    className="mx-auto mb-4 text-[#7D40FF]"
                />
            </div>

            <h3
                className={`${clashGrotesk.className} text-3xl md:text-4xl font-bold text-white mb-2`}
            >
                {number}
            </h3>

            <p
                className={`${satoshi.className} text-white text-sm md:text-base font-Medium tracking-wider opacity-100`}
            >
                {description}
            </p>
        </div>
    )
}

export default function WhyPeopleLikeUs() {
    const stats = [
        {
            icon: "/why-people-like-us/box-1.svg",
            number: "1500+",
            description: "Project Completed"
        },
        {
            icon: "/why-people-like-us/box-2.svg",
            number: "900+",
            description: "Satisfied Clients"
        },
        {
            icon: "/why-people-like-us/box-3.svg",
            number: "157+",
            description: "Countries Worldwide"
        }
    ]

    return (
        <section className="bg-black py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`${clashGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4`}>
                        Why People Like US
                    </h2>
                    <div className="w-28 h-1 bg-[#7D40FF] mx-auto mb-4"></div>
                    <p className={`${satoshi.className} text-[1rem] text-white font-medium tracking-wide`}>
                        Professional Design Agency to Provide solution
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto justify-items-center">
                    {stats.map((stat, index) => (
                        <StatBox
                            key={index}
                            {...stat}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

