'use client'

import { Heart, AlertTriangle, Bone } from 'lucide-react'

export function Services() {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'General Medical Practice',
      description: 'Comprehensive family and primary healthcare services designed to meet all your general medical needs with expert physicians and modern diagnostic facilities.',
      highlights: ['Family Care', 'Preventive Health', 'Diagnostics'],
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconBorder: 'border-blue-300',
      iconColor: 'text-[#001a4d]',
      titleColor: 'text-[#001a4d]',
      dotColor: 'bg-[#001a4d]',
      featured: false,
    },
    {
      id: 2,
      icon: AlertTriangle,
      title: 'Trauma Care',
      description: '24/7 high-urgency emergency trauma services with advanced life support, surgical intervention, and critical care for immediate emergency situations.',
      highlights: ['24/7 Ready', 'Advanced Support', 'Critical Care'],
      bg: 'bg-red-50',
      iconBg: 'bg-[#cc3333]/15',
      iconBorder: 'border-[#cc3333]/40',
      iconColor: 'text-[#cc3333]',
      titleColor: 'text-[#cc3333]',
      dotColor: 'bg-[#cc3333]',
      featured: true,
    },
    {
      id: 3,
      icon: Bone,
      title: 'Orthopedic Services',
      description: 'Specialized bone, joint, and skeletal care featuring advanced surgical techniques for fractures, joint replacement, sports injuries, and orthopedic trauma.',
      highlights: ['Joint Care', 'Fracture Treatment', 'Sports Medicine'],
      bg: 'bg-slate-50',
      iconBg: 'bg-slate-100',
      iconBorder: 'border-slate-300',
      iconColor: 'text-[#001a4d]',
      titleColor: 'text-[#001a4d]',
      dotColor: 'bg-[#001a4d]',
      featured: false,
    },
  ]

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001a4d] mb-4">
            Our Specialized Services
          </h2>
          <p className="text-base sm:text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Comprehensive medical excellence across orthopedic, trauma, and general healthcare with state-of-the-art facilities
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${service.bg} ${
                  service.featured
                    ? 'md:scale-105 shadow-2xl ring-2 ring-[#cc3333]/30'
                    : 'shadow-lg hover:shadow-2xl'
                }`}
              >
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${service.iconBg} border ${service.iconBorder} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={service.iconColor} />
                  </div>

                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="inline-flex w-fit mb-4 px-3 py-1 rounded-full bg-[#cc3333]/15 border border-[#cc3333]/40">
                      <span className="text-xs font-bold text-[#cc3333]">PRIORITY CARE</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${service.titleColor}`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#4a4a4a] mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.dotColor}`} />
                        <span className="text-xs sm:text-sm font-medium text-[#4a4a4a]">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className={`mt-6 w-full py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    service.featured
                      ? 'bg-[#cc3333] text-white hover:bg-[#b02a2a]'
                      : 'border-2 border-[#001a4d] text-[#001a4d] hover:bg-[#001a4d] hover:text-white'
                  }`}>
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
