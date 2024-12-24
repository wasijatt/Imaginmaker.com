'use client';

import Image from 'next/image';
import Link from 'next/link';
import { satoshi } from '@/lib/fonts';
import { Instagram, Facebook, Linkedin, Youtube, PinIcon as Pinterest } from 'lucide-react';

const Footer = () => {
    const openWhatsApp = (number) => {
        window.open(`https://wa.me/${number.replace(/[^0-9]/g, '')}`, '_blank');
    };

    const openEmail = (email) => {
        window.open(`mailto:${email}`, '_blank');
    };

    return (
        <footer className="relative bg-black text-white xl:h-[65vh] overflow-hidden">
            {/* Background SVG */}
            <div className="hidden xl:block absolute inset-0 z-0 opacity-30" style={{ width: '30%', height: '30%' }}>
                <Image
                    src="/footer/pen-footer.svg"
                    alt="Background Design"
                    layout="intrinsic"
                    width={100}
                    height={100}
                    style={{ width: '10rem', height: '10rem' }}
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 xl:mt-[2rem] xl:left-[4.5rem]">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Logo and Social Section */}
                    <div className="text-center lg:text-left space-y-8 xl:space-y-5">
                        <Image
                            src="/footer/full-logo.svg"
                            alt="Imagin Maker"
                            width={180}
                            height={40}
                            className="mx-auto lg:mx-0 mb-8"
                        />

                        <div className="space-y-4 xl:space-y-4">
                            <p className={`${satoshi.className} text-[#9A9A9A] font-bold`}>Follow us</p>
                            <div className="flex justify-center lg:justify-start gap-6 xl:gap-4">
                                {[Instagram, Facebook, Linkedin, Youtube, Pinterest].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
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
                            href="/about"
                            className={`${satoshi.className} inline-block bg-[#7D40FF] shadow-[1px_1px_10px_1px_rgba(125,64,255,55)] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#6930D9] transition-colors`}
                        >
                            About Agency
                        </Link>
                        <div className="mt-16 pt-8 xl:pt-8">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 ">
                                <p className="text-gray-400 text-[14px] relative">© 2024 Imagin Maker</p>
                                <div className={`${satoshi.className} flex gap-6 xl:gap-3 relative xl:right-[1rem]`}>
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
                    <div className="text-center lg:text-left relative xl:left-[11rem] xl:top-[2rem]">
                        <h3 className={`${satoshi.className} text-xl font-bold mb-6 xl:text-[1rem]`}>What We Offer</h3>
                        <ul className="space-y-4 xl:space-y-2">
                            {['Graphic Design', 'Motion Design', 'UI/UX Design', 'Website Design', 'Branding'].map((service, index) => (
                                <li key={index}>
                                    <Link href="/services" className="text-[#9A9A9A] hover:text-white transition-colors font-medium text-[15px]">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="text-center lg:text-left relative xl:left-[3.5rem] xl:top-[2rem]">
                        <h3 className={`${satoshi.className} text-[1rem] font-bold mb-6 xl:mb-4`}>Contact Us</h3>
                        <div className="space-y-4 xl:space-y-2">
                            <p className="text-white xl:text-[15px] font-normal">WhatsApp</p>
                            <button
                                onClick={() => openWhatsApp('+971 56 720 87 25')}
                                className="text-[#9A9A9A] hover:text-[#7D40FF] transition-colors block w-full lg:w-auto text-[13.5px]"
                            >
                                UAE: +971 56 720 87 25
                            </button>
                            <button
                                onClick={() => openWhatsApp('+92 300 5837549')}
                                className="text-[#9A9A9A] hover:text-[#7D40FF] transition-colors block w-full lg:w-auto text-[13.5px]"
                            >
                                Pak: +92 300 5837549
                            </button>

                            <div className="pt-4 xl:pt-8">
                                <p className="text-white">Email</p>
                                <button
                                    onClick={() => openEmail('imaginmaker583@gmail.com')}
                                    className="text-[#9A9A9A] hover:text-[#7D40FF] transition-colors text-[14px]"
                                >
                                    imaginmaker583@gmail.com
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="text-center lg:text-left relative xl:left-[-2rem] xl:top-[2rem]">
                        <h3 className={`${satoshi.className} text-[1rem] font-bold mb-6 xl:mb-1`}>Address</h3>
                        <div className="space-y-8">
                            <div>
                                <p className="text-white font-normal mb-2 text-[15px] tracking-wide">Dubai Office</p>
                                <p className="text-[#9A9A9A] text-[13.5px]">23rd St - Al Satwa - Dubai</p>
                                <p className="text-[#9A9A9A] text-[13.5px]">United Arab Emirates</p>
                            </div>
                            <div>
                                <p className="text-white font-normal mb-2 text-[15px] tracking-wide">Pakistan Office</p>
                                <p className="text-[#9A9A9A] text-[13.5px] tracking-wide">Street#3-Tibba kareema abad</p>
                                <p className="text-[#9A9A9A] text-[13.5px]">Muzaffargarh Punjab</p>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </footer>
    );
};

export default Footer;
