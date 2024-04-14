"use client"
import Graphics from "../component/TabsData/Graphics";
import Motion from "../component/TabsData/Motion";


import { useState } from "react";

const Tabs = ({}) => {
  const GraphicData1 = [
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",


    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",

   
  ];
  const GraphicData2 = [
  
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",

    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
   
  ];
  const GraphicData3 = [
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
    "/images/servicesPage/Grphic designing/graphicDesign-one.jpg",
 
  ];


  const [activeTab, setActiveTab] = useState(<Graphics GraphicData={GraphicData1}/>);

  const handleTabChange = (content) => {
    setActiveTab(content);
  };

  const tabData = [
    { label: "Graphics", content: <Graphics GraphicData={GraphicData1}/> },
    { label: "Motion Design", content: <Motion /> },
    { label: "UI/UX Design", content: <Graphics GraphicData={GraphicData3} /> },
    { label: "Web Design", content: <Graphics GraphicData={GraphicData2} /> },
    { label: "Illustration", content:<Graphics GraphicData={GraphicData2} /> },
    { label: "Branding", content: <Graphics GraphicData={GraphicData2} /> },
  ];

  return (
    <div className="my-9">
      {tabData.map((item, index) => (
        <h1
          key={index}
          className={`p-6 hover inline text-lg mdl:text-2xl text-[#2c2c2c] ${activeTab === item.content ? 'active-tab' : ''}`}
          onClick={() => handleTabChange(item.content)}
        >
          <span className={activeTab === item.content ? 'active-label' : ''}>
            {item.label}
          </span>
        </h1>
      ))}
      <div className={`transition-opacity duration-500 ${activeTab ? 'opacity-100' : 'opacity-0'}`}>{activeTab}</div>
    </div>
  );
};

export default Tabs;
