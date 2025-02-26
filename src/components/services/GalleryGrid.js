import { useState } from "react";
import { CategoryNav } from "./CategoryNav";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio-item"; // Import from the data file

export function PinterestGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic");

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Category Navigation */}
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative mb-4 break-inside-avoid">
            <Link href={`/services/${item.id}`} passHref>
              <div className="relative w-full h-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400} // Adjust based on requirement
                  height={300} // Adjust based on requirement
                  className="rounded-lg object-contain w-full h-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
