import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Informasi Kontak</h3>
        <p className="text-xs text-slate-500">
          Tim engineering dan manajemen proyek kami siap melayani kebutuhan industri Anda.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#ff6b00]">
            <FaMapMarkerAlt className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-0.5">Alamat Kantor</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Jl Riung Purna 1, No 17<br />
              Jawa Barat, Bandung, Indonesia
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#ff6b00]">
            <FaPhone className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-0.5">Telepon & WhatsApp</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              +62 857-6220-5153
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#ff6b00]">
            <FaEnvelope className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-0.5">Email Resmi</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              info@akmikaryaglobal.com
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#ff6b00]">
            <FaClock className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-0.5">Jam Operasional</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Senin - Jumat: 08:00 - 15:00 WIB
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-900 mb-3">Media Sosial</h4>
        <div className="flex space-x-2">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-[#ff6b00] hover:text-white transition-colors">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}