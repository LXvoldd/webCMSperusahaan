import { motion } from 'framer-motion'
import { FaAward, FaShieldAlt, FaClock, FaUserCheck, FaArrowRight, FaCrown } from 'react-icons/fa'

const values = [
  {
    icon: FaAward,
    title: 'Pengalaman 15+ Tahun',
    description: 'Telah menangani berbagai proyek konstruksi & industri berskala besar di Indonesia.',
    gradient: 'from-[#C9A84C] to-[#E8D5A3]'
  },
  {
    icon: FaShieldAlt,
    title: 'Standar Kualitas Tinggi',
    description: 'Penerapan standar ISO dan K3 untuk menjamin keamanan & mutu hasil pekerjaan.',
    gradient: 'from-[#FF6B00] to-[#FF8A3D]'
  },
  {
    icon: FaClock,
    title: 'Ketepatan Waktu',
    description: 'Manajemen proyek profesional menjamin pengerjaan tepat waktu sesuai komitmen.',
    gradient: 'from-[#0A1628] to-[#1A2A4A]'
  },
  {
    icon: FaUserCheck,
    title: 'Tenaga Ahli Bersertifikat',
    description: 'Didukung engineer dan teknisi berpengalaman tinggi dan tersertifikasi resmi.',
    gradient: 'from-[#FF8A3D] to-[#C9A84C]'
  }
]

export default function ValueProposition() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white text-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B00] via-[#C9A84C] to-[#FF6B00]" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="block text-gray-900 not-italic">
              Nilai Unggul yang
            </span>
            <span className="block bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] bg-clip-text text-transparent not-italic">
              Kami Hadirkan
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto font-medium text-center not-italic">
            Melampaui ekspektasi setiap klien.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`relative inline-flex mb-6 p-4 rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-10`}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    style={{ 
                      background: `linear-gradient(135deg, ${value.gradient.split(' ')[0]}15, ${value.gradient.split(' ')[2] || value.gradient.split(' ')[0]}15)`
                    }}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    <Icon className="relative h-6 w-6 text-[#FF6B00] group-hover:scale-110 transition-transform duration-500" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Action */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#FF6B00]"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                  
                  {/* Number */}
                  <div className="absolute top-4 right-4 text-3xl font-black text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}