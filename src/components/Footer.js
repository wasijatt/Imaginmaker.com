"use client"

import Image from "next/image"
import Link from "next/link"
import { satoshi } from "@/lib/fonts"
import { Instagram, Facebook, Linkedin, Youtube, PinIcon as Pinterest } from "lucide-react"

const Footer = () => {
  const openWhatsApp = (number) => {
    window.open(`https://wa.me/${number.replace(/[^0-9]/g, "")}`, "_blank")
  }

  const openEmail = (email) => {
    window.open(`mailto:${email}`, "_blank")
  }

  // Social media links
  const socialLinks = [
    { Icon: Instagram, url: "https://www.instagram.com/imaginmaker/" },
    { Icon: Facebook, url: "https://www.facebook.com/imaginmaker/" },
    { Icon: Linkedin, url: "https://www.linkedin.com/imaginmaker/" },
    { Icon: Youtube, url: "https://www.instagram.com/imaginmaker/" },
    { Icon: Pinterest, url: "https://www.pinterest.com/imaginmaker/" },
  ]

  return (
    <footer className="w-full relative bg-black text-white overflow-hidden min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[500px]">
      {/* Background SVG - Much larger size, hidden on mobile */}
      <div className="hidden sm:block absolute top-0 right-[11rem] z-0 opacity-25 w-full h-full pointer-events-none">
        <Image
          src="/footer/pen-footer.svg"
          alt="Background Design"
          width={500}
          height={500}
          quality={100}
          className="absolute top-0 left-0 sm:left-20 md:left-40 lg:left-60 xl:left-80 2xl:left-96 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Logo and Social Section */}
          <div className="text-center lg:text-left space-y-8">
            <Image
              src="/footer/full-logo.svg"
              alt="Imagin Maker"
              width={180}
              height={40}
              className="mx-auto lg:mx-0 mb-8"
            />

            <div className="hidden md:block space-y-6">
              <p className={`${satoshi.className} text-[#9A9A9A] font-bold`}>Follow us</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map(({ Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#7D40FF] transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <Link
              href="/About-us"
              className={`${satoshi.className} hidden md:inline-block bg-[#7D40FF] shadow-[1px_1px_10px_1px_rgba(125,64,255,55)] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#6930D9] transition-colors mt-4`}
            >
              About Agency
            </Link>

            <div className="hidden md:block mt-12">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-[14px]">© 2024 Imagin Maker</p>
                <div className={`${satoshi.className} flex gap-4`}>
                  <Link href="/terms" className="text-gray-white hover:text-white font-semibold transition-colors">
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-gray-white hover:text-white font-bold transition-colors">
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="text-center lg:text-left md:pl-8 lg:pl-12 xl:pl-16 mt-4 md:mt-8">
            <h3 className={`${satoshi.className} text-xl font-bold mb-6 lg:text-lg`}>What We Offer</h3>
            <ul className="space-y-4 lg:space-y-3">
              {["Graphic Design", "Motion Design", "UI/UX Design", "Website Design", "Branding"].map(
                (service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-[#9A9A9A] hover:text-white transition-colors font-medium text-[15px]"
                    >
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-center lg:text-left mt-4 md:mt-8">
            <h3 className={`${satoshi.className} text-xl lg:text-lg font-bold mb-6`}>Contact Us</h3>
            <div className="space-y-4 lg:space-y-3">
              <p className="text-white text-[15px] font-normal">WhatsApp</p>
              <button
                onClick={() => openWhatsApp("+971 56 720 87 25")}
                className="text-[#9A9A9A] hover:text-[#7D40FF] transition-colors block w-full lg:w-auto text-[13.5px]"
              >
                UAE: +971 56 720 87 25
              </button>
              <button
                onClick={() => openWhatsApp("+92 300 5837549")}
                className="text-[#9A9A9A] hover:text-[#7D40FF] transition-colors block w-full lg:w-auto text-[13.5px]"
              >
                Pak: +92 300 5837549
              </button>

              <div className="pt-6">
                <p className="text-white">Email</p>
                <button
                  onClick={() => openEmail("imaginmaker583@gmail.com")}
                  className="text-[#9A9A9A] hover:text-[#7D40FF] transition-colors text-[14px]"
                >
                  imaginmaker583@gmail.com
                </button>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center lg:text-left mt-4 md:mt-8">
            <h3 className={`${satoshi.className} text-xl lg:text-lg font-bold mb-6`}>Address</h3>
            <div className="space-y-8">
              <div>
                <p className="text-white font-normal mb-3 text-[15px] tracking-wide">Dubai Office</p>
                <p className="text-[#9A9A9A] text-[13.5px]">23rd St - Al Satwa - Dubai</p>
                <p className="text-[#9A9A9A] text-[13.5px]">United Arab Emirates</p>
              </div>
              <div>
                <p className="text-white font-normal mb-3 text-[15px] tracking-wide">Pakistan Office</p>
                <p className="text-[#9A9A9A] text-[13.5px] tracking-wide">Street#3-Tibba kareema abad</p>
                <p className="text-[#9A9A9A] text-[13.5px]">Muzaffargarh Punjab</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only buttons and social links */}
        <Link
          href="/About-us"
          className={`${satoshi.className} md:hidden block bg-[#7D40FF] shadow-[1px_1px_10px_1px_rgba(125,64,255,55)] text-white px-4 mx-auto max-w-xs py-2 rounded-full text-sm font-bold hover:bg-[#6930D9] transition-colors mt-16 text-center`}
        >
          About Agency
        </Link>

        <div className="md:hidden block space-y-4 mt-12">
          <p className={`${satoshi.className} text-[#9A9A9A] font-bold text-center`}>Follow us</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#7D40FF] transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:hidden block mt-12">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400 text-[14px]">© 2024 Imagin Maker</p>
            <div className={`${satoshi.className} flex gap-6`}>
              <Link href="/terms" className="text-gray-white hover:text-white font-semibold transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-white hover:text-white font-bold transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

