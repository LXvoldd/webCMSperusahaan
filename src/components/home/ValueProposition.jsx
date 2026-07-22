import { FaAward, FaShieldAlt, FaClock, FaUserCheck } from 'react-icons/fa'

const values = [
  {
    icon: FaAward,
    title: 'Pengalaman 15+ Tahun',
    description: 'Telah menangani berbagai proyek konstruksi & industri berskala besar di Indonesia.'
  },
  {
    icon: FaShieldAlt,
    title: 'Standar Kualitas Tinggi',
    description: 'Penerapan standar ISO dan K3 untuk menjamin keamanan & mutu hasil pekerjaan.'
  },
  {
    icon: FaClock,
    title: 'Ketepatan Waktu',
    description: 'Manajemen proyek profesional menjamin pengerjaan tepat waktu sesuai komitmen.'
  },
  {
    icon: FaUserCheck,
    title: 'Tenaga Ahli Bersertifikat',
    description: 'Didukung engineer dan teknisi berpengalaman tinggi dan tersertifikasi resmi.'
  }
]

export default function ValueProposition() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Nilai Unggul yang Kami Hadirkan</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Komitmen kami untuk memberikan layanan terbaik dan hasil yang melampaui ekspektasi setiap klien.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-left transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#ff6b00]">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
