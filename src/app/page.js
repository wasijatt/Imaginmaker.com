import Loading from "./component/Loading";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("./component/mainPage/HomePage"), {
  ssr: true,
  loading: () => <div className="bg-black animate-pulse h-32 w-full"><Loading/></div>,
});


  export default function Page() {
   

  
  return (
   
   
      <HomePage/>

  );
}
