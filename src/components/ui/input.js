import React from "react";

export const Input = ({ type = "text", placeholder, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#6D40FF] border-2 border-black hover:border-none ${className}`}
      {...props}
    />
  );
};
