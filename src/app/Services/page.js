import HeroSection from "../component/HeroSection";
import dynamic from "next/dynamic";
const Simplicity = dynamic(() => import("./../component/Simplicity"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Login = dynamic(() => import("./../component/Login"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Footer = dynamic(() => import("./../component/Footer"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const page = ()=>{

    return(
      <div>
        <HeroSection
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />
      <div className="mt-[5%]"><Simplicity/></div>
      <Login/>
      <Footer/>
</div>
    )
    }
    export default page;