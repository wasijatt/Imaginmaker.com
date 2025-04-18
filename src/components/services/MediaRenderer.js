"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import PropTypes from 'prop-types'
import { useLottieLoader } from "@/utils/lottieLoader"
import { LazyVideo } from "./LazyVideo"

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center"></div>,
})

export function MediaRenderer({ item, className = "", priority = false }) {
  // Handle Lottie animations
  if (item.video && item.video.endsWith(".json")) {
    return <LottieRenderer item={item} className={className} />
  }

  // Handle video files
  if (item.video && (item.video.endsWith(".mp4") || item.video.endsWith(".webm"))) {
    return (
      <LazyVideo
        src={item.video}
        className={`${className} w-full`}
        autoPlay
      />
    )
  }

  // Handle images
  const imageSrc = item.image || "/placeholder.svg"
  
  return (
    <Image
      src={imageSrc}
      alt={item.title || "Portfolio item"}
      className={`${className}`}
      width={500} // Add specific width
      height={300} // Add specific height
      loading="lazy"
      onError={(e) => {
        console.error("Failed to load image:", imageSrc)
        e.currentTarget.src = "/placeholder.svg"
      }}
    />
  )
}

MediaRenderer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  priority: PropTypes.bool,
}

function LottieRenderer({ item, className }) {
  const animationData = useLottieLoader(item.video)

  if (!animationData) {
    return <div className="w-full h-full flex items-center justify-center"></div>
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={`${className} w-full`}
    />
  )
}