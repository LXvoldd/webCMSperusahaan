import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import { FaQuoteLeft, FaStar, FaUserCircle, FaCrown } from 'react-icons/fa'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTestimonials = async () => {
      setLoading(true)
      const { data, error } = await fetchData('testimonials', {
        filter: { is_active: true },
        order: { column: 'order_index', ascending: true }
      })

      if (!error && data && data.length > 0) {
        setTestimonials(data)
      }
      setLoading(false)
    }

    loadTestimonials()
  }, [])

  if (loading) {
    return (
      <div className="py-24 bg-white text-center">
        <div className="inline-block">
          <div className="relative w-12 h-12 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#C9A84C] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-500 text-sm mt-6 font-medium">Memuat testimoni klien...</p>
        </div>
      </div>
    )
  }

  if (testimonials.length === 0) {
    return null
  }

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

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">
              Apa Kata{' '}
            </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] bg-clip-text text-transparent not-italic">
              Klien Kami
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Kepercayaan dan kepuasan mitra industri adalah prioritas utama dari setiap proyek yang kami laksanakan.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-[#C9A84C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Quote Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-6 right-6 text-[#FF6B00]/20 text-5xl"
                >
                  <FaQuoteLeft />
                </motion.div>
                
                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00] animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                {/* Client Info */}
                <div className="relative flex items-center gap-4 pt-4 border-t border-gray-100 group-hover:border-[#FF6B00]/20 transition-colors">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <FaUserCircle className="w-7 h-7 text-gray-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">
                      {testimonial.client_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {[testimonial.position, testimonial.company].filter(Boolean).join(' • ')}
                    </p>
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}