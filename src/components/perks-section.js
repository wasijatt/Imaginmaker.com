'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useInView from '@/components/ui/react-intersection-observer'
import { satoshi } from '@/lib/fonts'

const Perk = ({ icon, title, description, iconSize, index, titlePosition, descriptionPosition, titleFontSize, descriptionFontSize, titleColor, descriptionColor, iconPosition }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <div ref={ref} className="text-center">
            <div className="flex justify-center mb-8" style={iconPosition}>
                <div
                    className={`relative transition-all duration-1000 ease-out ${inView ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                        }`}
                    style={{
                        transitionDelay: `${index * 200}ms`
                    }}
                >
                    <Image
                        src={icon}
                        alt={title}
                        width={iconSize}
                        height={iconSize}
                        className="text-white"
                    />
                </div>
            </div>
            <h3 className={`font-bold mb-4 transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                    transitionDelay: `${index * 200 + 200}ms`,
                    fontSize: titleFontSize,
                    color: titleColor,
                    ...titlePosition
                }}>
                {title}
            </h3>
            <p className={`max-w-xs mx-auto transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                    transitionDelay: `${index * 200 + 400}ms`,
                    fontSize: descriptionFontSize,
                    color: descriptionColor,
                    ...descriptionPosition
                }}>
                {description}
            </p>
        </div>
    )
}

export default function PerksSection() {
    const perks = [
        {
            icon: "/perksSection/1.svg",
            title: "Lightning fast delivery",
            description: "Get your design one at a time in just a few days on average.",
            iconSize: 41, // Larger icon
            titlePosition: { marginTop: '30px' },
            // descriptionPosition: { marginRight: '10px' },
            titleFontSize: '1.2rem', // Example font size for title
            descriptionFontSize: '1.1rem',
            titleColor: '#FFFFFF', // Example color for title
            descriptionColor: '#F9F9F9', // Example color for description
            iconPosition: { marginTop: '16px' }
        },
        {
            icon: "/perksSection/2.svg",
            title: "Flexible and scalable",
            description: "Scale up or down as needed, and pause or cancel at anytime.",
            iconSize: 72,
            titlePosition: { marginTop: '30px' },
            // descriptionPosition: { marginRight: '10px' },
            titleFontSize: '1.2rem', // Example font size for title
            descriptionFontSize: '1.0rem',
            titleColor: '#FFFFFF', // Example color for title
            descriptionColor: '#F9F9F9', // Example color for description
            iconPosition: { marginTop: '20px' }
        },
        {
            icon: "/perksSection/3.svg",
            title: "Unique and all yours",
            description: "Each of your designs is made especially for you and is 100% yours.",
            iconSize: 59,
            titlePosition: { marginTop: '30px' },
            // descriptionPosition: { marginRight: '10px' },
            titleFontSize: '1.2rem', // Example font size for title
            descriptionFontSize: '1rem',
            titleColor: '#FFFFFF', // Example color for title
            descriptionColor: '#F9F9F9', // Example color for description
            iconPosition: { marginTop: '26px' }
        }
    ]

    return (
        <section className="bg-[#7D40FF] py-16 sm:py-24 px-4 md:px-6 lg:px-8 xl:h-[62vh]">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${satoshi.className} text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold max-w-4xl mx-auto mb-16 sm:mb-24 leading-tight xl:mt-[-4rem] xl:text-[1.5rem]`}>
                    <span className="block">Perks so good you&apos;ll never need to go anywhere else </span>
                    <span className="block">for your design. Seriously.</span>
                </h2>

                <div className={`${satoshi.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 lg:gap-16 max-w-6xl mx-auto font-bold text-[#F9F9F9] xl:mt-[-5rem]`}>
                    {perks.map((perk, index) => (
                        <Perk
                            key={index}
                            {...perk}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
