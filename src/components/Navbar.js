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
    { href: '/journals', label: 'Journals' },
    { href: '/services', label: 'Services' },
    { href: '/values', label: 'Our Values' },
  ];

  return (
    <nav className="bg-[#0D0D0D] px-4 py-8 shadow-2xl shadow-[#eeecec]">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white text-xl font-bold">
<Logo/>
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
        <Button
          className={`${satoshi.className} hidden font-bold md:flex bg-gradient-to-r from-[#6D40FF] to-[#8D40FF] bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] hover:from-[#6D40FF] hover:to-[#8D40FF] text-white rounded-full px-8 py-2`}
        >
          Contact Us
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#0D0D0D] border-l border-gray-800">
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#8B5CF6] transition-colors text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C3AED] hover:to-[#C026D3] text-white px-6 w-full rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
