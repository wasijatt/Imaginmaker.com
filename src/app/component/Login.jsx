"use client"
import style from "../modulerCss/HeroSection.module.css"
import Link from "next/link"
import { useState } from "react";
const Login = ( ) =>{

    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phoneNumber: '',
        address: '',
        interestedIn: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          const data = await response.json();
    
          if (response.ok) {
            console.log('Form data submitted successfully');
          } else {
            console.error('Failed to submit form data:', data.error);
          }
        } catch (error) {
          console.error('Error submitting form data:', error);
        }
      };
    return(
        <div className="flex flex-col mdl:flex-row ">
        <div className="p-[15%]">
            
            <form className=" w-full mdl:w-[70%] " action="" onSubmit={handleSubmit}> 
            <input  className="w-full mdl:w-[40%]" onChange={handleChange} value={formData.firstName} type="text" placeholder="First Name"required />
            <input className="w-full mdl:w-[40%]"  onChange={handleChange} value={formData.email} type="Email" placeholder="Email" required />
            <input  className="w-full mdl:w-[40%]" onChange={handleChange} value={formData.phoneNumber} type="Number" placeholder="Phone Number" required />
            <input className="w-full mdl:w-[40%]"  onChange={handleChange} value={formData.address} type="text" placeholder="Address" required/> 
            <input className="w-full mdl:w-[90%]"  onChange={handleChange} value={formData.interestedIn}    type= " textarea" placeholder="Interseted In" required /> 
            <button type="submit" className={`${style.boxShadow} " ml-[5%] py-2 px-5 purpleBg " `} >Let's Go </button>
            </form>
        </div>
        <div className="w-full mdl:w-[28%]  text-center mdl:text-left mt-4 mdl:mt-[10%]" >
            <h1 className="text-bold text-[30px]  ">Whatsapp</h1>
            <Link className="block font-extrabold text-[20px]" href={" https://wa.me/971567208725"}> UAE: +971 56 720 87 25</Link>
            <Link className="block font-extrabold text-[20px]" href={" https://wa.me/923005837549"}> Pak: +92 300 5837549</Link>
        </div>
        </div>
    )
}
export default Login