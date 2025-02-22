import { useState } from "react";
import { CategoryNav } from "./CategoryNav";
import Link from "next/link";

const portfolioItems = [
  { id: "1", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/01.webp", height: 400 },
  { id: "2", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "3", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "4", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "5", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "6", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "7", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "8", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "9", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "10", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "11", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "12", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/01.webp", height: 400 },
  { id: "13", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "14", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "15", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "16", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "17", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "18", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "19", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "20", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "21", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "22", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "23", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/01.webp", height: 400 },
  { id: "24", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "25", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "26", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "27", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "28", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "29", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "30", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "31", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "32", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "33", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "34", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/01.webp", height: 400 },
  { id: "35", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "36", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "37", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "38", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "39", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "40", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "41", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "42", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "43", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "44", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "45", title: "Tech Conference", category: "graphic", image: "/Graphic design poster/01.webp", height: 400 },
  { id: "46", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "47", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "48", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "49", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "50", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "51", title: "Paris Perfume", category: "graphic", image: "/Graphic design poster/07.webp" },
  { id: "52", title: "New Branding", category: "branding", image: "/Branding/02.webp" },
  { id: "53", title: "Luxury Packaging", category: "branding", image: "/Branding/05.webp" },
  { id: "54", title: "Minimal Poster", category: "graphic", image: "/Graphic design poster/04.webp" },
  { id: "55", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "56", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
  { id: "57", title: "Streetwear Logo", category: "branding", image: "/Branding/06.webp" },
];

export function PinterestGallery() {
  const [activeCategory, setActiveCategory] = useState("graphic");

  const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Category Navigation */}
      <CategoryNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-11">
        {filteredItems.map((item) => (
          <Link key={item.id} href={`/services/${item.id}`} passHref>
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-200 mb-4"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
