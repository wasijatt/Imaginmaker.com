"use client"

import { useState } from "react"
import { CategoryNav } from "./CategoryNav"
import Link from "next/link"
import { portfolioItems } from "@/data/portfolio-item"
import { MediaRenderer } from "./MediaRenderer"

export function PinterestGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic")
  const [activeSubcategory, setActiveSubcategory] = useState(null)

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory && (!activeSubcategory || item.subcategory === activeSubcategory),
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        activeSubcategory={activeSubcategory}
        onSubcategoryChange={setActiveSubcategory}
      />

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative mb-4 break-inside-avoid">
            <Link href={`/services/${item.id}`} passHref>
              <div className="relative w-full h-auto">
                <MediaRenderer 
                  item={item} 
                  className="rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer" 
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}