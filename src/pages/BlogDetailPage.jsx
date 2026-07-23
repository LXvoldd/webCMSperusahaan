import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaTag, FaArrowLeft, FaShare } from 'react-icons/fa'
import PageHeader from '../components/shared/PageHeader'
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
    return <div className="text-center py-20 text-slate-500">Memuat artikel...</div>
  }

  if (!post) {
    return (
      <main className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Artikel tidak ditemukan</h2>
        <Link to="/blog" className="mt-4 inline-block text-[#ff6b00] hover:underline">Kembali ke Blog</Link>
      </main>
    )
  }

  return (
    <main>
      <PageHeader title={post.title} subtitle={`${post.category} • ${post.date}`} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Link to="/blog" className="inline-flex items-center text-[#ff6b00] hover:text-orange-600 mb-6">
                <FaArrowLeft className="mr-2" /> Kembali ke Blog
              </Link>

              <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-xl mb-8" />

              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <span className="flex items-center"><FaUser className="mr-2 text-[#ff6b00]" /> {post.author}</span>
                  <span className="flex items-center"><FaCalendar className="mr-2 text-[#ff6b00]" /> {post.date}</span>
                  <span className="flex items-center"><FaTag className="mr-2 text-[#ff6b00]" /> {post.category}</span>
                </div>
                <button className="flex items-center text-gray-400 hover:text-[#ff6b00]">
                  <FaShare className="mr-1" /> Share
                </button>
              </div>

              {/* Render article body */}
              <div 
                className="prose max-w-none text-gray-600 space-y-4" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}