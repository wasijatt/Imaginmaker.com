import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./../component/HeroSection"), {
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
  const Simplicity = dynamic(() => import("./../component/Simplicity"), {
    ssr: true,
    loading: () => (
      <div className="bg-black animate-pulse h-32 w-full"> loading</div>
    ),
  });
  const SmoothScroll = dynamic(() => import("./../component/SmoothScroll"), {
    ssr: false,
    loading: () => (
      <div className="bg-black animate-pulse h-32 w-full"> loading</div>
    ),
  });
  const CustomCursor = dynamic(() => import("./../component/Cursor"), {
    ssr: false,
    loading: () => (
      <div className="bg-black animate-pulse h-32 w-full"> loading</div>
    ),
  });
const page = ()=>{
  
    return(
      <SmoothScroll>
        <div>
        <div> 
<CustomCursor/>
          <HeroSection HeroSectionHead={"Online Journal"} HeroSectionPara={"Elevating Insights, Crafting Excellence, Your Gateway to Informed and Polished Content."} HeroSectionButton={"Learn about us"}/></div>
        
        <div className="my-[5%]"> <Simplicity/></div>

        <div> <Footer/></div>
        </div>
        </SmoothScroll>

    )
    }
    export default page;