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
  const [status, setStatus] = useState({ loading: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      alert('Thank you for your submission! We will contact you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ loading: false, error: error.message });
      alert(error.message || 'Error submitting form. Please try again.');
    } finally {
      setStatus({ loading: false, error: null });
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
          
          <form 
            className="w-full max-w-4xl"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-8 md:gap-44 md:grid-cols-2 md:mt-20">
              {/* Left Column - Input Fields */}
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
              
              {/* Right Column - Message Textarea */}
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
        </div>
      </div>
    </section>
  )
}

