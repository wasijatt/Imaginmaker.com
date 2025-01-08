import Image from 'next/image'

export default function GalleryGrid() {
  const topRowImages = [
    {
      src: "/Graphic design poster/01.webp",
      alt: "Paris Discount Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/2.webp",
      alt: "Black is Tech",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/3.webp",
      alt: "Professional Profile",
      className: "aspect-square"
    }
  ]

  const bottomRowImages = [
    {
      src: "/Graphic design poster/04.webp",
      alt: "Coffee Discount",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/05.webp",
      alt: "Fashion Sale",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/06.webp",
      alt: "Black Friday MacBook",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/07.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/09.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/10.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/11.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/12.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/13.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/14.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/24.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/16.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/23.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/18.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/19.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/20.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/21.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
    {
      src: "/Graphic design poster/22.webp",
      alt: "Cappuccino Offer",
      className: "aspect-square"
    },
  ]

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
      {/* Top Row - 3 columns */}
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topRowImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gray-100 transition-transform hover:scale-[1.02]"
          >
            <div className="relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row - 4 columns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-0">
        {bottomRowImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gray-100 transition-transform hover:scale-[1.02]"
          >
            <div className="relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>



  )
}

