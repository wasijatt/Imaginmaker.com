"use client";

import { useState } from "react";
import { CategoryNav } from "./CategoryNav";
import { portfolioItems } from "@/data/portfolio-item";

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id);
    const nextItem = filteredItems[(currentIndex + 1) % filteredItems.length];
    setSelectedItem(nextItem);
  };

  const handlePrevious = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id);
    const previousItem = filteredItems[currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1];
    setSelectedItem(previousItem);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer overflow-hidden rounded-lg"
            style={{
              gridRow: `span ${Math.ceil(item.height / (item.width / 2))}`,
            }}
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      <ImageModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}
