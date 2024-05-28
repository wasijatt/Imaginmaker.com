"use client";
import TabContent from "./TabsData/TabContent";
import Motion from "../component/TabsData/Motion";
import { useState } from "react";
const Tabs = ({}) => {
  const GraphicData1 = [
    "/images/servicesPage/Grphic designing/1.jpg",
    "/images/servicesPage/Grphic designing/2.jpg",
    "/images/servicesPage/Grphic designing/3.jpg",
    "/images/servicesPage/Grphic designing/4.jpg",
    "/images/servicesPage/Grphic designing/5.jpg",
    "/images/servicesPage/Grphic designing/6.jpg",
    "/images/servicesPage/Grphic designing/7.jpg",
    "/images/servicesPage/Grphic designing/12.jpg",
    "/images/servicesPage/Grphic designing/8.jpg",
    "/images/servicesPage/Grphic designing/13.jpg",
    "/images/servicesPage/Grphic designing/9.jpg",
    "/images/servicesPage/Grphic designing/10.jpg",
    "/images/servicesPage/Grphic designing/11.jpg",
    "/images/servicesPage/Grphic designing/14.jpg",
    "/images/servicesPage/Grphic designing/15.jpg",
    "/images/servicesPage/Grphic designing/16.jpg",
    "/images/servicesPage/Grphic designing/17.jpg",
    "/images/servicesPage/Grphic designing/18.jpg",
    "/images/servicesPage/Grphic designing/19.jpg",
    "/images/servicesPage/Grphic designing/20.jpg",
    "/images/servicesPage/Grphic designing/21.jpg",
    "/images/servicesPage/Grphic designing/22.jpg",
    "/images/servicesPage/Grphic designing/23.jpg",
    "/images/servicesPage/Grphic designing/24.jpg",
    "/images/servicesPage/Grphic designing/25.jpg",
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
    "/images/servicesPage/Web/Agency website design design by imaginmaker.jpg",
    "/images/servicesPage/Web/Chatboat websites deign-by imaginmaker.jpg",
    "/images/servicesPage/Web/Digital exlcellence website design.jpg",
    "/images/servicesPage/Web/dressup website-designed by imaginmaker design agency.jpg",
    "/images/servicesPage/Web/Front end devloper protfoli web design-by imaginmaker.jpg",
    "/images/servicesPage/Web/imaginmaker web design-by imaginmaker.jpg",
    "/images/servicesPage/Web/Pharmacy  web design-by imaginmaker.jpg",
    "/images/servicesPage/Web/Skatboard course web design-by imaginmaker.jpg",
    "/images/servicesPage/Web/Sofa's and chairs website-designed by imaginmaker design agency.jpg",
    "/images/servicesPage/Web/web design by imaginmaker.jpg",
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
      <div className="py-9 w-full bg-black mt-5">
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
  