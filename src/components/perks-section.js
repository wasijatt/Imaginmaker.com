"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import useInView from "@/components/ui/react-intersection-observer"
import { satoshi } from "@/lib/fonts"

const Perk = ({
  icon,
  title,
  description,
  iconSize,
  index,
  titlePosition,
  descriptionPosition,
  titleFontSize,
  descriptionFontSize,
  titleColor,
  descriptionColor,
  iconPosition,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className="text-center">
      <div
        className="flex justify-center mb-4 sm:mb-6 md:mb-8"
        style={{
          ...iconPosition,
          // Reset margin for 1024x600 screens
          ...(typeof window !== "undefined" &&
            window.innerWidth === 1024 &&
            window.innerHeight === 600 && { marginTop: "10px" }),
        }}
      >
        <div
          className={`relative transition-all duration-1000 ease-out ${
            inView ? "opacity-100 scale-100" : "opacity-30 scale-95"
          }`}
          style={{
            transitionDelay: `${index * 200}ms`,
          }}
        >
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            width={iconSize}
            height={iconSize}
            className="text-white [height:600px]:[width:1024px]:w-auto [height:600px]:[width:1024px]:h-[30px]"
          />
        </div>
      </div>
      <h3
        className={`font-bold mb-2 sm:mb-3 md:mb-4 transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          transitionDelay: `${index * 200 + 200}ms`,
          fontSize: titleFontSize,
          color: titleColor,
          ...titlePosition,
          // Adjust for 1024x600 screens
          ...(typeof window !== "undefined" &&
            window.innerWidth === 1024 &&
            window.innerHeight === 600 && { marginTop: "10px", fontSize: "1rem" }),
        }}
      >
        {title}
      </h3>
      <p
        className={`max-w-xs mx-auto transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } [height:600px]:[width:1024px]:text-sm`}
        style={{
          transitionDelay: `${index * 200 + 400}ms`,
          fontSize: descriptionFontSize,
          color: descriptionColor,
          ...descriptionPosition,
          // Adjust for 1024x600 screens
          ...(typeof window !== "undefined" &&
            window.innerWidth === 1024 &&
            window.innerHeight === 600 && { fontSize: "0.875rem" }),
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default function PerksSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const perks = [
    {
      icon: "/perksSection/1.svg",
      title: "Lightning fast delivery",
      description: "Get your design one at a time in just a few days on average.",
      iconSize: 35,
      titlePosition: { marginTop: "30px" },
      titleFontSize: "1.2rem",
      descriptionFontSize: "1rem",
      titleColor: "#FFFFFF",
      descriptionColor: "#F9F9F9",
      iconPosition: { marginTop: "16px" },
    },
    {
      icon: "/perksSection/2.svg",
      title: "Flexible and scalable",
      description: "Scale up or down as needed, and pause or cancel at anytime.",
      iconSize: 55,
      titlePosition: { marginTop: "30px" },
      titleFontSize: "1.2rem",
      descriptionFontSize: "1.0rem",
      titleColor: "#FFFFFF",
      descriptionColor: "#F9F9F9",
      iconPosition: { marginTop: "20px" },
    },
    {
      icon: "/perksSection/3.svg",
      title: "Unique and all yours",
      description: "Each of your designs is made especially for you and is 100% yours.",
      iconSize: 45,
      titlePosition: { marginTop: "30px" },
      titleFontSize: "1.1rem",
      descriptionFontSize: "1rem",
      titleColor: "#FFFFFF",
      descriptionColor: "#F9F9F9",
      iconPosition: { marginTop: "26px" },
    },
  ]

  return (
    <section
      className="bg-[#7D40FF] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 
          w-full overflow-hidden
          /* Height adjustments */
          min-h-[500px]
          h-auto
          md:h-auto
          lg:h-auto
          xl:h-auto
          2xl:h-auto
          /* Special case for 1024x600 screens */
          [height:600px]:[width:1024px]:py-6
          [height:600px]:[width:1024px]:min-h-[450px]"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`${satoshi.className} text-center text-white 
                  text-[14px] sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] 
                  font-bold max-w-4xl mx-auto 
                  mb-8 sm:mb-12 md:mb-16 lg:mb-20 
                  leading-tight 
                  /* Adjust negative margins */
                  mt-2
                  xl:mt-0
                  2xl:mt-0
                  /* Special case for 1024x600 screens */
                  [height:600px]:[width:1024px]:text-xl
                  [height:600px]:[width:1024px]:mb-6`}
        >
          <span className="block">Perks so good you&apos;ll never need to go anywhere else </span>
          <span className="block">for your design. Seriously.</span>
        </h2>

        <div
          className={`${satoshi.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                  gap-6 sm:gap-8 md:gap-10 lg:gap-12 
                  max-w-6xl mx-auto 
                  font-bold text-[#F9F9F9] 
                  /* Adjust negative margins */
                  mt-0
                  xl:mt-0
                  2xl:mt-0
                  /* Special case for 1024x600 screens */
                  [height:600px]:[width:1024px]:gap-4`}
        >
          {perks.map((perk, index) => (
            <Perk key={index} {...perk} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

