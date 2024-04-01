"use client"
import HeroSection from "../HeroSection";
import Cursor from "../Cursor";
import Carousel from "../Carousel";
import Brands from "../Brands";
import Services from "../Services";
import OurServices from "../OurServices";
import MemberShip from "../MemberShip";
import Plan from "../Plan";
import Login from "../Login";
import Simplicity from "../Simplicity";
import Counter from "../Counter";
import Faqs from "../Faqs";
import Footer from "../Footer";

  export default function Page() {
  return (
    <main className="main" data-scroll-container>
    <div>
      <HeroSection
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />
<Cursor/>
        <Carousel />
        <Brands />
        <Services />
        <OurServices />
        <MemberShip />
        <Plan />
        <Login />
        <Simplicity/>
        <Counter/>
        <Faqs/>
        <Footer/>
    </div>
    </main>
  );
}
