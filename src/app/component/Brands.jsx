

"use client";
import Image from "next/image";

const images = [
  { src: "/brands/1.png", width: 153, height: 22 },
  { src: "/brands/2.png", width: 179, height: 26 },
  { src: "/brands/3.png", width: 137, height: 23 },
  { src: "/brands/4.png", width: 134, height: 55 },
  { src: "/brands/5.png", width: 128, height: 32 },
  { src: "/brands/6.png", width: 142, height: 31 },
  { src: "/brands/7.png", width: 112, height: 39 },
  { src: "/brands/8.png", width: 118, height: 22 },
];

const Brands = () => {
  return (
    <div className="w-full bg-gray-900 flex overflow-x-scroll justify-between p-10 items-center">
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image.src} alt="brands" width={image.width} height={image.height} />
        </div>
      ))}
    </div>
  );
};

export default Brands;
