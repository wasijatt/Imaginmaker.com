import dynamic from "next/dynamic";
// import Brands from "./component/brands";
const HeroSection = dynamic(() => import("./component/HeroSection"), {
  ssr: true,
  loading: () => <div className="bg-white animate-pulse h-32 w-full"></div>,
});
const Carousel = dynamic(() => import("./component/Carousel"), {
  ssr: true,
  loading: () => <div className="bg-white animate-pulse h-32 w-full"></div>,
});
const Brands = dynamic(() => import("./component/Brands"), {
  ssr: true,
  loading: () => <div className="bg-white animate-pulse h-32 w-full"></div>,
});

export default function page() {
  return (
    <div>
      <HeroSection
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />

      <div className=" p-1 mdl:p-4 w-full  bg-[#7700ff]">
        <div className="m-auto w-[90%] ">
          <Carousel />
        </div>
      </div>

      <div >
        <Brands />
      </div>


    </div>
  );
}
