'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { satoshi } from '@/lib/fonts';
import Logo from './ui/logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/case-study', label: 'Case Study' },
    { href: '/journal', label: 'Journals' },
    { href: '/services/services', label: 'Services' },
    { href: '/our-values', label: 'Our Values' },
  ];

  return (
    <nav className="bg-[#0D0D0D] px-4 py-8 shadow-2xl shadow-[#eeecec]">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white text-xl font-bold">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-20 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-[#8B5CF6] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <Link href="/contact">
          <Button
            className={`${satoshi.className} hidden font-bold md:flex bg-gradient-to-r from-[#6D40FF] to-[#8D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:from-[#6D40FF] hover:to-[#8D40FF] text-white rounded-full px-8 py-2`}
          >
            Contact Us
          </Button>
        </Link>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-full" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className={`w-full bg-[#0D0D0D] border-b border-gray-800 md:hidden flex flex-col items-center transition-transform duration-500 ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
          >
            {/* Logo */}
            <div className="flex justify-center mt-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Logo className="h-10" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#8B5CF6] transition-colors text-lg text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <Link href="/contact" className={`${satoshi.className} mt-6 bg-gradient-to-r from-[#6D40FF] to-[#8D40FF] hover:from-[#6D40FF] hover:to-[#6D40FF] text-white px-2 w-10/12 rounded-full py-2 text-center font-bold`}>
              <Button
                
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Button>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
