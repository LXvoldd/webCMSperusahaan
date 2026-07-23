import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaWhatsapp, FaArrowRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import PageHeader from '../components/shared/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import MapLocation from '../components/contact/MapLocation'

export default function ContactPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami siap membantu Anda. Jangan ragu untuk menghubungi kami."
      />
      <section className="py-12 bg-white border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] rounded-xl border border-[#E8EAED]">
              <FaPhone className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="text-sm text-gray-600">+62 857-6220-5153</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] rounded-xl border border-[#E8EAED]">
              <FaWhatsapp className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-sm text-gray-600">WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] rounded-xl border border-[#E8EAED]">
              <FaClock className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-sm text-gray-600">08:00 - 15:00 WIB</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8EAED] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Kirim Pesan</h2>
                    <p className="text-xs text-gray-400">Isi form di bawah ini untuk menghubungi kami</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Info - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8EAED] shadow-sm">
                <ContactInfo />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Map Title */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-white/20">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-[#FF6B00]" />
                <span className="text-sm font-semibold text-gray-900">Lokasi Kami</span>
              </div>
            </div>
            <MapLocation />
          </div>
        </div>
      </section>

      {/* CTA Section - WhatsApp */}
      <section className="py-12 bg-gradient-to-r from-[#FF6B00]/5 via-white to-[#FF6B00]/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <FaWhatsapp className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Butuh Bantuan Cepat?</h3>
                <p className="text-sm text-gray-500">Hubungi kami melalui WhatsApp untuk respon lebih cepat</p>
              </div>
            </div>
            <a
              href="https://wa.me/6285762205153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat via WhatsApp
              <FaArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-gray-400 mt-2">
              +62 857-6220-5153 • Respon dalam 1x24 jam
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}