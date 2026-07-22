import { Link } from 'react-router-dom'
import { FaCogs, FaBoxes, FaBuilding, FaWrench, FaTasks, FaUserShield } from 'react-icons/fa'

const services = [
  { icon: FaCogs, title: 'Engineering & Design', description: 'Perencanaan teknis dan desain rekayasa terstruktur untuk proyek industri.' },
  { icon: FaBoxes, title: 'Procurement', description: 'Pengadaan material dan peralatan berkualitas dari vendor terpercaya.' },
  { icon: FaBuilding, title: 'Construction & Installation', description: 'Pelaksanaan konstruksi dan instalasi peralatan presisi tinggi.' },
  { icon: FaWrench, title: 'Maintenance & Repair', description: 'Layanan pemeliharaan berkala dan perbaikan cepat untuk menjaga keandalan fasilitas.' },
  { icon: FaTasks, title: 'Project Management', description: 'Pengawasan dan tata kelola proyek berstandar tinggi demi mencapai efisiensi biaya dan waktu.' },
  { icon: FaUserShield, title: 'HSE Consulting', description: 'Konsultasi keselamatan kerja dan lingkungan (K3L) demi menjamin standar mutu penerapannya.' }
]

export default function ServicesSummary() {
  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Layanan Kami</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Solusi komprehensif engineering, procurement, construction, dan maintenance untuk industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative border border-slate-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#ff6b00]">
                  <service.icon className="h-5 w-5" />
                </div>
                <div className="h-1 w-10 bg-[#ff6b00] rounded-full" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}