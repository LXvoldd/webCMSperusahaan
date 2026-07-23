import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import { FaFolderOpen, FaArrowRight, FaSearch, FaCrown } from 'react-icons/fa'

export default function PortfolioGallery() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('Semua')

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)
      const { data, error } = await fetchData('portfolios', {
        filter: { is_active: true },
        order: { column: 'created_at', ascending: false }
      })

      if (!error && data) {
        setProjects(data)
      }
      setLoading(false)
    }

    loadProjects()
  }, [])

  const categories = useMemo(() => {
    const set = new Set()
    projects.forEach(p => {
      if (p.category) set.add(p.category.trim())
    })
    return ['Semua', ...Array.from(set)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Semua') return projects
    return projects.filter((project) => {
      const category = (project.category || '').toLowerCase()
      return category === activeCategory.toLowerCase()
    })
  }, [activeCategory, projects])

  if (loading) {
    return (
      <div className="py-24 bg-[#F8F9FA] text-center">
        <div className="inline-block">
          <div className="relative w-14 h-14 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
            <div className="absolute inset-2 border-3 border-t-[#C9A84C] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm mt-6 font-medium">Memuat portofolio...</p>
        </div>
      </div>
    )
  }

  return (
    <section className="relative py-24 overflow-hidden bg-[#F8F9FA]">
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

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">Portofolio </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] bg-clip-text text-transparent not-italic">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Karya terbaik yang telah kami hasilkan untuk klien.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] text-white shadow-lg shadow-[#FF6B00]/25'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] border border-[#E8EAED] hover:border-[#FF6B00]/30'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">Belum ada portofolio yang dipublikasikan.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="block relative bg-white rounded-2xl overflow-hidden border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-64 bg-[#F5F7FA]">
                      <img
                        src={project.featured_image || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-[#FF6B00]/30">
                          {project.category || 'Proyek'}
                        </span>
                      </div>
                      
                      {/* Search Icon on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <FaSearch className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#FF6B00] transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500">{project.client_name || '-'}</p>
                      
                      <div className="mt-4 flex items-center gap-2 text-[#FF6B00] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Lihat Detail</span>
                        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  )
}