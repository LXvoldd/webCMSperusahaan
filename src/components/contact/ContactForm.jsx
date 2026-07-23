import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaTag, FaComment, FaCheckCircle, FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  }

  const inputFields = [
    { name: 'name', label: 'Nama Lengkap', type: 'text', icon: FaUser, placeholder: 'Masukkan nama Anda', required: true, col: 'md:col-span-1' },
    { name: 'email', label: 'Email', type: 'email', icon: FaEnvelope, placeholder: 'contoh@email.com', required: true, col: 'md:col-span-1' },
    { name: 'phone', label: 'Nomor Telepon', type: 'tel', icon: FaPhone, placeholder: '+62...', required: false, col: 'md:col-span-1' },
    { name: 'company', label: 'Perusahaan', type: 'text', icon: FaBuilding, placeholder: 'Nama perusahaan', required: false, col: 'md:col-span-1' },
    { name: 'subject', label: 'Subjek', type: 'text', icon: FaTag, placeholder: 'Permintaan Penawaran Proyek', required: true, col: 'md:col-span-2' },
  ]

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <FaCheckCircle className="w-10 h-10 text-emerald-500" />
        </motion.div>
        <h3 className="text-2xl font-bold text-emerald-800 mb-2">Pesan Terkirim!</h3>
        <p className="text-emerald-600 text-sm max-w-sm mx-auto">
          Terima kasih telah menghubungi kami. Tim kami akan merespon dalam 1x24 jam.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
        >
          Kirim Pesan Lagi
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inputFields.map((field) => {
          const Icon = field.icon
          const isTextarea = field.name === 'message'
          const value = formData[field.name]
          
          if (isTextarea) return null
          
          return (
            <div key={field.name} className={field.col}>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                {field.label}
                {field.required && <span className="text-[#FF6B00]">*</span>}
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Icon className="w-4 h-4" />
                </div>
                <input
                  type={field.type}
                  name={field.name}
                  value={value}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FA] border border-[#E8EAED] rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10 transition-all text-sm placeholder:text-gray-400"
                  placeholder={field.placeholder}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Message Field - Full Width with Icon */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
          Pesan <span className="text-[#FF6B00]">*</span>
        </label>
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <FaComment className="w-4 h-4" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FA] border border-[#E8EAED] rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10 transition-all text-sm placeholder:text-gray-400 resize-none"
            placeholder="Jelaskan kebutuhan konstruksi/engineering Anda..."
          />
        </div>
        <p className="text-[10px] text-gray-400 mt-1.5">Minimal 10 karakter</p>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full flex items-center justify-center gap-2 bg-[#FF6B00] text-white px-6 py-3.5 rounded-xl text-sm font-bold hover:bg-[#E86000] transition-all shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <FaPaperPlane className="w-4 h-4" />
            Kirim Pesan Penawaran
          </>
        )}
      </motion.button>
    </form>
  )
}