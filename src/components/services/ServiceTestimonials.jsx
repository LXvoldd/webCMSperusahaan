import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Andi Pratama',
    company: 'PT Retail Indonesia',
    role: 'CEO',
    content: 'Website e-commerce yang mereka buat berhasil meningkatkan penjualan kami sebesar 200% dalam 3 bulan pertama.',
    rating: 5,
    service: 'Web Development'
  },
  {
    name: 'Rina Wijaya',
    company: 'Bank Digital Nusantara',
    role: 'CTO',
    content: 'Aplikasi mobile banking yang sangat secure dan user-friendly. Tim sangat profesional dalam pengerjaannya.',
    rating: 5,
    service: 'Mobile Apps'
  },
  {
    name: 'David Susanto',
    company: 'Startup HealthTech',
    role: 'Product Manager',
    content: 'Desain UI/UX yang mereka buat sangat intuitif. User engagement meningkat signifikan setelah redesign.',
    rating: 5,
    service: 'UI/UX Design'
  },
  {
    name: 'Maya Putri',
    company: 'Fashion Brand Indonesia',
    role: 'Marketing Director',
    content: 'Strategi digital marketing yang tepat sasaran. ROI campaign mencapai 5x lipat dari investasi.',
    rating: 5,
    service: 'Digital Marketing'
  }
]

export default function ServiceTestimonials() {
  return (
    <section className="py-20">
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 relative">
              <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-blue-100" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role} - {testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>

              <p className="text-gray-600 mb-4">{testimonial.content}</p>

              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                {testimonial.service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}