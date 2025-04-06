'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { satoshi } from "@/lib/fonts";

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
    success: false,
    emailSuccess: true 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;
    
    setStatus({ loading: true, error: null, success: false, emailSuccess: true });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setStatus({
        loading: false,
        error: null,
        success: true,
        emailSuccess: result.emails?.user ?? false
      });

      // Reset form if fully successful
      if (result.emails?.admin && result.emails?.user) {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
      }
      
    } catch (error) {
      setStatus({ 
        loading: false, 
        error: error.message || 'Failed to submit form. Please try again later.', 
        success: false,
        emailSuccess: false
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
              <div className={`p-8 rounded-lg border ${
                status.emailSuccess 
                  ? 'bg-[#bcaddd] border-[#6D40FF] text-[#7D40FF]' 
                  : 'bg-yellow-50 border-yellow-400 text-yellow-700'
              }`}>
                <h3 className="text-2xl font-bold mb-3">
                  {status.emailSuccess ? 'Thank You!' : 'Message Received!'}
                </h3>
                <p className="mb-4">
                  {status.emailSuccess
                    ? "We've received your message and sent a confirmation email."
                    : "We've received your message but couldn't send a confirmation email."}
                </p>
                {!status.emailSuccess && (
                  <p className="text-sm mb-4">
                    (This usually happens due to temporary email service issues. 
                    We've definitely received your message and will contact you.)
                  </p>
                )}
                <Button
                  onClick={() => setStatus({ 
                    loading: false, 
                    error: null, 
                    success: false,
                    emailSuccess: true 
                  })}
                  className={`${satoshi.className} mt-4 bg-[#7D40FF] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-[#6D40FF] transition-all`}
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
                    placeholder="Message (Optional)"
                    className="min-h-[232px] w-full resize-none rounded-3xl border-2 border-black p-6"
                  />
                </div>
              </div>
              
              {status.error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-400">
                  <p>{status.error}</p>
                  {status.error.includes('email') && (
                    <p className="text-sm mt-1">Please check your email address or try again later.</p>
                  )}
                </div>
              )}
              
              <div className="mt-8 md:mt-20 flex justify-center">
                <Button 
                  type="submit"
                  disabled={status.loading}
                  className={`${satoshi.className} h-12 rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-12 text-white hover:bg-[#7D40FF] font-bold`}
                >
                  {status.loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}