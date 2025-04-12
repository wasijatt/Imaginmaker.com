"use client"

import { cn } from "lib/utils"

export function CategoryNav({ activeCategory, onCategoryChange, activeSubcategory, onSubcategoryChange }) {
  const categories = [
    { label: "Graphic Design", value: "graphic", subcategories: ["poster design", "branding"] },
    { label: "NFT's", value: "nft", subcategories: ["art"] },
    {
      label: "Motion Design",
      value: "motion",
      subcategories: ["Logo", "Poster", "Lottie"],
    },
    { label: "UI/UX Design", value: "ui-ux", subcategories: ["web design", "app design"] },
    { label: "Branding", value: "branding", subcategories: ["logo design", "brand identity"] },
  ]

  const activeCategoryData = categories.find((cat) => cat.value === activeCategory)

  return (
    <nav className="relative w-full mt-20 ">
      {/* Main Categories */}
      <div className="flex justify-start md:justify-center overflow-x-auto md:overflow-visible pl-6 pr-4 mb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 -webkit-overflow-scrolling: touch">
        {categories.map(({ label, value }, index) => (
          <button
            key={value}
            onClick={() => {
              onCategoryChange(value)
              onSubcategoryChange(null) // Reset subcategory when main category changes
            }}
            className={cn(
              "md:text-lg text-sm pb-2 px-3 relative transition-colors hover:text-[#7D40FF] whitespace-nowrap font-bold",
              activeCategory === value ? "text-[#6D40FF]" : "text-muted-foreground",
              index !== categories.length - 1 ? "mr-4" : "", // Adds space but not after last item
            )}
          >
            {label}
            {activeCategory === value && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6D40FF]" />}
          </button>
        ))}
      </div>

      {/* Subcategories */}
      {activeCategoryData && (
        <div className="flex justify-start md:justify-center overflow-x-auto md:overflow-visible pl-6 pr-4 mb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="flex gap-4">
            {activeCategoryData.subcategories.map((subcategory, index) => (
              <button
                key={subcategory}
                onClick={() => onSubcategoryChange(subcategory)}
                className={cn(
                  "text-sm md:text-base px-4 py-2 rounded-[15px] transition-all duration-200 font-medium",
                  activeSubcategory === subcategory
                    ? "bg-[#6D40FF] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-[#6D40FF] hover:text-white hover:shadow-lg",
                )}
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}