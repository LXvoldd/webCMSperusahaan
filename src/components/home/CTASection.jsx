import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-14 bg-[#ff6b00] text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          Siap Memulai Proyek Bersama Kami?
        </h2>
        <p className="text-xs sm:text-sm text-orange-100 mb-8 max-w-xl mx-auto">
          Hubungi tim profesional kami untuk mendiskusikan kebutuhan engineering, konstruksi, dan pemeliharaan industri Anda.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="rounded-md bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-[#ff6b00] shadow-sm transition hover:bg-orange-50"
          >
            Minta Penawaran
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-white/60 bg-transparent px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Kontak Kami
          </Link>
        </div>
      </div>
    </section>
  )
}