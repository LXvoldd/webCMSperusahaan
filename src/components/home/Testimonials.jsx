import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Eko Santoso',
    position: 'Project Manager',
    company: 'PT Nusantara Rekayasa',
    content: 'PT AKMI KARYA GLOBAL memberikan hasil pekerjaan konstruksi gudang logistik kami tepat waktu dengan kualitas pengelasan dan struktur yang sangat presisi.'
  },
  {
    name: 'Bambang Wijaya',
    position: 'VP Operations',
    company: 'PT Industri Energi Bersama',
    content: 'Kerja sama yang sangat luar biasa dalam pemeliharaan pabrik kami. Tim teknisi sangat responsif dan mengutamakan keselamatan kerja.'
  },
  {
    name: 'Deni Setiawan',
    position: 'Head of Plant',
    company: 'Megah Perkasa Group',
    content: 'Manajemen proyek profesional dan penyediaan material konstruksi tepat waktu. Kami sangat merekomendasikan PT AKMI KARYA GLOBAL.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Apa Kata Klien Kami</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Kepercayaan dan kepuasan mitra industri adalah prioritas utama dari setiap proyek yang kami laksanakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left flex flex-col justify-between">
              <div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-[#ff6b00]">
                  <FaQuoteLeft className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-[10px] text-slate-400">{testimonial.position} - {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}