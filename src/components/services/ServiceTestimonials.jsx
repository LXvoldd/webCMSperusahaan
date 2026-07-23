import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import { FaStar, FaQuoteLeft, FaCrown, FaUserCircle } from 'react-icons/fa'

export default function ServiceTestimonials() {
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
      <div className="py-24 bg-[#F8F9FA] text-center">
        <div className="inline-block">
          <div className="relative w-14 h-14 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
            <div className="absolute inset-2 border-3 border-t-[#C9A84C] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm mt-6 font-medium">Memuat testimoni...</p>
        </div>
      </div>
    )
  }

  if (testimonials.length === 0) {
    return null
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
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">Testimoni </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] bg-clip-text text-transparent not-italic">Klien</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Apa kata mereka tentang layanan kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const ratingCount = Math.min(Math.max(Number(testimonial.rating) || 5, 1), 5)
            const initial = (testimonial.client_name || 'C').charAt(0).toUpperCase()

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-xl transition-all duration-500">
                  {/* Quote Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="absolute top-6 right-6 text-5xl text-[#FF6B00]/10"
                  >
                    <FaQuoteLeft />
                  </motion.div>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-4">
                    {testimonial.photo_url ? (
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] p-0.5">
                        <img 
                          src={testimonial.photo_url} 
                          alt={testimonial.client_name} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <FaUserCircle className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">
                        {testimonial.client_name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {[testimonial.position, testimonial.company].filter(Boolean).join(' • ')}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-3">
                    {[...Array(ratingCount)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00] animate-pulse" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                    {[...Array(5 - ratingCount)].map((_, i) => (
                      <FaStar 
                        key={i + ratingCount} 
                        className="w-4 h-4 text-gray-200" 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}