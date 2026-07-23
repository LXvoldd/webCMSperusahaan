import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaTag, FaArrowRight, FaBookOpen } from 'react-icons/fa'

export default function BlogCard({ post }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E8EAED] hover:border-[#FF6B00]/30 hover:shadow-xl transition-all duration-500 text-left"
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[#F5F7FA] to-[#E8EAED]">
          <img
            src={post.image || 'https://via.placeholder.com/600x400?text=Blog+Post'}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge - Desain Berbeda */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#FF6B00] rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-lg">
              <FaBookOpen className="w-3 h-3" />
              {post.category || 'Artikel'}
            </span>
          </div>
          
          {/* Read Time */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-[10px] font-medium">
            5 min read
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#FF6B00]" />
            <FaCalendar className="text-[#FF6B00]" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <FaUser className="text-[#FF6B00]" />
            {post.author}
          </span>
        </div>
        
        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        {/* Excerpt */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E8EAED]">
          <Link
            to={`/blog/${post.slug}`}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] hover:text-[#FF8A3D] transition-colors"
          >
            Baca Selengkapnya
            <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 bg-[#F8F9FA] px-3 py-1 rounded-full">
            <FaTag className="text-[#FF6B00]" />
            {post.tags?.[0] || 'Umum'}
          </div>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.article>
  )
}