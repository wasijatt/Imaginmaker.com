"use client";

import HeroSection from "../HeroSection";
import SmoothScroll from "../SmoothScroll";
import Tabs from "../Tabs";
import Simplicity from "../Simplicity";
import Login from "../Login";
import Cursor from "../Cursor";
import Footer from "../Footer";

const Page = () => {
  return (
    <SmoothScroll>

      <HeroSection className= "section"
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />
      <Tabs className= "section " />
      <Cursor />
      <Simplicity  className= "section mt-32"/>
      <Login className= "section" />
      <Footer  className= "section"/>
    </SmoothScroll>
  );
};

export default Page;
