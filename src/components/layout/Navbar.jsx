import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan', href: '/services' },
  { name: 'Portofolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Karir', href: '/career' },
  { name: 'Kontak', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        location.pathname !== '/' || isScrolled
          ? 'bg-slate-950/95 border-b border-white/10 shadow-xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff6b00]">
            <div className="h-4 w-4 rounded-sm bg-white/20 border border-white/60" />
          </div>
          <span className="font-bold text-sm sm:text-base text-white tracking-wider">PT AKMI KARYA GLOBAL</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition ${
                  location.pathname === item.href
                    ? 'text-[#ff6b00]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="h-6 w-px bg-white/20"></div>

          <Link
            to="/contact"
            className="text-sm font-semibold text-white bg-[#ff6b00] hover:bg-[#ff8533] px-4 py-2 rounded-full transition"
          >
            Hubungi Kami
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/70 p-2 text-white shadow-lg shadow-black/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition ${
                  location.pathname === item.href
                    ? 'bg-[#ff6b00] text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}