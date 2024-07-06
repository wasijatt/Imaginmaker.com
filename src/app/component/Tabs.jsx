"use client";
import TabContent from "./TabsData/TabContent";
import Motion from "../component/TabsData/Motion";
import { useState } from "react";
const Tabs = ({}) => {
  const GraphicData1 = [
    "/images/servicesPage/Grphic designing/Book cover design services in imaginmaker design agency pakitan.jpg",
    "/images/servicesPage/Grphic designing/Macbook-air---black-friday---story.jpg",
    "/images/servicesPage/Grphic designing/Dous link fiber internet Digital Marketing   Social Media Poster design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/KIDS-POSTER-poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/KIDS-POSTER-poster desin for instagram post-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Iphone-15---black-friday---poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Iphone-13---black-friday---poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Iphone posters  for adds design by imaginmaker dsign agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Iphone poster design with discount for instagram poster design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/International education university-poster-designed by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Instagram post for building construction workes design  by imaginamker pakistan.jpg",
    "/images/servicesPage/Grphic designing/Infust Flower poster design for insagram-by imaginmaker design agency.jpg",
    "/images/servicesPage/Grphic designing/Infust Flower poster design for insagram-by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Impression   perfume poster design for adds-by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Dous link fiber internet Digital Marketing   Social Media Poster design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Boulivard -  perfume poster design for adds-by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Worker trucks insgtaram post-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Vocal truth -concert poster  desin for instagram-by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Vintage  perfume poster design for adds-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Valentine's-Day-Fashio-poster.jpg",
    "/images/servicesPage/Grphic designing/university  posters design -by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/sourse apple toofie poster design for insagram-by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Grphic designing/Macbook-air---black-friday---story.jpg",
    "/images/servicesPage/Grphic designing/man T shirt posters poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Remarket---ad-creative---3.jpg",
    "/images/servicesPage/Grphic designing/Iphone-12--black-friday---poster desin for instagram-by imaginmaker.jpg",
    "/images/servicesPage/Grphic designing/Rico.jpg",
    
  ];
  const GraphicData2 = [
    "/images/servicesPage/Ui/Bakery app-designed by imaginmaker.jpg",
    "/images/servicesPage/Ui/Betting app-design by imaginmaker.jpg",
    "/images/servicesPage/Ui/Diliverd IT solutions app-designed by imaginmaker.jpg",
    "/images/servicesPage/Ui/3.jpg",
    "/images/servicesPage/Ui/Food recipies app-design ny imaginmaker.jpg",
    "/images/servicesPage/Ui/Imagin-maker-design-agency-app-UI-design.jpg",
    "/images/servicesPage/Ui/Pharmacy app-designed by imaginmaker.jpg",
    "/images/servicesPage/Ui/shoes perchasing app-design by imaginmaker.jpg",
    "/images/servicesPage/Ui/Task maneging app-desing by imaginmaker.jpg",
    "/images/servicesPage/Ui/The growht capital a banking app-designed by imaginmaker.jpg",
    "/images/servicesPage/Ui/Imagin-maker-design-agency-app-UI-design.jpg",
    "/images/servicesPage/Ui/Imagin-maker-design-agency-app-UI-design.jpg",
    "/images/servicesPage/Ui/Imagin-maker-design-agency-app-UI-design.jpg",
  ];
  const GraphicData3 = [
    "/images/servicesPage/Web/Auto_Buying_Solution_Website design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Web/Business_Digital_Solutions web design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Web/chat boat web design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Web/Design_and_Coding_Services_Website design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Web/front-end developer portfolio website design by imaginmaker design agency.jpg",
    "/images/servicesPage/Web/Health and medical care web design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Web/Imaginamker web dsign by ux with saifu-imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Web/skateboard course web design by imaginmaker design agency pakistan.jpg",
    "/images/servicesPage/Web/Soft Pillows and Chairs Website Design by Imaginmaker Design Agency Pakistan..jpg",
    "/images/servicesPage/Web/Stylish hats selling web desigb by saifu-imaginmaker design agency pakistan.jpg",
  ];

    const [activeTab, setActiveTab] = useState(
      <TabContent GraphicData={GraphicData1} />
    );
  
    const handleTabChange = (content) => {
      setActiveTab(content);
    };
  
    const tabData = [
      { label: "Graphics", content: <TabContent GraphicData={GraphicData1} /> },
      { label: "Motion Design", content: <Motion /> },
      {
        label: "UI/UX Design",
        content: <TabContent GraphicData={GraphicData2} />,
      },
      { label: "Web Design", content: <TabContent GraphicData={GraphicData3} /> },
      {
        label: "Illustration",
        content: <TabContent GraphicData={GraphicData2} />,
      },
      { label: "Branding", content: <TabContent GraphicData={GraphicData2} /> },
    ];
  
    return (
      <div className="py-9 w-full bg-black mt-5 h-full">
        <div className="custom-scrollbar">
          <div className="scroll-content  flex justify-center">
            {tabData.map((item, index) => (
              <h1
                key={index}
                className={`p-6 inline text-lg lg:text-2xl text-nowrap  ${
                  activeTab === item.content ? "active-tab text-[#7700ff] " : "text-white"
                }`}
                onClick={() => handleTabChange(item.content)}
              >
                <span className={activeTab === item.content ? "active-label" : ""}>
                  {item.label}
                </span>
              </h1>
            ))}
          </div>
        </div>
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            activeTab ? "opacity-100" : "opacity-0"
          }`}
        >
          {activeTab}
        </div>
      </div>
    );
  };
  
  export default Tabs;
  