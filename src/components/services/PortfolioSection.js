"use client"

import { useState } from "react"
import { CategoryNav } from "./CategoryNav"
import { portfolioItems } from "@/data/portfolio-item"
import Image from "next/image"
import dynamic from "next/dynamic"
import { PinterestModal } from "./pinterest-modal"
import { useLottieLoader } from "@/utils/lottieLoader"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic")
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory)

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id)
    const nextItem = filteredItems[(currentIndex + 1) % filteredItems.length]
    setSelectedItem(nextItem)
  }

  const handlePrevious = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id)
    const previousItem = filteredItems[currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1]
    setSelectedItem(previousItem)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer overflow-hidden rounded-lg"
            style={{
              gridRow: `span ${Math.ceil(item.height / (item.width / 2))}`,
            }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative w-full h-full">
              <MediaRenderer item={item} />
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <PinterestModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  )
}

function MediaRenderer({ item }) {
  if (item.video && item.video.endsWith(".json")) {
    return <LottieRenderer item={item} />
  }

  if (item.video) {
    return <video src={item.video} loop muted autoPlay className="object-cover w-full h-full" />
  }

  return (
    <Image
      src={item.image || "/placeholder.svg"}
      alt={item.title}
      fill
      className="object-cover transition-transform hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}

function LottieRenderer({ item }) {
  const animationData = useLottieLoader(item.video)

  if (!animationData) {
    return <div className="w-full h-full flex items-center justify-center bg-gray-100">Loading...</div>
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full h-full object-cover hover:scale-105 transition-transform"
    />
  )
}

