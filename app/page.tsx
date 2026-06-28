import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { EmergencyStrip } from '@/components/emergency-strip'
import { Services } from '@/components/services'
import { FacilityShowcase } from '@/components/facility-showcase'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EmergencyStrip />
      <Services />
      <FacilityShowcase />
      <Footer />
    </main>
  )
}
