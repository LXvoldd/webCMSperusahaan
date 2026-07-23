import { useEffect, useState } from 'react'
import { fetchData } from '../../lib/supabaseClient'
import * as FaIcons from 'react-icons/fa'

export default function ServicesSummary() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true)
      const { data, error } = await fetchData('services', {
        filter: { is_active: true },
        order: { column: 'order_index', ascending: true },
        limit: 6
      })

      if (!error && data && data.length > 0) {
        setServices(data)
      }
      setLoading(false)
    }

    loadServices()
  }, [])

  if (loading) {
    return <div className="py-16 text-center text-slate-500 bg-white">Memuat layanan...</div>
  }

  if (services.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Layanan Utama Kami</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Solusi komprehensif engineering, procurement, construction, dan maintenance untuk industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = FaIcons[service.icon] || FaIcons.FaCogs
            return (
              <div key={service.id} className="relative border border-slate-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition text-left">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#ff6b00]">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="h-1 w-10 bg-[#ff6b00] rounded-full" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{service.short_description || service.full_description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}