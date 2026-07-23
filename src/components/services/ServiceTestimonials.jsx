import { useEffect, useState } from 'react'
import { fetchData } from '../../lib/supabaseClient'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

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
    return <div className="py-16 text-center text-slate-500 bg-white">Memuat testimoni...</div>
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien
          </h2>
          <p className="text-lg text-gray-600">
            Apa kata mereka tentang layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => {
            const ratingCount = Math.min(Math.max(Number(testimonial.rating) || 5, 1), 5)
            const initial = (testimonial.client_name || 'C').charAt(0).toUpperCase()

            return (
              <div key={testimonial.id} className="bg-white border border-gray-200 rounded-xl p-8 relative shadow-sm">
                <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-orange-100" />
                
                <div className="flex items-center mb-4">
                  {testimonial.photo_url ? (
                    <img 
                      src={testimonial.photo_url} 
                      alt={testimonial.client_name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border border-orange-200"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#ff6b00] font-bold text-lg">
                        {initial}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.client_name}</h4>
                    <p className="text-sm text-gray-500">
                      {[testimonial.position, testimonial.company].filter(Boolean).join(' - ')}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(ratingCount)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}