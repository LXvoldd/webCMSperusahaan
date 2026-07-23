import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchData } from '../../lib/supabaseClient'
import { FaUserCircle, FaLinkedin, FaEnvelope, FaCrown, FaPhone } from 'react-icons/fa'

export default function ManagementTeam() {
  const [team, setTeam] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTeam = async () => {
      setLoading(true)
      const { data, error } = await fetchData('team_members', {
        filter: { is_active: true },
        order: { column: 'order_index', ascending: true }
      })

      if (!error && data && data.length > 0) {
        setTeam(data)
      }
      setLoading(false)
    }

    loadTeam()
  }, [])

  if (loading) {
    return (
      <div className="py-24 bg-[#F5F7FA] text-center">
        <div className="inline-block">
          <div className="relative w-14 h-14 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
            <div className="absolute inset-2 border-3 border-t-[#C9A84C] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm mt-6 font-medium">Memuat tim manajemen...</p>
        </div>
      </div>
    )
  }

  if (team.length === 0) {
    return null
  }

  const teamColors = [
    'from-white via-[#FFF5F0] to-white',
    'from-white via-[#FDF8F0] to-white',
    'from-white via-[#F5F7FA] to-white',
    'from-white via-[#FFF5F0] to-white'
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-[#F5F7FA]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B00] via-[#C9A84C] to-[#FF6B00] opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8EAED] to-transparent" />
      
      {/* Subtle Pattern - Cool */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0A1628 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Cool Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#0A1628]/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0A1628]/[0.02] rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8EAED] mb-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] flex items-center justify-center">
              <FaCrown className="w-5 h-5 text-white" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-700 font-bold">
              Tim Manajemen
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center not-italic">
            <span className="text-gray-900 not-italic">Tim </span>
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] bg-clip-text text-transparent not-italic">Manajemen</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Dipimpin oleh para profesional berpengalaman di bidang teknik dan manajemen konstruksi industri.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const bgColor = teamColors[index % teamColors.length]
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className={`relative rounded-2xl p-6 border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-xl transition-all duration-500 text-center overflow-hidden bg-gradient-to-br ${bgColor}`}>
                  {/* Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF6B00] to-[#C9A84C] p-1 shadow-lg shadow-[#FF6B00]/20">
                      <div className="w-full h-full rounded-full bg-white overflow-hidden">
                        <img 
                          src={member.photo_url || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'} 
                          alt={member.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
                      </span>
                    </div>
                    
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#FF6B00] transition-colors relative z-10">
                    {member.name}
                  </h3>
                  
                  {/* Position */}
                  <p className="text-sm font-medium text-[#FF6B00] mb-3 relative z-10">
                    {member.position}
                  </p>
                  
                  {/* Bio */}
                  {member.bio && (
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 relative z-10">
                      {member.bio}
                    </p>
                  )}
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-2 pt-3 border-t border-[#E8EAED]/50 relative z-10">
                    <button className="p-2.5 rounded-xl bg-white/60 text-gray-400 hover:bg-gradient-to-r hover:from-[#FF6B00] hover:to-[#FF8A3D] hover:text-white transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                      <FaLinkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-white/60 text-gray-400 hover:bg-gradient-to-r hover:from-[#FF6B00] hover:to-[#FF8A3D] hover:text-white transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                      <FaEnvelope className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-white/60 text-gray-400 hover:bg-gradient-to-r hover:from-[#FF6B00] hover:to-[#FF8A3D] hover:text-white transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                      <FaPhone className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-white/60 text-gray-400 hover:bg-gradient-to-r hover:from-[#FF6B00] hover:to-[#FF8A3D] hover:text-white transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm">
                      <FaUserCircle className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}