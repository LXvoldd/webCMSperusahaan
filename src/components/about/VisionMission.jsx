import { FaEye, FaBullseye } from 'react-icons/fa'

export default function VisionMission() {
  return (
    <section className="py-16 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-[#ff6b00]">
              <FaEye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Kami</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Menjadi mitra konstruksi dan engineering industri terdepan di Indonesia yang terpercaya, inovatif, serta berstandar mutu internasional.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-[#ff6b00]">
              <FaBullseye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Kami</h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" /> Menyediakan layanan EPC & pemeliharaan dengan standar K3 dan mutu tertinggi.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" /> Membangun hubungan kemitraan jangka panjang berlandaskan kepercayaaan.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" /> Terus melakukan inovasi teknik demi efisiensi operasional proyek klien.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}