import { motion } from 'framer-motion'
import { FaBuilding, FaTrophy, FaProjectDiagram, FaShieldAlt } from 'react-icons/fa'

export default function CompanyProfile() {
  const stats = [
    { value: '15+', label: 'Tahun Pengalaman', icon: FaTrophy },
    { value: '250+', label: 'Proyek Selesai', icon: FaProjectDiagram },
    { value: '100%', label: 'Komitmen K3', icon: FaShieldAlt },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-[#F5F0FF]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-30" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #7C3AED 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Background Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#7C3AED]/[0.05] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF6B00]/[0.05] rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 text-left"
          >
            {/* Badge dengan background soft */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8EAED] mb-8 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center">
                <FaBuilding className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.15em] text-gray-700 font-bold block">
                  Profil Perusahaan
                </span>
                <span className="text-xs text-gray-400">Est. 2010</span>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-gradient-to-b from-[#FF6B00] to-[#7C3AED] rounded-full flex-shrink-0" />
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 not-italic">
                  <span className="text-gray-900 not-italic">PT AKMI KARYA </span>
                  <span className="bg-gradient-to-r from-[#FF6B00] to-[#7C3AED] bg-clip-text text-transparent not-italic">GLOBAL</span>
                </h2>
                <p className="text-sm text-[#FF6B00] font-medium mt-1">Engineering & Construction Excellence</p>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-[#7C3AED]/30 mb-8 bg-white/40 p-4 rounded-r-xl">
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Didirikan dengan komitmen tinggi, PT AKMI KARYA GLOBAL adalah penyedia layanan Engineering, Procurement, Construction (EPC), dan Maintenance berkualitas tinggi untuk sektor industri di seluruh Indonesia.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Didukung oleh tim engineer dan tenaga ahli berpengalaman serta sertifikasi standar K3 keselamatan kerja, kami berdedikasi tinggi untuk memberikan hasil kerja presisi, tepat waktu, dan berdaya tahan tinggi.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-[#E8EAED] hover:border-[#7C3AED]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-[#7C3AED]" />
                      </div>
                      <p className="text-xl sm:text-2xl font-extrabold text-[#7C3AED]">
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 font-medium pl-11">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-[450px] bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="PT AKMI KARYA GLOBAL"
                  className="w-full h-full object-cover mix-blend-overlay opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/60 to-transparent" />
                <div className="absolute inset-4 border-2 border-[#7C3AED]/20 rounded-xl" />
                <div className="absolute inset-8 border border-white/10 rounded-lg" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-5 border border-white/10">
                    <div className="grid grid-cols-3 gap-3 text-white">
                      <div className="text-center">
                        <p className="text-2xl font-bold">2010</p>
                        <p className="text-xs text-white/60">Berdiri</p>
                      </div>
                      <div className="text-center border-l border-r border-white/10">
                        <p className="text-2xl font-bold">ISO</p>
                        <p className="text-xs text-white/60">Sertifikasi</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">K3</p>
                        <p className="text-xs text-white/60">Standar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}