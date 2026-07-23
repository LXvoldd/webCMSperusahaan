import { useEffect, useState } from 'react'
import { fetchData } from '../../lib/supabaseClient'
import * as FaIcons from 'react-icons/fa'

export default function ServicesList() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true)
      const { data, error } = await fetchData('services', {
        filter: { is_active: true },
        order: { column: 'order_index', ascending: true }
      })
      
      if (!error && data) {
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
    return null;
  }

  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Layanan Lengkap Kami
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Solusi komprehensif EPC dan pemeliharaan industri berstandar tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = FaIcons[service.icon] || FaIcons.FaCheckCircle
            
            // Features di Supabase berupa JSONB (array of strings)
            let featuresList = []
            try {
              if (Array.isArray(service.features)) {
                featuresList = service.features
              } else if (typeof service.features === 'string') {
                featuresList = JSON.parse(service.features)
              }
            } catch (e) {
              featuresList = []
            }

            return (
              <div key={service.id} className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-[#ff6b00]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{service.short_description || service.full_description}</p>
                {featuresList.length > 0 && (
                  <ul className="space-y-1.5 pt-3 border-t border-slate-50">
                    {featuresList.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[11px] text-slate-600">
                        <span className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}