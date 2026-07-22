import { FaUsers, FaHardHat, FaHeart, FaGraduationCap, FaAward, FaShieldAlt } from 'react-icons/fa'

const cultures = [
  {
    icon: FaUsers,
    title: 'Kolaborasi Solid',
    description: 'Sinergi antar engineer, teknisi, dan manajemen lapangan.'
  },
  {
    icon: FaHardHat,
    title: 'Prioritas K3',
    description: 'Standar keselamatan tertinggi dalam setiap pengerjaan di lokasi proyek.'
  },
  {
    icon: FaHeart,
    title: 'Kesejahteraan Tim',
    description: 'Fasilitas dan lingkungan kerja yang aman, sehat, dan kondusif.'
  },
  {
    icon: FaGraduationCap,
    title: 'Sertifikasi & Pelatihan',
    description: 'Pengembangan kemampuan teknis lewat sertifikasi profesi resmi.'
  },
  {
    icon: FaAward,
    title: 'Apresiasi Kinerja',
    description: 'Penghargaan atas dedikasi dan kontribusi nyata dalam setiap milestone.'
  },
  {
    icon: FaShieldAlt,
    title: 'Integritas Tinggi',
    description: 'Menjunjung tinggi keandalan dan kejujuran dalam berbisnis.'
  }
]

export default function WorkCulture() {
  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Budaya Kerja Kami
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Lingkungan profesional berstandar K3 yang mendukung inovasi dan keselamatan kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultures.map((culture, index) => (
            <div key={index} className="text-left p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm transition">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-3 text-[#ff6b00]">
                <culture.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{culture.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{culture.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
          ].map((url, i) => (
            <div key={i} className="rounded-xl overflow-hidden h-36 bg-slate-100 shadow-sm">
              <img src={url} alt={`Kultur ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}