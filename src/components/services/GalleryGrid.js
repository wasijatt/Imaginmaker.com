"use client"

import { useState, useEffect } from "react"
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
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    // Filter and sort items whenever category or subcategory changes
    const filtered = portfolioItems
      .filter(item => item.category === activeCategory)
      .filter(item => !activeSubcategory || item.subcategory === activeSubcategory)
      .sort((a, b) => a.title.localeCompare(b.title)) // Sort by title for consistent ordering

    setFilteredItems(filtered)
  }, [activeCategory, activeSubcategory])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveSubcategory(null) // Reset subcategory when main category changes
  }

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          activeSubcategory={activeSubcategory}
          onSubcategoryChange={setActiveSubcategory}
        />

        {filteredItems.length > 0 ? (
          <div className="columns-2 md:columns-3 gap-4 w-full">
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found for this category</p>
          </div>
        )}

        {/* Rest of your existing code remains the same */}
        <div className="flex justify-center my-32 md:-mt-40 -mt-60">
          <div 
            className="relative rounded-3xl overflow-hidden bg-transparent"
            style={{
              width: '90vw',
              height: '70vh',
              maxWidth: '1400px',
              maxHeight: '800px'
            }}
          >
            <Image
              src="/services/service-static.webp"
              alt="Full width background"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
              priority
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl py-16 my-16 px-6 md:-mt-64 -mt-80">
          <div className="absolute inset-0">
            <Image
              src="/casestudy/bottomthirdcard.svg"
              alt="Card background"
              fill
              className="object-cover opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>

          <div className="relative flex flex-col items-center justify-between gap-8 p-6 md:flex-row md:p-12">
            <div className="flex items-start space-x-4">
              <Image
                src="/casestudy/third commas.svg"
                alt="Quote mark"
                width={35}
                height={35}
                className="mt-1"
              />
              <h3 className="text-left font-semibold text-white md:text-3xl text-lg">
                Have an idea? We can help.<br />
                Start your project →
              </h3>
            </div>
            <Button
              variant="secondary"
              className={`${satoshi.className} w-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white md:px-8 px-4 py-3 rounded-full text-lg hover:bg-[#7D40FF] md:w-auto font-bold`}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}