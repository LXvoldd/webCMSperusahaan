import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaTag, FaArrowLeft, FaShare, FaBookOpen, FaClock, FaArrowRight } from 'react-icons/fa'
import BlogSidebar from '../components/blog/BlogSidebar'
import { fetchData } from '../lib/supabaseClient'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true)
      const { data, error } = await fetchData('blog_posts', {
        filter: { slug: slug }
      })

      if (!error && data && data.length > 0) {
        const p = data[0]
        let tagsList = []
        try {
          if (Array.isArray(p.tags)) {
            tagsList = p.tags
          } else if (typeof p.tags === 'string') {
            tagsList = JSON.parse(p.tags)
          }
        } catch (e) {
          tagsList = []
        }

        setPost({
          id: p.id,
          title: p.title,
          category: p.category,
          author: p.author || 'Admin',
          date: p.published_at 
            ? new Date(p.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
            : new Date(p.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
          image: p.featured_image || 'https://via.placeholder.com/1200x600?text=Tech+Trends+2026',
          tags: tagsList,
          content: p.content
        })
      }
      setLoading(false)
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-12 h-12 mx-auto">
            <div className="absolute inset-0 border-3 border-[#FF6B00]/20 rounded-full" />
            <div className="absolute inset-0 border-3 border-t-[#FF6B00] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
          </div>
          <p className="text-gray-400 text-sm mt-4">Memuat artikel...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Artikel tidak ditemukan</h2>
          <p className="text-gray-500 mb-6">Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold hover:gap-3 transition-all">
            <FaArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-[#F8F9FA]">
      {/* Hero Section - Minimalis */}
      <section className="relative bg-white border-b border-[#E8EAED]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B00] transition-colors mb-6"
          >
            <FaArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Link>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center gap-3 mb-4 justify-center">
              <span className="px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] rounded-lg text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <FaClock className="w-3 h-3" />
                5 min read
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-[#E8EAED]">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#C9A84C] p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm font-bold text-[#FF6B00]">
                      {post.author?.charAt(0).toUpperCase() || 'A'}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1.5 justify-center">
                    <FaCalendar className="w-3 h-3" />
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg mb-8"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8EAED]">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FaUser className="w-4 h-4 text-[#FF6B00]" />
                    {post.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1.5">
                    <FaCalendar className="w-4 h-4 text-[#FF6B00]" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1.5">
                    <FaTag className="w-4 h-4 text-[#FF6B00]" />
                    {post.category}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF6B00] transition-colors px-4 py-2 rounded-xl bg-[#F8F9FA] hover:bg-[#FF6B00]/10">
                  <FaShare className="w-4 h-4" />
                  Bagikan
                </button>
              </div>

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              >
                <div 
                  className="space-y-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>blockquote]:border-l-4 [&>blockquote]:border-[#FF6B00] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-500 [&>img]:rounded-xl [&>img]:shadow-md"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-[#E8EAED]">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-[#F8F9FA] text-gray-600 rounded-full text-sm hover:bg-[#FF6B00]/10 hover:text-[#FF6B00] transition-all cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-[#E8EAED]">
                <div className="flex flex-wrap justify-between gap-4">
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B00] transition-colors"
                  >
                    <FaArrowLeft className="w-4 h-4" />
                    Artikel Sebelumnya
                  </Link>
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B00] transition-colors"
                  >
                    Artikel Selanjutnya
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}