import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaWhatsapp, FaYoutube 
} from 'react-icons/fa'

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: 'Alamat Kantor',
    content: 'Jl Riung Purna 1, No 17\nJawa Barat, Bandung, Indonesia',
    color: 'from-blue-500/10 to-blue-500/5'
  },
  {
    icon: FaPhone,
    title: 'Telepon & WhatsApp',
    content: '+62 857-6220-5153',
    color: 'from-emerald-500/10 to-emerald-500/5'
  },
  {
    icon: FaEnvelope,
    title: 'Email Resmi',
    content: 'info@akmikaryaglobal.com',
    color: 'from-rose-500/10 to-rose-500/5'
  },
  {
    icon: FaClock,
    title: 'Jam Operasional',
    content: 'Senin - Jumat: 08:00 - 15:00 WIB',
    color: 'from-amber-500/10 to-amber-500/5'
  }
]

const socialLinks = [
  { icon: FaFacebook, label: 'Facebook', color: 'hover:bg-[#1877F2]' },
  { icon: FaTwitter, label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
  { icon: FaInstagram, label: 'Instagram', color: 'hover:bg-[#E4405F]' },
  { icon: FaLinkedin, label: 'LinkedIn', color: 'hover:bg-[#0A66C2]' },
  { icon: FaWhatsapp, label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
  { icon: FaYoutube, label: 'YouTube', color: 'hover:bg-[#FF0000]' },
]

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
            <FaEnvelope className="w-5 h-5 text-[#FF6B00]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Informasi Kontak</h3>
            <p className="text-sm text-gray-400">Tim kami siap melayani kebutuhan Anda</p>
          </div>
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] rounded-full" />
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contactItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className={`group bg-gradient-to-br ${item.color} rounded-xl p-4 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Social Media */}
      <div className="pt-4 border-t border-[#E8EAED]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-gray-700">Ikuti Kami</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#E8EAED] to-transparent" />
        </div>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 bg-[#F8F9FA] rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* Quick Response Badge */}
      <div className="bg-[#F8F9FA] rounded-xl p-3 border border-[#E8EAED]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700">Respons Cepat</p>
            <p className="text-[10px] text-gray-400">Kami akan merespon dalam 1x24 jam</p>
          </div>
        </div>
      </div>
    </div>
  )
}