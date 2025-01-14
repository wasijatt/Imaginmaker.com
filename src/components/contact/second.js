'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <section className="w-full py-12 md:py-24 bg-white px-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Let&apos;s Work Together!
            </h2>
            <div className="mx-auto h-1 w-20 bg-purple-600" />
          </div>
          
          <form 
            className="w-full max-w-4xl"
            onSubmit={(e) => {
              e.preventDefault()
              // Handle form submission
            }}
          >
            <div className="grid gap-8 md:gap-44 md:grid-cols-2 md:mt-20">
              {/* Left Column - Input Fields */}
              <div className="flex flex-col space-y-6 md:space-y-11">
                <Input
                  placeholder="Full Name"
                  className="h-12 rounded-full border-2 border-black px-6"
                  required
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="h-12 rounded-full border-2 border-black px-6"
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="h-12 rounded-full border-2 border-black px-6"
                  required
                />
              </div>
              
              {/* Right Column - Message Textarea */}
              <div>
                <Textarea
                  placeholder="Message"
                  className="min-h-[232px] w-full resize-none rounded-3xl border-2 border-black p-6"
                  required
                />
              </div>
            </div>
            
            <div className="mt-8 md:mt-20 flex justify-center">
              <Button 
                type="submit"
                className="h-12 rounded-full bg-purple-600 px-12 text-white hover:bg-purple-500"
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

