import React from "react";

export const Textarea = ({ placeholder, className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`min-h-[180px] resize-none rounded-3xl border-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
      {...props}
    />
  );
};
