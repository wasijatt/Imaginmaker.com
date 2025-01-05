import React from "react";
import { cn } from "@/lib/utils";

export default function CategoryNav({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav className="w-full overflow-x-auto pb-2 mb-8">
      <ul className="flex gap-8 min-w-max px-4 md:px-0 md:justify-center">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={cn(
                "text-lg font-medium relative py-2 transition-colors hover:text-primary",
                "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
                activeCategory === category && "text-primary after:scale-x-100",
                activeCategory !== category && "text-muted-foreground"
              )}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
