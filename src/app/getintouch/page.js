import HeroSection from "../component/HeroSection";
import dynamic from "next/dynamic";
import SmoothScroll from "../component/SmoothScroll";
const Footer = dynamic(() => import("./../component/Footer"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});


const  Login = dynamic(() => import("./../component/Login"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const page = ()=>{
    return(
      <div>
        <SmoothScroll>
        <HeroSection
        HeroSectionHead={"We are Listening"}
        HeroSectionPara={"  Please fill out this form,or send us Mail"}
        HeroSectionButton={"Hire us"}
      />
<Login/>






<Footer/>
</SmoothScroll>

</div>
    )
    }
    export default page;