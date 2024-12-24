'use client'

import { useState } from 'react'
import { clashGrotesk } from "@/lib/clashGroteskfont"
import { satoshi } from "@/lib/fonts"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        interestedIn: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-20 px-4 xl:h-[110vh] md:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="relative inline-block">
                        <h2 className={`${clashGrotesk.className} text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-0`}>
                            Have an Idea?
                        </h2>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[10rem] h-1 bg-[#7D40FF]"></div>
                    </div>
                    <p className={`${satoshi.className} text-base md:text-lg text-[#191919] max-w-2xl mx-auto mt-6 font-medium px-[5.5rem]`}>
                        Bring your next project to life. Please fill in the information below and one of our consultants will reach out to you today!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`${satoshi.className} w-full px-6 py-4 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-2 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${satoshi.className} w-full px-6 py-4 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-2 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`${satoshi.className} w-full px-6 py-4 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-2 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="interestedIn"
                                placeholder="Interested in"
                                value={formData.interestedIn}
                                onChange={handleChange}
                                className={`${satoshi.className} w-full px-6 py-4 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-3 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <button
                            type="submit"
                            className={`${satoshi.className} bg-[#7D40FF] shadow-[1px_1px_10px_1px_rgba(125,64,255,55)] text-white px-12 py-4 rounded-full text-[1.3rem] font-medium transition-all duration-200 hover:bg-[#6930D9] transform hover:scale-105 hover:shadow-[#7D40FF]/25`}
                        >
                            Let&apos;s Go
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
