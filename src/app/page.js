"use client"

import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./component/mainPage/HomePage"), {
  ssr: false,
  loading: () => <div className="bg-black animate-pulse h-32 w-full"></div>,
});

export default function Page() {


  return (
    <>
     <HomePage/>
    </>
  );
}
