"use client";

import { useState } from "react";
import { CategoryNav } from "./CategoryNav";
import { PinterestModal } from "./pinterest-modal";

const portfolioItems = [
  { id: "1", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/01.webp", height: 500 },
  { id: "6", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/04.webp", height: 400 },
  { id: "2", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/09.webp", height: 500 },
  { id: "1", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/04.webp", height: 500 },
  { id: "6", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/2.webp", height: 200 },
  { id: "2", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/05.webp", height: 500 },
  { id: "1", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/07.webp", height: 500 },
  { id: "6", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/08.webp", height: 200 },
  { id: "2", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/03.webp", height: 500 },
  { id: "1", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/06.webp", height: 500 },
  { id: "6", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/11.webp", height: 200 },
  { id: "2", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/12.webp", height: 500 },
  // { id: "3", title: "Coffee Discount", category: "graphic", image: "/Graphic design poster/04.webp", height: 200 },
  // { id: "4", title: "Fashion Sale", category: "graphic", image: "/Graphic design poster/2.webp", height: 200 },
  // { id: "5", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/05.webp", height: 200 },
  // { id: "7", title: "Fashion Sale", category: "graphic", image: "/Graphic design poster/2.webp", height: 200 },
  // { id: "8", title: "Coffee Discount", category: "graphic", image: "/Graphic design poster/04.webp", height: 400 },
  // { id: "1", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/2.webp", height: 200 },
  // { id: "2", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/03.webp", height: 500 },
  // { id: "3", title: "Coffee Discount", category: "graphic", image: "/Graphic design poster/04.webp", height: 200 },
  // { id: "4", title: "Fashion Sale", category: "graphic", image: "/Graphic design poster/07.webp", height: 400 },
  // { id: "5", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/04.webp", height: 300 },
  // { id: "6", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/06.webp", height: 300 },
  // { id: "7", title: "Fashion Sale", category: "graphic", image: "/Graphic design poster/07.webp", height: 200 },
  // { id: "8", title: "Coffee Discount", category: "graphic", image: "/Graphic design poster/04.webp", height: 400 },
];

export function PinterestGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-4">
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Masonry Layout Fix */}
      <div className="columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer rounded-lg overflow-hidden break-inside-avoid"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full object-cover rounded-lg"
              style={{ height: `${item.height}px` }}
            />
          </div>
        ))}
      </div>

      <PinterestModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
