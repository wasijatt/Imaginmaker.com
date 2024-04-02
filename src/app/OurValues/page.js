import HeroSection from "../component/HeroSection";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./../component/Footer"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Services = dynamic(() => import("./../component/Services"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const Carousel = dynamic(() => import("./../component/Carousel"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const  Capabilities = dynamic(() => import("./../component/Capabilities"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});
const page = ()=>{
    return(
      <div>
        <HeroSection
        HeroSectionHead={"IMAGIN MAKER A Graphic & UI/UX Design Agency"}
        HeroSectionPara={"Confidence and Creativity Unite! Our team offers premium, affordable design services. Join us to shape a skilled, self-made future."}
        HeroSectionButton={"Get in Touch"}
      />

<Capabilities/>

<Services/>
<h1 className="text-center text-xl mdl:text-[50px] my-8">Up-to-date projects</h1>
<Carousel/>
<h1>gfygsygjgdyyagsg</h1>
<Footer/>
</div>
    )
    }
    export default page;