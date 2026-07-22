import { Link } from 'react-router-dom'
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn 
} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#071026] text-slate-400 text-xs sm:text-sm">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="md:col-span-3 text-left">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-[#ff6b00]">
                <div className="h-3.5 w-3.5 rounded-sm bg-white/20 border border-white/60" />
              </div>
              <span className="font-bold text-sm text-white tracking-wider">PT AKMI KARYA GLOBAL</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              Penyedia layanan engineering, procurement, construction, dan maintenance berkualitas tinggi untuk sektor industri Indonesia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Kontak</h3>
            <ul className="space-y-2 text-xs">
              <li>Email: info@akmikaryaglobal.com</li>
              <li>Telepon: +62 21 555-0192</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} PT AKMI KARYA GLOBAL. All rights reserved.</p>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebookF, href: '#' },
              { icon: FaTwitter, href: '#' },
              { icon: FaInstagram, href: '#' },
              { icon: FaLinkedinIn, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}