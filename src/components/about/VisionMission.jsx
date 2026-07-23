import { motion } from 'framer-motion'
import { FaEye, FaBullseye, FaCrown, FaArrowRight } from 'react-icons/fa'

export default function VisionMission() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#FDF8F5]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B00] via-[#C9A84C] to-[#FF6B00] opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8EAED] to-transparent" />
      
      {/* Subtle Pattern - Warm */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Warm Background Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B00]/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A84C]/[0.03] rounded-full blur-3xl" />
      
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
              <FaCrown className="w-5 h-5 text-white" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-700 font-bold">
              Visi & Misi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">Visi & </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] bg-clip-text text-transparent not-italic">Misi Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Komitmen kami untuk menjadi mitra terpercaya di industri konstruksi dan engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="relative rounded-2xl p-8 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-xl transition-all duration-500 h-full overflow-hidden bg-white/80 backdrop-blur-sm">
              {/* Background Soft Pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #FF6B00 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <div className="relative flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00]/20 to-[#C9A84C]/10 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#C9A84C] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                    <FaEye className="h-10 w-10 text-[#FF6B00] group-hover:text-[#FF8A3D] transition-colors" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#FF6B00] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    01
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                    Visi Kami
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Menjadi mitra konstruksi dan engineering industri terdepan di Indonesia yang terpercaya, inovatif, serta berstandar mutu internasional.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#FF6B00] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Baca Selengkapnya</span>
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="relative rounded-2xl p-8 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-xl transition-all duration-500 h-full overflow-hidden bg-white/80 backdrop-blur-sm">
              {/* Background Soft Pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <div className="relative flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#FF6B00]/10 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#FF6B00] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
                    <FaBullseye className="h-10 w-10 text-[#C9A84C] group-hover:text-[#FF6B00] transition-colors" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#C9A84C] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    02
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                    Misi Kami
                  </h3>
                  
                  <ul className="space-y-3">
                    {[
                      'Menyediakan layanan EPC & pemeliharaan dengan standar K3 dan mutu tertinggi.',
                      'Membangun hubungan kemitraan jangka panjang berlandaskan kepercayaan.',
                      'Terus melakukan inovasi teknik demi efisiensi operasional proyek klien.'
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex items-center gap-2 text-[#C9A84C] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Baca Selengkapnya</span>
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] to-[#FF6B00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}