"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
const Counter = () => {
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    const [countries, setCounter] = useState(0);

    const CounterData = [
        {
            imgsrc: "/Counter/1.png",
            title: "Project Completed",
            number: projects,
        },
        {
            imgsrc: "/Counter/2.png",
            title: "Satisfied Clients",
            number: clients,
        },
        {
            imgsrc: "/Counter/3.png",
            title: "Countries worldwide",
            number: countries,
        },
    ];

    useEffect(() => {
        
        const fetchData = () => {
            setTimeout(() => {
            
                setProjects(1500);
                setClients(900);
                setCounter(157);
            }, 4000);
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#191919] mt-4 lg:mt-12 p-3 lg:px-9 lg:py-24  mb-3">
            <h1 className="text-center text-white mt-2 lg:mt-5 font-bold tracking-[2px] text-xl lg:text-[35px]">Why People Like Us</h1>
            <p className="text-center text-white mt-6 text-sm lg:text-[23px]">Professional Design Agency to Provide solution</p>
            <div className="flex flex-col lg:flex-row w-full lg:w-[60%] m-auto  lg:mt-7 justify-between">
                {CounterData.map((counterItem, index) => (
                    <div className="bg-white text-center w-[90%]  2xl:w-[28%] mxl:w-[35%] m-4 py-10  lg:py-20 rounded-3xl  " key={index}>
                        <Image className="m-auto pb-5  w-[40%]" width={100} height={100} src={counterItem.imgsrc} alt={counterItem.title} />
                        <h1 className=" text-lg lg:text-[40px] font-extrabold text-[#7700ff]">{counterItem.number}+</h1>
                        <h2 className=" text-xl lg:text-[25px] lg:mt-6 font-bold text-[#7700ff]">{counterItem.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;