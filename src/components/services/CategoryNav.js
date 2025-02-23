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
    <nav className="flex justify-center space-x-2 mb-8">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onCategoryChange(value)}
          className={cn(
            "md:text-lg text:sm font-medium pb-2 px-1 relative transition-colors hover:text-primary",
            activeCategory === value ? "text-primary" : "text-muted-foreground"
          )}
        >
          {label}
          {activeCategory === value && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
          )}
        </button>
      ))}
    </nav>
  );
}
