import PageHeader from '../components/shared/PageHeader'
import PortfolioGallery from '../components/services/PortfolioGallery'

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader
        title="Portofolio Kami"
        subtitle="Karya terbaik yang telah kami hasilkan untuk klien dan mitra kami"
      />
      <PortfolioGallery />
    </main>
  )
}
