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
const Capabilities = dynamic(() => import("./../component/Capabilities"), {
  ssr: true,
  loading: () => (
    <div className="bg-black animate-pulse h-32 w-full"> loading</div>
  ),
});


const page = () => {
  return (
   
      <>
        <HeroSection
          HeroSectionHead={"IMAGIN MAKER A Graphic & UI/UX Design Agency"}
          HeroSectionPara={
            "Confidence and Creativity Unite! Our team offers premium, affordable design services. Join us to shape a skilled, self-made future."
          }
          HeroSectionButton={"Get in Touch"}
        />

        <Capabilities />
        <Cursor />

        <Services />
        <h1 className="text-center text-xl lg:text-[50px] my-8">
          Up-to-date projects
        </h1>
        <Carousel />
        
      </>
   
  );
};
export default page;
