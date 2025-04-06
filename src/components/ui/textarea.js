import { satoshi } from "@/lib/fonts";
import React from "react";

export const Textarea = ({ placeholder, className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`min-h-[180px] w-full resize-none rounded-3xl border-2 border-gray-900 px-8 py-2 focus:outline-none focus:ring-1 text-black font-bold ${satoshi.className}`}
      {...props}
    />
  );
};
