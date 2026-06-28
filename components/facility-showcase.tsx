'use client'

import Image from 'next/image'
import { Users, Zap } from 'lucide-react'

export function FacilityShowcase() {
  const facilities = [
    {
      id: 2,
      title: 'Expert Medical Team',
      description: 'Highly trained specialists and compassionate healthcare professionals available 24/7',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Group of doctors walking on hospital hallway — Jota Care Hospital',
    },
    {
      id: 3,
      title: 'Advanced Technology',
      description: 'Cutting-edge diagnostic and monitoring equipment for precise patient care',
      icon: Zap,
      image: null,
      imageAlt: '',
    },
  ]

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-[#f9f9f9]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001a4d] mb-4">
            Our Facilities
          </h2>
          <p className="text-base sm:text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Experience excellence through our modern infrastructure and world-class medical environment
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
          {/* Large Featured Image — Modern OR */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-[#001a4d]">
            <Image
              src="https://images.unsplash.com/photo-1775947933085-30050ddad6b3?q=80&w=1200&auto=format&fit=crop"
              alt="Surgeons performing surgery in a modern operating room — Jota Care Hospital"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">State-of-the-Art Surgical Suite</h3>
              <p className="text-sm text-white/90">Modern theater with integrated technology</p>
            </div>
          </div>

          {/* Feature Cards */}
          {facilities.map((facility) => {
            const Icon = facility.icon
            return (
              <div
                key={facility.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {facility.image ? (
                  <>
                    <Image
                      src={facility.image}
                      alt={facility.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d] via-[#001a4d]/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-lg font-bold text-white mb-1">{facility.title}</h3>
                      <p className="text-sm text-white/85">{facility.description}</p>
                    </div>
                  </>
                ) : (
                  <div className="bg-white border border-[#001a4d]/10 p-6 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-[#cc3333]/10 border border-[#cc3333]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-[#cc3333]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#001a4d] mb-2">{facility.title}</h3>
                    <p className="text-sm text-[#4a4a4a] flex-grow">{facility.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#cc3333] group-hover:gap-3 transition-all duration-300">
                      <span className="text-sm font-semibold">Explore</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {/* Statistics Bar */}
          <div className="md:col-span-3 bg-[#001a4d] text-white rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-sm sm:text-base text-white/90">Patients Treated Monthly</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">15+</p>
                <p className="text-sm sm:text-base text-white/90">Surgical Rooms</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</p>
                <p className="text-sm sm:text-base text-white/90">Recovery Success Rate</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">20+</p>
                <p className="text-sm sm:text-base text-white/90">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
