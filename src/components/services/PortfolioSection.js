import React, { useState } from "react";
import { categories } from "@/types/gallery";
import { galleryItems } from "@/data/galleryItems"; 
import CategoryNav from "./CategoryNav";  // Add this import
import GalleryGrid from "./GalleryGrid";  // Add this import
import { Button } from "../ui/button";
import { satoshi } from "@/lib/fonts";
import Image from "next/image";
import Footer from "../Footer";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="container mx-auto py-12 md:py-24">
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <GalleryGrid
        items={galleryItems}
        activeCategory={activeCategory}
      />

        {/* Bottom Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl py-16 mt-[10rem]">
          {/* Card Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/casestudy/bottomthirdcard.svg"
              alt="Card background"
              fill
              className="object-cover opacity-100 "
            />
          </div>

          {/* Card Content */}
          <div className="relative flex flex-col items-center justify-between gap-8 p-10 md:flex-row md:p-12">
            <div className="flex items-start space-x-4">
              <Image
                src="/casestudy/third commas.svg"
                alt="Quote mark"
                width={40}
                height={40}
                className="mt-1"
              />
              <h3 className="text-left text-2xl font-semibold text-white md:text-3xl">
                Have an idea? We can help.<br />
                Start your project →
              </h3>
            </div>
            <Button
              variant="secondary"
              className={`${satoshi.className} w-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white px-9 py-4 rounded-full text-lg hover:bg-[#7D40FF] md:w-auto font-bold`}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>


    </section>
    
  );
}