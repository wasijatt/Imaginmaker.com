import { useRouter } from "next/router";
import { portfolioItems } from "@/data/portfolio-item";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLottieLoader } from '@/utils/lottieLoader';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

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
        {/* Left: Media Display */}
        <div className="relative flex items-center justify-center h-[80vh] rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            <MediaRenderer item={item} />
          </div>
        </div>

        {/* Right: Details */}
        <div className="p-6 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
          <p className="text-muted-foreground text-gray-600">
            {item.description || "No description available"}
          </p>

          {/* Contact Info Description */}
          <p className="text-gray-800 text-sm font-bold">
            You can also reach out to us on our social media platforms:
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-2">
            <SocialMediaLinks />
          </div>

          {/* Contact Button */}
          <Link href="/contact" passHref>
            <button className="mt-4 px-6 py-2 bg-[#6D40FF] text-white rounded-full hover:bg-[#7D40FF] transition-all duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Related Works */}
      <h3 className="mt-8 text-xl font-bold text-gray-800">Related Works</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {relatedItems.map((img) => (
          <RelatedWorkItem key={img.id} item={img} />
        ))}
      </div>
    </main>
  );
}

function MediaRenderer({ item }) {
  if (item.video && item.video.endsWith('.json')) {
    return <LottieRenderer item={item} />;
  }

  if (item.video) {
    return (
      <video
        src={item.video}
        loop
        muted
        autoPlay
        className="object-contain w-full h-full"
      />
    );
  }

  return (
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 60vw"
      priority
    />
  );
}

function LottieRenderer({ item }) {
  const animationData = useLottieLoader(item.video);

  if (!animationData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <Lottie 
      animationData={animationData}
      loop={true} 
      className="w-full h-full object-contain"
    />
  );
}

function RelatedWorkItem({ item }) {
  return (
    <Link href={`/services/${item.id}`} passHref>
      <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
        <MediaRenderer item={item} />
      </div>
    </Link>
  );
}

function SocialMediaLinks() {
  const socialLinks = [
    { 
      Icon: Facebook, 
      href: "https://facebook.com",
      className: "text-black hover:text-[#6D40FF]"
    },
    { 
      Icon: Instagram, 
      href: "https://instagram.com",
      className: "text-black hover:text-[#6D40FF]"
    },
    { 
      Icon: Linkedin, 
      href: "https://linkedin.com",
      className: "text-black hover:text-[#6D40FF]"
    }
  ];

  return socialLinks.map(({ Icon, href, className }) => (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-colors duration-200`}
    >
      <Icon size={24} />
    </a>
  ));
}