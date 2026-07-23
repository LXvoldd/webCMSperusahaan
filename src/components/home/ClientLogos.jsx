import { motion } from 'framer-motion'
import { FaBuilding, FaArrowRight, FaCrown } from 'react-icons/fa'

export default function ClientLogos() {
  const clients = [
    { name: 'Balanja.id', color: '#00A651' },
    { name: 'LEGALDK', color: '#003366' },
    { name: 'Qubox', color: '#E31E24' },
    { name: 'Icommits Academy', color: '#00AA13' },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B00] via-[#C9A84C] to-[#FF6B00]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 max-w-2xl mx-auto">
            Dipercaya oleh <span className="text-[#FF6B00]">Perusahaan Terkemuka</span>
          </h3>
        </motion.div>

        {/* Grid Logo Premium */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative flex items-center justify-center px-6 py-7 bg-white rounded-xl border-2 border-gray-100 hover:border-[#FF6B00]/40 hover:shadow-xl transition-all duration-400 overflow-hidden">
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-[#C9A84C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-[#FF6B00] opacity-0 group-hover:opacity-[0.03] blur-xl transition-opacity duration-400" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-tr-xl" />
                
                <span 
                  className="relative text-base font-bold tracking-wide transition-all duration-300 group-hover:scale-105"
                  style={{ color: client.color }}
                >
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            <span className="text-[#C9A84C]">✦</span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
          </div>
          <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
            Dan 50+ partner terpercaya lainnya
            <FaArrowRight className="w-4 h-4 text-[#FF6B00]" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}