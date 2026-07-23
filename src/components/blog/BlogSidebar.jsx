import { FaSearch, FaTag, FaFire, FaFolder } from 'react-icons/fa'

const categories = [
  { name: 'Teknologi', count: 12 },
  { name: 'Marketing', count: 8 },
  { name: 'Keamanan', count: 5 },
  { name: 'Web Development', count: 15 },
  { name: 'Design', count: 7 },
  { name: 'Cloud', count: 4 }
]

const popularPosts = [
  { title: 'Tren Teknologi 2026', date: '20 Juli 2026' },
  { title: 'Digital Marketing Tips', date: '18 Juli 2026' },
  { title: 'Keamanan Data Bisnis', date: '15 Juli 2026' },
  { title: 'React vs Vue.js', date: '12 Juli 2026' }
]

const tags = ['AI', 'Technology', 'Marketing', 'Security', 'React', 'Vue.js', 'Cloud', 'Design', 'Business', 'Tips']

export default function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      {/* Search - Desain Minimalis */}
      <div className="bg-white rounded-2xl border border-[#E8EAED] p-5">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Cari Artikel</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Ketik kata kunci..."
            className="w-full pl-4 pr-12 py-2.5 bg-[#F8F9FA] border border-[#E8EAED] rounded-xl focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/10 transition-all text-sm"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#FF6B00] transition-colors">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Categories - Desain Minimalis */}
      <div className="bg-white rounded-2xl border border-[#E8EAED] p-5">
        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
          <FaFolder className="text-[#FF6B00] w-4 h-4" />
          Kategori
        </h3>
        <ul className="space-y-2">
          {categories.map((cat, index) => (
            <li key={index}>
              <a href="#" className="flex items-center justify-between text-sm text-gray-600 hover:text-[#FF6B00] transition-colors group py-1">
                <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
                <span className="bg-[#F8F9FA] text-gray-400 px-2 py-0.5 rounded-full text-xs">
                  {cat.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts - Desain Minimalis */}
      <div className="bg-white rounded-2xl border border-[#E8EAED] p-5">
        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
          <FaFire className="text-[#FF6B00] w-4 h-4" />
          Populer
        </h3>
        <ul className="space-y-3">
          {popularPosts.map((post, index) => (
            <li key={index} className="group border-b border-[#F8F9FA] last:border-0 pb-3 last:pb-0">
              <a href="#" className="block">
                <p className="text-sm font-medium text-gray-700 group-hover:text-[#FF6B00] transition-colors line-clamp-1">
                  {post.title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{post.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags - Desain Minimalis */}
      <div className="bg-white rounded-2xl border border-[#E8EAED] p-5">
        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
          <FaTag className="text-[#FF6B00] w-4 h-4" />
          Tags Populer
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1 bg-[#F8F9FA] text-gray-600 rounded-full text-xs hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] transition-all hover:scale-105"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}