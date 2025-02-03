"use client";

import { clashGrotesk } from "@/lib/clashGroteskfont";
import { satoshi } from "@/lib/fonts";
import Image from "next/image";

export default function SubscribeSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "mailto:subscribe@example.com";
  };

  return (
    <section className="w-full bg-[#202020] py-12 md:py-30 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl rounded-3xl bg-[url('/journal/journal2.png')] bg-cover bg-center bg-no-repeat p-8 md:py-28 md:px-20">
        <div className="relative rounded-3xl border border-gray-600 bg-black/70 p-6 md:px-8 backdrop-blur-sm md:py-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className={`${clashGrotesk.className} text-2xl font-bold text-white sm:text-3xl tracking-wider`}>
                Subscribe to Our Blog
              </h2>
              <p className={`${satoshi.className} text-gray-400 `}>
                Once a month we will send you blog updates
              </p>
              <form onSubmit={handleSubmit} className="relative ">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-5/6 rounded-full bg-transparent px-4 py-4 text-white placeholder:text-gray-500 border border-gray-600 pr-28 "
                  required
                />
                <button
                  type="submit"
                  className={`${satoshi.className} absolute right-2 md:right-[5.4rem] top-1/2 -translate-y-1/2 rounded-full md:px-6 md:py-2 bg-[#6D40FF] tracking-normal px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#7D40FF]`}
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/journal/journal3.png"
                alt="Subscribe illustration"
                width={200}
                height={200}
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
