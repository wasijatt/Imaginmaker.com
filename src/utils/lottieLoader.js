import { useState, useEffect } from "react";

// Simple in-memory cache
const animationCache = new Map();

export function useLottieLoader(animationPath) {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAnimation() {
      if (!animationPath) return;

      // Check cache first
      if (animationCache.has(animationPath)) {
        setAnimationData(animationCache.get(animationPath));
        return;
      }

      try {
        const response = await fetch(animationPath);
        if (!response.ok) throw new Error("Failed to load animation");

        const json = await response.json();
        animationCache.set(animationPath, json); // Cache the result
        setAnimationData(json);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
        setError(error);
      }
    }

    loadAnimation();
  }, [animationPath]);

  return animationData;
}