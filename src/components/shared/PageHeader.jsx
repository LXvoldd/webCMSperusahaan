export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section
      className="relative pt-28 pb-16 bg-[#0a1630] text-white overflow-hidden"
      style={bgImage ? {
        backgroundImage: `linear-gradient(to bottom, rgba(10,22,48,0.85), rgba(10,22,48,0.95)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
        <span className="inline-block rounded-sm bg-[#ff6b00] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white mb-3">
          PT AKMI KARYA GLOBAL
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}