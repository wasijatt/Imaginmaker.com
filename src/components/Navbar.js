"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { satoshi } from "@/lib/fonts";
import Logo from "@/components/ui/logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 bg-black py-4 2xl:py-7 px-6 shadow-[gray_0px_0px_4px_0px]",
                satoshi.className
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center">
                <div className="flex items-center justify-between flex-1 md:flex-none relative 2xl:left-[-6rem] ">
                    {/* Logo */}
                    <Link href="/" aria-label="Home">
                        <Logo />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white relative "
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex-1 md:flex items-center justify-center space-x-14 2xl:space-x-20 relative 2xl:left-[12rem] xl:left-[11.5rem]">
                    {["Case Study", "Journel", "Our Values", "Services"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                            className={`text-white hover:text-[#6F00FF] transition-colors`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block flex-1 text-right relative 2xl:left-[6rem]">
                    <Link
                        href="/contact"
                        className="bg-gradient-to-r from-[#7D40FF] via-[#6F00FF] to-[#8F00FF] text-white px-6 py-2 2xl:py-[10px] rounded-full hover:opacity-90 transition-all duration-300 font-medium"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden fixed inset-0 top-[72px] bg-black bg-opacity-95 z-50 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <div className="flex flex-col items-center space-y-8 pt-8">
                        {["Case Study", "Journel", "Services", "Our Values"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                                className="text-white hover:text-[#6F00FF] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-[#6F00FF] via-[#6F00FF] to-[#8F00FF] text-white px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
