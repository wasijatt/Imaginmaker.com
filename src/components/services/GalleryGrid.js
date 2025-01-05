import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GalleryGrid({ items, activeCategory }) {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const filtered = items.filter((item) => item.category === activeCategory);
    setFilteredItems(filtered);
  }, [activeCategory, items]);

  return (
    <>
    {/* <div className="flex"> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-0">
      <AnimatePresence>
        {filteredItems?.map((item) => (
          <motion.div
          key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[3/4] overflow-hidden rounded-lg"
            >
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="object-cover transition-transform duration-300 hover:scale-105"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-0">
      <AnimatePresence>
        {filteredItems?.map((item) => (
          <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[3/4] overflow-hidden rounded-lg"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="object-cover transition-transform duration-300 hover:scale-105"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
          </motion.div>
        ))}
      </AnimatePresence>
    </div> */}
        {/* </div> */}
        </>
  );
}
