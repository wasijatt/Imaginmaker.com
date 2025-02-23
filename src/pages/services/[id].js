import { useRouter } from "next/router";
import portfolioItems from "@/data/portfolio-item";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

export default function ImagePage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the selected image
  const item = portfolioItems.find((img) => img.id === id);

  if (!item) return <p className="text-center mt-20">Image not found</p>;

  // Get related images from the same category
  const relatedItems = portfolioItems.filter(
    (img) => img.category === item.category && img.id !== id
  );

  return (
    <main className="container mx-auto px-4 py-6">
      {/* <Navbar /> */}

      <div className="grid md:grid-cols-[1fr,400px] gap-8">
        {/* Left: Image Display */}
        <div className="relative bg-black flex items-center justify-center h-[80vh]">
          <div className="relative w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-muted-foreground">{item.description || "No description available"}</p>
        </div>
      </div>

      {/* Related Images */}
      <h3 className="mt-8 text-xl font-bold">Related Images</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {relatedItems.map((img) => (
          <Link key={img.id} href={`/services/${img.id}`} passHref>
            <div className="relative w-full h-60">
              <Image
                src={img.image}
                alt={img.title}
                fill
                className="object-cover rounded-lg hover:opacity-80 transition"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* <Footer /> */}
    </main>
  );
}
