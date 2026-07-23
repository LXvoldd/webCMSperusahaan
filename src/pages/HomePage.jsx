import HeroBanner from '../components/home/HeroBanner'
import ValueProposition from '../components/home/ValueProposition'
import ServicesSummary from '../components/home/ServicesSummary'
import ClientLogos from '../components/home/ClientLogos'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <ValueProposition />
      <ServicesSummary />
      <ClientLogos />
      <FeaturedPortfolio />
      <Testimonials />
      <CTASection />
    </main>
  )
}