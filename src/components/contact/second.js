'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactSecondSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/contactbg.svg"
          alt="Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-6 rounded-2xl bg-transparent p-6 backdrop-blur-sm mt-8 md:mt-28">
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-full border border-[#f1f1f199] bg-transparent px-6 py-3 text-white placeholder-white/50 transition-colors focus:border-[#6D40FF] focus:outline-none"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-[#f1f1f199] bg-transparent px-6 py-3 text-white placeholder-white/50 transition-colors focus:border-[#6D40FF] focus:outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-full border border-[#f1f1f199] bg-transparent px-6 py-3 text-white placeholder-white/50 transition-colors focus:border-[#6D40FF] focus:outline-none"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, company: e.target.value }))
                  }
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-3xl border border-[#f1f1f199] bg-transparent px-6 py-3 text-white placeholder-white/50 transition-colors focus:border-[#6D40FF] focus:outline-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </div>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center lg:justify-end lg:mt-28">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[400px] lg:w-[400px]">
              <Image
                src="/contact/contactright.svg"
                alt="Contact illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Centered Button - Shows below image on small screens */}
        <div className="mt-8 flex justify-center mb-8 md:mt-32">
          <button
            type="submit"
            form="contact-form"
            className="rounded-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] px-14 py-3 font-bold tracking-normal text-white transition-colors hover:bg-[#6D40FF] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  )
}
