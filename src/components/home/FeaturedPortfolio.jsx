import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import { FaArrowRight, FaFolderOpen, FaExternalLinkAlt, FaCrown } from 'react-icons/fa'

export default function FeaturedPortfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPortfolios = async () => {
      setLoading(true)
      const { data, error } = await fetchData('portfolios', {
        filter: { is_featured: true, is_active: true },
        limit: 3,
        order: { column: 'created_at', ascending: false }
      })
      
      if (!error && data) {
        setProjects(data)
      }
      setLoading(false)
    }
    
    loadPortfolios()
  }, [])

  if (loading) {
    return (
      <div className="py-24 bg-[#0A1628] text-center">
        <div className="inline-block">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
            <div className="absolute inset-2 border-3 border-t-[#C9A84C] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin animate-pulse" />
          </div>
          <p className="text-white/40 text-sm mt-6 font-medium">Memuat portofolio terbaik...</p>
        </div>
      </div>
    )
  }

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0B1B3D] to-[#0A1628]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Portofolio{' '}
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] bg-clip-text text-transparent">
              Unggulan
            </span>
          </h2>
          <p className="mt-4 text-base text-white/40 max-w-2xl mx-auto">
            Bukti nyata komitmen kami dalam menghadirkan proyek berkualitas tinggi di berbagai sektor industri.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF6B00]/30 transition-all duration-500">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.featured_image || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-[#FF6B00]/30">
                      {project.category || 'Proyek'}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg hover:bg-[#FF6B00]/30 transition-all border border-white/10">
                      <FaExternalLinkAlt className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF6B00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/40">{project.client_name || '-'}</p>
                  
                  {/* Hover Action */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 flex items-center gap-2 text-[#FF6B00] text-sm font-semibold"
                  >
                    <span>Lihat Detail</span>
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
                
                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}