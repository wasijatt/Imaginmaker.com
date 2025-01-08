'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutContactForm() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Let&apos;s Work Together!
            </h2>
            <div className="mx-auto h-1 w-20 bg-purple-600" />
          </div>
          <form 
            className="mx-auto w-full max-w-4xl space-y-8"
            onSubmit={(e) => {
              e.preventDefault()
              // Handle form submission
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Input
                  placeholder="Full Name"
                  className="rounded-full border-gray-200"
                  required
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="rounded-full border-gray-200"
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full border-gray-200"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  className="min-h-[180px] resize-none rounded-3xl border-gray-200"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button 
                type="submit"
                className="rounded-full bg-purple-600 px-8 hover:bg-purple-500"
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

