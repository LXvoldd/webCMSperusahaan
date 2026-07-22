import { FaSearch } from 'react-icons/fa'

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
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cari Artikel</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari artikel..."
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategori</h3>
        <ul className="space-y-3">
          {categories.map((cat, index) => (
            <li key={index}>
              <a href="#" className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors">
                <span>{cat.name}</span>
                <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs">
                  {cat.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Artikel Populer</h3>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {post.title}
              </a>
              <p className="text-sm text-gray-400 mt-1">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}