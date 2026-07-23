export default function ClientLogos() {
  const clients = [
    { name: 'Balanja.id', color: '#00A651' },
    { name: 'LEGALDK', color: '#003366' },
    { name: 'Qubox', color: '#E31E24' },
    { name: 'Icommits Academy', color: '#00AA13' },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background dengan subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Top & Bottom Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header dengan dekorasi */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center">
            {/* Label Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200/70 shadow-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-slate-500 font-bold">
                BEKERJA SAMA DENGAN
              </p>
            </div>
            
            {/* Decorative divider */}
            <div className="flex items-center gap-2 w-full max-w-[200px]">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
              <div className="w-1 h-1 rounded-full bg-slate-300 rotate-45" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
            </div>
          </div>
          
          <h3 className="text-sm sm:text-base font-semibold text-slate-600 mt-4 max-w-xl mx-auto">
            Beberapa Bussines Solution & Consultan IT
          </h3>
        </div>

        {/* Grid Logo dengan background card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative flex items-center justify-center px-4 py-4 sm:py-5
                           bg-white rounded-xl shadow-sm 
                           border border-slate-200/70
                           hover:shadow-md hover:border-slate-300
                           hover:-translate-y-0.5
                           transition-all duration-300 ease-out
                           cursor-default">
                
                {/* Subtle top highlight on hover */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-current to-transparent 
                             opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ color: client.color }} 
                />

                {/* Background color overlay on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300"
                     style={{ backgroundColor: client.color }} 
                />
                
                {/* Nama client dengan warna brand */}
                <span 
                  className="relative text-sm sm:text-base font-bold tracking-wide
                           transition-all duration-300 group-hover:scale-105"
                  style={{ 
                    color: client.color,
                    textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider bawah dengan partner info */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
          <p className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide mt-2">
            Dan masih banyak lagi partner terpercaya lainnya
          </p>
        </div>
      </div>
    </section>
  )
}