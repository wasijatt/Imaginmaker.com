import React from "react";

export const Input = ({ type = "text", placeholder, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-full border-gray-200 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-600 ${className}`}
      {...props}
    />
  );
};
