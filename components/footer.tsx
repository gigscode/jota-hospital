'use client'

import Image from 'next/image'
import { MapPin, Phone, Clock, Mail, Share2, MessageCircle, Globe } from 'lucide-react'

export function Footer() {
  const address = 'Ifesowapo Street, Behind Omoloju Event Center, Along Afao Road, Ado Ekiti'
  const emergencyNumbers = ['08034725443', '07052704233', '08033903668']

  return (
    <footer id="contact" className="bg-[#001a4d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">

          {/* About */}
          <div>
            <div className="mb-4">
              <Image
                src="/jeta_logo.png"
                alt="Jota Care Hospital"
                width={360}
                height={100}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/85 leading-relaxed">
              Premier orthopedic, trauma, and general medical care facility serving Ado Ekiti and surrounding communities with excellence and compassion.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Website" className="p-2 bg-white/15 rounded-lg hover:bg-white/25 transition-all">
                <Globe size={18} className="text-white" />
              </a>
              <a href="#" aria-label="Chat" className="p-2 bg-white/15 rounded-lg hover:bg-white/25 transition-all">
                <MessageCircle size={18} className="text-white" />
              </a>
              <a href="#" aria-label="Share" className="p-2 bg-white/15 rounded-lg hover:bg-white/25 transition-all">
                <Share2 size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#services', label: 'Services' },
                { href: '#about', label: 'About Us' },
                { href: '#contact', label: 'Contact' },
                { href: '#', label: 'Book Appointment' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/85 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hours of Operation</h4>
            <div className="space-y-3 text-sm">
              {[
                { day: 'Mon – Fri', hours: '8:00 AM – 6:00 PM' },
                { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
                { day: 'Emergency', hours: '24/7 Available' },
              ].map((item) => (
                <div key={item.day} className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 flex-shrink-0 text-white" />
                  <div>
                    <p className="font-semibold text-white">{item.day}</p>
                    <p className="text-white/85">{item.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-white" />
                <p className="text-sm text-white/85 leading-relaxed">{address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a href="mailto:info@jotacare.com" className="text-sm text-white/85 hover:text-white transition-colors">
                  info@jotacare.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 sm:pt-12 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Emergency Hotlines */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/20 text-center">
              <p className="text-xs font-semibold text-white/90 mb-3 uppercase tracking-wide">Emergency Hotlines</p>
              <div className="space-y-2">
                {emergencyNumbers.map((number) => (
                  <a
                    key={number}
                    href={`tel:${number}`}
                    className="flex items-center justify-center gap-2 text-[#ff6b6b] hover:text-white font-bold transition-colors"
                  >
                    <Phone size={14} className="flex-shrink-0" />
                    <span className="text-base">{number}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-xs font-semibold text-white/90 mb-3 uppercase tracking-wide">Privacy & Policies</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-white/85 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/85 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-xs font-semibold text-white/90 mb-3 uppercase tracking-wide">Location Map</p>
              <a
                href="https://maps.google.com/?q=Ado+Ekiti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/85 hover:text-white transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/85">© {new Date().getFullYear()} Jota Care Hospital. All rights reserved.</p>
          <p className="mt-2 text-sm text-white/85">Excellence in Healthcare, Compassion in Care</p>
        </div>
      </div>
    </footer>
  )
}
