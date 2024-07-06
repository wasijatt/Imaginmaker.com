import Head from "next/head";
import Loading from "./component/Loading";
import dynamic from "next/dynamic";
import Link from "next/link";
const HomePage = dynamic(() => import("./component/mainPage/HomePage"), {
  ssr: true,
  loading: () => <div className="bg-black animate-pulse h-32 w-full"><Loading/></div>,
});


  export default function Page() {
   

  
  return (
   <>
   
      <HomePage/>
      </>

  );
}
