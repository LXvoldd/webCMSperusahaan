export default function ClientLogos() {
  const clients = [
    'Pertamina',
    'Bank Mandiri',
    'Telkomsel',
    'Gojek',
    'Traveloka',
    'Tokopedia'
  ]

  return (
    <section className="py-12 bg-slate-50/50 border-y border-slate-100">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-8">
          DIPERCAYA OLEH PERUSAHAAN TERKEMUKA INI
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {clients.map((name, index) => (
            <div key={index} className="flex items-center justify-center px-4 py-2">
              <span className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-600 transition">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}