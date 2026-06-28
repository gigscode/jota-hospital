'use client'

import { Phone, AlertCircle } from 'lucide-react'

export function EmergencyStrip() {
  const emergencyNumbers = [
    { number: '08034725443', label: 'Main Line' },
    { number: '07052704233', label: 'Trauma Unit' },
    { number: '08033903668', label: 'General Query' },
  ]

  return (
    <section className="bg-[#001a4d] text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-4">
          <AlertCircle size={20} className="text-white animate-pulse" />
          <h2 className="text-lg sm:text-xl font-bold text-white">Emergency Contact Numbers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {emergencyNumbers.map((item) => (
            <a
              key={item.number}
              href={`tel:${item.number}`}
              className="group relative overflow-hidden rounded-lg bg-white/15 border border-white/30 p-4 hover:bg-white/25 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white/90">{item.label}</p>
                  <p className="text-sm sm:text-base font-bold text-white">{item.number}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 sm:mt-4 text-center">
          <p className="text-xs sm:text-sm text-white/90">
            All numbers are available 24/7 for immediate assistance. Click any number to call directly.
          </p>
        </div>
      </div>
    </section>
  )
}
