import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import * as FaIcons from 'react-icons/fa'

export default function ServicesList() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true)
      const { data, error } = await fetchData('services', {
        filter: { is_active: true },
        order: { column: 'order_index', ascending: true }
      })
      
      if (!error && data) {
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
          <div className="relative w-14 h-14 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
            <div className="absolute inset-2 border-3 border-t-[#C9A84C] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm mt-6 font-medium">Memuat layanan...</p>
        </div>
      </div>
    )
  }

  if (services.length === 0) {
    return null
  }

  const serviceColors = [
    'from-[#FF6B00]/10 to-[#FF8A3D]/5',
    'from-[#C9A84C]/10 to-[#E8D5A3]/5',
    'from-[#0A1628]/10 to-[#1A2A4A]/5',
    'from-[#FF8A3D]/10 to-[#FF6B00]/5',
    'from-[#7C3AED]/10 to-[#A78BFA]/5',
    'from-[#00AA13]/10 to-[#34D399]/5'
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-white">
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
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">Layanan </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] bg-clip-text text-transparent not-italic">Lengkap Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Solusi komprehensif EPC dan pemeliharaan industri berstandar tinggi.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = FaIcons[service.icon] || FaIcons.FaCheckCircle
            const colorGradient = serviceColors[index % serviceColors.length]
            
            let featuresList = []
            try {
              if (Array.isArray(service.features)) {
                featuresList = service.features
              } else if (typeof service.features === 'string') {
                featuresList = JSON.parse(service.features)
              }
            } catch (e) {
              featuresList = []
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${colorGradient} rounded-2xl p-6 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-xl transition-all duration-500 h-full text-left`}>
                  {/* Icon */}
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B00]/10 to-[#C9A84C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-xl bg-[#FF6B00] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
                    <Icon className="h-7 w-7 text-[#FF6B00] group-hover:text-[#FF8A3D] transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {service.short_description || service.full_description}
                  </p>
                  
                  {/* Features */}
                  {featuresList.length > 0 && (
                    <div className="pt-4 border-t border-[#E8EAED]/60 space-y-2">
                      {featuresList.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {featuresList.length > 4 && (
                        <div className="text-xs text-[#FF6B00] font-medium">
                          +{featuresList.length - 4} fitur lainnya
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                  
                  {/* Number */}
                  <div className="absolute top-4 right-4 text-2xl font-black text-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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