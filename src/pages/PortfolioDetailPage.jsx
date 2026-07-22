import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa'
import PageHeader from '../components/shared/PageHeader'
import { fetchData } from '../lib/supabaseClient'

export default function PortfolioDetailPage() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true)
      const { data, error } = await fetchData('portfolios', {
        filter: { slug },
        single: true
      })

      if (!error && data) {
        setProject(data)
      } else {
        setProject(null)
      }
      setLoading(false)
    }

    if (slug) {
      loadProject()
    }
  }, [slug])

  const gallery = useMemo(() => {
    if (!project?.gallery) return []
    if (Array.isArray(project.gallery)) return project.gallery
    if (typeof project.gallery === 'string') {
      try {
        return JSON.parse(project.gallery)
      } catch {
        return [project.gallery]
      }
    }
    return []
  }, [project])

  const technologies = useMemo(() => {
    if (!project?.technologies) return []
    if (Array.isArray(project.technologies)) return project.technologies
    if (typeof project.technologies === 'string') {
      try {
        return JSON.parse(project.technologies)
      } catch {
        return [project.technologies]
      }
    }
    return []
  }, [project])

  if (loading) {
    return (
      <main>
        <PageHeader title="Memuat Portofolio" subtitle="Sedang mengambil data dari database" />
      </main>
    )
  }

  if (!project) {
    return (
      <main>
        <PageHeader title="Portofolio Tidak Ditemukan" subtitle="Proyek yang Anda cari tidak tersedia" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Link to="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <FaArrowLeft className="mr-2" /> Kembali ke Portofolio
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <PageHeader title={project.title} subtitle={`${project.category || 'Proyek'} - ${project.client_name || '-'}`} />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Link to="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <FaArrowLeft className="mr-2" /> Kembali ke Portofolio
          </Link>

          <img
            src={project.featured_image || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'}
            alt={project.title}
            className="w-full h-96 object-cover rounded-xl mb-12"
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tantangan</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.challenge || '-'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Solusi</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.solution || '-'}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hasil</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.results || '-'}</p>
              </div>

              {gallery.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Galeri</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gallery.map((img, idx) => (
                      <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-48 object-cover rounded-lg" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Info Proyek</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <FaUser className="mr-2 text-blue-600" /> {project.client_name || '-'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCalendar className="mr-2 text-blue-600" /> {project.completion_date || '-'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaTag className="mr-2 text-blue-600" /> {project.category || '-'}
                  </li>
                </ul>
              </div>

              {technologies.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Teknologi</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}