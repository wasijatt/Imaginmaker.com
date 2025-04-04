"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useLottieLoader } from "@/utils/lottieLoader"
import { LazyVideo } from "./LazyVideo"

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading...</div>,
})

export function MediaRenderer({ item, className = "", priority = false }) {
  if (item.video && item.video.endsWith(".json")) {
    return <LottieRenderer item={item} className={className} />
  }

  if (item.video) {
    return (
      <LazyVideo
        src={item.video}
        className={`${className} object-cover w-full h-full`}
        autoPlay
      />
    )
  }

  return (
    <Image
      src={item.image || "/placeholder.svg"}
      alt={item.title}
      fill
      className={`${className} object-cover`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
    />
  )
}

function LottieRenderer({ item, className }) {
  const animationData = useLottieLoader(item.video)

  if (!animationData) {
    return <div className="w-full h-full flex items-center justify-center">Loading...</div>
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={`${className} w-full h-full`}
    />
  )
}