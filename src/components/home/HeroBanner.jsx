import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useFetchData } from '../../hooks/useFetchData'

export default function HeroBanner() {
  const { data: heroData } = useFetchData('hero_sections', {
    filter: { is_active: true },
    order: { column: 'order_index', ascending: true },
    limit: 1
  })

  const hero = heroData?.[0] || {
    title: 'Mitra Terpercaya untuk Solusi Konstruksi & Industri',
    subtitle: 'PT AKMI KARYA GLOBAL',
    description: 'PT AKMI KARYA GLOBAL menghadirkan layanan engineering, procurement, construction, dan maintenance berkualitas tinggi untuk sektor industri di seluruh Indonesia.',
    button_text: 'Minta Penawaran',
    button_link: '/contact',
    secondary_button_text: 'Lihat Portofolio',
    secondary_button_link: '/portfolio'
  }

  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#0a1630] text-white pt-24 pb-20 px-4">
      <div className="relative z-10 max-w-4xl mx-auto text-left sm:text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-sm bg-[#ff6b00] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {hero.subtitle}
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white max-w-3xl">
            {hero.title}
          </h1>

          <p className="mt-4 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={hero.button_link}
              className="inline-flex items-center justify-center rounded-md bg-[#ff6b00] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#e05e00]"
            >
              {hero.button_text}
            </Link>
            <Link
              to={hero.secondary_button_link}
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {hero.secondary_button_text}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}