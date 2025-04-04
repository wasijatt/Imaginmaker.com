"use client"
import { useState, useRef, useEffect } from 'react'

export function LazyVideo({ src, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (!src) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true)
            if (videoRef.current) {
              videoRef.current.load()
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '200px',
        threshold: 0.1,
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [src, isLoaded])

  return (
    <video
      ref={videoRef}
      className={className}
      playsInline
      muted
      loop
      preload="none"
      {...props}
    >
      {isLoaded && <source src={src} type="video/mp4" />}
    </video>
  )
}