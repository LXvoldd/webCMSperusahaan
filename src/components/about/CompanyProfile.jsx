export default function CompanyProfile() {
  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
          <div>
            <span className="inline-block rounded-sm bg-orange-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ff6b00] mb-3">
              Profil Perusahaan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              PT AKMI KARYA GLOBAL
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              Didirikan dengan komitmen tinggi, PT AKMI KARYA GLOBAL adalah penyedia layanan Engineering, Procurement, Construction (EPC), dan Maintenance berkualitas tinggi untuk sektor industri di seluruh Indonesia.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Didukung oleh tim engineer dan tenaga ahli berpengalaman serta sertifikasi standar K3 keselamatan kerja, kami berdedikasi tinggi untuk memberikan hasil kerja presisi, tepat waktu, dan berdaya tahan tinggi.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#ff6b00]">15+</p>
                <p className="text-[11px] text-slate-500 font-medium">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#ff6b00]">250+</p>
                <p className="text-[11px] text-slate-500 font-medium">Proyek Selesai</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#ff6b00]">100%</p>
                <p className="text-[11px] text-slate-500 font-medium">Komitmen K3</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 bg-slate-100 border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="PT AKMI KARYA GLOBAL"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}