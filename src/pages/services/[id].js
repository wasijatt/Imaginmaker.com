import { useRouter } from "next/router";
import portfolioItems from "@/data/portfolio-item";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

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
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
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
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
            />
          </Link>
        ))}
      </div>

      {/* <Footer /> */}
    </main>
  );
}
