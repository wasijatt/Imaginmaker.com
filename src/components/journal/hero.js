import Image from "next/image"

export default function BlogHeader() {
  return (
    <div className="w-full bg-[#1C1C1C] min-h-64 py-10">
      <div className="max-w-[1200px] mx-auto px-7 md:px-6 lg:px-8 pt-6 md:pt-20">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-wider">
              Devin: Revolutionizing Software Engineering with AI
            </h1>
            <time dateTime="2024-03-15" className="block text-sm text-zinc-500 font-medium tracking-wide">
              MAR 15, 2024
            </time>
          </div>

          <div className="relative w-full aspect-[2/1] mt-8">
            <Image
              src="/journal/journal1.png"
              alt="AI robot working at a control panel in a dimly lit environment"
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

