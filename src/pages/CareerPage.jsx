import PageHeader from '../components/shared/PageHeader'
import WorkCulture from '../components/career/WorkCulture'
import JobListings from '../components/career/JobListings'
import CTASection from '../components/home/CTASection'

export default function CareerPage() {
  return (
    <main>
      <PageHeader
        title="Karir"
        subtitle="Bergabunglah dengan tim kami dan bangun masa depan bersama"
      />
      <WorkCulture />
      <JobListings />
      <CTASection />
    </main>
  )
}