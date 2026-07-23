import { Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa'

export default function BlogCard({ post }) {
  return (
    <article className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition text-left group">
      <Link to={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden h-48 bg-slate-100">
          <img
            src={post.image || 'https://via.placeholder.com/600x400?text=Blog+Post'}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-[#ff6b00] text-white px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center text-[11px] text-slate-400 mb-2 space-x-3">
          <span className="flex items-center">
            <FaCalendar className="mr-1 text-orange-400" /> {post.date}
          </span>
          <span className="flex items-center">
            <FaUser className="mr-1 text-orange-400" /> {post.author}
          </span>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-base font-bold text-slate-900 mb-2 hover:text-[#ff6b00] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-slate-50">
          <Link
            to={`/blog/${post.slug}`}
            className="text-xs text-[#ff6b00] font-bold hover:underline"
          >
            Baca Selengkapnya →
          </Link>
          <div className="flex items-center text-[10px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
            <FaTag className="mr-1" />
            {post.tags?.[0] || 'Umum'}
          </div>
        </div>
      </div>
    </article>
  )
}