import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchData } from '../../lib/supabaseClient'

export default function PortfolioGallery() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('Semua')

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)
      const { data, error } = await fetchData('portfolios', {
        filter: { is_active: true },
        order: { column: 'created_at', ascending: false }
      })

      if (!error && data) {
        setProjects(data)
      }
      setLoading(false)
    }

    loadProjects()
  }, [])

  const categories = useMemo(() => {
    const set = new Set()
    projects.forEach(p => {
      if (p.category) set.add(p.category.trim())
    })
    return ['Semua', ...Array.from(set)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Semua') return projects

    return projects.filter((project) => {
      const category = (project.category || '').toLowerCase()
      return category === activeCategory.toLowerCase()
    })
  }, [activeCategory, projects])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portofolio Kami
          </h2>
          <p className="text-lg text-gray-600">
            Karya terbaik yang telah kami hasilkan untuk klien.
          </p>
        </div>

        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="text-center text-gray-600">Memuat portofolio...</div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center text-gray-600">Belum ada portofolio yang dipublikasikan.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.slug}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.featured_image || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.client_name || '-'}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-600 rounded-full text-xs">
                      {project.category || 'Proyek'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}