import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Pesan Terkirim!</h3>
        <p className="text-green-600">Terima kasih telah menghubungi kami. Tim kami akan merespon dalam 1x24 jam.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Kirim Pesan Lagi
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]"
            placeholder="contoh@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor Telepon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]"
            placeholder="+62..."
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Perusahaan</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]"
            placeholder="Nama perusahaan"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Subjek *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]"
          placeholder="Permintaan Penawaran Proyek"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Pesan *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00] resize-none"
          placeholder="Jelaskan kebutuhan konstruksi/engineering Anda..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#ff6b00] text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#e05e00] transition-colors shadow-sm"
      >
        Kirim Pesan Penawaran
      </button>
    </form>
  )
}