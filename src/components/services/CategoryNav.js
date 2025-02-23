"use client";

import { cn } from "@/lib/utils";

export function CategoryNav({ activeCategory, onCategoryChange }) {
  const categories = [
    { label: "Graphic Design", value: "graphic" },
    { label: "Motion Design", value: "motion" },
    { label: "UI/UX Design", value: "ui-ux" },
    { label: "Branding", value: "branding" },
  ];

  return (
    <nav className="relative w-full mt-20 ">
      <div className="flex justify-start md:justify-center overflow-x-auto md:overflow-visible pl-6 pr-4 mb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {categories.map(({ label, value }, index) => (
          <button
            key={value}
            onClick={() => onCategoryChange(value)}
            className={cn(
              "md:text-lg text-sm pb-2 px-3 relative transition-colors hover:text-[#7D40FF] whitespace-nowrap font-bold",
              activeCategory === value ? "text-[#6D40FF]" : "text-muted-foreground",
              index !== categories.length - 1 ? "mr-4" : "" // Adds space but not after last item
            )}
          >
            {label}
            {activeCategory === value && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6D40FF]" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
