"use client";

import { useState } from "react";
import { CategoryNav } from "./CategoryNav";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio-item";
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

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
                {item.video ? (
                  item.video.endsWith('.json') ? (
                    <Lottie animationData={item.video} loop={true} />
                  ) : (
                    <video
                      src={item.video}
                      loop
                      muted
                      autoPlay
                      className="rounded-lg object-contain w-full h-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
                    />
                  )
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-contain w-full h-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}