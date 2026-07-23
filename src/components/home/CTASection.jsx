import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRocket, FaEnvelope, FaArrowRight, FaCrown } from 'react-icons/fa'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0B1B3D] to-[#0A1628]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FF6B00]/5 to-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6B00]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Siap Memulai{' '}
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] bg-clip-text text-transparent">
              Proyek Bersama Kami?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-base text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hubungi tim profesional kami untuk mendiskusikan kebutuhan engineering, konstruksi, dan pemeliharaan industri Anda.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-5 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#FF6B00]/25 transition-all hover:shadow-[#FF6B00]/50 hover:shadow-2xl"
              >
                <FaRocket className="w-4 h-4" />
                Minta Penawaran
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-[#FF6B00]/10"
              >
                <FaEnvelope className="w-4 h-4" />
                Kontak Kami
              </Link>
            </motion.div>
          </div>
          
          {/* Trust Indicator */}
          <div className="mt-10 flex items-center justify-center gap-6 text-white/30">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span className="text-xs">Garansi Kepuasan</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs">Dukungan 24/7</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span className="text-xs">Tim Profesional</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}