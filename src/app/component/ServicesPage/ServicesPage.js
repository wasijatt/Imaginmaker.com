

"use client";

import HeroSection from "../HeroSection";
import Tabs from "../Tabs";
import Simplicity from "../Simplicity";
import Login from "../Login";
import Cursor from "../Cursor";
import Footer from "../Footer";
import SmoothScroll from "../SmoothScroll"


const Page = () => {
  
  return (
    <SmoothScroll >
  
      
      
        <HeroSection
          HeroSectionHead={"A Design Agency With a Twist"}
          HeroSectionPara={"What You Think, We Can Design And Animate."}
          HeroSectionButton={"See Plans"}
        />
     

     
        <Tabs className= "section" />
     
        <Simplicity  className= "section"/>
     
        <Login className= "section" />
      
      <Cursor className= "section" />
      
        <Footer className= "section" />
    </SmoothScroll >
      
  );
};

export default Page;
