"use client"
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./component/mainPage/HomePage"), {
  ssr: true,
  loading: () => <div className="bg-black animate-pulse h-32 w-full"><Loading/></div>,
});
const Loading = dynamic(() => import("./component/Loading"), {
  ssr: false,
  loading: () => <div className="bg-black animate-pulse h-32 w-full"><Loading/></div>,
});

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period before rendering the HomePage
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time (e.g., 2 seconds) for how long the loading should last

    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <>
      {loading ? (
        
        <div className="">
          <Loading />
        </div>
      ) : (
       
        <HomePage />
      )}
    </>
  );
}
