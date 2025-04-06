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

      <div className="columns-2 md:columns-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <Link href={`/services/${item.id}`} passHref>
              <div className="relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <MediaRenderer 
                  item={item} 
                  className="w-full h-auto" 
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}