import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import * as FaIcons from 'react-icons/fa'

export default function ServicesSummary() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true)
      const { data, error } = await fetchData('services', {
        filter: { is_active: true },
        order: { column: 'order_index', ascending: true },
        limit: 6
      })

      if (!error && data && data.length > 0) {
        setServices(data)
      }
      setLoading(false)
    }

    loadServices()
  }, [])

  if (loading) {
    return (
      <div className="py-24 bg-white text-center">
        <div className="inline-block">
          <div className="relative w-12 h-12 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-500 text-sm mt-6 font-medium">Memuat layanan terbaik...</p>
        </div>
      </div>
    )
  }

  if (services.length === 0) {
    return null
  }

  const serviceColors = [
    'from-[#FF6B00] to-[#FF8A3D]',
    'from-[#C9A84C] to-[#E8D5A3]',
    'from-[#0A1628] to-[#1A2A4A]',
    'from-[#FF6B00] to-[#C9A84C]',
    'from-[#1A2A4A] to-[#0A1628]',
    'from-[#FF8A3D] to-[#FF6B00]'
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B00] via-[#C9A84C] to-[#FF6B00]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B00]/10 to-[#C9A84C]/10 border border-[#FF6B00]/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-9 font-bold">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">
              Layanan{' '}
            </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] bg-clip-text text-transparent not-italic">
              Utama Kami
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Solusi komprehensif engineering, procurement, construction, dan maintenance untuk industri.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = FaIcons[service.icon] || FaIcons.FaCogs
            const colorGradient = serviceColors[index % serviceColors.length]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00]/10 to-[#C9A84C]/10 mb-6 group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorGradient} opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
                    <IconComponent className="relative h-7 w-7 text-[#FF6B00] group-hover:text-[#FF8A3D] transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.short_description || service.full_description}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  {/* Number Indicator */}
                  <div className="absolute top-4 right-4 text-4xl font-black text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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