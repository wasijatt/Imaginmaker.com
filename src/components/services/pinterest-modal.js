"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useLottieLoader } from "@/utils/lottieLoader"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export function PinterestModal({ item, onClose, onNext, onPrevious }) {
  if (!item) return null

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 gap-0 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,400px] h-[80vh] max-h-[90vh] md:max-h-[80vh]">
          {/* Media Section */}
          <div className="relative bg-black flex items-center justify-center">
            <NavigationButtons onPrevious={onPrevious} onNext={onNext} onClose={onClose} />
            <MediaRenderer item={item} />
          </div>

          {/* Details Section */}
          <div className="relative p-6 overflow-y-auto">
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 hidden md:flex" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function NavigationButtons({ onPrevious, onNext, onClose }) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 left-2 text-white hover:text-white/80 z-50"
        onClick={onPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-white hover:text-white/80 z-50 md:hidden"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-white hover:text-white/80 z-50"
        onClick={onNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </>
  )
}

function MediaRenderer({ item }) {
  if (item.video && item.video.endsWith(".json")) {
    return <LottieRenderer item={item} />
  }

  if (item.video) {
    return <video src={item.video} loop muted autoPlay className="object-contain w-full h-full" />
  }

  return (
    <Image
      src={item.image || "/placeholder.svg"}
      alt={item.title}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  )
}

function LottieRenderer({ item }) {
  const animationData = useLottieLoader(item.video)

  if (!animationData) {
    return <div className="w-full h-full flex items-center justify-center bg-black text-white">Loading...</div>
  }

  return <Lottie animationData={animationData} loop={true} className="w-full h-full object-contain" />
}

