 import dynamic from "next/dynamic"; 
 
 const HeroSection = dynamic(() => import("../component/HeroSection"), {
  ssr: true,
  loading: () => <div className="bg-black animate-pulse h-32 w-full"></div>,
});
 
const CaseStudyFeature = dynamic(() => import("../component/CaseStudyFeature"), {
  ssr: true,
  loading: () => <div className="bg-black animate-pulse h-32 w-full"></div>,
});
 const page = ()=>{
return(
 <>
    <HeroSection className="section"
    mainText={"Case Study"} fhead={"Analysis"}
    HeroSectionPara={"Unlocking insights, perfecting excellence—your go-to for polished content. Dive into our enriching case study experience!"}
    HeroSectionButton={"Join us"}

  />
<CaseStudyFeature/>

  </>



)
}
export default page;