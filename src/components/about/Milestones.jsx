const milestones = [
  { year: '2010', title: 'Perusahaan Didirikan', description: 'Memulai langkah dengan pengerjaan proyek konstruksi dan rekayasa lokal.' },
  { year: '2014', title: 'Sertifikasi K3 & ISO', description: 'Mencapai sertifikasi resmi keselamatan dan penjaminan kualitas industri.' },
  { year: '2018', title: 'Ekspansi Layanan EPC', description: 'Memperluas jangkauan ke pengadaan skala nasional dan proyek pabrik manufaktur.' },
  { year: '2021', title: '150+ Proyek Industri', description: 'Menyelesaikan lebih dari 150 fasilitas logistik & industri skala nasional.' },
  { year: '2025', title: 'Solusi Modern & Ramah Lingkungan', description: 'Mengintegrasikan inovasi ramah lingkungan dalam konstruksi pabrik & fasilitas energi.' }
]

export default function Milestones() {
  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Perjalanan Kami
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Jejak langkah pertumbuhan dan pencapaian PT AKMI KARYA GLOBAL.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
          {milestones.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 relative">
              <span className="inline-block px-2.5 py-0.5 rounded bg-orange-100 text-[#ff6b00] text-xs font-bold mb-2">
                {item.year}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}