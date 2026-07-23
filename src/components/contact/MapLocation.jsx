import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaExpand, FaRoute } from 'react-icons/fa'

export default function MapLocation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8EAED] group"
    >
      {/* Map Container */}
      <div className="relative w-full h-[400px] bg-[#F5F7FA]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Kantor PT AKMI KARYA GLOBAL"
          className="w-full h-full"
        />
        
        {/* Overlay Gradient - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        
        {/* Overlay Gradient - Top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Map Controls - Overlay */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button 
          className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all duration-300"
          aria-label="Fullscreen map"
        >
          <FaExpand className="w-4 h-4" />
        </button>
        <button 
          className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:text-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all duration-300"
          aria-label="Get directions"
        >
          <FaRoute className="w-4 h-4" />
        </button>
      </div>

      {/* Location Badge - Bottom Left */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-white/20">
        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
          <FaMapMarkerAlt className="w-4 h-4 text-[#FF6B00]" />
        </div>
        <div>
          <p className="text-xs font-bold text-gray-900">Kantor Pusat</p>
          <p className="text-[10px] text-gray-500">Jl Riung Purna 1, No 17, Bandung</p>
        </div>
      </div>

      {/* Status Indicator - Bottom Right */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <span className="text-[10px] font-medium text-white">Aktif</span>
      </div>
    </motion.div>
  )
}