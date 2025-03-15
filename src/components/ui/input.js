import React from "react";

export const Input = ({ type = "text", placeholder, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-full px-4 py-2 focus:outline-none focus:ring-1 border-3 border-black ${className}`}
      {...props}
    />
  );
};
