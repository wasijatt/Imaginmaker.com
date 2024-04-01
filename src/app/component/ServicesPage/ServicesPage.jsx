import HeroSection from "../HeroSection";
import Tabs from "../Tabs";
import Simplicity from "../Simplicity";
import Login from "../Login";
import Cursor from "../Cursor";
import Footer from "../Footer";

const page = ()=>{

    return(
      <div>
        <HeroSection
        HeroSectionHead={"A Design Agency With a Twist"}
        HeroSectionPara={"What You Think, We Can Design And Animate."}
        HeroSectionButton={"See Plans"}
      />
      <Tabs/>
      <div className="mt-[5%]">
        <Simplicity/></div>
      <Login/>
      <Cursor/>
      <Footer/>
  
</div>
    )
    }
    export default page;