import { useEffect, useState } from 'react'
import { fetchData } from '../../lib/supabaseClient'

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
    return <div className="py-16 text-center text-slate-500 bg-slate-50">Memuat tim manajemen...</div>
  }

  if (team.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Tim Manajemen
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Dipimpin oleh para profesional berpengalaman di bidang teknik dan manajemen konstruksi industri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-slate-100 border-2 border-orange-100">
                <img 
                  src={member.photo_url || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
              <p className="text-xs text-[#ff6b00] font-medium mt-0.5">{member.position}</p>
              {member.bio && (
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}