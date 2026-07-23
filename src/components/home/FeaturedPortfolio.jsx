import { useEffect, useState } from 'react'
import { fetchData } from '../../lib/supabaseClient'

export default function FeaturedPortfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPortfolios = async () => {
      setLoading(true)
      const { data, error } = await fetchData('portfolios', {
        filter: { is_featured: true, is_active: true },
        limit: 3,
        order: { column: 'created_at', ascending: false }
      })
      
      if (!error && data) {
        setProjects(data)
      }
      setLoading(false)
    }
    
    loadPortfolios()
  }, [])

  if (loading) {
    return <div className="py-16 bg-[#0a1630] text-center text-white">Memuat portofolio...</div>
  }

  if (projects.length === 0) {
    return null; // Do not render if no featured portfolios
  }

  return (
    <section className="py-16 bg-[#0a1630] text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Portofolio</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Bukti nyata komitmen kami dalam menghadirkan proyek berkualitas tinggi di berbagai sektor industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg text-left transition hover:translate-y-[-2px]">
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src={project.featured_image || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#ff6b00] text-white px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider">
                    {project.category || 'Proyek'}
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white text-slate-900">
                <h3 className="text-base font-bold text-slate-900 mb-1">{project.title}</h3>
                <p className="text-xs text-slate-400">{project.client_name || '-'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}