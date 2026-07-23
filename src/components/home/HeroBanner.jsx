import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useFetchData } from '../../hooks/useFetchData'
import { FaArrowRight, FaRocket, FaCrown, FaPlay } from 'react-icons/fa'

export default function HeroBanner() {
  const { data: heroData } = useFetchData('hero_sections', {
    filter: { is_active: true },
    order: { column: 'order_index', ascending: true },
    limit: 1
  })

  const hero = heroData?.[0] || {
    title: 'Business Solutions & Technology',
    subtitle: 'PT AKMI KARYA GLOBAL',
    description: 'PT AKMI KARYA GLOBAL Konsultan IT dan Training, Membantu mengembangkan bisnis anda dan menaikan kualitas produk anda.',
    button_text: 'Minta Penawaran',
    button_link: '/contact',
    secondary_button_text: 'Lihat Portofolio',
    secondary_button_link: '/portfolio'
  }

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-[#060E1A] via-[#0A1628] to-[#0B1B3D] text-white pt-32 pb-24 px-4 text-center">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 -left-40 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Premium Badge - Tidak Miring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B00]/20 to-[#C9A84C]/20 border border-[#FF6B00]/30 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B00]" />
            </span>
            {/* Tambahkan font-normal dan not-italic untuk mencegah miring */}
            <span className="text-xs font-bold not-italic uppercase tracking-[0.15em] text-white">
              {hero.subtitle}
            </span>
            <FaCrown className="w-3 h-3 text-[#C9A84C]" />
          </motion.div>

          {/* Main Title - Tidak Miring */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold not-italic leading-tight mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block text-white not-italic opacity-100">
              {hero.title}
            </span>
            <span className="block bg-gradient-to-r from-[#FF6B00] via-[#FF8A3D] to-[#C9A84C] bg-clip-text text-transparent not-italic">
              Innovation & Excellence
            </span>
          </motion.h1>

          {/* Description - Tidak Miring */}
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/80 not-italic leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {hero.description}
          </motion.p>

          {/* Action Buttons - Tidak Miring */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={hero.button_link}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] px-8 py-4 text-sm font-bold not-italic text-white shadow-xl shadow-[#FF6B00]/25 transition-all hover:shadow-[#FF6B00]/50 hover:shadow-2xl"
              >
                <FaRocket className="w-4 h-4" />
                {hero.button_text}
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={hero.secondary_button_link}
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold not-italic text-white transition-all hover:bg-white/10 hover:border-[#FF6B00]/50 hover:shadow-lg hover:shadow-[#FF6B00]/10"
              >
                <FaPlay className="w-3 h-3" />
                {hero.secondary_button_text}
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators - Tidak Miring */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B00]/30 to-[#C9A84C]/30 border-2 border-[#0A1628] flex items-center justify-center text-xs font-bold not-italic text-white">
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium not-italic text-white">100+ Klien Puas</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-[#C9A84C] text-lg">✦</span>
              <span className="text-sm font-medium not-italic text-white">15+ Tahun Pengalaman</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-[#FF6B00] text-lg">◆</span>
              <span className="text-sm font-medium not-italic text-white">24/7 Dukungan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}