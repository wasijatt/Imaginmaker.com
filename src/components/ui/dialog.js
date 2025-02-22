// src/components/ui/dialog.js
import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={onOpenChange}>
      <div className="bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
