'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { satoshi } from "@/lib/fonts"
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ 
    loading: false, 
    error: null, 
    success: false 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // First check if response is OK
      if (!response.ok) {
        // Try to get error message from response
        const errorText = await response.text();
        throw new Error(
          errorText.startsWith('{') 
            ? JSON.parse(errorText).message 
            : `Server error: ${response.status}`
        );
      }

      // If response is OK, parse as JSON
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Form submission failed');
      }

      setStatus({ loading: false, error: null, success: true });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        loading: false, 
        error: error.message || 'Failed to submit form. Please try again later.', 
        success: false 
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="w-full py-12 md:py-24 bg-white px-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Let&apos;s Work Together!
            </h2>
            <div className="mx-auto h-[3px] w-24 bg-[#6D40FF]" />
          </div>
          
          {status.success ? (
            <div className="w-full max-w-4xl text-center">
              <div className="bg-[#bcaddd] p-8 rounded-lg border border-[#6D40FF]">
                <h3 className="text-2xl font-bold text-[#7D40FF] mb-3">
                  Thank You!
                </h3>
                <p className="text-[#7D40FF]">
                  Your message has been received. We&apos;ll get back to you soon.
                </p>
                <Button
                  onClick={() => setStatus({ loading: false, error: null, success: false })}
                  className={`${satoshi.className} mt-6 bg-[#7D40FF] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-[#6D40FF] transition-all`}
                >
                  Send Another Message
                </Button>
              </div>
            </div>
          ) : (
            <form 
              className="w-full max-w-4xl"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-8 md:gap-44 md:grid-cols-2 md:mt-20">
                <div className="flex flex-col space-y-6 md:space-y-11">
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="h-12 rounded-full border-2 border-black px-6"
                    required
                  />
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    type="tel"
                    className="h-12 rounded-full border-2 border-black px-6"
                    required
                  />
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    className="h-12 rounded-full border border-[#6D40FF] px-6"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="min-h-[232px] w-full resize-none rounded-3xl border-2 border-black p-6"
                    required
                  />
                </div>
              </div>
              
              {status.error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-400">
                  <p>{status.error}</p>
                </div>
              )}
              
              <div className="mt-8 md:mt-20 flex justify-center">
                <Button 
                  type="submit"
                  disabled={status.loading}
                  className={`${satoshi.className} h-12 rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-12 text-white hover:bg-[#7D40FF] font-bold`}
                >
                  {status.loading ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}