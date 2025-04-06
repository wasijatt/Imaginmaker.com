"use client"

import { useState } from "react"
import { CategoryNav } from "./CategoryNav"
import Link from "next/link"
import { portfolioItems } from "@/data/portfolio-item"
import { MediaRenderer } from "./MediaRenderer"
import Image from "next/image"
import { Button } from "../ui/button"
import { satoshi } from "@/lib/fonts"
import Footer from "../Footer"

export function PinterestGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic")
  const [activeSubcategory, setActiveSubcategory] = useState(null)

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory && (!activeSubcategory || item.subcategory === activeSubcategory),
  )

  return (
    <>
    <div className="container mx-auto px-4 py-6">
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        activeSubcategory={activeSubcategory}
        onSubcategoryChange={setActiveSubcategory}
        />

      <div className="columns-2 md:columns-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <Link href={`/services/${item.id}`} passHref>
              <div className="relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <MediaRenderer 
                  item={item} 
                  className="w-full rounded-lg" 
                  />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
        {/* Bottom Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl py-16 mt-32 mb-32">
          {/* Card Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/casestudy/bottomthirdcard.svg"
              alt="Card background"
              fill
              className="object-cover opacity-100 "
            />
          </div>

          {/* Card Content */}
          <div className="relative flex flex-col items-center justify-between gap-8 p-10 md:flex-row md:p-12">
            <div className="flex items-start space-x-4">
              <Image
                src="/casestudy/third commas.svg"
                alt="Quote mark"
                width={35}
                height={35}
                className="mt-1"
              />
              <h3 className="text-left font-semibold text-white md:text-3xl text-md">
                Have an idea? We can help.<br />
                Start your project →
              </h3>
            </div>
            <Button
              variant="secondary"
              className={`${satoshi.className} w-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white md:px-8 px-2 py-3 rounded-full text-lg hover:bg-[#7D40FF] md:w-auto font-bold`}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
        <Footer/>
                    </>
  )
}