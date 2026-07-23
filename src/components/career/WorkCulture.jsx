import { motion } from 'framer-motion'
import { FaUsers, FaHardHat, FaHeart, FaGraduationCap, FaAward, FaShieldAlt, FaArrowRight } from 'react-icons/fa'

const cultures = [
  {
    icon: FaUsers,
    title: 'Kolaborasi Solid',
    description: 'Sinergi antar engineer, teknisi, dan manajemen lapangan.',
    color: 'from-blue-500/10 to-blue-500/5'
  },
  {
    icon: FaHardHat,
    title: 'Prioritas K3',
    description: 'Standar keselamatan tertinggi dalam setiap pengerjaan di lokasi proyek.',
    color: 'from-emerald-500/10 to-emerald-500/5'
  },
  {
    icon: FaHeart,
    title: 'Kesejahteraan Tim',
    description: 'Fasilitas dan lingkungan kerja yang aman, sehat, dan kondusif.',
    color: 'from-rose-500/10 to-rose-500/5'
  },
  {
    icon: FaGraduationCap,
    title: 'Sertifikasi & Pelatihan',
    description: 'Pengembangan kemampuan teknis lewat sertifikasi profesi resmi.',
    color: 'from-purple-500/10 to-purple-500/5'
  },
  {
    icon: FaAward,
    title: 'Apresiasi Kinerja',
    description: 'Penghargaan atas dedikasi dan kontribusi nyata dalam setiap milestone.',
    color: 'from-amber-500/10 to-amber-500/5'
  },
  {
    icon: FaShieldAlt,
    title: 'Integritas Tinggi',
    description: 'Menjunjung tinggi keandalan dan kejujuran dalam berbisnis.',
    color: 'from-[#FF6B00]/10 to-[#C9A84C]/5'
  }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
]

export default function WorkCulture() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
              <FaUsers className="w-5 h-5 text-[#FF6B00]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Budaya Kerja Kami</h2>
              <p className="text-sm text-gray-400">Lingkungan profesional yang mendukung inovasi dan keselamatan</p>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] rounded-full" />
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {cultures.map((culture, index) => {
            const Icon = culture.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className={`group bg-gradient-to-br ${culture.color} rounded-2xl p-6 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-lg transition-all duration-300 text-left`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#FF6B00]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#FF6B00] transition-colors">
                  {culture.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{culture.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Gallery - Desain Interaktif */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900">Galeri Aktivitas</h3>
            <button className="text-sm text-[#FF6B00] font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Lihat Semua
              <FaArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((url, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden h-48 bg-[#F8F9FA] group"
              >
                <img
                  src={url}
                  alt={`Kultur ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    Aktivitas #{i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}