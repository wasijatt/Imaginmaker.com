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
        <div className="purpleBg mt-12 p-9">
            <h1 className="text-center text-white mt-5 font-extrabold text-xl mdl:text-[60px]">Why People Like Us</h1>
            <p className="text-center text-white mt-6 text-sm mdl:text-[20px]">Professional Design Agency to Provide solution</p>
            <div className="flex flex-col mdl:flex-row w-full mdl:w-[70%] m-auto justify-between">
                {CounterData.map((counterItem, index) => (
                    <div className="bg-white text-center w-[90%] mdl:w-[30%] m-4 h-96 pt-9 rounded-3xl  " key={index}>
                        <Image className="m-auto  w-[40%]" width={100} height={100} src={counterItem.imgsrc} alt={counterItem.title} />
                        <h1 className="text-[30px] font-extrabold text-[#7700ff]">{counterItem.number}+</h1>
                        <h2 className=" text-xl mdl:text-[30px] font-bold text-[#7700ff]">{counterItem.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;