import PageHeader from '../components/shared/PageHeader'
import ServicesList from '../components/services/ServicesList'
import ServiceTestimonials from '../components/services/ServiceTestimonials'
import CTASection from '../components/home/CTASection'

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Layanan Kami"
        subtitle="Solusi digital lengkap untuk mendorong pertumbuhan bisnis Anda"
      />
      <ServicesList />
      <ServiceTestimonials />
      <CTASection />
    </main>
  )
}