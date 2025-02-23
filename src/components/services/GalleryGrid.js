import { useState } from "react";
import { CategoryNav } from "./CategoryNav";
import Link from "next/link";

const portfolioItems = [
  { id: "1", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/01.webp" },
  { id: "2", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "3", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "4", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "5", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "6", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
];

export function PinterestGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic");

  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Category Navigation */}
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative mb-4 break-inside-avoid">
            <Link href={`/services/${item.id}`} passHref>
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
