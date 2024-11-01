"use client"
import style from "../modulerCss/HeroSection.module.css";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [formData, setFormData] = useState({
        FirstName: "",
        email: "",
        phone: "",
        interestedIn: "" 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/users", formData);
            
            if (response.data.success) {
                toast.success(`Registration successful! A welcome email has been sent to ${formData.email}`);
                setFormData({ FirstName: "", email: "", phone: "", interestedIn: "" });
            } else {
                toast.error(response.data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred during registration");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <Toaster position="top-center" />
            <div className="flex flex-col justify-center items-center p-[5%] lg:p-[10%] text-center lg:w-[70%] lg:text-left relative">
                <h1 className="text-xl lg:text-[45px] font-extrabold">Have an idea?</h1>
                <div className="w-20 h-1 rounded-full mt-2 lg:mt-4 bg-[#7D40FF]"></div>
                <p className="text-[10px] lg:text-sm mt-3 lg:mt-5 stoshi text-center">
                    Bring your next project to life. Please fill in the information below
                    and one of our consultants will reach out to you today!
                </p>
                <form onSubmit={handleSubmit} className="text-center w-full lg:w-[%] mt-3 lg:mt-6">
                    <input
                        className="w-full lg:w-[40%] mb-2"
                        type="text"
                        placeholder="First Name"
                        name="FirstName"
                        value={formData.FirstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full lg:w-[40%] mb-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full lg:w-[40%] mb-2"
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full lg:w-[40%] mb-2"
                        type="text"
                        placeholder="Interested In"
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className={`${style.boxShadow} text-white py-2 px-5 purpleBg`}
                    >
                        Let&apos;s Go
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
