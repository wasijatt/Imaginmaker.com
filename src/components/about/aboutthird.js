'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { satoshi } from "@/lib/fonts"

export default function ContactForm() {
  return (
    <section className="w-full py-12 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2 mt-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Let&apos;s Work Together!
            </h2>
            <div className="mx-auto h-1 w-20 bg-[#6D40FF]" />
          </div>
          
          <form 
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault()
              // Handle form submission
            }}
          >
            <div className="grid gap-48 md:grid-cols-2 mt-8">
              {/* Left Column - Input Fields */}
              <div className="flex flex-col md:space-y-12 space-y-8">
                <Input
                  placeholder="Full Name"
                  className="h-12 rounded-full border-2 border-gray-600 md:px-12"
                  required
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="h-12 rounded-full border-2 border-gray-600 md:px-12"
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="h-12 rounded-full border-2 border-gray-600 md:px-12"
                  required
                />
              </div>
              
              {/* Right Column - Message Textarea */}
              <div>
                <Textarea
                  placeholder="Message "
                  className="h-full min-h-[144px] border-2 border-gray-600 resize-none rounded-3xl p-6 md:w-96 w-[21.3rem] -mt-36 md:mt-0"
                  required
                />
              </div>
            </div>
            
            <div className="mt-12 md:mt-28 flex justify-center">
              <Button 
                type="submit"
                className={`${satoshi.className} bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] h-12 rounded-full px-12 text-white hover:bg-[#6D40FF]`}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

