"use client"
import Graphics from "../component/TabsData/Graphics";
import Motion from "../component/TabsData/Motion";
import Ui from "../component/TabsData/Ui";
import Illustration from "../component/TabsData/Illustration";
import Branding from "../component/TabsData/Branding";
import Web from "./TabsData/Web";


import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(<Graphics/>);

  const handleTabChange = (content) => {
    setActiveTab(content);
  };

  const tabData = [
    { label: "Graphics", content: <Graphics /> },
    { label: "Motion Design", content: <Motion /> },
    { label: "UI/UX Design", content: <Ui /> },
    { label: "Web Design", content: <Web /> },
    { label: "Illustration", content: <Illustration /> },
    { label: "Branding", content: <Branding /> },
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
