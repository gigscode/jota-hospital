'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#f0f0f0] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/jeta_logo.png"
            alt="Jota Care Hospital"
            width={640}
            height={180}
            className="h-24 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-[#4a4a4a] hover:text-[#001a4d] transition-colors text-sm font-medium">
            Services
          </Link>
          <Link href="#about" className="text-[#4a4a4a] hover:text-[#001a4d] transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="#contact" className="text-[#4a4a4a] hover:text-[#001a4d] transition-colors text-sm font-medium">
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:08034725443"
            className="px-6 py-2 border-2 border-[#cc3333] text-[#cc3333] rounded-lg hover:bg-[#cc3333] hover:text-white transition-all duration-300 text-sm font-semibold"
          >
            Emergency Call
          </a>
          <button className="px-6 py-2 bg-[#001a4d] text-white rounded-lg hover:opacity-90 transition-all duration-300 text-sm font-semibold">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#001a4d] hover:bg-[#f5f5f5] rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#f0f0f0] bg-white">
          <div className="px-4 py-4 space-y-3">
            {[
              { href: '#services', label: 'Services' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[#4a4a4a] hover:text-[#001a4d] transition-colors font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-[#f0f0f0]">
              <a
                href="tel:08034725443"
                className="block w-full px-4 py-2 border-2 border-[#cc3333] text-[#cc3333] text-center rounded-lg hover:bg-[#cc3333] hover:text-white transition-all duration-300 font-semibold"
              >
                Emergency Call
              </a>
              <button className="w-full px-4 py-2 bg-[#001a4d] text-white rounded-lg hover:opacity-90 transition-all duration-300 font-semibold">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
