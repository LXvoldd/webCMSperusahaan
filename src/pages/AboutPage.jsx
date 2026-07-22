import PageHeader from '../components/shared/PageHeader'
import CompanyProfile from '../components/about/CompanyProfile'
import VisionMission from '../components/about/VisionMission'
import Milestones from '../components/about/Milestones'
import ManagementTeam from '../components/about/ManagementTeam'
import CTASection from '../components/home/CTASection'

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat perusahaan teknologi terdepan di Indonesia"
      />
      <CompanyProfile />
      <VisionMission />
      <Milestones />
      <ManagementTeam />
      <CTASection />
    </main>
  )
}