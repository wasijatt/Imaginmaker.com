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
    const [status, setStatus] = useState({ 
        loading: false, 
        error: null,
        success: false 
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            // Log the form data being sent
            console.log('Sending form data:', formData);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Log the raw response
            console.log('Response status:', response.status);
            
            let responseText = await response.text();
            console.log('Raw response:', responseText);
            
            let data;
            try {
                // Try to parse as JSON
                data = JSON.parse(responseText);
            } catch (parseError) {
                console.error('Error parsing response as JSON:', parseError);
                throw new Error('Server returned an invalid response. Please try again later.');
            }
            
            // Check if the response indicates an error
            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Form submission failed. Please try again.');
            }

            // Show success state
            setStatus({ loading: false, error: null, success: true });
            
            // Clear form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                interestedIn: ''
            });
            
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({ loading: false, error: error.message, success: false });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="py-20 px-4 md:h-[75vh] md:px-6 lg:px-8 bg-white overflow-hidden w-full">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mt-12">
                    <div className="relative inline-block">
                        <h2 className={`${clashGrotesk.className} text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-0`}>
                            Have an Idea?
                        </h2>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[10rem] h-1 bg-[#7D40FF]"></div>
                    </div>
                    <p className={`${satoshi.className} text-base md:text-lg text-[#191919] max-w-2xl mx-auto mt-6 font-medium px-4`}>
                        Bring your next project to life. Please fill in the information below and one of our consultants will reach out to you today!
                    </p>
                </div>

                {status.success ? (
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-[#bcaddd] p-8 rounded-lg border border-[#6D40FF]">
                            <h3 className={`${clashGrotesk.className} text-2xl font-bold text-[#7D40FF] mb-3`}>
                                Thank You!
                            </h3>
                            <p className={`${satoshi.className} text-[#7D40FF]`}>
                                Your message has been received. We&apos;ll get back to you soon.
                            </p>
                            <button
                                onClick={() => setStatus({ loading: false, error: null, success: false })}
                                className={`${satoshi.className} mt-6 bg-[#7D40FF] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-[#7D40FF] transition-all`}
                            >
                                Send Another Message
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`${satoshi.className} w-full px-6 py-3 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-2 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
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
                                    className={`${satoshi.className} w-full px-6 py-3 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-2 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
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
                                    className={`${satoshi.className} w-full px-6 py-3 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-2 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
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
                                    className={`${satoshi.className} w-full px-6 py-3 rounded-full border border-gray-800 focus:border-[#7D40FF] focus:ring-3 focus:ring-[#7D40FF]/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400`}
                                    required
                                />
                            </div>
                        </div>
                        
                        {status.error && (
                            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-400">
                                <p>{status.error}</p>
                            </div>
                        )}
                        
                        <div className="mt-16 text-center">
                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`${satoshi.className} bg-[#7D40FF] shadow-[1px_1px_10px_1px_rgba(125,64,255,55)] text-white px-12 py-2 rounded-full text-[1.3rem] font-medium transition-all duration-200 hover:bg-[#6930D9] transform hover:scale-105 hover:shadow-[#7D40FF]/25 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status.loading ? 'Sending...' : 'Let\'s Go'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}