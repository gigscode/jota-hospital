'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-[#001a4d]/10 border border-[#001a4d]/20">
              <div className="w-2 h-2 bg-[#cc3333] rounded-full" />
              <span className="text-xs sm:text-sm font-semibold text-[#001a4d]">Advanced Medical Care</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001a4d] leading-tight text-balance">
                Advanced Orthopedic, Trauma & General Medical Care
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#4a4a4a] max-w-lg">
                Specialized healthcare excellence in Ado Ekiti with state-of-the-art facilities and compassionate expert care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#001a4d] text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                Book an Appointment
              </button>
              <a
                href="tel:08034725443"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#cc3333] text-[#cc3333] rounded-lg font-semibold hover:bg-[#cc3333] hover:text-white transition-all duration-300 text-center"
              >
                Emergency Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#e0e0e0]">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#001a4d]">24/7</p>
                <p className="text-xs sm:text-sm text-[#4a4a4a]">Emergency Care</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#001a4d]">50+</p>
                <p className="text-xs sm:text-sm text-[#4a4a4a]">Medical Staff</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#001a4d]">100%</p>
                <p className="text-xs sm:text-sm text-[#4a4a4a]">Certified</p>
              </div>
            </div>
          </div>

          {/* Right — Photorealistic hero image */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1586324304780-c9a5031a3599?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Medical professional in scrubs — Jota Care Hospital"
              fill
              
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d]/70 via-[#001a4d]/20 to-transparent" />

            {/* Premium badge */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <p className="text-sm font-semibold text-[#001a4d] mb-3">Why Choose Jota Care?</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-bold text-[#001a4d] text-lg">ISO 9001</p>
                    <p className="text-xs text-[#4a4a4a]">Certified</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#001a4d] text-lg">NACA</p>
                    <p className="text-xs text-[#4a4a4a]">Accredited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
