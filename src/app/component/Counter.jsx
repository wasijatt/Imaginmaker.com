"use client"
import { useState } from "react"
const Counter = () =>{
const [projects ,setProjects] = useState()
const [clients ,setClients] = useState()
const [countries ,setCounter] = useState()

 const CounterData = [
    {
        imgsrc: "/Counter/1.png",
        title :"Project Completed",
        number :""
       },
       {
        imgsrc: "/Counter/2.png",
        title :"Satisfied Clients",
        number :""
       },
       {
        imgsrc: "/Counter/3.png",
        title :"Countries worldwide",
        number :""
       }
 ]

    return(
        <div className=" purpleBg mt-6">
<h1 className="text-center text-white  font-extrabold text-[60px]">Why People Like US</h1>
<p className="text-center text-white text-[20px]">Professional Design Agency to Provide solution</p>
            <div className="flex flex-col mdl:flex-row w-full mdl:w-[70%] m-auto">
            {CounterData.map((counterItem, index) => (
                <div className="bg-white text-center w-[30%] m-4 h-96 pt-9 rounded-3xl " key={index}>
                    <img className="m-auto w-[40%] " src={counterItem.imgsrc} alt={counterItem.title} />
                    <h2 className="text-[20px] text-[#7700ff]">{counterItem.title}</h2>
                    <h1 className="text [30px] text-[#7700ff] ">{counterItem.number}+</h1>
                </div>
            ))}
            </div>
        </div>

    )
}
export default Counter