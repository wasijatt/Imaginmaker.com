"use client";

import { useRouter } from "next/router";
import { portfolioItems } from "@/data/portfolio-item"; // Ensure correct import
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from "next/link";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function ImagePage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the selected item
  const item = portfolioItems.find((img) => img.id === id);

  if (!item) return <p className="text-center mt-20">Image not found</p>;

  // Get related images from the same category
  const relatedItems = portfolioItems.filter(
    (img) => img.category === item.category && img.id !== id
  );

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        {/* Left: Image/Video Display */}
        <div className="relative bg-black flex items-center justify-center h-[80vh] rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            {item.video ? (
              item.video.endsWith('.json') ? (
                // Lottie Animation for JSON files
                <Lottie animationData={item.video} loop={true} />
              ) : (
                // Video files
                <video
                  src={item.video}
                  loop
                  muted
                  autoPlay
                  className="object-contain w-full h-full"
                />
              )
            ) : (
              // Image files
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
          <p className="text-muted-foreground text-gray-600">
            {item.description || "No description available"}
          </p>

          {/* Contact Button */}
          <Link href="/contact" passHref>
            <button className="mt-4 px-6 py-2 bg-[#6D40FF] text-white rounded-full hover:bg-[#7D40FF] transition-all duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Related Images */}
      <h3 className="mt-8 text-xl font-bold text-gray-800">Related Works</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {relatedItems.map((img) => (
          <Link key={img.id} href={`/services/${img.id}`} passHref>
            <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
              {img.video ? (
                img.video.endsWith('.json') ? (
                  // Lottie Animation for JSON files
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    <Lottie animationData={img.video} loop={true} />
                  </div>
                ) : (
                  // Video files
                  <video
                    src={img.video}
                    loop
                    muted
                    autoPlay
                    className="object-cover w-full h-full"
                  />
                )
              ) : (
                // Image files
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}