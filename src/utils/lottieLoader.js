import { useState, useEffect } from "react";

export function useLottieLoader(animationPath) {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAnimation() {
      if (!animationPath) return;

      try {
        // ✅ Fetch JSON from the public folder
        const response = await fetch(animationPath);
        if (!response.ok) throw new Error("Failed to load animation");

        const json = await response.json();
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
