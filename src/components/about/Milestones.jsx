import { motion } from 'framer-motion'
import { FaCrown, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

const milestones = [
  { 
    year: '2010', 
    title: 'Perusahaan Didirikan', 
    description: 'Memulai langkah dengan pengerjaan proyek konstruksi dan rekayasa lokal.',
    icon: '🏗️',
    bg: 'from-white via-[#FFF5F0] to-white'
  },
  { 
    year: '2014', 
    title: 'Sertifikasi K3 & ISO', 
    description: 'Mencapai sertifikasi resmi keselamatan dan penjaminan kualitas industri.',
    icon: '📋',
    bg: 'from-white via-[#FDF8F0] to-white'
  },
  { 
    year: '2018', 
    title: 'Ekspansi Layanan EPC', 
    description: 'Memperluas jangkauan ke pengadaan skala nasional dan proyek pabrik manufaktur.',
    icon: '🏭',
    bg: 'from-white via-[#F5F7FA] to-white'
  },
  { 
    year: '2021', 
    title: '150+ Proyek Industri', 
    description: 'Menyelesaikan lebih dari 150 fasilitas logistik & industri skala nasional.',
    icon: '📊',
    bg: 'from-white via-[#FFF5F0] to-white'
  },
  { 
    year: '2025', 
    title: 'Solusi Modern & Ramah Lingkungan', 
    description: 'Mengintegrasikan inovasi ramah lingkungan dalam konstruksi pabrik & fasilitas energi.',
    icon: '🌱',
    bg: 'from-white via-[#F0FFF4] to-white'
  }
]

export default function Milestones() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#FAFAFA]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B00] via-[#C9A84C] to-[#FF6B00] opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8EAED] to-transparent" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0A1628 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Soft Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B00]/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A84C]/[0.02] rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8EAED] mb-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] flex items-center justify-center">
              <FaCalendarAlt className="w-5 h-5 text-white" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-700 font-bold">
              Perjalanan Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">Perjalanan </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] bg-clip-text text-transparent not-italic">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Jejak langkah pertumbuhan dan pencapaian PT AKMI KARYA GLOBAL.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B00] via-[#C9A84C] to-[#FF6B00] -translate-x-1/2 hidden md:block opacity-30" />
          
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">{index + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`bg-gradient-to-br ${item.bg} rounded-2xl p-6 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-lg transition-all duration-500`}
                  >
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row'}`}>
                      <div className="text-3xl">{item.icon}</div>
                      <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] text-white text-xs font-bold`}>
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[#FF6B00] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Baca Selengkapnya</span>
                      <FaArrowRight className="w-3 h-3" />
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:block w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}